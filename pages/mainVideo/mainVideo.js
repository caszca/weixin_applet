// pages/mainVideo/mainVideo.js
import {getVideoInfo} from "../../services/modules/video"

Page({
  data:{
    videoList:[],
    limit:10
  },
  onLoad(){
   this.fitchVideoInfo()
  },

  onReachBottom(){       //滚动到底部刷新数据
    this.fitchVideoInfo(this.data.limit,this.data.videoList.length)
  },

  async fitchVideoInfo(limit,offset){  //封装请求
    
    const {data:{data}}=await getVideoInfo(limit,offset)
    if(!data)return
    const list=this.data.videoList
    
    list.push(...data) //...通过迭代,data不能为空
    this.setData({
      videoList:list     
     // videoList:this.data.videoList.push(...data)  无法响应式更新视图，可能是前后相等所以未noteify
    })
  },

  onPullDownRefresh(){     //监听下拉刷新
    this.setData({
      videoList:[]
    })
    this.fitchVideoInfo().then(
      ()=>{
        wx.stopPullDownRefresh()
        wx.showToast({
          title: '刷新成功',
          duration: 1000,
        })
      }
    )

  },

  goToDetail(event){      //点击跳转到详情页
    wx.navigateTo({
      url: `/pages/videoDetail/videoDetail?id=${event.currentTarget.dataset.id}`,
  
    })
  }

  
})