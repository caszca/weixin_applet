// components/playlist/playlist.js
const app=getApp()
Component({

  properties: {
    music:{
      type:Array,
      value:[]
    }
  },
  data:{
    screenWidth:app.globalData.screenWidth
  }
})
