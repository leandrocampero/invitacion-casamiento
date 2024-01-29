// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/eslint-module', 'dayjs-nuxt'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: ['~/assets/css/main.css'],
  build: {
    transpile: ['vuetify'],
  },
  dayjs: {
    locales: ['es'],
    defaultLocale: 'es',
  },
})
