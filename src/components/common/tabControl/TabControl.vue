<template>

<!--
  需求: 当前点中的是哪个 哪个就变颜色
    解决
      1 在data中定义一个变量
        currentIndex: 0
      2 遍历从父组件传递过来的title  因为需要用来index 所以要遍历item和index
      3 给遍历的div动态绑定一个class 判断当前显示的索引是不是等于currentIndex的值
        :class="{active: index === currentIndex}"
      4 这样就有active这个class了  之后再给这个class书写相关的样式即可
      以上第一个已经有了效果 接下来就是
      5 给遍历的div绑定一个itemClick方法 并将index传入  在方法内部将当前遍历的index赋值给currentIndex
-->
  <div class="tab-control">
    <div v-for="(item, index) in title" :class="{active: index === currentIndex}" @click="itemClick(index)">
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props: {
    //  接收Home传递国来的title
    title: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      currentIndex: 0
    }
  },
  methods:{
    itemClick(index){
      //将index发送给home组件
      this.$emit('tabClick', index)
      return this.currentIndex = index
    }
  }
}
</script>

<style scoped>
.tab-control {
  display: flex;
  position: sticky;
  top: 0;
  height: 44px;
  line-height: 44px;
  background-color: #fff;
  color: #666666;
  text-align: center;
  z-index: 999;
}
.tab-control div{
  flex: 1;
}

.active {
  color: var(--color-high-text);
}
.active span{
  padding: 5px;
  border-bottom: 3px solid var(--color-high-text);
}
</style>
