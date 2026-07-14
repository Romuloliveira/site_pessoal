<script setup lang="ts">
import { RouterLink } from 'vue-router'

interface ProjectPlaceholder {
  icon: string
  title: string
  desc: string
  tags: Array<{ label: string; color: string }>
}

const placeholders: ProjectPlaceholder[] = [
  {
    icon: '🤖',
    title: 'QA AI Agent',
    desc: 'Ferramenta de automação usando agentes de IA para geração e execução inteligente de casos de teste.',
    tags: [
      { label: 'Playwright', color: '' },
      { label: 'AI', color: 'purple' },
      { label: 'Node.js', color: 'green' }
    ]
  },
  {
    icon: '🔌',
    title: 'Jira QA Integration',
    desc: 'Plugin/integração para automação de fluxos de QA diretamente no Jira com Xray e Confluence.',
    tags: [
      { label: 'Jira API', color: '' },
      { label: 'Xray', color: 'purple' },
      { label: 'TypeScript', color: 'green' }
    ]
  },
  {
    icon: '📊',
    title: 'Test Report Dashboard',
    desc: 'Dashboard visual para acompanhamento de métricas de qualidade e histórico de execuções de testes.',
    tags: [
      { label: 'Vue.js', color: '' },
      { label: 'Cypress', color: 'purple' },
      { label: 'Charts', color: 'green' }
    ]
  }
]
</script>

<template>
  <div class="projects-page">
    <div class="container">
      <div class="page-header">
        <RouterLink to="/" class="back-link">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
          Voltar
        </RouterLink>

        <p class="section-label">// projetos</p>
        <h1 class="page-title">Projetos & Ferramentas</h1>
        <p class="page-desc">
          Repositório de projetos pessoais, ferramentas open source e experimentos com automação e IA.
          Em construção — volte em breve!
        </p>
      </div>

      <div class="coming-soon">
        <div class="cs-grid">
          <div class="cs-card card" v-for="(item, i) in placeholders" :key="i">
            <div class="cs-header">
              <div class="cs-icon-wrap">{{ item.icon }}</div>
              <span class="tag">Em breve</span>
            </div>
            <h3 class="cs-title">{{ item.title }}</h3>
            <p class="cs-desc">{{ item.desc }}</p>
            <div class="cs-tags">
              <span
                v-for="tag in item.tags"
                :key="tag.label"
                class="tag"
                :class="tag.color"
              >{{ tag.label }}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="github-cta card">
        <div class="github-icon">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
        </div>
        <div class="github-text">
          <h3>Acompanhe no GitHub</h3>
          <p>Todos os projetos serão publicados como open source. Siga o perfil para acompanhar as novidades.</p>
        </div>
        <a href="https://github.com/romuloliveira" target="_blank" rel="noopener" class="btn-primary">
          Ver GitHub →
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.projects-page {
  padding-top: 100px;
  padding-bottom: 80px;
}

.page-header {
  max-width: 640px;
  margin-bottom: 64px;
}

.back-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  color: var(--text-muted);
  text-decoration: none;
  margin-bottom: 32px;
  transition: color var(--transition);
}

.back-link:hover { color: var(--text-primary); }

.page-title {
  font-family: var(--font-display);
  font-size: clamp(32px, 5vw, 48px);
  font-weight: 400;
  color: var(--text-primary);
  margin: 12px 0 16px;
  line-height: 1.1;
}

.page-desc {
  font-size: 15px;
  color: var(--text-secondary);
  line-height: 1.7;
}

.coming-soon { margin-bottom: 64px; }

.cs-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
}

.cs-card {
  display: flex;
  flex-direction: column;
  gap: 16px;
  opacity: 0.75;
  transition: all var(--transition);
}

.cs-card:hover { opacity: 1; }

.cs-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.cs-icon-wrap {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  font-size: 24px;
}

.cs-title {
  font-size: 17px;
  font-weight: 600;
  color: var(--text-primary);
}

.cs-desc {
  font-size: 13px;
  color: var(--text-secondary);
  line-height: 1.6;
  flex: 1;
}

.cs-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.github-cta {
  display: flex;
  align-items: center;
  gap: 24px;
  flex-wrap: wrap;
  padding: 36px;
  background: var(--accent-glow);
  border-color: var(--border-accent);
}

.github-icon { color: var(--text-secondary); flex-shrink: 0; }

.github-text { flex: 1; min-width: 200px; }

.github-text h3 {
  font-size: 18px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 6px;
}

.github-text p {
  font-size: 13px;
  color: var(--text-secondary);
  line-height: 1.6;
}

.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  border-radius: var(--radius-sm);
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  background: var(--accent);
  color: var(--bg);
  transition: all var(--transition);
  white-space: nowrap;
}

.btn-primary:hover {
  background: #4fa8e0;
  color: var(--bg);
  transform: translateY(-1px);
}
</style>
