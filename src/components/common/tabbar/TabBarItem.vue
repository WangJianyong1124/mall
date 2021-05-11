<template>
  <div class="tab-bar-item" @click="changeItem">
<!--    默认未选中的图标-->
    <div v-if="isActive">
      <slot name="item-icon"></slot>
    </div>
<!--  选中时候的图标-->
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
<!--显示的文字-->
    <div :style="colorStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props:{
    path: String,
    activeColor:{
      type: String,
      default: 'red'
    }
  },
  data() {
    return {
    }
  },
  methods:{
    // 改变点击的tabbar item
    changeItem(){
      this.$router.replace(this.path)
    }
  },
  computed: {
    // 判断是否是活跃中的
    isActive(){
      /*
        this.$route.path 返回当前正在活跃着的path
        indexOf(param)  判断调用它的元素是否存在于param中 如果没有返回-1 反之则有
        this.path  props父组件中传来的path
      */
      return this.$route.path.indexOf(this.path)
    },

  //  文字颜色方法
    colorStyle(){
      // 首先判断是否处于活跃中 如果是则为其添加color:activeColor 如果不处于则传入空对象
      return !this.isActive ? {color: this.activeColor} : {}
    }

  }
}
</script>

<style scoped>
.tab-bar-item {
  /*让item平均分配*/
  flex: 1;

  height: 49px;

  /* 文字居中对齐 */
  text-align: center;

  /*  设置文字大小*/
  font-size: 14px;

}

</style>
