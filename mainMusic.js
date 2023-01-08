import {HYEventStore} from "hy-event-store"

const mainMusicStore=new HYEventStore({
  state : {
    mainMusic:[]     //存储推荐歌曲
  },
})

export default mainMusicStore