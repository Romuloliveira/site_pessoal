<script setup lang="ts">
import { ref } from 'vue'
import { useProfileStore } from '@/stores/profile'

const profile = useProfileStore()
const activeIdx = ref(0)
</script>

<template>
  <section id="experience" class="section experience-section">
    <div class="container">
      <p class="section-label">// experiência</p>
      <h2 class="section-title">Trajetória profissional</h2>

      <div class="exp-layout">
        <!-- Tab list -->
        <div class="exp-tabs" role="tablist">
          <button
            v-for="(exp, idx) in profile.experiences"
            :key="exp.company + exp.role"
            class="exp-tab"
            :class="{ active: activeIdx === idx }"
            role="tab"
            :aria-selected="activeIdx === idx"
            @click="activeIdx = idx"
          >
            <span class="tab-company">{{ exp.company }}</span>
            <span v-if="exp.current" class="tab-badge">Atual</span>
          </button>
        </div>

        <!-- Content panel -->
        <div class="exp-panel" role="tabpanel">
          <template v-for="(exp, idx) in profile.experiences" :key="exp.company + exp.role">
            <Transition name="panel">
              <div v-if="activeIdx === idx" class="exp-content">
                <div class="exp-header">
                  <div>
                    <h3 class="exp-role">{{ exp.role }}</h3>
                    <p class="exp-company">
                      <span>{{ exp.company }}</span>
                      <span class="exp-sep">·</span>
                      <span class="exp-location">{{ exp.location }}</span>
                    </p>
                  </div>
                  <div class="exp-period-badge">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                    {{ exp.period }}
                  </div>
                </div>

                <ul class="exp-list">
                  <li v-for="(item, i) in exp.description" :key="i" class="exp-item">
                    <span class="exp-bullet">▸</span>
                    {{ item }}
                  </li>
                </ul>
              </div>
            </Transition>
          </template>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.experience-section {
  background: linear-gradient(to bottom, transparent, var(--bg-card) 20%, var(--bg-card) 80%, transparent);
}

.exp-layout {
  display: grid;
  grid-template-columns: 220px 1fr;
  gap: 40px;
  align-items: start;
}

.exp-tabs {
  display: flex;
  flex-direction: column;
  gap: 2px;
  border-left: 2px solid var(--border);
}

.exp-tab {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  padding: 12px 16px;
  text-align: left;
  background: none;
  border: none;
  cursor: pointer;
  color: var(--text-muted);
  font-size: 13px;
  font-family: var(--font-body);
  transition: all var(--transition);
  border-left: 2px solid transparent;
  margin-left: -2px;
  border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
}

.exp-tab:hover {
  color: var(--text-primary);
  background: var(--accent-dim);
}

.exp-tab.active {
  color: var(--accent);
  border-left-color: var(--accent);
  background: var(--accent-dim);
}

.tab-company {
  font-weight: 500;
}

.tab-badge {
  font-family: var(--font-mono);
  font-size: 9px;
  padding: 2px 6px;
  background: var(--green-dim);
  color: var(--green);
  border-radius: 100px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

/* Panel */
.exp-panel {
  position: relative;
  min-height: 300px;
}

.exp-content {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.exp-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 16px;
  flex-wrap: wrap;
}

.exp-role {
  font-size: 22px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 6px;
  letter-spacing: -0.02em;
}

.exp-company {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 15px;
  color: var(--text-secondary);
}

.exp-sep { color: var(--text-muted); }

.exp-location { color: var(--text-muted); font-size: 14px; }

.exp-period-badge {
  display: flex;
  align-items: center;
  gap: 6px;
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--text-muted);
  background: var(--bg-card);
  border: 1px solid var(--border);
  padding: 6px 12px;
  border-radius: 100px;
  white-space: nowrap;
  flex-shrink: 0;
}

.exp-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
  list-style: none;
}

.exp-item {
  display: flex;
  gap: 12px;
  font-size: 14px;
  color: var(--text-secondary);
  line-height: 1.7;
}

.exp-bullet {
  color: var(--accent);
  flex-shrink: 0;
  margin-top: 2px;
  font-size: 12px;
}

/* Transition */
.panel-enter-active {
  animation: fadeUp 0.3s ease both;
}

@media (max-width: 720px) {
  .exp-layout {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  .exp-tabs {
    flex-direction: row;
    overflow-x: auto;
    border-left: none;
    border-bottom: 2px solid var(--border);
    gap: 0;
    padding-bottom: 2px;
  }

  .exp-tab {
    border-left: none;
    border-bottom: 2px solid transparent;
    border-radius: 0;
    margin-left: 0;
    margin-bottom: -2px;
    white-space: nowrap;
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
  }

  .exp-tab.active {
    border-left-color: transparent;
    border-bottom-color: var(--accent);
  }
}
</style>
