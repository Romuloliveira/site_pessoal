<script setup lang="ts">
import { useProfileStore } from '@/stores/profile'

const profile = useProfileStore()
</script>

<template>
  <section class="hero">
    <!-- Background grid -->
    <div class="hero-grid" aria-hidden="true"></div>

    <!-- Glow orbs -->
    <div class="orb orb-1" aria-hidden="true"></div>
    <div class="orb orb-2" aria-hidden="true"></div>

    <div class="container hero-inner">
      <div class="hero-content">

        <h1 class="hero-name fade-up fade-up-delay-1">
          {{ profile.name }}
        </h1>

        <h2 class="hero-title fade-up fade-up-delay-2">
          {{ profile.title }}
        </h2>

        <p class="hero-summary fade-up fade-up-delay-3">
          {{ profile.summary }}
        </p>

        <div class="hero-meta fade-up fade-up-delay-4">
          <span class="meta-item">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            {{ profile.location }}
          </span>
          <span class="meta-sep">·</span>
          <span class="meta-item">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>
            +5 anos em QA
          </span>
          <span class="meta-sep">·</span>
          <span class="meta-item">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
            Inglês fluente
          </span>
        </div>

        <div class="hero-actions fade-up fade-up-delay-4">
          <a href="#experience" class="btn btn-primary">
            Ver experiência
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </a>
          <a href="mailto:romulooliveira450@gmail.com" class="btn btn-ghost">
            Entre em contato
          </a>
        </div>

        <div class="hero-socials fade-up fade-up-delay-4">
          <a
            href="https://linkedin.com/in/romulo-a-oliveira"
            target="_blank"
            rel="noopener"
            class="social-link"
            aria-label="LinkedIn"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
          <a
            href="https://github.com/romuloliveira"
            target="_blank"
            rel="noopener"
            class="social-link"
            aria-label="GitHub"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
          </a>
          <a
            href="mailto:romulooliveira450@gmail.com"
            class="social-link"
            aria-label="Email"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
          </a>
        </div>
      </div>

      <!-- Terminal decoration -->
      <div class="hero-terminal fade-up fade-up-delay-3" aria-hidden="true">
        <div class="terminal-header">
          <span class="t-dot red"></span>
          <span class="t-dot yellow"></span>
          <span class="t-dot green"></span>
          <span class="t-title">terminal</span>
        </div>
        <div class="terminal-body">
          <div class="t-line">
            <span class="t-prompt">$</span>
            <span class="t-cmd"> whoami</span>
          </div>
          <div class="t-line t-output">romulo_oliveira</div>
          <div class="t-line">
            <span class="t-prompt">$</span>
            <span class="t-cmd"> cat role.txt</span>
          </div>
          <div class="t-line t-output">QA Engineer & SDET</div>
          <div class="t-line">
            <span class="t-prompt">$</span>
            <span class="t-cmd"> ls skills/</span>
          </div>
          <div class="t-line t-output t-list">
            cypress/&nbsp;&nbsp; playwright/&nbsp;&nbsp; selenium/<br>
            appium/&nbsp;&nbsp;&nbsp; jmeter/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; k6/<br>
            ai-agents/ postman/&nbsp;&nbsp;&nbsp;&nbsp; sql/
          </div>
          <div class="t-line">
            <span class="t-prompt">$</span>
            <span class="t-cmd"> git log --oneline -1</span>
          </div>
          <div class="t-line t-output">
            <span class="t-hash">a3f9c12</span> feat: AI-powered QA tools
          </div>
          <div class="t-line">
            <span class="t-prompt">$</span>
            <span class="t-cursor">█</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll hint -->
    <div class="scroll-hint" aria-hidden="true">
      <div class="scroll-line"></div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;
  padding-top: 80px;
}

.hero-grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(99, 179, 237, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(99, 179, 237, 0.03) 1px, transparent 1px);
  background-size: 60px 60px;
  mask-image: radial-gradient(ellipse 80% 80% at 50% 0%, black 40%, transparent 100%);
}

.orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(120px);
  pointer-events: none;
}

.orb-1 {
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(99, 179, 237, 0.08) 0%, transparent 70%);
  top: -100px;
  right: -100px;
}

.orb-2 {
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(183, 148, 244, 0.06) 0%, transparent 70%);
  bottom: 0;
  left: -100px;
}

.hero-inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  align-items: center;
  padding: 80px 24px;
  position: relative;
  z-index: 1;
}

.hero-content {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.hero-overline {
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--green);
  letter-spacing: 0.05em;
}

.dot {
  width: 7px;
  height: 7px;
  background: var(--green);
  border-radius: 50%;
  animation: pulse 2s ease-in-out infinite;
  box-shadow: 0 0 8px var(--green);
}

.hero-name {
  font-family: var(--font-display);
  font-size: clamp(36px, 5vw, 58px);
  font-weight: 400;
  line-height: 1.1;
  color: var(--text-primary);
  letter-spacing: -0.02em;
}

.hero-title {
  font-family: var(--font-mono);
  font-size: clamp(14px, 2vw, 17px);
  font-weight: 400;
  color: var(--accent);
  letter-spacing: 0.02em;
}

.hero-summary {
  font-size: 15px;
  color: var(--text-secondary);
  line-height: 1.75;
  max-width: 520px;
}

.hero-meta {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  font-size: 13px;
  color: var(--text-muted);
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 5px;
}

.meta-sep { color: var(--border); }

.hero-actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 11px 22px;
  border-radius: var(--radius-sm);
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  transition: all var(--transition);
  cursor: pointer;
  border: 1px solid transparent;
}

.btn-primary {
  background: var(--accent);
  color: var(--bg);
  border-color: var(--accent);
}

.btn-primary:hover {
  background: #4fa8e0;
  color: var(--bg);
  transform: translateY(-1px);
  box-shadow: 0 8px 24px rgba(99, 179, 237, 0.3);
}

.btn-ghost {
  background: transparent;
  color: var(--text-secondary);
  border-color: var(--border);
}

.btn-ghost:hover {
  border-color: var(--border-accent);
  color: var(--text-primary);
  background: var(--accent-dim);
}

.hero-socials {
  display: flex;
  gap: 12px;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border-radius: var(--radius-sm);
  background: var(--bg-card);
  border: 1px solid var(--border);
  color: var(--text-secondary);
  transition: all var(--transition);
  text-decoration: none;
}

.social-link:hover {
  color: var(--accent);
  border-color: var(--border-accent);
  background: var(--accent-dim);
  transform: translateY(-2px);
}

/* Terminal */
.hero-terminal {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-lg);
  font-family: var(--font-mono);
  font-size: 13px;
}

.terminal-header {
  display: flex;
  align-items: center;
  gap: 7px;
  padding: 12px 16px;
  background: rgba(255,255,255,0.03);
  border-bottom: 1px solid var(--border);
}

.t-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.t-dot.red { background: #ff5f57; }
.t-dot.yellow { background: #ffbd2e; }
.t-dot.green { background: #28ca41; }

.t-title {
  font-size: 12px;
  color: var(--text-muted);
  margin-left: 8px;
}

.terminal-body {
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-height: 280px;
}

.t-line {
  line-height: 1.8;
}

.t-prompt {
  color: var(--green);
  user-select: none;
}

.t-cmd {
  color: var(--text-primary);
}

.t-output {
  color: var(--text-secondary);
  padding-left: 14px;
  margin-bottom: 4px;
}

.t-list {
  font-size: 12px;
  color: var(--accent);
  line-height: 1.8;
}

.t-hash {
  color: var(--accent-2);
}

.t-cursor {
  animation: pulse 1s step-end infinite;
  color: var(--accent);
}

/* Scroll hint */
.scroll-hint {
  position: absolute;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
}

.scroll-line {
  width: 1px;
  height: 48px;
  background: linear-gradient(to bottom, var(--accent), transparent);
  animation: fadeIn 1s 1s both;
}

@media (max-width: 900px) {
  .hero-inner {
    grid-template-columns: 1fr;
    gap: 48px;
    padding: 60px 24px 80px;
  }

  .hero-terminal { display: none; }
}

@media (max-width: 480px) {
  .hero-name { font-size: 36px; }
  .hero-actions { flex-direction: column; }
  .btn { justify-content: center; }
}
</style>
