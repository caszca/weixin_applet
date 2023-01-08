//对video视频进行请求
import {Request} from '../request/index'

export const getVideoInfo=(limit=20,offset=0)=>{
  return Request.get({
    url:"/top/mv",
    data:{
      limit,
      offset
    }
  })
}