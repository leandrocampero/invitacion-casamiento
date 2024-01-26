# Template Nuxt 3 Web Application

Init script

```bash
# Initialize a Nuxt project
pnpm dlx nuxi@latest init project-name

# Add ESLint and ESLint Nuxt module
pnpm add -D eslint @nuxtjs/eslint-module

# Add Prettier and the corresponding config and plugin for ESLint
pnpm add -D prettier eslint-config-prettier eslint-plugin-prettier

# Add TypeScript support
pnpm add -D @typescript-eslint/parser @nuxtjs/eslint-config-typescript
```

In case of experimenting issues with Typescript using Nuxt native functions, try this:

```bash
# Using PNPM
pnpm dlx nuxi cleanup

# Using NPM
npx nuxi cleanup
```
