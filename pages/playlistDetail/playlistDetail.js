// pages/playlistDetail/playlistDetail.js
import {getPlaylist} from "../../services/modules/mainMusic"
Page({
  data:{
    title:"",
    playlist:[],
    limit:20
  },
  onLoad(options){
    this.setData({
      title:options.title
    })
    this.fitchPlaylist(this.data.title,this.data.limit)
},
//到达底部加载更多
  onReachBottom(){
    this.fitchPlaylist(this.data.title,this.data.limit)
  },
  //检测下拉刷新
  onPullDownRefresh(){
    this.setData({
      playlist:[]
    })
    this.fitchPlaylist(this.data.title,this.data.limit).then(
      ()=>{
      wx.stopPullDownRefresh()
      wx.showToast({
        title: '刷新成功',
        duration: 1000,
      })
      }
    )
  },

  async fitchPlaylist(title,limit){  
    const {data:{playlists}}=await getPlaylist(title,limit,this.data.playlist.length)
    const playlist=[...this.data.playlist,...playlists]
    this.setData({
      playlist
    })
    
  }
})