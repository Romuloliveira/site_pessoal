# Romulo A. Oliveira — Portfolio

Site pessoal e hub de projetos. Construído com **Vue 3 + TypeScript + Vite**.

## Setup local

```bash
npm install
npm run dev
npm run build
```

## Deploy no GitHub Pages

O deploy é automático via GitHub Actions ao fazer push na branch `main`.

### Configuração inicial:
1. No repositório GitHub: **Settings → Pages**
2. Em "Source": selecione **GitHub Actions**
3. Faça push na branch `main`

### Se o repositório se chamar `portfolio` (não `<username>.github.io`):
Edite `vite.config.ts`:
```ts
base: '/portfolio/',
```

### Se usar domínio customizado ou `<username>.github.io`:
```ts
base: '/',
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
