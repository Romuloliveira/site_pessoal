<script setup lang="ts">
import { computed } from 'vue'
import { useProfileStore } from '@/stores/profile'

const profile = useProfileStore()

const grouped = computed(() => {
  const map = new Map<string, string[]>()
  for (const skill of profile.skills) {
    if (!map.has(skill.category)) map.set(skill.category, [])
    map.get(skill.category)!.push(skill.name)
  }
  return Array.from(map.entries()).map(([category, items]) => ({ category, items }))
})

const categoryColors: Record<string, string> = {
  'Automação': 'blue',
  'Linguagens': 'purple',
  'Banco de Dados': 'green',
  'IA & Inovação': 'purple',
  'Performance': 'blue',
  'API': 'green',
  'DevOps': 'blue',
  'Gestão': 'purple',
  'BDD': 'green',
  'Metodologias': 'blue',
}
</script>

<template>
  <section id="skills" class="section">
    <div class="container">
      <p class="section-label">// competências</p>
      <h2 class="section-title">Stack & habilidades</h2>

      <div class="skills-grid">
        <div
          v-for="group in grouped"
          :key="group.category"
          class="card skill-card"
        >
          <h3 class="skill-category">{{ group.category }}</h3>
          <div class="skill-tags">
            <span
              v-for="item in group.items"
              :key="item"
              class="tag"
              :class="categoryColors[group.category] === 'purple' ? 'purple' : categoryColors[group.category] === 'green' ? 'green' : ''"
            >
              {{ item }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 16px;
}

.skill-card {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.skill-category {
  font-family: var(--font-mono);
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--text-muted);
  padding-bottom: 12px;
  border-bottom: 1px solid var(--border);
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
</style>
