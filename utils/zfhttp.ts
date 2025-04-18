/**
 * 基于 Nuxt.js useFetch 封装的 HTTP 请求工具
 * 参考: https://nuxt.zhcndoc.com/docs/api/composables/use-fetch
 */
import { hash } from 'ohash'
import { nav } from '@/utils/nav'
import { web } from '@/utils/web'
import type { ResComm } from '@/utils/models'
import type { UseFetchOptions } from '#app'
import { isRef, unref } from 'vue'

// 自定义请求选项类型
type ZfHttpOptions = Partial<Omit<UseFetchOptions<ResComm<any>>, 'headers'>> & {
  headers?: Record<string, any>; // 允许任何类型的键值对作为 headers
}

/**
 * 请求封装的核心函数
 * @param url 请求地址（不含基础路径）
 * @param options 请求选项
 * @returns 请求结果，包含数据、状态和错误信息
 */
const zfnet = async <T>(url: string, options: ZfHttpOptions = {}) => {
  // 获取运行时配置中的 API 主机地址
  const { public: { Api_ZfHost } } = useRuntimeConfig()
  const reqUrl = Api_ZfHost + url
  
  // 提取选项中的 headers，并与默认 headers 合并
  const { headers = {}, ...restOptions } = options
  
  // 获取 token（使用 token 状态管理）
  const token = useApiToken().value.token
  
  // 处理方法，确保能安全地调用 toLowerCase()
  const methodValue = isRef(options.method) ? unref(options.method) : options.method
  const methodLower = typeof methodValue === 'string' ? methodValue.toLowerCase() : undefined
  
  // 生成缓存键（基于 URL 和请求参数）
  // 注意：仅当请求是 GET 且需要缓存时才需要生成 key
  const shouldCache = !methodValue || methodLower === 'get'
  const cacheKey = shouldCache ? hash([url, options.params, options.query, options.body]) : undefined
  
  try {
    // 设置请求配置
    const fetchOptions: UseFetchOptions<ResComm<T>> = {
      ...restOptions,
      headers: { 
        ...headers,
        token: token || ''  // 添加 token 到请求头
      }
    }
    
    // 如果需要缓存，添加缓存键
    if (cacheKey) {
      fetchOptions.key = cacheKey
    }
    
    // 执行请求
    const response = await useFetch<ResComm<T>>(reqUrl, fetchOptions)
    const { data, error, status, refresh } = response
    
    // 处理请求结果
    if (data.value && data.value.code !== 200) {
      // 处理 token 失效的情况
      if (data.value.code === 401) {
        useApiToken().value.token = ''
        return nav.toWxLogin()
      }
      // 显示错误信息
      web.showGlobeError(data.value.msg || '请求失败', data.value.code)
    }
    
    // 返回完整的请求结果
    return response
  } catch (ex) {
    // 处理请求异常
    web.showGlobeError('服务器内部错误', 1500)
    console.error('请求异常:', ex)
    // 创建一个与 useFetch 返回结构相同的对象
    return {
      data: ref({ code: 500, msg: '服务器内部错误', data: null }),
      error: ref(ex),
      status: ref('error'),
      pending: ref(false),
      refresh: () => Promise.resolve()
    } as any
  }
}

/**
 * HTTP 请求工具类
 */
export default class zfHttp {
  /**
   * GET 请求
   * @param url 请求地址
   * @param params URL 查询参数
   * @param headers 请求头
   */
  async get<T>(url: string, params?: Record<string, any>, headers?: Record<string, any>) {
     return zfnet<T>(url, {
      method: 'get',
      params,
      headers
    })
    
    
  }
  
  /**
   * POST 请求
   * @param url 请求地址
   * @param body 请求体
   * @param headers 请求头
   */
  async post<T>(url: string, body?: Record<string, any> | FormData, headers?: Record<string, any>) {
    return zfnet<T>(url, {
      method: 'post',
      body,
      headers
    })
  }

  /**
   * OPTIONS 请求
   * @param url 请求地址
   * @param body 请求体
   * @param headers 请求头
   */
  async options<T>(url: string, body?: Record<string, any>, headers?: Record<string, any>) {
    return zfnet<T>(url, {
      method: 'options',
      body,
      headers
    })
  }

  /**
   * PUT 请求
   * @param url 请求地址
   * @param body 请求体
   * @param headers 请求头
   */
  async put<T>(url: string, body?: Record<string, any> | FormData, headers?: Record<string, any>) {
    return zfnet<T>(url, {
      method: 'put',
      body,
      headers
    })
  }
  
  /**
   * DELETE 请求
   * @param url 请求地址
   * @param params URL 查询参数
   * @param headers 请求头
   */
  async delete<T>(url: string, params?: Record<string, any>, headers?: Record<string, any>) {
    return zfnet<T>(url, {
      method: 'delete',
      params,
      headers
    })
  }
}
