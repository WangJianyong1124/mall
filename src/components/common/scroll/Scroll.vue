<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
// 导入better scroll
import BScroll from 'better-scroll'

export default {
  name: "Scroll",
  props: {
    probeType: {
      type: Number,
      default: 0
    },

    pullUpLoad: {
      type: Boolean,
      default: false
    }

  },
  data() {
    return {
      scroll: null
    }
  },
  mounted() {
    // 1 创建BScroll实例
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      observeDOM: true,
      //  要想获取滚动的x 和y 值 需要添加probeType属性
      probeType: this.probeType,
    //  监听上拉动作
      pullUpLoad: this.pullUpLoad
    })

  //  2 监听滚动位置
    this.scroll.on('scroll', position => {
      this.$emit('scrollPosition', position)
    })

  //  3 监听上拉动作
    this.scroll.on('pullingUp', () => {
      // console.log('上拉加载更多');
      this.$emit('pullingUp')
    })

  },
  methods: {
    //  封装一个滚动到指定位置的方法
    scrollTo(x, y, time = 500) {
      this.scroll.scrollTo(x, y, time)
    },

  //  封装完成加载更多
    finishLoad() {
      this.scroll.finishPullUp()
    }
  }
}
</script>

<style scoped>

</style>
