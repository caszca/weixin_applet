//获取WXML界面节点的数据，例如长宽高
//underscore库进行节流

const getNodeInfo=(selector)=>{
 
  return new Promise((resolve,reject)=>{
    const query=wx.createSelectorQuery();
    query.select(selector).boundingClientRect(res=>{
      //console.log(res);  //原本这里应该执行8次，现在降为2次，还有一个属性可控制最后一次不执行
     resolve(res)
    })
    query.exec()
  })
}

export default getNodeInfo