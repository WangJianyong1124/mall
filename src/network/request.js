// 封装网络请求

// 导入axios
import axios from "axios"

// 声明request方法并导出
export function request(config) {
//  创建axios实例
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:7878/api/m5',
    timeout: 5000
  })

//  使用拦截器
//   请求拦截
  instance.interceptors.request.use(requestConfig => {
    return requestConfig
  }, err => {
    // console.log(err);
  })

//  响应拦截
  instance.interceptors.response.use(responseConfig => {
    return responseConfig
  })

//  将创建的实例暴露在外面
  return instance(config)
}


