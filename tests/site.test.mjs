import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile, stat, readdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { resolve, join } from 'node:path';
import vm from 'node:vm';
const root = fileURLToPath(new URL('../dist/',import.meta.url));
const pages = ['index.html','pt/index.html','cv.html','pt/cv.html'];
const html = Object.fromEntries(await Promise.all(pages.map(async p=>[p,await readFile(join(root,p),'utf8')])));
const script = await readFile(join(root,'script.js'),'utf8');
test('Both languages render complete content without JavaScript and have valid SEO',()=>{
  for(const [path,text] of Object.entries(html)){
    assert.ok(!text.includes('\uFFFD') && !text.includes('undefined'),path);
    assert.equal((text.match(/<h1>/g)||[]).length,1,path);
    assert.match(text,new RegExp(`<html lang="${path.startsWith('pt/')?'pt-BR':'en'}"`));
    for(const hreflang of ['en','pt-BR','x-default']) assert.ok(text.includes(`hreflang="${hreflang}"`));
    assert.match(text,/<link rel="canonical" href="https:\/\/portfoliomarianaviana.netlify.app/);
    const person=JSON.parse(text.match(/<script type="application\/ld\+json">(.*?)<\/script>/s)[1]);
    assert.equal(person.name,'Mariana Viana Ferreira');
    assert.ok(text.includes('AZ-900'));
    assert.ok(text.includes('25–30%'));
    assert.ok(text.includes(path.startsWith('pt/')?'estimada':'estimated'));
  }
  assert.ok(html['index.html'].includes('Scale with confidence.'));
  assert.ok(html['pt/index.html'].includes('Escala com confiança.'));
  for(const path of ['index.html','pt/index.html']){
    assert.equal((html[path].match(/class="case"/g)||[]).length,3);
    assert.equal((html[path].match(/class="metric"/g)||[]).length,4);
    assert.equal((html[path].match(/class="domain"/g)||[]).length,5);
  }
});
test('Internal links, assets and hash targets exist in the publish directory',async()=>{
  for(const [path,text] of Object.entries(html)){
    const ids=[...text.matchAll(/\sid="([^"]+)"/g)].map(m=>m[1]);
    assert.equal(new Set(ids).size,ids.length,`duplicate id in ${path}`);
    for(const match of text.matchAll(/(?:href|src)="([^"]+)"/g)){
      const value=match[1];
      if(/^(https:|mailto:)/.test(value)) continue;
      const link=new URL(value,`https://portfolio.test/${path}`);
      let local=link.pathname;
      if(local.endsWith('/')) local+='index.html';
      const target=resolve(root,'.'+local);
      await stat(target);
      if(link.hash){
        const contents=await readFile(target,'utf8');
        assert.ok(contents.includes(`id="${link.hash.slice(1)}"`),value+' in '+path);
      }
    }
    for(const tag of text.matchAll(/<img\b[^>]+>/g)){
      assert.match(tag[0],/alt="[^"]+"/); assert.match(tag[0],/width=/); assert.match(tag[0],/height=/);
    }
  }
});
test('Direct contact and PDF downloads are real, with a small runtime payload',async()=>{
  const pdf=await readFile(join(root,'assets/resume/Mariana-Viana-Resume-EN.pdf'));
  assert.equal(pdf.subarray(0,5).toString(),'%PDF-');
  assert.ok(pdf.length>10000 && pdf.length<500000);
  for(const path of ['index.html','pt/index.html']){
    assert.match(html[path],/href="mailto:marianaviana121@gmail.com"/);
    assert.match(html[path],/href="https:\/\/www.linkedin.com\/in\/marianavianaferreira\/"/);
    assert.match(html[path],/href="\/assets\/resume\/Mariana-Viana-Resume-EN.pdf" download/);
    assert.ok(Buffer.byteLength(html[path])+ (await stat(join(root,'style.css'))).size+Buffer.byteLength(script)<100000);
    assert.doesNotMatch(html[path],/<script[^>]+src="https?:/);
  }
  assert.ok(!(await readdir(root)).includes('scripts'));
  assert.ok(!(await readdir(root)).includes('tests'));
});
function simulate(url){
  const current=new URL(url); let redirected; const listeners={};
  const classes=new Set(); const attrs={'aria-expanded':'false'};
  const toggle={getAttribute:k=>attrs[k],setAttribute:(k,v)=>attrs[k]=v,addEventListener:(n,f)=>listeners['toggle:'+n]=f,focus:()=>listeners.focused=true};
  const nav={classList:{remove:c=>classes.delete(c),toggle:(c,b)=>b?classes.add(c):classes.delete(c)},querySelectorAll:()=>[{addEventListener:(n,f)=>listeners['nav:'+n]=f}]};
  const languageLink={href:'https://portfolio.test/pt/',addEventListener:(n,f)=>listeners['lang:'+n]=f};
  const document={documentElement:{classList:{add:()=>{}}},querySelectorAll:()=>[languageLink],querySelector:s=>s==='.menu-toggle'?toggle:s==='#main-navigation'?nav:null,addEventListener:(n,f)=>listeners[n]=f};
  vm.runInNewContext(script,{URL,URLSearchParams,location:{search:current.search,pathname:current.pathname,hash:current.hash,origin:current.origin,replace:u=>redirected=u},document,window:{print(){}}});
  return {redirected,listeners,attrs,classes,languageLink};
}
test('Legacy language links preserve CV route, hash and unrelated parameters',()=>{
  assert.equal(simulate('https://portfolio.test/?lang=pt#projects').redirected,'https://portfolio.test/pt/#projects');
  assert.equal(simulate('https://portfolio.test/pt/cv.html?lang=en&utm_source=cv#main').redirected,'https://portfolio.test/cv.html?utm_source=cv#main');
  assert.equal(simulate('https://portfolio.test/cv?lang=pt-BR').redirected,'https://portfolio.test/pt/cv.html');
  assert.equal(simulate('https://portfolio.test/').redirected,undefined);
  assert.equal(simulate('https://portfolio.test/?lang=invalid').redirected,undefined);
});
test('Mobile menu opens, closes via navigation and Escape, and restores focus',()=>{
  const {listeners,attrs,classes,languageLink}=simulate('https://portfolio.test/#projects');
  assert.equal(languageLink.href,'https://portfolio.test/pt/#projects');
  listeners['toggle:click'](); assert.equal(attrs['aria-expanded'],'true'); assert.ok(classes.has('is-open'));
  listeners.keydown({key:'Escape'}); assert.equal(attrs['aria-expanded'],'false'); assert.ok(listeners.focused);
  listeners['toggle:click'](); listeners['nav:click'](); assert.equal(attrs['aria-expanded'],'false');
});
test('Text color pairs meet WCAG AA contrast and reduced motion is supported',async()=>{
  const luminance=hex=>{const v=hex.match(/\w\w/g).map(c=>parseInt(c,16)/255).map(c=>c<=.04045?c/12.92:((c+.055)/1.055)**2.4);return v[0]*.2126+v[1]*.7152+v[2]*.0722;};
  for(const bg of ['0b1118','111d29','152432','152a2b']) for(const fg of ['edf3f8','b8c6d4','6ee7bc']){
    const ratio=(luminance(fg)+.05)/(luminance(bg)+.05);assert.ok(ratio>=4.5,`${fg}/${bg}: ${ratio}`);
  }
  const css=await readFile(join(root,'style.css'),'utf8');
  assert.match(css,/prefers-reduced-motion:reduce/); assert.match(css,/:focus-visible/); assert.match(css,/@media print/);
});
