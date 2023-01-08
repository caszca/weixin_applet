import {Request} from "../request/index"

export const getSwiper=()=>{        //获取轮播图数据
  return Request.get({
    url:"/banner"
  })
}

export const getMusicInfo=(id)=>{   //获取推荐歌曲里的全部歌曲
  return Request.get({
    url:`/playlist/detail?id=${id}`
  })
}


export const getPlaylist=(cat="全部",limit=6,offset=0)=>{   //获取歌单，可以根据cat获取不同类别的歌单
  return Request.get({
    url:`/top/playlist`,
    data:{
      cat,
      limit,
      offset
    }
  })
}