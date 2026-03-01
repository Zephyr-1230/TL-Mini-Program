// pages/fuwu/fuwu.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:0,
    list:[{image:"/images/fw.png",count:[ "xx网站 / xx网站 / xx网站 / xx网站",
                                          "xx网站 / xx网站 / xx网站 / xx网站",
                                          "xx网站 / xx网站 / xx网站 / xx网站",
                                          "xx网站 / xx网站 / xx网站 / xx网站",
                                          "xx网站 / xx网站 / xx网站 / xx网站"]},
    {image:"/images/fw-1.png",count:[     "xx小程序 / xx小程序 / xx小程序 / xx小程序",
                                          "xx小程序 / xx小程序 / xx小程序 / xx小程序",
                                          "xx小程序 / xx小程序 / xx小程序 / xx小程序",
                                          "xx小程序 / xx小程序 / xx小程序 / xx小程序",
                                          "xx小程序 / xx小程序 / xx小程序 / xx小程序"]},
    {image:"/images/fw-2.png",count:[     "xxAPP / xxAPP / xxAPP / xxAPP",
                                          "xxAPP / xxAPP / xxAPP / xxAPP",
                                          "xxAPP / xxAPP / xxAPP / xxAPP",
                                          "xxAPP / xxAPP / xxAPP / xxAPP",
                                          "xxAPP / xxAPP / xxAPP / xxAPP"]}]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    if(options!=null)
    this.setData({
      id : options.id
    })
    
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
        title: 'T-Nexa工作室',
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
          title: 'T-Nexa工作室',
          //query: 'goodsId=' +this.data.goodsInfo.id,
          //imageUrl: '../../images/share.png',
        }
      },
})