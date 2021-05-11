<template>
  <tab-bar>

    <tab-bar-item path="/home" activeColor="deeppink">
      <template v-slot:item-icon>
        <img src="@/assets/img/tabbar/home.svg" alt="">
      </template>
      <template v-slot:item-icon-active>
        <img slot="item-icon-active" src="@/assets/img/tabbar/home_active.svg" alt="">
      </template>
      <template v-slot:item-text>
        <div>首页</div>
      </template>
    </tab-bar-item>

    <tab-bar-item path="/shopcart" activeColor="deeppink">
      <template v-slot:item-icon>
        <img src="@/assets/img/tabbar/category.svg" alt="">
      </template>
      <template v-slot:item-icon-active>
        <img slot="item-icon-active" src="@/assets/img/tabbar/category_active.svg" alt="">
      </template>
      <template v-slot:item-text>
        <div>首页</div>
      </template>
    </tab-bar-item>

    <tab-bar-item path="/category" activeColor="deeppink">
      <template v-slot:item-icon>
        <img src="@/assets/img/tabbar/shopcart.svg" alt="">
      </template>
      <template v-slot:item-icon-active>
        <img slot="item-icon-active" src="@/assets/img/tabbar/shopcart_active.svg" alt="">
      </template>
      <template v-slot:item-text>
        <div>首页</div>
      </template>
    </tab-bar-item>

    <tab-bar-item path="/profile" activeColor="deeppink">
      <template v-slot:item-icon>
        <img src="@/assets/img/tabbar/profile.svg" alt="">
      </template>
      <template v-slot:item-icon-active>
        <img slot="item-icon-active" src="@/assets/img/tabbar/profile_active.svg" alt="">
      </template>
      <template v-slot:item-text>
        <div>我的</div>
      </template>
    </tab-bar-item>

  </tab-bar>
</template>

<script>

//导入TabBar组件
import TabBar from "@/components/common/tabbar/TabBar";

//导入TabBarItem组件
import TabBarItem from "@/components/common/tabbar/TabBarItem";


export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style scoped>

.tab-bar-item img {
  width: 24px;
  height: 24px;
  /*  居中*/
  vertical-align: middle;

  /*  设置边距*/
  margin-top: 2px;
  margin-bottom: 3px;
}



</style>
