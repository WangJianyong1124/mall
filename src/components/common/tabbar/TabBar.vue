<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabBar"
}
</script>

<style scoped>

#tab-bar {
  /*设置其为弹性盒*/
  display: flex;

  /*设置tabbar高度 一般为49px */
  height: 49px;

  /*将其定位在底部*/
  position: fixed;
  bottom: 0;
  /*添加以下两个属性可以保证是铺满整屏*/
  right: 0;
  left: 0;

  /*设置背景颜色*/
  background-color: #f6f6f6;

  /*  设置盒子阴影*/
  box-shadow: 0 -1px 3px rgba(0, 0, 0, .1);
}

</style>
