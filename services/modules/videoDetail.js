import {Request} from "../request/index"
export const getMV=(id)=>{       //请求MV视频地址
  return Request.get({
    url:"/mv/url",
    data:{
      id
    }
  })
}

export const getMVInfo=(mvid)=>{   //获取MV信息
  return Request.get({
    url:"/mv/detail",
    data:{
      mvid
    }
  })
}

export const getRelated=(id)=>{
  return Request.get({
    url:"/related/allvideo",
    data:{
      id
    }
  })
}