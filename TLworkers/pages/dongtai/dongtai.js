// pages/dongtai/dongtai.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[{title:'《从日均超时 2000 次到秒级响应：一个老旧 ERP 系统的高可用改造实录》',image:'/images/dongtai.png',date:'2026年1月17日',content:'三年前，公司的核心 ERP 系统日均接口超时高达 2000 次以上，高峰时段响应时间长达 30 秒...'},
  {title:'《从 CRUD 到系统架构师：这 3 个思维模型彻底改变了我的编码逻辑》',image:'/images/dongtai.png',date:'2026年1月17日',content:'在经历了多年“增删改查”的重复工作后，我一度陷入技术成长的瓶颈期...'},
  {title:'《2025 年技术雷达：被过度炒作的 AI 编程，真能取代中级开发者吗？》',image:'/images/dongtai.png',date:'2026年1月17日',content:'2025年，以ChatGPT、Grok、Claude为代表的AI编码助手已渗透进半数技术团队...'},
  {title:'《云原生下半场：为什么说“FinOps 成本治理”正在成为工程师的新必修课？》',image:'/images/dongtai.png',date:'2026年1月17日',content:'当云原生基础设施成为默认选项，企业技术团队在享受弹性与敏捷红利的同时...'},
  {title:'《别再用 Print 调试了！这 5 个现代 Debug 技巧，让你的排查效率提升 300%》',image:'/images/dongtai.png',date:'2026年1月17日',content:'在复杂的微服务、异步和云原生环境中，依赖 print或 console.log调试如同用盲杖探路...'},
  {title:'《API 设计中的“隐形坑”：为什么你的接口总是被吐槽难用？》',image:'/images/dongtai.png',date:'2026年1月17日',content:'一个后端开发者自认为逻辑清晰、功能完备的接口，却让前端、移动端...'}]
  },
  clickdongtai(e){
    wx.navigateTo({
      url: '/pages/dongtai/details/details?id='+e.currentTarget.dataset.num,
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

  }
})