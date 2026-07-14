<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="container footer-inner">
      <span class="footer-mono">romulo-a-oliveira.dev</span>
      <span class="footer-copy">© {{ year }} — Feito com Vue.js</span>
      <div class="footer-links">
        <a href="https://linkedin.com/in/romulo-a-oliveira" target="_blank" rel="noopener">LinkedIn</a>
        <a href="https://github.com/romuloliveira" target="_blank" rel="noopener">GitHub</a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  border-top: 1px solid var(--border);
  padding: 32px 0;
  margin-top: 40px;
}

.footer-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 16px;
}

.footer-mono {
  font-family: var(--font-mono);
  font-size: 13px;
  color: var(--text-muted);
}

.footer-copy {
  font-size: 13px;
  color: var(--text-muted);
}

.footer-links {
  display: flex;
  gap: 20px;
}

.footer-links a {
  font-size: 13px;
  color: var(--text-secondary);
  text-decoration: none;
  transition: color var(--transition);
}

.footer-links a:hover { color: var(--accent); }
</style>
