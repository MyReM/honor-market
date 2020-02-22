<template>
  <div id="page">
    <header>
      <div id="tab-bar">
        <ul class="fir">
          <li><a href="#">首页</a></li>
          <li><a href="#">华为官网</a></li>
          <li><a href="#">荣耀官网</a></li>
          <li><a href="#">花粉俱乐部</a></li>
          <li><a href="#">V码(优购码)</a></li>
          <li><a href="#">企业购</a></li>
          <li><a href="#">Selection Region</a></li>
        </ul>
        <ul class="sec">
          <li><a href="#">请登录</a>&nbsp;&nbsp;&nbsp;<a href="#">注册</a></li>
          <li><a href="#">我的订单</a></li>
          <li><a href="#">客户服务</a></li>
          <li><a href="#">网站导航</a></li>
          <li><a href="#">手机版</a></li>
          <li><a href="#">购物车</a></li>
        </ul>
      </div>
    </header>
    <div id="second-tab">
      <div id="orther-search">
        <div class="left">
          <div class="logo">
            <a href="#">
              <img src="../../assets/vmall.png"/>
            </a>
            <em></em>
            <a href="#">
              <img src="../../assets/honor.png"/>
              </a>
          </div>
          <div class="naver">
            <ul>
              <li @mouseover="showTabBar"  @mouseleave="isHidTabBar">
                <a href=#>荣耀手机</a>
              </li>
              <li @mouseover="showTabBar"  @mouseleave="isHidTabBar">
                <a href=#>笔记本&平板</a>
              </li>
              <li @mouseover="showTabBar"  @mouseleave="isHidTabBar">
                <a href=#>潮流穿戴</a>
              </li>
              <li @mouseover="showTabBar"  @mouseleave="isHidTabBar">
                <a href=#>智能家居</a>
              </li>
              <li @mouseover="showTabBar"  @mouseleave="isHidTabBar">
                <a href=#>炫彩配件</a>
              </li>
            </ul>
          </div>
          <div class="naver-sub" :class="display" @mouseleave="hidTabBar" @mouseover="changeIsShow">
            <div class="naver-sub-contain">
              <div class="honor-nav">
                <ul>
                  <li><a href="#">全部荣耀手机</a></li>
                  <li><a href="#">荣耀V系列</a></li>
                  <li><a href="#">荣耀HONOR系列</a></li>
                  <li><a href="#">荣耀X系列</a></li>
                  <li><a href="#">荣耀Play系列</a></li>
                </ul>
              </div>
              <div class="honor-phone-msg">
                <ul>
                  <li>
                    <a href="#">
                      <p><img src="../../assets/honor-phone/428_428_FF89E07076590562DF095FCD47FD0C824121FD0D89A445CEmp.png"/></p>
                      <div class="grid-title">荣耀V30</div>
                      <p class="price">￥2999 起</p>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <p><img src="../../assets/honor-phone/428_428_98C86546D993926AA64531BD16224A1CB286A8D663EF4F4Emp.png"/></p>
                      <div class="grid-title">荣耀V30 PRO</div>
                      <p class="price">¥3699 起</p>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <p><img src="../../assets/honor-phone/428_428_1558245073712mp.png"/></p>
                      <div class="grid-title">荣耀20</div>
                      <p class="price">¥2099 起</p>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <p><img src="../../assets/honor-phone/428_428_1563876645993mp.png"/></p>
                      <div class="grid-title">荣耀20 PRO</div>
                      <p class="price">¥2499 起</p>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <p><img src="../../assets/honor-phone/428_428_922417A5F3E6B30817A34691A7A91A900B04849591A72113mp.png"/></p>
                      <div class="grid-title">荣耀Play3</div>
                      <p class="price">¥899 起</p>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <p><img src="../../assets/honor-phone/428_428_3EC3DFA76A9B931DC9913C17F741517CD6B80F802BA27A03mp.png"/></p>
                      <div class="grid-title">荣耀20S</div>
                      <p class="price">¥1499 起</p>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <p><img src="../../assets/honor-phone/428_428_37C267F23F1D9D8B7DBF9202529F8CFBB5AEACA87BCFF900mp.png"/></p>
                      <div class="grid-title">荣耀20青春版</div>
                      <p class="price">¥999 起</p>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <p><img src="../../assets/honor-phone/428_428_1563503515663mp.png"/></p>
                      <div class="grid-title">荣耀9X</div>
                      <p class="price">¥1099 起</p>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div class="right">
          <input type="text" class="text"/>
        </div>
      </div>
    </div>
    <slide-img/>
    <div id="bd">
      <div class="zai-jia">
        <a href="#">
          <img src="../../assets/img/9b29a2cb-a2f1-40f1-a2db-8c091f16493c.jpg"/>
        </a>
      </div>
    </div>
    <footer>
    </footer>
  </div>
</template>
<script>
import SlideImg from './slider.vue'
export default {
  components: {
    SlideImg
  },
  name: 'page',
  data () {
    return {
      display: 'none',
      isShow: true
    }
  },
  methods: {
    // 鼠标悬停在导航栏时显示内容
    showTabBar: function () {
      this.display = 'block'
      this.isShow = true
    },
    // 鼠标离开导航栏时隐藏内容
    hidTabBar: function () {
      this.display = 'none'
      this.isShow = false
    },
    // 判断鼠标是否在导航栏或者内容上
    changeIsShow: function () {
      this.isShow = true
    },
    // 判断鼠标是否离开内容或者导航栏
    isHidTabBar: function () {
      let _this = this
      this.isShow = false
      setTimeout(function () {
        if (!_this.isShow) {
          _this.display = 'none'
          this.isShow = false
        }
      }, 200)
    }
  }
}
</script>
<style scoped>
  @import "../../assets/css/page.css"
</style>
