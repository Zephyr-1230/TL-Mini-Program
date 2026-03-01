// index.js
// 获取应用实例
const app = getApp()
let interval1
let interval2
Page({
  data: {
    serviceData: null,
    titleArray: [],
    move: 0,
    searchBottom: 0,
    tabHeight: 0,
    totalHeight: 0,
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName') // 如需尝试获取用户信息可改为false
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad() {
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
    let serviceData = {}
    let serviceArray = []
    let innerData1 = new Object()
    innerData1.color = "#fff"
    //3列4行
    innerData1.value = ["张三 刚刚访问","李四 刚刚访问", "王五 1分钟前访问","赵六 1分钟前访问", "刘七 30分钟前访问","陈八 30分钟前访问","杨九 30分钟前访问","黄十 30分钟前访问", "吴一 1小时前访问", "周二 1小时前访问", "欧三 1小时前访问"]
    serviceArray.push(innerData1)
    serviceData.array = serviceArray
    console.log(serviceData)
    //以上模拟服务端数据
    let lineArray = []
    let titleArray = []

    let count = serviceData.array[0].value.length
    let array = serviceData.array
    let itemColorArray = []
    array.forEach(e => {
      itemColorArray.push(e.color)
    })
    let colmnIndex = 0
    for (let i = 0; i < count; i++) {
      let itemArray = []
      array.forEach(e => {
        let itemData = {}
        itemData.value = e.value[i]
        itemData.color = itemColorArray[colmnIndex]
        itemArray.push(itemData)
        colmnIndex++
      })
      colmnIndex = 0
      lineArray.push(itemArray)
    }
    this.setData({
      lineArray,
      titleArray,
    })
    if (lineArray.length > 3) {
      //当行数大于5的时候滚动轮播
      this.setData({
        totalHeight: 3 * 38
      })
      let that = this
      interval1 = setInterval(function () {
        that.setData({
          move: that.data.move + 1,
        })
      }, 50)
      interval2 = setInterval(function () {
        let detail = []
        for (let i = 1; i < that.data.lineArray.length; i++) {
          detail.push(that.data.lineArray[i])
        }
        detail.push(that.data.lineArray[0])
        that.setData({
          lineArray: detail,
          move: 0,
        })

      }, 1250)
      //684/18 = 38(一行的高度)
    } else {
      this.setData({
        totalHeight: lineArray.length * 38+38
      })
    }
  },
  onUnload: function () {
    clearInterval(interval1)
    clearInterval(interval2)
  },
  clickfuwu(e){
    wx.navigateTo({
      url: '/pages/fuwu/fuwu?id='+e.currentTarget.dataset.num,
    })
  },
  clickdongtai(e){
    wx.navigateTo({
      url: '/pages/dongtai/details/details?id='+e.currentTarget.dataset.num,
    })
  },
  dongtaiall(){
    wx.navigateTo({
      url: '/pages/dongtai/dongtai',
    })
  },
  handleContact (e) {
    console.log(e.detail.path)
    console.log(e.detail.query)
  },
  copyText(e) {
    let key = e.currentTarget.dataset.key;
    wx.makePhoneCall({
      phoneNumber: key, //这里是电话号码[假的]可以调用自己的数据this.data.xxx
      success: function () {
        console.log("拨打电话成功！")
      },
      fail: function () {
        console.log("拨打电话失败！")
      }
    })
    // wx.setClipboardData({ //设置系统剪贴板的内容
    //   data: key,
    //   success(res) {
    //     //console.log(res, key);
    //     wx.getClipboardData({ // 获取系统剪贴板的内容
    //       success(res) {
    //         wx.showToast({
    //           title: '复制成功',
    //         })
    //       }
    //     })
    //   }
    // })
  },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  getUserInfo(e) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    console.log(e)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  onShareAppMessage: function (options) {//分享
    return {
        title: 'T——Nexa工作室',
        //imageUrl: '../../images/share.png',
        //path: `packageA/pages/bossDet/bossDet?id=${this.data.id}`,
        success: function (res) {
            console.log(res,'成功')
            console.info(res + '成功');
            wx.showToast({
                title: '分享成功',
            })
            // 转发成功
        },
        fail: function (res) {
            console.log(res + '失败');
            // 转发失败
        },
        complete: function (res) {
            // 不管成功失败都会执行
            console.log(res,'成功或失败')
            wx.showToast({
                title: '成功或失败',
            })
        }
    }
  },
     /*分享朋友圈 */
     onShareTimeline: function() {
        return {
          title: 'T——Nexa工作室',
          //query: 'goodsId=' +this.data.goodsInfo.id,
          //imageUrl: '../../images/share.png',
        }
      },
})
