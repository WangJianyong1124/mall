<template>
  <div class="nav-bar">
<!--    一般的navbar分三部分 左 中 右 (如京东)-->
    <div class="left">
      <slot name="left"></slot>
    </div>

    <div class="center">
      <slot name="center"></slot>
    </div>

    <div class="right">
      <slot name="right"></slot>
    </div>

  </div>
</template>

<script>
export default {
  name: "NavBar"
}
</script>

<style scoped>
  .nav-bar {
    display: flex;
    /*一般都是44px*/
    height: 44px;
    line-height: 44px;
    background-color: var(--color-tint);
    text-align: center;
  }

  .center {
    /*分配剩余空间*/
    flex: 1;
  }

  .right, .left{
    /*一般左右都是70px*/
    width: 70px;
  }
</style>
