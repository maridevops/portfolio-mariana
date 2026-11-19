export const profile = {
  name: 'Mariana Viana Ferreira',
  title: 'Cloud & Platform Engineer',
  specialism: 'Multicloud (AWS · Azure · GCP) & Infrastructure as Code',
  email: 'marianaviana121@gmail.com',
  linkedin: 'https://www.linkedin.com/in/marianavianaferreira/',
  github: 'https://github.com/maridevops',
  origin: 'https://portfoliomarianaviana.netlify.app',
  pdf: '/assets/resume/Mariana-Viana-Resume-EN.pdf'
};

export const languages = {
  en: {
    lang: 'en', locale: 'en_US', home: '/', cv: '/cv.html',
    description: 'Mariana Viana Ferreira, Cloud & Platform Engineer. Multicloud IDPs, Terraform and Ansible automation, FinOps and production reliability across AWS, Azure and GCP.',
    skip: 'Skip to content', navLabel: 'Main navigation', menu: 'Menu',
    nav: ['Case studies', 'Expertise', 'Experience', 'Contact'],
    availability: 'Open to global opportunities',
    heroLabel: 'CLOUD & PLATFORM ENGINEERING',
    headline: ['Scale with confidence.', 'Automate with purpose.'],
    intro: 'I build multicloud platforms that shorten the path from request to production, reduce cloud spend and improve operational reliability.',
    explore: 'Explore the architecture', download: 'Download résumé', pdfLabel: 'PDF · English',
    remote: 'International remote roles · Open to relocation',
    language: 'English: Professional Working Proficiency',
    briefLabel: 'ENGINEERING FOCUS', briefTitle: 'Platform thinking. Operational impact.',
    focus: [
      ['01', 'Self-service platforms', 'From infrastructure requests to repeatable delivery.'],
      ['02', 'Infrastructure as code', 'Reusable modules. Consistent environments.'],
      ['03', 'Reliability & FinOps', 'Faster recovery. More efficient cloud spend.']
    ],
    metrics: [
      ['−30%', 'Cloud infrastructure spend', 'Up to · estimated savings of 25–30%'],
      ['−80%', 'New-squad time-to-market', 'Onboarding: days to a few hours'],
      ['−35%', 'Incident MTTR', 'Mean time to recovery'],
      ['−40%', 'Environment provisioning time', 'Terraform modules + Ansible playbooks']
    ],
    metricsLabel: 'Professional impact',
    casesLabel: '01 / ARCHITECTURE & CASE STUDIES',
    casesHeading: 'Engineering decisions. Measurable outcomes.',
    casesIntro: 'Selected professional work across platform engineering, infrastructure automation and critical production operations.',
    labels: { problem: 'Problem', architecture: 'Architecture & approach', impact: 'Impact', role: 'My contribution', diagram: 'Architecture diagram', planned: 'To be added', diagramNote: 'Reserved for a reviewed architecture diagram. No production topology is depicted here.' },
    cases: [
      {
        id: 'multicloud-idp', number: '01', company: 'Getronics', title: 'Multicloud Internal Developer Platform',
        summary: 'A self-service path to infrastructure across AWS, Azure and GCP.',
        role: 'Architecture and implementation',
        problem: 'New squads needed a faster route to cloud environments, with onboarding taking days rather than hours.',
        architecture: 'Designed and implemented an internal developer platform with a Next.js and Strapi portal layer, backed by self-service provisioning through reusable Terraform modules and Ansible playbooks across three cloud providers.',
        impact: 'Reduced time-to-market for new squads by 80%; onboarding moved from days to a few hours.',
        tags: ['AWS', 'Azure', 'GCP', 'Terraform', 'Ansible', 'Strapi', 'Next.js'],
        result: '−80%', resultLabel: 'new-squad time-to-market'
      },
      {
        id: 'iac-automation', number: '02', company: 'Getronics', title: 'Infrastructure as Code Automation Framework',
        summary: 'Reusable infrastructure definitions instead of repeated manual configuration.',
        role: 'Infrastructure automation and standardization',
        problem: 'Recurring manual configuration slowed environment delivery and made consistency across cloud providers harder to maintain.',
        architecture: 'Automated provisioning with reusable Terraform modules and Ansible playbooks, standardizing environment configuration across AWS, Azure and GCP.',
        impact: 'Reduced environment delivery time by 40%, while removing recurring manual configuration and improving consistency.',
        tags: ['Terraform', 'Ansible', 'AWS', 'Azure', 'GCP'],
        result: '−40%', resultLabel: 'environment delivery time'
      },
      {
        id: 'reliability', number: '03', company: 'Banco do Brasil', title: 'High-Availability Operations, CI/CD & Observability',
        summary: 'More reliable releases and faster recovery for a critical corporate chatbot platform.',
        role: 'Production operations, incident response and delivery automation',
        problem: 'A critical, highly available platform required dependable deployments, efficient incident recovery and less repetitive support work.',
        architecture: 'Operated and supported the infrastructure behind a corporate chatbot platform, automated CI/CD pipelines and recurring operational routines, and produced technical documentation and engineering training.',
        impact: 'Reduced incident MTTR by 35%, deployment-related failures by 45% and manual support effort by 50%.',
        tags: ['High availability', 'CI/CD', 'Incident management', 'Operational automation'],
        result: '−35%', resultLabel: 'incident MTTR', secondary: ['−45% deployment failures', '−50% manual effort']
      }
    ],
    governanceLabel: 'TECHNICAL LEADERSHIP / CLOUD GUILD',
    governanceHeading: 'Cloud adoption with cost and governance in view.',
    governanceText: 'Led Cloud Guild initiatives covering architecture standards, cloud adoption and FinOps. Contributed to estimated cloud infrastructure savings of 25–30%, alongside ongoing architecture and security configuration reviews.',
    stackLabel: '02 / TECHNICAL EXPERTISE', stackHeading: 'Depth across the platform lifecycle.',
    domains: [
      ['01', 'Cloud Providers', ['AWS', 'Microsoft Azure', 'Google Cloud'], 'Multicloud architecture and infrastructure provisioning.'],
      ['02', 'IaC & Configuration Management', ['Terraform', 'Ansible'], 'Reusable modules, playbooks and environment standardization.'],
      ['03', 'Containers & Orchestration', ['Kubernetes', 'Docker', 'Linux'], 'Containerized workloads and infrastructure operations.'],
      ['04', 'CI/CD & Observability', ['GitHub Actions', 'Python', 'Shell', 'Grafana', 'Prometheus'], 'Delivery automation, operational routines and incident diagnostics.'],
      ['05', 'FinOps & Governance', ['FinOps', 'Cloud Guild', 'Architecture reviews', 'ITSM'], 'Cost optimization, cloud adoption and security configuration reviews.']
    ],
    educationLabel: 'EDUCATION & CREDENTIALS',
    postgraduate: 'Postgraduate Diploma in Cloud Computing', postgraduateNote: 'UniCEUB, Brazil · Completed',
    azure: 'Microsoft Certified: Azure Fundamentals', azureNote: 'AZ-900 · Microsoft certification',
    degree: 'Undergraduate degree in Information Technology Management', degreeNote: 'Faculdade Senac DF, Brazil · Technologist degree · Completed',
    training: 'Additional training', trainingList: ['AWS Educate: Introduction to Cloud 101', 'DevEx & DevRel · Academia ConectaDev — Banco do Brasil', 'Advanced Figma Prototyping · Level UP! Experience'],
    experienceLabel: '03 / PROFESSIONAL EXPERIENCE', experienceHeading: 'From production operations to platform engineering.',
    roles: [
      ['Getronics', 'Cloud / Platform Engineer', 'Mar 2025 — Present', 'Multicloud IDP architecture, infrastructure automation, Cloud Guild technical leadership and FinOps initiatives.'],
      ['Banco do Brasil', 'Systems Analyst — Cloud & Processes', 'Sep 2024 — Mar 2025', 'Critical chatbot infrastructure, CI/CD pipelines, incident response, operational automation and engineering documentation.'],
      ['Banco do Brasil', 'Service Desk Technician', 'Mar 2024 — Sep 2024', 'Enterprise VPN and VDI support for 500+ users, with Power BI dashboards for availability and incident metrics.']
    ],
    codeLabel: '04 / PUBLIC CODE', codeHeading: 'Explore the implementation.',
    codeIntro: 'Personal projects with public repositories, separate from the professional case studies above.',
    pipeline: 'A FastAPI delivery pipeline with automated checks, container validation and image publishing to GHCR.',
    pipelineDetails: 'Pull requests run validation without publishing. On main, the pipeline publishes the same Docker image that passed its HTTP checks. The scope is image delivery, not production API hosting.',
    careerflow: 'A dashboard for tracking cloud opportunities and reviewing applications.',
    careerflowDetails: 'Public job listings, rule-based matching, filters and backups. Personal data stays in the browser. It does not submit applications automatically.',
    source: 'Source & documentation', runs: 'Pipeline runs',
    webSummary: 'Additional web projects', visit: 'Visit website',
    webDescriptions: ['Nail design services, gallery and WhatsApp booking.', 'Marketing agency services and methodology.', 'Solar energy company website.', 'Flower shop catalog and WhatsApp contact.', 'Festival schedule, tickets and visual identity.', 'Event production portfolio.'],
    contactLabel: "LET'S BUILD WHAT COMES NEXT",
    contactHeading: 'A platform challenge worth solving?',
    contactText: "I'm open to international remote Cloud and Platform Engineering roles and relocation. Let's talk about your infrastructure, engineering team and priorities.",
    emailCTA: 'Email Mariana', webCV: 'View résumé online', top: 'Back to top',
    footerText: 'Cloud & Platform Engineer · Multicloud & IaC',
    cvTitle: 'Résumé', back: 'Back to portfolio', print: 'Print / save PDF', summary: 'Professional summary',
    cvSummary: 'Cloud & Platform Engineer with experience across AWS, Azure and GCP, infrastructure as code, CI/CD and critical production operations. Focused on self-service platforms, reusable automation, cloud cost efficiency and operational reliability.',
    cvSections: ['Technical expertise', 'Professional experience', 'Education & credentials', 'Languages'],
    cvLanguages: 'Portuguese: native · English: Professional Working Proficiency',
    cvBullets: [
      ['Designed and implemented a multicloud IDP with Terraform, Ansible, Strapi and Next.js; reduced new-squad time-to-market by 80% and onboarding from days to a few hours.', 'Standardized provisioning through reusable Terraform modules and Ansible playbooks, reducing environment delivery time by 40%.', 'Led Cloud Guild and FinOps initiatives, contributing to estimated cloud infrastructure savings of 25–30%.', 'Performed architecture and cloud security configuration reviews.'],
      ['Operated and supported highly available corporate chatbot infrastructure, reducing incident MTTR by 35%.', 'Automated CI/CD pipelines and recurring operations, reducing deployment-related failures by 45% and manual support effort by 50%.', 'Created technical documentation and delivered engineering training.'],
      ['Supported enterprise VPN and VDI environments using Cisco AnyConnect for more than 500 users.', 'Built Power BI dashboards for service availability, performance and incident reporting.']
    ]
  },
  pt: {
    lang: 'pt-BR', locale: 'pt_BR', home: '/pt/', cv: '/pt/cv.html',
    description: 'Mariana Viana Ferreira, Cloud & Platform Engineer. IDPs multicloud, automação com Terraform e Ansible, FinOps e confiabilidade em AWS, Azure e GCP.',
    skip: 'Ir para o conteúdo', navLabel: 'Navegação principal', menu: 'Menu',
    nav: ['Estudos de caso', 'Competências', 'Experiência', 'Contato'],
    availability: 'Aberta a oportunidades globais',
    heroLabel: 'ENGENHARIA DE CLOUD E PLATAFORMA',
    headline: ['Escala com confiança.', 'Automação com propósito.'],
    intro: 'Desenvolvo plataformas multicloud que encurtam o caminho entre a solicitação e a produção, reduzem custos de nuvem e melhoram a confiabilidade operacional.',
    explore: 'Explorar a arquitetura', download: 'Baixar currículo', pdfLabel: 'PDF · Inglês',
    remote: 'Vagas remotas internacionais · Disponível para realocação',
    language: 'Inglês: proficiência profissional',
    briefLabel: 'FOCO DE ENGENHARIA', briefTitle: 'Visão de plataforma. Impacto na operação.',
    focus: [
      ['01', 'Plataformas self-service', 'Da solicitação de infraestrutura à entrega repetível.'],
      ['02', 'Infraestrutura como código', 'Módulos reutilizáveis. Ambientes consistentes.'],
      ['03', 'Confiabilidade e FinOps', 'Recuperação mais rápida. Uso eficiente da nuvem.']
    ],
    metrics: [
      ['−30%', 'Custos de infraestrutura cloud', 'Até · economia estimada de 25–30%'],
      ['−80%', 'Time-to-market de novas squads', 'Onboarding: de dias a poucas horas'],
      ['−35%', 'MTTR de incidentes', 'Tempo médio de recuperação'],
      ['−40%', 'Tempo de provisionamento', 'Módulos Terraform + playbooks Ansible']
    ],
    metricsLabel: 'Impacto profissional',
    casesLabel: '01 / ARQUITETURA E ESTUDOS DE CASO',
    casesHeading: 'Decisões de engenharia. Resultados mensuráveis.',
    casesIntro: 'Trabalhos profissionais em engenharia de plataforma, automação de infraestrutura e operação de ambientes críticos de produção.',
    labels: { problem: 'Problema', architecture: 'Arquitetura e abordagem', impact: 'Impacto', role: 'Minha contribuição', diagram: 'Diagrama de arquitetura', planned: 'A adicionar', diagramNote: 'Espaço reservado para um diagrama de arquitetura revisado. Nenhuma topologia de produção é representada aqui.' },
    cases: [
      {
        id: 'multicloud-idp', number: '01', company: 'Getronics', title: 'Plataforma Interna para Desenvolvedores Multicloud',
        summary: 'Um caminho self-service para infraestrutura em AWS, Azure e GCP.',
        role: 'Arquitetura e implementação',
        problem: 'Novas squads precisavam acessar ambientes de nuvem com mais rapidez, com onboarding que levava dias em vez de horas.',
        architecture: 'Arquitetura e implementação de uma plataforma interna para desenvolvedores com portal em Next.js e Strapi, provisionamento self-service via módulos reutilizáveis de Terraform e playbooks Ansible em três provedores de nuvem.',
        impact: 'Redução de 80% no time-to-market de novas squads; o onboarding caiu de dias para poucas horas.',
        tags: ['AWS', 'Azure', 'GCP', 'Terraform', 'Ansible', 'Strapi', 'Next.js'],
        result: '−80%', resultLabel: 'no time-to-market de novas squads'
      },
      {
        id: 'iac-automation', number: '02', company: 'Getronics', title: 'Framework de Automação de Infraestrutura como Código',
        summary: 'Definições reutilizáveis de infraestrutura no lugar de configurações manuais recorrentes.',
        role: 'Automação e padronização de infraestrutura',
        problem: 'Configurações manuais recorrentes atrasavam a entrega de ambientes e dificultavam a consistência entre provedores de nuvem.',
        architecture: 'Automação do provisionamento com módulos reutilizáveis de Terraform e playbooks Ansible, padronizando a configuração de ambientes em AWS, Azure e GCP.',
        impact: 'Redução de 40% no tempo de entrega de ambientes, eliminando configurações manuais recorrentes e melhorando a consistência.',
        tags: ['Terraform', 'Ansible', 'AWS', 'Azure', 'GCP'],
        result: '−40%', resultLabel: 'no tempo de entrega de ambientes'
      },
      {
        id: 'reliability', number: '03', company: 'Banco do Brasil', title: 'Alta Disponibilidade, CI/CD e Observabilidade',
        summary: 'Implantações mais confiáveis e recuperação mais rápida para uma plataforma crítica de chatbot corporativo.',
        role: 'Operação de produção, resposta a incidentes e automação de entregas',
        problem: 'Uma plataforma crítica de alta disponibilidade exigia implantações confiáveis, recuperação eficiente de incidentes e menos trabalho repetitivo de suporte.',
        architecture: 'Operação e suporte à infraestrutura de uma plataforma corporativa de chatbot, automação de pipelines CI/CD e rotinas operacionais, documentação técnica e treinamentos para engenharia.',
        impact: 'Redução de 35% no MTTR de incidentes, de 45% nas falhas relacionadas a implantações e de 50% no esforço manual de suporte.',
        tags: ['Alta disponibilidade', 'CI/CD', 'Gestão de incidentes', 'Automação operacional'],
        result: '−35%', resultLabel: 'no MTTR de incidentes', secondary: ['−45% nas falhas de deploy', '−50% no esforço manual']
      }
    ],
    governanceLabel: 'LIDERANÇA TÉCNICA / CLOUD GUILD',
    governanceHeading: 'Adoção de nuvem com foco em custo e governança.',
    governanceText: 'Liderança de iniciativas da Cloud Guild em padrões de arquitetura, adoção de nuvem e FinOps. Contribuição para economia estimada de 25–30% em infraestrutura cloud, junto a revisões contínuas de arquitetura e configurações de segurança.',
    stackLabel: '02 / COMPETÊNCIAS TÉCNICAS', stackHeading: 'Atuação em todo o ciclo da plataforma.',
    domains: [
      ['01', 'Provedores de Cloud', ['AWS', 'Microsoft Azure', 'Google Cloud'], 'Arquitetura multicloud e provisionamento de infraestrutura.'],
      ['02', 'IaC e Gestão de Configuração', ['Terraform', 'Ansible'], 'Módulos reutilizáveis, playbooks e padronização de ambientes.'],
      ['03', 'Contêineres e Orquestração', ['Kubernetes', 'Docker', 'Linux'], 'Workloads em contêineres e operação de infraestrutura.'],
      ['04', 'CI/CD e Observabilidade', ['GitHub Actions', 'Python', 'Shell', 'Grafana', 'Prometheus'], 'Automação de entregas, rotinas operacionais e diagnóstico de incidentes.'],
      ['05', 'FinOps e Governança', ['FinOps', 'Cloud Guild', 'Revisões de arquitetura', 'ITSM'], 'Otimização de custos, adoção de nuvem e revisões de segurança.']
    ],
    educationLabel: 'FORMAÇÃO E QUALIFICAÇÕES',
    postgraduate: 'Pós-graduação em Computação em Nuvem', postgraduateNote: 'UniCEUB · Concluída',
    azure: 'Microsoft Certified: Azure Fundamentals', azureNote: 'AZ-900 · Certificação Microsoft',
    degree: 'Graduação tecnológica em Gestão da Tecnologia da Informação', degreeNote: 'Faculdade Senac DF · Concluída',
    training: 'Formação complementar', trainingList: ['AWS Educate: Introduction to Cloud 101', 'DevEx & DevRel · Academia ConectaDev — Banco do Brasil', 'Prototipação Avançada em Figma · Level UP! Experience'],
    experienceLabel: '03 / EXPERIÊNCIA PROFISSIONAL', experienceHeading: 'Da operação à engenharia de plataforma.',
    roles: [
      ['Getronics', 'Engenheira de Cloud / Plataforma', 'Mar 2025 — Atual', 'Arquitetura de IDP multicloud, automação de infraestrutura, liderança técnica na Cloud Guild e iniciativas de FinOps.'],
      ['Banco do Brasil', 'Analista de Sistemas — Cloud e Processos', 'Set 2024 — Mar 2025', 'Infraestrutura crítica de chatbot, pipelines CI/CD, resposta a incidentes, automação operacional e documentação de engenharia.'],
      ['Banco do Brasil', 'Técnica de Service Desk', 'Mar 2024 — Set 2024', 'Suporte corporativo de VPN e VDI para mais de 500 usuários, com dashboards Power BI de disponibilidade e incidentes.']
    ],
    codeLabel: '04 / CÓDIGO PÚBLICO', codeHeading: 'Explore a implementação.',
    codeIntro: 'Projetos pessoais com repositórios públicos, separados dos estudos de caso profissionais acima.',
    pipeline: 'Pipeline de entrega de uma API FastAPI com verificações automatizadas, validação do contêiner e publicação de imagem no GHCR.',
    pipelineDetails: 'Pull requests executam validações sem publicar. Na main, a pipeline publica a mesma imagem Docker aprovada nos testes HTTP. O escopo é a entrega da imagem, não a hospedagem da API em produção.',
    careerflow: 'Painel para acompanhar oportunidades em cloud e revisar candidaturas.',
    careerflowDetails: 'Consulta de vagas públicas, análise de compatibilidade por regras, filtros e backups. Dados pessoais ficam no navegador. Não envia candidaturas automaticamente.',
    source: 'Código e documentação', runs: 'Execuções da pipeline',
    webSummary: 'Projetos web complementares', visit: 'Visitar site',
    webDescriptions: ['Serviços de nail design, galeria e agendamento pelo WhatsApp.', 'Serviços e metodologia de uma agência de marketing.', 'Site institucional de uma empresa de energia solar.', 'Catálogo de floricultura e contato pelo WhatsApp.', 'Programação, ingressos e identidade visual de festival.', 'Portfólio de produção de eventos.'],
    contactLabel: 'VAMOS CONSTRUIR O PRÓXIMO PASSO',
    contactHeading: 'Um desafio de plataforma para resolver?',
    contactText: 'Busco oportunidades remotas internacionais em Cloud e Engenharia de Plataforma e estou disponível para realocação. Vamos conversar sobre sua infraestrutura, seu time de engenharia e suas prioridades.',
    emailCTA: 'Falar com Mariana', webCV: 'Ver currículo online', top: 'Voltar ao topo',
    footerText: 'Cloud & Platform Engineer · Multicloud e IaC',
    cvTitle: 'Currículo', back: 'Voltar ao portfólio', print: 'Imprimir / salvar PDF', summary: 'Perfil profissional',
    cvSummary: 'Engenheira de Cloud e Plataforma com experiência em AWS, Azure e GCP, infraestrutura como código, CI/CD e operação de ambientes críticos. Foco em plataformas self-service, automação reutilizável, eficiência de custos em nuvem e confiabilidade operacional.',
    cvSections: ['Competências técnicas', 'Experiência profissional', 'Formação e qualificações', 'Idiomas'],
    cvLanguages: 'Português: nativo · Inglês: proficiência profissional',
    cvBullets: [
      ['Arquitetura e implementação de IDP multicloud com Terraform, Ansible, Strapi e Next.js; redução de 80% no time-to-market de novas squads e onboarding de dias para poucas horas.', 'Padronização do provisionamento com módulos Terraform reutilizáveis e playbooks Ansible, reduzindo o tempo de entrega de ambientes em 40%.', 'Liderança de iniciativas da Cloud Guild e FinOps, com economia estimada de 25–30% em infraestrutura cloud.', 'Revisões de arquitetura e de configurações de segurança em nuvem.'],
      ['Operação e suporte à infraestrutura de alta disponibilidade de chatbot corporativo, com redução de 35% no MTTR de incidentes.', 'Automação de pipelines CI/CD e rotinas operacionais, reduzindo falhas de deploy em 45% e esforço manual de suporte em 50%.', 'Produção de documentação técnica e treinamentos para engenharia.'],
      ['Suporte corporativo de VPN e VDI com Cisco AnyConnect para mais de 500 usuários.', 'Dashboards Power BI para disponibilidade, desempenho e indicadores de incidentes.']
    ]
  }
};

export const webProjects = [
  ['Lorrane Ribeiro Nail Beauty', 'https://lorrane-nail-beauty.vercel.app/'],
  ['Krov Assessoria', 'https://assessoriakrov.vercel.app/'],
  ['Distrito Solar', 'https://distrito-solar.vercel.app/'],
  ['Floricultura', 'https://projeto-floricultura-sigma.vercel.app/'],
  ['Extase Fest', 'https://extasefest.com.br/'],
  ['Rafael Rego', 'https://portfolio-rafael-rego.vercel.app/']
];
