import axios from "axios"
import globalConfig from "@/config"

let cancelUri = {}

const instance = axios.create({
  baseURL: globalConfig.host,
  timeout: 15000,
})

// 对请求做一些什么
instance.interceptors.request.use(
  (config) => {
    if (config.data.cancelToken) {
      for (let prop in cancelUri) {
        cancelUri[prop]()
      }
      // 对该接口添加取消事件, 注意：必须挂载到config上面去
      config.cancelToken = new axios.CancelToken((cancel) => {
        cancelUri[config.url] = cancel
      })
    }
    return config
  },
  (err) => Promise.reject(err)
)

instance.interceptors.response.use(
  (response) => {
    // 接口回来删除该接口
    if (response.config.cancelToken) {
      delete cancelUri[response.config.url]
    }
    return response
  },
  (err) => Promise.reject(err)
)

// 对响应做些什么
export const getData = (url, data = {}, method = "get") => {
  method = method.toLowerCase()
  let config = {
    url,
    data,
    method,
  }
  if (method === "get") {
    config.params = data
  }
  return instance(config)
}
