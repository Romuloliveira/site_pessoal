<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'

const scrolled = ref(false)
const menuOpen = ref(false)

const handleScroll = () => {
  scrolled.value = window.scrollY > 20
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))

const navLinks = [
  { label: 'Sobre', href: '#about' },
  { label: 'Experiência', href: '#experience' },
  { label: 'Skills', href: '#skills' },
]
</script>

<template>
  <header :class="['navbar', { scrolled }]">
    <div class="container nav-inner">
      <RouterLink to="/" class="nav-logo">
        <span class="logo-bracket">{</span>
        <span class="logo-name">rao</span>
        <span class="logo-bracket">}</span>
      </RouterLink>

      <nav class="nav-links" :class="{ open: menuOpen }">
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          @click="menuOpen = false"
        >
          {{ link.label }}
        </a>

        <a
          href="mailto:romulooliveira450@gmail.com"
          class="nav-cta"
        >
          Contato
        </a>
      </nav>

      <button class="hamburger" @click="menuOpen = !menuOpen" :aria-label="menuOpen ? 'Fechar menu' : 'Abrir menu'">
        <span :class="{ open: menuOpen }"></span>
        <span :class="{ open: menuOpen }"></span>
        <span :class="{ open: menuOpen }"></span>
      </button>
    </div>
  </header>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  padding: 16px 0;
  transition: all 0.3s ease;
}

.navbar.scrolled {
  background: rgba(10, 10, 15, 0.85);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--border);
  padding: 12px 0;
}

.nav-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav-logo {
  font-family: var(--font-mono);
  font-size: 18px;
  font-weight: 500;
  text-decoration: none;
  color: var(--text-primary);
  letter-spacing: -0.02em;
}

.logo-bracket {
  color: var(--accent);
}

.logo-name {
  color: var(--text-primary);
  padding: 0 2px;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 8px;
}

.nav-links a {
  font-size: 14px;
  color: var(--text-secondary);
  text-decoration: none;
  padding: 6px 14px;
  border-radius: var(--radius-sm);
  transition: all var(--transition);
  font-weight: 400;
}

.nav-links a:hover,
.nav-links a.router-link-active {
  color: var(--text-primary);
  background: var(--accent-dim);
}

.nav-cta {
  background: var(--accent-dim) !important;
  border: 1px solid var(--border-accent) !important;
  color: var(--accent) !important;
  font-weight: 500 !important;
  margin-left: 8px;
}

.nav-cta:hover {
  background: var(--accent) !important;
  color: var(--bg) !important;
}

.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
}

.hamburger span {
  display: block;
  width: 22px;
  height: 2px;
  background: var(--text-secondary);
  border-radius: 2px;
  transition: all 0.3s ease;
}

@media (max-width: 680px) {
  .hamburger { display: flex; }

  .nav-links {
    display: none;
    position: fixed;
    top: 56px;
    left: 0;
    right: 0;
    background: rgba(10, 10, 15, 0.98);
    backdrop-filter: blur(20px);
    flex-direction: column;
    padding: 24px;
    gap: 4px;
    border-bottom: 1px solid var(--border);
  }

  .nav-links.open { display: flex; }

  .nav-links a {
    width: 100%;
    text-align: center;
    padding: 12px 16px;
  }

  .nav-cta { margin-left: 0 !important; margin-top: 8px; }
}
</style>
