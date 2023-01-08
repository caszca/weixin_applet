// components/MusicTtitle/musicTitle.js
Component({
  properties:{
    title:{
      type:String,
      value:""
    }
  },
  methods:{
    clickMore:function(){
    const title=this.properties.title==="推荐歌单"?"流行":this.properties.title.slice(0,2)
      this.triggerEvent("clickMore", title)
    }
  }
})
