# Mariana Viana Ferreira — Cloud & Platform Engineer

A bilingual engineering portfolio focused on multicloud platforms, infrastructure as code, FinOps and production reliability.

**Live:** [English](https://portfoliomarianaviana.netlify.app/) · [Português](https://portfoliomarianaviana.netlify.app/pt/)

## What the portfolio contains

- Three professional case studies: Multicloud IDP, IaC Automation Framework, and high-availability operations / CI/CD.
- Problem, architecture and approach, personal contribution, stack and impact for each case.
- Reported outcomes: 80% lower new-squad time-to-market; 40% faster environment delivery; 35% lower incident MTTR; 45% fewer deployment failures; 50% less manual support effort.
- Cloud Guild and FinOps leadership, with **estimated savings of 25–30%**. The hero's 30% figure is explicitly qualified as the upper end of that estimate.
- Skills grouped by engineering domain, a postgraduate qualification in Cloud Computing and Microsoft AZ-900. AWS Educate is listed as training, not an AWS professional certification.
- Separate personal projects with public code, direct contact links, original English PDF résumé, and printable EN/PT résumé pages.

Professional achievements and employment details are supplied by the portfolio owner. Public personal repositories are not presented as evidence of proprietary production architectures. Architecture slots are clearly labeled placeholders until the owner supplies reviewed diagrams.

## Run locally

Requires Node.js 20 or later. No runtime or build dependencies need installation.

```sh
npm run build
npm test
npm start
```

Open `http://127.0.0.1:4173`. English is the default. Portuguese is at `/pt/`. Legacy links such as `/?lang=pt#projects` redirect to the matching language and retain the section hash. Language selection works through ordinary links without JavaScript; JavaScript adds the mobile menu, legacy redirects and the print button.

## Netlify

The checked-in `netlify.toml` runs `node scripts/build.mjs && node --test tests/site.test.mjs` and publishes **dist/** using Node 22. Configure the repository root as the base directory and `main` as the production branch. There are no server functions, API keys or environment variables to configure. The build deliberately excludes generator code, tests and development files from the deployed output.

Both languages are rendered into complete static HTML with canonical URLs, language alternates, Person structured data, sitemap and robots.txt. Fonts are system fonts; there are no remote fonts, framework bundles, analytics or third-party runtime scripts. PDF downloads use the original owner-supplied English résumé. Browser rendering and Netlify's deployment status should be checked after publication; automated checks do not replace visual QA.

## Edit content

| File | Purpose |
| --- | --- |
| `scripts/content.mjs` | English and Portuguese text, profile, professional cases and public projects |
| `scripts/build.mjs` | Static page templates and production output generation |
| `index.html`, `pt/index.html` | Generated portfolio pages; rebuild after editing source |
| `cv.html`, `pt/cv.html` | Generated printable résumés |
| `style.css` | Dark responsive layout, focus states, reduced motion and résumé print styles |
| `script.js` | Progressive navigation and legacy language links |
| `assets/resume/Mariana-Viana-Resume-EN.pdf` | Original English résumé; replace with a reviewed PDF when updating |
| `assets/diagrams/` | Clearly marked SVG diagram placeholders, one per case and language |
| `netlify.toml` | Build, publication and response headers |
| `tests/site.test.mjs` | Static integrity, navigation behavior, PDF, SEO, contrast and payload checks |

To add architecture diagrams, replace the relevant SVG files in `assets/diagrams/` with a reviewed diagram, then update `caseStudy()` in the generator to remove the placeholder status and replace the placeholder caption/alt text. If using Mermaid, export the reviewed diagram as SVG rather than loading Mermaid at runtime. The build preserves existing SVG assets. Never include credentials, private endpoints or confidential topology. See [diagram instructions](docs/architecture-diagrams.md).

The résumé PDF is preserved independently from the web text: update both when employment or qualifications change. The original portrait remains in the repository for future use but is not loaded by the new layout.

## Validação

`npm test` verifica as quatro páginas, links e âncoras internos, PDF, metadados de idioma, navegação móvel e compatibilidade dos links antigos. Também verifica contraste das cores de texto e um orçamento inferior a 100 KB para HTML + CSS + JavaScript por página inicial, antes de compressão. Isso não equivale a uma nota Lighthouse ou a uma auditoria visual completa.

## Português

Portfólio profissional com inglês como padrão e versão completa em português. Os estudos de caso destacam problema, abordagem técnica e impacto, mantendo a economia de FinOps como estimativa de 25–30%. Projetos pessoais com código público aparecem em uma seção separada dos trabalhos profissionais.

Para editar textos, atualize as duas versões em `scripts/content.mjs`, rode o build e os testes, e versione os arquivos gerados. Os diagramas são espaços reservados; nenhum desenho de infraestrutura foi inventado. O botão de download entrega o currículo original em inglês; a página `/pt/cv.html` oferece a versão web em português com estilo para impressão.

**Contato:** [LinkedIn](https://www.linkedin.com/in/marianavianaferreira/) · [GitHub](https://github.com/maridevops) · [E-mail](mailto:marianaviana121@gmail.com)
