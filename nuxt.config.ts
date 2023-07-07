// https://nuxt.com/docs/api/configuration/nuxt-config


export default defineNuxtConfig({
  devtools: { enabled: true },
  build: {
    transpile:
      process.env.NODE_ENV === 'production'
        ? [
            'naive-ui',
            'vueuc',
            '@css-render/vue3-ssr',
            '@juggle/resize-observer'
          ]
        : ['@juggle/resize-observer']
  },
  // nitro: {
  //   devProxy: {
  //       "/api": {
  //           // target: 'http://192.168.197.75:9001/',
  //           target: 'http://api.iqianba.cn',
  //           prependPath: true,
  //           changeOrigin: true,
  //           // pathRewrite: {
  //           //     '^/api':''
  //           // },
  //       }
  //     }
  // },
  vite: {
    optimizeDeps: {
      include:
        process.env.NODE_ENV === 'development'
          ? ['naive-ui', 'vueuc', 'date-fns-tz/esm/formatInTimeZone']
          : []
    },
    // server: {
    //   proxy: {
    //     '/api': {
    //       target: 'http://192.168.197.75:9001',  //这里是接口地址
    //       changeOrigin: true
    //     }
    //     // '^/api': {
    //     //   target: 'http://192.168.197.75:9001',  //这里是接口地址
    //     //   changeOrigin: true
    //     // },
    //   },
    // }

  }
})
