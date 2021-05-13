<template>
  <div id="home">
    <!--    navbar部分-->
    <nav-bar>
      <template v-slot:center>
        <h3>购物街</h3>
      </template>
    </nav-bar>

    <!--    轮播图部分-->
    <home-swiper :banners="banners"/>

<!--    推荐模块-->
    <swiper-recommend :recommends="recommends"/>

  </div>
</template>

<script>

// 导入navbar组件
import NavBar from "@/components/common/navbar/NavBar";
// 导入封装好的首页轮播图组件
import HomeSwiper from "@/views/home/HomeChild/HomeSwiper";
// 导入封装好的推荐模块
import SwiperRecommend from "@/views/home/HomeChild/SwiperRecommend";

// 导入获取首页数据的模块中的方法
import {getHomeMultidata} from "@/network/home";

export default {
  name: "Home",
  data() {
    return {
    //  声明两个数组 用来保存banner数据和recommend数据
      banners: [],
      recommends: []
    }
  },
  components: {
    NavBar,
    HomeSwiper,
    SwiperRecommend
  },
  created() {
    getHomeMultidata().then(res => {
      // 将返回的数据保存到声明好的数组中
      console.log(res);
      this.banners = res.data.data.banner.list
      this.recommends = res.data.data.recommend.list
    })
  }
}
</script>

<style scoped>
#home {
  height: 44px;
  color: #fff;
}
</style>
