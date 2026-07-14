import { defineStore } from 'pinia'
import type { Experience, Skill, Project, SocialLink } from '@/types'

export const useProfileStore = defineStore('profile', {
  state: () => ({
    name: 'Romulo A. Oliveira',
    title: 'QA Engineer & SDET',
    subtitle: 'Automação de testes · Cypress · Selenium · Appium · AI-powered QA',
    location: 'Florianópolis, SC — Brasil',
    email: 'romulooliveira450@gmail.com',
    summary: `Analista de qualidade e automação de testes com mais de 7 anos de experiência em tecnologia e mais de 5 anos atuando na área de QA. Experiência com testes manuais e automatizados, Performance, UI (desktop, web, mobile), API REST e UAT. Atualmente liderando times de QA e implementando ferramentas com agentes de IA.`,

    socials: [
      {
        name: 'LinkedIn',
        url: 'https://linkedin.com/in/romulo-a-oliveira',
        icon: 'linkedin'
      },
      {
        name: 'GitHub',
        url: 'https://github.com/romuloliveira',
        icon: 'github'
      },
      {
        name: 'Email',
        url: 'mailto:romulooliveira450@gmail.com',
        icon: 'email'
      }
    ] as SocialLink[],

    experiences: [
      {
        company: '1Doc',
        role: 'QA Engineer',
        period: 'Junho 2023 — Presente',
        location: 'Florianópolis, SC',
        current: true,
        description: [
          'Gestão das demandas internas de QA, atuando como ponto focal e garantindo alinhamento com os objetivos da equipe.',
          'Liderança técnica de um time com outros dois QAs, promovendo alinhamento, organização e suporte contínuo.',
          'Criação de roadmap e trilha de onboarding para novos QAs, acelerando a adaptação e produtividade dos novos membros.',
          'Refatoração completa do projeto de automação para uso no processo de release, utilizando Cypress, MySQL e boas práticas de versionamento com Git.',
          'Criação de ferramentas internas de automação utilizando agentes de IA, Playwright e integração API com Jira e Confluence.',
          'Liderança na implementação do plugin Xray no Jira, atuando como referência técnica para a equipe.'
        ]
      },
      {
        company: 'NTT Data',
        role: 'Software Testing Analyst — QA',
        period: 'Maio 2022 — Maio 2023',
        location: 'Florianópolis, SC',
        description: [
          'Participação em projetos globais da Unilever LATAM, revisando documentação funcional para criação de cenários e casos de teste.',
          'Execução de testes funcionais em ambiente de QA, validando correções e novas implementações de sistema.',
          'Desenvolvimento de testes automatizados com Tricentis Tosca, em colaboração com equipes da NTT no Reino Unido e América Latina.',
          'Participação diária em cerimônias ágeis (Scrum), apoiando o acompanhamento e progresso dos projetos.'
        ]
      },
      {
        company: '1Doc',
        role: 'Analista de Testes — QA',
        period: 'Outubro 2020 — Maio 2022',
        location: 'Florianópolis, SC',
        description: [
          'Testes de bugfixes e novas funcionalidades incluindo usabilidade, API, webhooks, banco de dados.',
          'Vasta experiência em testes manuais de integração, funcionais, manutenção e regressão.',
          'Experiência em testes de API usando Postman e banco de dados SQL.',
          'Desenvolvimento de testes automatizados com Puppeteer.js e Cypress.',
          'Criação de documentação interna usando Confluence e Outline.'
        ]
      },
      {
        company: '1Doc',
        role: 'Analista de Suporte',
        period: 'Junho 2019 — Outubro 2020',
        location: 'Florianópolis, SC',
        description: [
          'Atendimento, cadastro e análise de chamados de nível 1 e nível 2.',
          'Ajustes em banco de dados, bug report e acompanhamento junto aos clientes.'
        ]
      },
      {
        company: 'Pipz',
        role: 'Suporte Técnico',
        period: 'Agosto 2018 — Junho 2019',
        location: 'Florianópolis, SC',
        description: [
          'Atendimento por chat, telefone e email; resolução de dúvidas e análise de chamados.',
          'Análise e teste de possíveis bugs, integrações via REST API e webhooks.',
          'Teste de novas funcionalidades e escalonamento para o time de desenvolvimento.'
        ]
      }
    ] as Experience[],

    skills: [
      { name: 'Cypress', category: 'Automação' },
      { name: 'Playwright', category: 'Automação' },
      { name: 'Selenium WebDriver', category: 'Automação' },
      { name: 'Appium', category: 'Automação' },
      { name: 'Puppeteer', category: 'Automação' },
      { name: 'Tricentis Tosca', category: 'Automação' },
      { name: 'JavaScript', category: 'Linguagens' },
      { name: 'TypeScript', category: 'Linguagens' },
      { name: 'Java', category: 'Linguagens' },
      { name: 'SQL', category: 'Banco de Dados' },
      { name: 'MySQL', category: 'Banco de Dados' },
      { name: 'Agentes de IA', category: 'IA & Inovação' },
      { name: 'Testes de Performance', category: 'Performance' },
      { name: 'JMeter', category: 'Performance' },
      { name: 'k6', category: 'Performance' },
      { name: 'LoadRunner', category: 'Performance' },
      { name: 'Postman', category: 'API' },
      { name: 'REST API', category: 'API' },
      { name: 'Git', category: 'DevOps' },
      { name: 'Jira', category: 'Gestão' },
      { name: 'Xray', category: 'Gestão' },
      { name: 'QTest', category: 'Gestão' },
      { name: 'Cucumber', category: 'BDD' },
      { name: 'Scrum', category: 'Metodologias' },
    ] as Skill[],

    education: {
      institution: 'Universidade Regional Integrada do Alto Uruguai e das Missões — URI',
      degree: 'Bacharel em Ciência da Computação',
      period: '2012 — 2017'
    },

    languages: [
      { name: 'Português', level: 'Nativo' },
      { name: 'Inglês', level: 'Fluente' }
    ],

    projects: [
      {
        title: 'Em breve',
        description: 'Projetos pessoais e open source em desenvolvimento. Volte em breve!',
        tags: ['QA', 'Automação', 'IA'],
        wip: true
      }
    ] as Project[]
  })
})
