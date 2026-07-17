# Romulo A. Oliveira — Portfolio

Site pessoal e hub de projetos. Construído com **Vue 3 + TypeScript + Vite**.

## Setup local

```bash
npm install
npm run dev
npm run build
```

## Estrutura

```
src/
├── assets/        # CSS global e design system
├── components/    # Componentes (NavBar, Hero, About, Experience, Skills...)
├── stores/        # profile.ts — todos os dados do perfil
├── types/         # TypeScript interfaces
├── views/         # HomeView e ProjectsView
└── router/        # Vue Router
```

## Atualizar conteúdo

Todos os dados pessoais estão em `src/stores/profile.ts`. Edite o arquivo para atualizar qualquer informação.
