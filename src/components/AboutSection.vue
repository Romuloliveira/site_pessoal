<script setup lang="ts">
import { useProfileStore } from '@/stores/profile'

const profile = useProfileStore()
</script>

<template>
  <section id="about" class="section">
    <div class="container">
      <p class="section-label">// sobre</p>
      <div class="about-grid">
        <div class="about-text">
          <h2 class="section-title">Quem sou eu</h2>
          <p>
            Sou um <strong>QA Engineer</strong> com mais de 7 anos em tecnologia e 5+ anos especializado em qualidade de software. Tenho experiência em projetos de escala global — como no trabalho com <strong>Unilever LATAM</strong> — e locais, sempre com foco em automação, qualidade e entrega.
          </p>
          <p>
            Atualmente na <strong>1Doc</strong>, lidero um time de QA, gerencio roadmaps, defino estratégias de teste e construo ferramentas internas usando <strong>agentes de IA</strong>, Playwright e integrações com Jira e Confluence.
          </p>
          <p>
            Acredito que qualidade não é apenas encontrar bugs — é construir confiança no software e nos processos de desenvolvimento. Tenho inglês fluente e experiência colaborando com equipes internacionais.
          </p>

          <div class="about-facts">
            <div class="fact">
              <span class="fact-number">7+</span>
              <span class="fact-label">Anos em tecnologia</span>
            </div>
            <div class="fact">
              <span class="fact-number">5+</span>
              <span class="fact-label">Anos em QA</span>
            </div>
            <div class="fact">
              <span class="fact-number">3</span>
              <span class="fact-label">Empresas impactadas</span>
            </div>
          </div>
        </div>

        <div class="about-sidebar">
          <div class="card info-card">
            <h3 class="info-card-title">Formação</h3>
            <div class="info-item">
              <div class="info-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
              </div>
              <div>
                <p class="info-title">{{ profile.education.degree }}</p>
                <p class="info-sub">{{ (profile.education.institution.split('—')[0] ?? profile.education.institution).trim() }}</p>
                <p class="info-period">{{ profile.education.period }}</p>
              </div>
            </div>
          </div>

          <div class="card info-card">
            <h3 class="info-card-title">Idiomas</h3>
            <div v-for="lang in profile.languages" :key="lang.name" class="info-item">
              <div class="info-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
              </div>
              <div>
                <p class="info-title">{{ lang.name }}</p>
                <p class="info-sub">{{ lang.level }}</p>
              </div>
            </div>
          </div>

          <div class="card info-card">
            <h3 class="info-card-title">Contato</h3>
            <a :href="`mailto:${profile.email}`" class="contact-link">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              {{ profile.email }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-grid {
  display: grid;
  grid-template-columns: 1fr 380px;
  gap: 64px;
  align-items: start;
}

.about-text {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.about-text p {
  font-size: 15px;
  color: var(--text-secondary);
  line-height: 1.8;
}

.about-text strong {
  color: var(--text-primary);
  font-weight: 500;
}

.about-facts {
  display: flex;
  gap: 32px;
  padding-top: 8px;
  flex-wrap: wrap;
}

.fact {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.fact-number {
  font-family: var(--font-display);
  font-size: 40px;
  color: var(--accent);
  line-height: 1;
}

.fact-label {
  font-size: 12px;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.about-sidebar {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.info-card {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.info-card-title {
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--text-muted);
  padding-bottom: 12px;
  border-bottom: 1px solid var(--border);
}

.info-item {
  display: flex;
  gap: 12px;
  align-items: flex-start;
}

.info-icon {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--accent-dim);
  border-radius: var(--radius-sm);
  color: var(--accent);
  flex-shrink: 0;
  margin-top: 2px;
}

.info-title {
  font-size: 14px;
  font-weight: 500;
  color: var(--text-primary);
}

.info-sub {
  font-size: 12px;
  color: var(--text-secondary);
  margin-top: 2px;
}

.info-period {
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--text-muted);
  margin-top: 4px;
}

.contact-link {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: var(--text-secondary);
  text-decoration: none;
  transition: color var(--transition);
}

.contact-link:hover { color: var(--accent); }

@media (max-width: 900px) {
  .about-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }
}
</style>
