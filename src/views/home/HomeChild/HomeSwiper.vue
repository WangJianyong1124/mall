<template>
  <div class="home-swiper">
    <swiper>
      <swiper-item v-for="item in banners">
        <a :href="item.link">
          <img :src="item.image" alt="" class="home-swiper-img">
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>

// 导入轮播图组件
import {Swiper, SwiperItem} from "@/components/common/swiper";

export default {
  name: "HomeSwiper",
  props: {
    //接收父组件传递的banners相关的数据
    banners: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    Swiper,
    SwiperItem
  }
}
</script>

<style scoped>
/*因为返回的图片大小不对 所以需要设置*/
.home-swiper-img {
  width: 100%;
}
</style>
