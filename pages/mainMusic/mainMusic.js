// pages/mainMusic/mainMusic.js
//轮播图主要问题：swiper固定宽高，图片不能恰好填满整个swiper，导致下方的指示点位置不对
//所以我们采取方案是在图片渲染结束后，获取其宽高赋值给swiper，在onReady中实现
import getNodeInfo from "../../utils/getNodeInfo"
import {getSwiper,getMusicInfo,getPlaylist} from "../../services/modules/mainMusic"
import { throttle } from "underscore"
import mainMusicStore from "../../Stores/mainMusic"
const getNodeInfoThrottle=throttle(getNodeInfo,100)
Page({
  data:{
    banners:[],
    ImgHeight:0,
    id:3778678,   
    musicMenu:[], //推荐歌曲
    recPlaylist:[],   //推荐歌单(流行歌单)
    chinaPlaylist:[],  //华语歌单
    westernPlaylist:[]  //欧美歌单
  },
  onLoad(options){
    this.fitchSwiper()
    this.fitchMusicInfo(this.data.id)
    this.fitchPlaylist()
    this.fitchchinaPlaylist()
    this.fitchWesternPlaylist()
  },
  async loadImg(){   //页面渲染后，获取图片的宽高,代码在onReady生命周期里无效？？？
    
    const data=await getNodeInfoThrottle(".swiperImg")
    this.setData({
      ImgHeight:data.height
    }
    )
  },
  
  serach(){
    wx.navigateTo({
      url: '/pages/musicSearch/musicSearch',
    })
  },
  async fitchSwiper(){   //获取轮播图数据
    const {data:{banners}}=await getSwiper()
    this.setData({
      banners:banners
    })
  },

  async fitchMusicInfo(id){   //获取推荐歌曲
    const {data:{playlist:{tracks}}}=await getMusicInfo(id)
    mainMusicStore.setState("mainMusic",tracks)
    mainMusicStore.onState("mainMusic",
    (value)=>{
      this.setData({
        musicMenu:value.slice(0,6)
      })
    })
  },

  async fitchPlaylist(){     //获取推荐(流行)歌单
    const {data:{playlists}}=await getPlaylist("流行")
    this.setData({
      recPlaylist:playlists
    })
  },

  async fitchchinaPlaylist(){     //获取华语歌单
    const {data:{playlists}}=await getPlaylist("华语")
    this.setData({
      chinaPlaylist:playlists
    })
  },

  async fitchWesternPlaylist(){     //获取欧美歌单
    const {data:{playlists}}=await getPlaylist("欧美")
    this.setData({
      westernPlaylist:playlists
    })
  },
  

  //组件点击更多，组件与父的通信
  clickMore(event){
    console.log(event);
    wx.navigateTo({
      url: `/pages/playlistDetail/playlistDetail?title=${event.detail}`,
    })
  }
})