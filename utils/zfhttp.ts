// 参考 https://yezipi.net/article/detail/10095
import { hash } from 'ohash'

// 后端返回的数据类型
interface ResComm<T> {
  data?: T
  code: string
  msg: string
}



/**
 * api请求封装
 * @param { String } url 请求地址
 * @param { Object } options useFtech第二个参数
 * @param { Object } headers 自定义header头, 单独设置headers区分请求参数，也好设置类型
 */
const zfnet = async (url:String,options?:any,headers?:any)=>{
    // const config= useRuntimeConfig()
    // config.public.Api_ZfHost
    const { public: { Api_ZfHost } } = useRuntimeConfig()
    const reqUrl = Api_ZfHost + url;
debugger
console.log("params:",...options);
    // 设置key
    const key = hash(options + url)

    // 可以设置默认headers例如，token的获取最好用useState返回一个useCookie
    const customHeaders = { token: useApiToken().value, ...headers }
    try {

     
      const { data, error } = await useFetch(reqUrl, { ...options, key, headers: customHeaders })
      const result = data.value as ResComm<any>
    
      console.log("result data:",result)
      if (error.value || !result || (result && result.code !== "200")) {
        //  // 处理token失效的情况
        // if (result.code === "401") {
        //   // token.value = ''
        //   await navigateTo('/login')
        // }
        // // 在客户端的时候抛出错误结果方便捕捉
        // if (process.client) {
        //   return Promise.reject(result)
        // }
        // 在服务端就直接渲染错误页面，需要设置一个error.vue接收错误信息
        throw createError({
          statusCode: 500,
          statusMessage: reqUrl,
          message: error.value?.message || '服务器内部错误',
        })
      }
      return result.data;

    } 
    catch (ex) {
      throw createError({
        statusCode: 500,
        statusMessage: reqUrl,
        message: '网络错误',
      })
    }
   
    
    

  

}
export default class zfHttp {

    get(url: string, params?: any, headers?: any) {
      return zfnet(url, { method: 'get', params }, headers)
    }
  
    post(url: string, body?: any, headers?: any) {
      return zfnet(url, { method: 'post', body }, headers)
    }

    options(url: string, body?: any, headers?: any) {
      return zfnet(url, { method: 'options', body }, headers)
    }

  
    put(url: string, body?: any, headers?: any) {
      return zfnet(url, { method: 'put', body }, headers)
    }

  
    delete(url: string, body?: any, headers?: any) {
      return zfnet(url, { method: 'delete', body }, headers)
    }
  }
