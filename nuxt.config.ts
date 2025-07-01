// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  components: {
    global: true,
    dirs: ['~/components'] // or wherever AppCard.vue lives
  }
})
