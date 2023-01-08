//对请求进行封装
//类的封装
class HyRequest{
  constructor(BaseURL){
   this.BaseURL=BaseURL
  }
  request(config){
    const {url}=config
   return new Promise((resolve,reject)=>{
     wx.request({
       ...config,
       url:this.BaseURL+url,
       success:(res)=>{
         resolve(res)
       },
       fail:(err)=>{
         reject(err)
       }
     })
   })
  }

  get(config){
    return this.request({...config,method:"GET"})
  }

  post(config){
    return this.request({...config,method:"POST"})
  }

}

export const Request=new HyRequest("http://codercba.com:9002")
