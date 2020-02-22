<template>
  <div class="hello">
    <div id="header-scoller" @mouseenter="hoverSlide" @mouseleave="leaveSlide">
      <ul class="slider">
          <li style="position:relative;">
            <transition :name="tn">
              <a href="#">
                <img :src="src" :key="src"/>
              </a>
            </transition>
              <!-- <img :src="src" :key="src"/> -->
          </li>
      </ul>
      <ul class="items" ref="slider">
        <li v-for="i in ns" :key="i" @mouseenter="mouseEnter(i)"></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      n: 1,
      tn: 'fade',
      intervals: '',
      ns: [1, 2, 3, 4, 5, 6],
      sliderHover: '',
      slider: ''
    }
  },
  computed: {
    src () {
      return require('../../assets/headerScoller/' + this.n + '.jpg')
    }
  },
  mounted () {
    // 获取slide数组并保存到data中复用
    this.slider = this.$refs.slider.getElementsByTagName('li')
    // 页面加载完设置第一个被选中的slide样式
    this.slider[0].className = 'sliderChanged'
    // 设置轮播图定时器
    this.intervals = setInterval(this.sliderWork, 4500)
  },
  methods: {
    // 设置当前图片的导航slide样式
    sliderWork () {
      this.slider[this.n - 1].className = ''
      this.n = this.n === 6 ? 1 : this.n += 1
      this.slider[this.n - 1].className = 'sliderChanged'
    },
    // 当鼠标悬停在slide时切换到指定的图片并清除定时器并设置具体的样式
    mouseEnter (i) {
      if (this.intervals) {
        clearInterval(this.intervals)
      }
      for (let item = 0; item < 6; item++) {
        this.slider[item].className = ''
      }
      // 设置slide样式
      this.slider[i - 1].className = 'sliderChanged'
      this.n = i
    },
    // 当鼠标悬停在slider时清除轮播图定时器
    hoverSlide () {
      if (this.intervals) {
        clearInterval(this.intervals)
      }
    },
    // 鼠标离开slider时重新设置定时器使轮播图工作
    leaveSlide () {
      if (this.intervals) {
        clearInterval(this.intervals)
      }
      this.intervals = setInterval(this.sliderWork, 4500)
    }
  },
  // 当页面被销毁前销毁定时器
  beforeDestroy () {
    clearInterval(this.intervals)
  }
}
</script>

<style scoped>
#header-scoller{
  min-width: 1200px;
  margin: 0;
  padding: 0;
  position:relative;
}
#header-scoller .items {
  position: absolute;
  bottom: 30px;
  height: 20px;
  width: 240px;
  margin: 0 auto;
  left: 50%;
  margin-left: -120px;
}
.sliderChanged {
  background: #3a3a3a !important;
  border: 3px solid #aaa;
  border-radius: 7px !important;
}
#header-scoller .items li {
  height: 8px;
  width: 8px;
  float: left;
  border-radius: 4px;
  background: #fff;
  margin: 0 15px;
  cursor: pointer;
}
/* 轮播图的高度以及超出高度隐藏，由于vue中transition过渡时会有两个img，不设置overflow：hidden会导致页面混乱 */
#header-scoller ul li {
  width: 100%;
  height: 550px;
  overflow: hidden;
}
/* 设置轮播图片的大小以及不变形 */
#header-scoller ul li a img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
/* 清除所有的浮动效果防止后面得元素布局混乱 */
#header-scoller::after {
  content: "";
  display: block;
  clear: both;
}
/* 轮播图淡入淡出样式 */
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
  position: absolute;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: .1;
}
</style>
