import { hash } from 'ohash'

// 后端返回的数据类型
export interface ResComm<T> {
    data: T
    code?: string
    msg?: string
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

    // 设置key
    const key = hash(options + url)

    // 可以设置默认headers例如，token的获取最好用useState返回一个useCookie
    const customHeaders = { token: "useToken().value", ...headers }

    const { data, error } = await useFetch(reqUrl, { ...options, key, headers: customHeaders })
    
    const result = data.value as ResComm<any>
    
    console.log("result data:",result)

}
// export default class Http {

//     get(url: string, params?: any, headers?: any) {
//       return fetch(url, { method: 'get', params }, headers)
//     }
  
//     post(url: string, body?: any, headers?: any) {
//       return fetch(url, { method: 'post', body }, headers)
//     }
  
//     put(url: string, body?: any, headers?: any) {
//       return fetch(url, { method: 'put', body }, headers)
//     }
  
//     delete(url: string, body?: any, headers?: any) {
//       return fetch(url, { method: 'delete', body }, headers)
//     }
//   }