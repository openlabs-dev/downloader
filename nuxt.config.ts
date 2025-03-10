export default defineNuxtConfig({
  app: {
    head: {
      title: 'Downloader',
      link: [
        { rel: 'icon', type: 'svg/x-icon', href: '/logo.svg' },
      ],
    },
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint',
    '@unocss/nuxt',
    '@vueuse/nuxt',
    '@nuxt/image',
  ],
  future: {
    compatibilityVersion: 4,
  },
  eslint: {
    config: {
      standalone: false,
    },
  },
})
