// https://nuxt.com/docs/api/configuration/nuxt-config


export default defineNuxtConfig({
  runtimeConfig: {
    // Private keys are only available on the server
    apiSecret: '123',

    // Public keys that are exposed to the client
    public: {
      Api_ZfHost: process.env.NUXT_ZF_API_HOST || '/api'
    }
  },

  devtools: { enabled: true },
  build: {
    transpile:
     // 设置naive-UI
      process.env.NODE_ENV === 'production'
        ? [
            'naive-ui',
            'vueuc',
            '@css-render/vue3-ssr',
            '@juggle/resize-observer'
          ]
        : ['@juggle/resize-observer']
  },

  vite: {
    optimizeDeps: {
      include:
       // 设置naive-UI
        process.env.NODE_ENV === 'development'
          ? ['naive-ui','swiper', 'vueuc', 'date-fns-tz/esm/formatInTimeZone']
          : []
    },
  },
  modules: ['nuxt-swiper']
 
})
