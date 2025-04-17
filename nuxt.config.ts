// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  app:{
    head:{
      "script": [
        {
          src: 'http://res.wx.qq.com/connect/zh_CN/htmledition/js/wxLogin.js',
        }
      ],
    },
  },

  plugins: [
    {
      src: '@/plugins/vue-lazyload',
      ssr: false
    },
    '@/plugins/resize-observer-fix',
    {
      src: '@/plugins/resize-observer',
      ssr: false
    }
  ],

  css:[
    '@/assets/css/main.css'
  ],

  runtimeConfig: {
    apiSecret: 'zfWeb',
    public: {
      Api_ZfHost: process.env.NUXT_ZF_API_HOST || '/api',
      WxState: process.env.NUXT_WX_STATE 
    }
  },

  devtools: { enabled: true },

  modules: ['nuxtjs-naive-ui'],
  
  build: {
    transpile: ['naive-ui']
  },

  vite: {
    define: {
      'process.env.VSCODE_TEXTMATE_DEBUG': 'false'
    },
    optimizeDeps: {
      include: ['naive-ui', '@css-render/vue3-ssr']
    },
    ssr: {
      noExternal: [],
    }
  },

  ssr: true,
  
  compatibilityDate: '2025-04-15',
})
