import VueLazyload from 'vue-lazyload'

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(VueLazyload,{
        preLoad: 1.3,
        //  error: '/assets/img/error.png',
        // loading: '/assets/img/loading.png',
        attempt: 1
    })
  })