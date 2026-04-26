# Kana Pas Pro

Kana Pas Pro is a quiz website that offers exercises to learn Japanese hiragana and katakana.

This project is a modern fork of [Kana Pro](https://github.com/anzzstuff/kanaquiz), originally created by [Antti Pilto](https://github.com/anzzstuff). The goal of this fork is to migrate the project to modern web technologies and introduce new exercises to learn kana.

Table of contents :

1. [Project setup](#project-setup)
2. [Project architecture](#project-architecture)

## Project Setup

### Tools needed

- [Node.js](https://nodejs.org/fr/download) is required to build the JavaScript app (v24 LTS recommended, other versions may also work).
- [npm](https://www.npmjs.com/) to handle JavaScript dependencies (NPM IS INSTALLED BY DEFAULT WITH NODE.JS)
- OR [pnpm](https://pnpm.io/) to handle JavaScript dependencies (I personally prefer `pnpm` over `npm` and I used it for this project).

### Dependencies installation

This will download all dependencies in `node_modules/`

```sh
npm install # or pnpm install
```

### Compile and Hot-Reload for Development

```sh
npm dev # or pnpm dev
```

### Type-Check, Compile and Minify for Production

This will generate a production ready website in `dist/`

```sh
npm build # or pnpm build
```

### Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Project Architecture

```text
📦 KanaPasPro
├── 📂 public/             # Directly accessible static assets
├── 📂 src/                # Main application source code
│   ├── 📂 assets/         # Non-code resources (styles, images, data)
│   ├── 📂 components/     # Reusable Vue UI components
│   ├── 📂 router/
│   │   └── 📄 index.ts    # Application routing configuration
│   ├── 📂 stores/         # Global state management and game logic (with Pinia)
│   ├── 📂 types/          # TypeScript types
│   ├── 📂 utils/          # Shared utility functions
│   ├── 📂 views/          # Page-level Vue components (routed views)
│   ├── 📄 App.vue         # Root component wrapping the application
│   └── 📄 main.ts         # Application entry point (Vue plugins setup and mounting)
└── 📄 index.html          # Main HTML template loading the Vue app
```
