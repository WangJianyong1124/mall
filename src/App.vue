<template>
  <div id="app">

    <keep-alive>
      <router-view></router-view>
    </keep-alive>

    <main-tab-bar></main-tab-bar>

  </div>
</template>

<script>

// 导入mainTabBar组件
import MainTabBar from "@/components/content/mainTabBar/MainTabBar";

export default {
  name: 'app',
  components: {
    MainTabBar
  }
}
</script>

<style>

/*引入base.css*/
@import url('assets/css/base.css');


</style>
