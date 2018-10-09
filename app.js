
const wechat = require('./utils/wechat.js')

const baidu = require('./utils/baidu.js')

const douban = require('./utils/douban.js')

App({
  //整个应用中的共享数据
  data: {
       currentCity: '北京'
   },
  
  wechat: wechat,
  baidu: baidu,
  douban: douban,
  
  onLaunch () {
     wechat
        .getLocation()
        .then(res => {
           const { latitude, longitude} = res
           return baidu.getCityName(latitude, longitude)
        })
        .then(name => {
            this.data.currentCity = name.replace('市', '')
            console.log(`currentCity : ${this.data.currentCity}`)
        })
        .catch(err => {
            this.data.currentCity = '北京'
            console.error(err)
        })
  }

})