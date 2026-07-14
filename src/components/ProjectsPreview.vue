<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <section id="projects" class="section projects-preview">
    <div class="container">
      <p class="section-label">// projetos</p>
      <div class="projects-header">
        <h2 class="section-title" style="margin-bottom: 0;">Projetos em destaque</h2>
        <RouterLink to="/projects" class="see-all">
          Ver todos
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
        </RouterLink>
      </div>

      <div class="wip-card card">
        <div class="wip-icon">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
          </svg>
        </div>
        <div class="wip-text">
          <h3>Projetos pessoais em andamento</h3>
          <p>Estou construindo ferramentas open source focadas em QA, automação e IA. Em breve serão publicadas aqui e no GitHub.</p>
        </div>
        <div class="wip-tags">
          <span class="tag">QA Tooling</span>
          <span class="tag purple">AI Agents</span>
          <span class="tag green">Open Source</span>
        </div>
        <RouterLink to="/projects" class="wip-cta">
          Acompanhe os projetos →
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects-preview {
  background: linear-gradient(to bottom, transparent, var(--bg-card) 20%, var(--bg-card) 80%, transparent);
}

.projects-header {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  margin-bottom: 40px;
  flex-wrap: wrap;
  gap: 16px;
}

.see-all {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  color: var(--text-secondary);
  text-decoration: none;
  transition: color var(--transition);
}

.see-all:hover { color: var(--accent); }

.wip-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 20px;
  padding: 56px 40px;
  border-style: dashed;
  background: transparent;
}

.wip-icon {
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--accent-dim);
  border-radius: var(--radius);
  color: var(--accent);
}

.wip-text h3 {
  font-size: 20px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 8px;
}

.wip-text p {
  font-size: 14px;
  color: var(--text-secondary);
  max-width: 460px;
  line-height: 1.7;
}

.wip-tags {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  justify-content: center;
}

.wip-cta {
  font-size: 14px;
  color: var(--accent);
  text-decoration: none;
  font-weight: 500;
  transition: opacity var(--transition);
}

.wip-cta:hover { opacity: 0.7; }
</style>
