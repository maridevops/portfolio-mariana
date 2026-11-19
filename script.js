(() => {
  const language = new URLSearchParams(location.search).get('lang');
  if (language === 'en' || language === 'pt' || language === 'pt-BR') {
    const isCV = /\/cv(?:\.html)?\/?$/.test(location.pathname);
    const prefix = language === 'en' ? '/' : '/pt/';
    const target = new URL(prefix + (isCV ? 'cv.html' : ''), location.origin);
    const params = new URLSearchParams(location.search);
    params.delete('lang');
    target.search = params.toString();
    target.hash = location.hash;
    location.replace(target.href);
    return;
  }
  document.querySelectorAll('[data-language]').forEach(link => {
    const target = new URL(link.href);
    target.hash = location.hash;
    link.href = target.href;
    link.addEventListener('click', () => {
      const current = new URL(link.href);
      current.hash = location.hash;
      link.href = current.href;
    });
  });
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#main-navigation');
  if (toggle && nav) {
    document.documentElement.classList.add('js');
    const close = () => {
      toggle.setAttribute('aria-expanded', 'false');
      nav.classList.remove('is-open');
    };
    toggle.addEventListener('click', () => {
      const opened = toggle.getAttribute('aria-expanded') !== 'true';
      toggle.setAttribute('aria-expanded', String(opened));
      nav.classList.toggle('is-open', opened);
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', close));
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
        close();
        toggle.focus();
      }
    });
  }
  document.querySelector('[data-print]')?.addEventListener('click', () => window.print());
})();
