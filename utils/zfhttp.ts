// 参考 https://yezipi.net/article/detail/10095
import { hash } from 'ohash'
import {ResComm} from '@/utils/models'

/**
 * api请求封装
 * @param { String } url 请求地址
 * @param { Object } options useFtech第二个参数
 * @param { Object } headers 自定义header头, 单独设置headers区分请求参数，也好设置类型
 */
const zfnet = async <T>(url:String,options?:any,headers?:any)=>{

    const { public: { Api_ZfHost } } = useRuntimeConfig()
    const reqUrl = Api_ZfHost + url;
   // console.log("reqUrl:",reqUrl);
   // 设置key
    const key = hash(options + url)
    // 可以设置默认headers例如，token的获取最好用useState返回一个useCookie

    const customHeaders = { token:  useApiToken().value.token, ...headers }

    const op = { ...options, key, headers: customHeaders };

  //  console.log("customHeaders:",customHeaders);
    let result:ResComm<T> ={
      code:601,
      msg: "请求错误",
      data :undefined
    };
    try {
    
      const { data, error } = await useFetch(reqUrl,op);
      if(error.value){
        web.showGlobeError(error.value.data.error,error.value.statusCode);
      }
      else{
        result = data.value as ResComm<T>;

        if(result.code !== 200) {
       // 处理token失效的情况
        if (result.code == 401) {
          useApiToken().value.token = '';
          return nav.toWxLogin();
         }

          web.showGlobeError(result.msg,result.code);
        }
      
      }
  
    }
    catch (ex) {
      web.showGlobeError("服务器内部错误",1500);
    }
    return result;
  } 


export default class zfHttp {

    async get<T>(url: string, body?: any, headers?: any) {
      return zfnet<T>(url, { method: 'get', ...body }, headers)
    }
  
    async post<T>(url: string, body?: any, headers?: any) {
      return zfnet<T>(url, { method: 'post', ...body }, headers)
    }

    async options<T>(url: string, body?: any, headers?: any) {
      return zfnet<T>(url, { method: 'options', ...body }, headers)
    }

    async put<T>(url: string, body?: any, headers?: any) {
      return zfnet<T>(url, { method: 'put', ...body }, headers)
    }
  
    async delete<T>(url: string, body?: any, headers?: any) {
      return zfnet<T>(url, { method: 'delete',...body }, headers)
    }
  }
