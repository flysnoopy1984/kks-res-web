// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  nitro: {
    preset: 'cloudflare-pages',
    minify: true,
    prerender: {
      crawlLinks: true,
      routes: [
        '/'
      ]
    }
  },
  app:{
    head:{
      "script": [
        {
          src: 'https://res.wx.qq.com/connect/zh_CN/htmledition/js/wxLogin.js',
        }
      ],
    },
  },

  plugins: [
    {
      src: '@/plugins/vue-lazyload',
      mode: 'client'
    }
  ],


  runtimeConfig: {
    apiSecret: 'zfWeb',
    public: {
      Api_ZfHost: process.env.NUXT_ZF_API_HOST || '/api',
      WxState: process.env.NUXT_WX_STATE 
    }
  },

  devtools: { enabled: true },

  modules: ['@nuxt/ui'],
  css: ['~/assets/css/nuxtUImain.css'],
  ui: {
    fonts: false,
    colorMode: false,
    theme: {
      transitions: false
    }
  },

  ssr: true,
  
  compatibilityDate: '2025-04-15',
})
