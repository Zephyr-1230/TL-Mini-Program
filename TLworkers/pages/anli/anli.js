// pages/anli/anli.js
let interval1
let interval2
Page({

  /**
   * 页面的初始数据
   */
  data: {
    serviceData: null,
    titleArray: [],
    move: 0,
    searchBottom: 0,
    tabHeight: 0,
    totalHeight: 0,
    flag: 0,
    currentTab: 0,
    curNav:1,
    curIndex:0,
    youxiu:[
      {
        "title": "智慧生活科技有限公司",
        "content": "承接并完成'城市便捷停车'APP的全程开发与运营支持项目。"
      },
      {
        "title": "省立医院",
        "content": "为其微信公众号升级并开发了新一代预约挂号小程序。"
      },
      {
        "title": "新知教育集团",
        "content": "设计并构建了在线直播互动教学平台系统。"
      },
      {
        "title": "高新区管委会",
        "content": "交付智慧园区物联网数据可视化管理系统。"
      },
      {
        "title": "银河商业银行数字金融部",
        "content": "提供手机银行APP用户体验(UX)全链路优化服务。"
      },
      {
        "title": "极速物流股份有限公司",
        "content": "开发全国干线物流智能调度系统核心算法模块。"
      },
      {
        "title": "文旅局",
        "content": "打造'一部手机游本地'智慧旅游小程序及综合管理中台。"
      },
      {
        "title": "美味优选食品有限公司",
        "content": "定制开发社区团购供应链管理SaaS系统。"
      },
      {
        "title": "创投基金管理有限公司",
        "content": "完成共享办公空间智能门禁与管理系统的集成实施。"
      },
      {
        "title": "市大数据管理中心",
        "content": "建设政务云数据安全合规审计平台。"
      },
      {
        "title": "国网某省电力公司信息通信公司",
        "content": "承接其年度营销渠道数字化整合项目。"
      },
      {
        "title": "康泰国际疗养中心",
        "content": "负责会员健康档案移动端管理系统的维护与接口开发。"
      }
    ],
    quanbu:[]
  },
  switchNav: function(e) {
    var page = this;
    var id = e.target.id;
    if (this.data.currentTab == id) {
      return false;
    } else {
      page.setData({
        currentTab: id
      });
    }
    page.setData({
      flag: id
    });
  },
  switchRightTab:function(e){
    let id = e.target.dataset.id,index=e.target.dataset.index;
    this.setData({
      curNav:id,
      curIndex:index
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    let serviceData = {}
    let serviceArray = []
    let innerData1 = new Object()
    innerData1.color = "#fff"
    //3列4行
    innerData1.value = ["感谢xxx公司的五星好评","感谢xxx公司的五星好评","感谢xxx公司的五星好评","感谢xxx公司的五星好评","感谢xxx公司的五星好评","感谢xxx公司的五星好评","感谢xxx公司的五星好评"]
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
        totalHeight: 3 * 40
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

      }, 2000)
      //684/18 = 38(一行的高度)
    } else {
      this.setData({
        totalHeight: lineArray.length * 40+40
      })
    }
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
    clearInterval(interval1)
    clearInterval(interval2)
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

  }
})