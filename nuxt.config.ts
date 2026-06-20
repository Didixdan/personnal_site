// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n',
    '@nuxt/fonts',
    'nuxt-svgo',
    '@vercel/analytics'
  ],
  css: ['~/assets/scss/main.scss'],
  plugins: ['~/plugins/gsap.client.js'],
  app: {
    head: {
      htmlAttrs: { lang: 'fr' },
      style: [
        {
          innerHTML: 'html,body{margin:0}',
        },
      ],
    },
  },
  nitro: {
    prerender: {
      routes: ['/', '/mentions-legales', '/sitemap.xml', '/robots.txt'],
    },
  },
  routeRules: {
    '/': { prerender: true },
    '/mentions-legales': { prerender: true },
  },
})
