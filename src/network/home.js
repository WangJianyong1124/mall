/*
  这里封装首页相关的数据请求方法
  在这里封装进行统一管理 降低耦合
*/

// 引入之前封装好的request模块
import {request} from "@/network/request";

// 封装一个获取首页信息的方法
export function getHomeMultidata() {
  return request({
    url: '/home/multidata'
  })
}


/*
封装一个接收商品信息的方法
  type: 接收商品的类型(流行、新款、精选)

*/
export function getHomeGoods(type, page) {
  return request({
    url: '/home/data',
    params: {
      type,
      page
    }
  })
}

