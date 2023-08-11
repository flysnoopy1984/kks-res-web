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
  // experimental: {
  //   componentIslands: true
  // },

  runtimeConfig: {
    // Private keys are only available on the server
    apiSecret: 'zfWeb',

    // Public keys that are exposed to the client
    public: {
      Api_ZfHost: process.env.NUXT_ZF_API_HOST || '/api',
      WxState: process.env.NUXT_WX_STATE 
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
          ? ['naive-ui', 'vueuc', 'date-fns-tz/esm/formatInTimeZone']
          : []
    },
  },
  // modules: ['nuxt-swiper'],
  
 
})
