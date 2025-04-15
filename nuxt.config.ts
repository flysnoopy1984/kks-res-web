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
    }
  ],

  css:[
    '@/assets/css/main.css'
  ],

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
    transpile: [
      'naive-ui',
      'vueuc',
      '@css-render/vue3-ssr',
      '@juggle/resize-observer',
      /^@css-render\/.*/,
      'date-fns',
      'date-fns-tz'
    ]
  },

  vite: {
    define: {
      'process.env.VSCODE_TEXTMATE_DEBUG': 'false'
    },
    optimizeDeps: {
      include: [
        '@css-render/vue3-ssr',
        'naive-ui',
        'vueuc',
        'date-fns-tz/formatInTimeZone',
        '@juggle/resize-observer',
        'date-fns',
        'date-fns-tz'
      ],
      exclude: ['date-fns/_lib/cloneObject']
    }
  },

  ssr: false,
  
  compatibilityDate: '2025-04-15',
})
