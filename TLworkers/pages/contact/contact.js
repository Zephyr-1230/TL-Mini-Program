// pages/contact/contact.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

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
  ditu(){
    wx.openLocation({
      longitude: 32.082338,//纬度     必填
      latitude: 118.640439,//经度     必填
      address: '南京工业',//地址的详细说明
      name:'南京'//位置名
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

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