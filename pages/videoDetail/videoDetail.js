// pages/videoDetail/videoDetail.js
import {getMV,getMVInfo,getRelated} from "../../services/modules/videoDetail"
Page({

  data:{
    id:0,
    mvURL:"",
    mvInfo:{},
    relatedInfo:[]
  },
  onLoad(options){
    this.setData({
      id:Number(options.id)
    })

    this.fitchMV(this.data.id)
    this.fitchMVInfo(this.data.id)
    this.fitchRelated(this.data.id)
  },

 async fitchMV(id){
   const {data:{data}}= await getMV(id)
   this.setData({
    mvURL:data.url
   })
  },

  async fitchMVInfo(mvid){
    const {data:{data}}=await getMVInfo(mvid)
    
    this.setData({
      mvInfo:data
    })
  },

  async fitchRelated(id){
    const {data:{data}}=await getRelated(id)
    this.setData({
      relatedInfo:data
    })
  }


  
})