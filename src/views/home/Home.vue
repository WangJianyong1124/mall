<template>
  <div id="home">
    <nav-bar v-slot:center class="home-nav">
      <h3>购物街</h3>
    </nav-bar>

    <scroll class="content"
            :probe-type="3"
            @scrollPosition="scrollPosition"
            ref="scroll" :pull-up-load="true" @pullingUp="LoadMore">
      <!--     :banners="banners" 传到HomeSwiper组件中-->
      <home-swiper :banners="banners"/>

      <swiper-recommend :recommends="recommends"></swiper-recommend>

      <feature-view/>

      <!--     @tabClick() 监听子组件发出的这个事件 -->
      <tab-control :title="title"
                   class="tabControl"
                   @tabClick="tabClick"/>

      <!--    从pop中去除list赋值给要传给子元素的goods-->
      <goods-list :goods="showGoods"></goods-list>

    </scroll>

    <back-to-top v-show="isShowToTop" @click="toTop"/>
  </div>
</template>


<script>

// 导入navbar组件
import NavBar from "@/components/common/navbar/NavBar";
// 导入封装好的首页轮播图组件
import HomeSwiper from "@/views/home/HomeChild/HomeSwiper";
// 导入封装好的推荐模块
import SwiperRecommend from "@/views/home/HomeChild/SwiperRecommend";
//导入封装好的本周流行模块
import FeatureView from "@/views/home/HomeChild/FeatureView";
// 导入控制条
import TabControl from "@/components/common/tabControl/TabControl";
// 导入商品列表组件
import GoodsList from "@/components/content/goodsList/GoodsList";
// 导入scroll模块
import Scroll from "@/components/common/scroll/Scroll";
// 导入返回顶部组件
import BackToTop from "@/components/content/backToTop/BackToTop";

// 导入获取首页数据和获取商品信息的方法
import {getHomeMultidata, getHomeGoods} from "@/network/home";

export default {
  name: "Home",
  data() {
    return {
      //  声明两个数组 用来保存banner数据和recommend数据
      banners: [],
      recommends: [],
      title: ['流行', '新款', '精选'],
      goods: {
        'pop': {page: 0, list: []},
        'new': {page: 0, list: []},
        'sell': {page: 0, list: []}
      },
      //  记录当前显示的数据的key
      currentType: 'pop',
      //  保存返回顶部按钮是否显示
      isShowToTop: false,

      isFixTop: false
    }
  },
  components: {
    NavBar,
    HomeSwiper,
    SwiperRecommend,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll,
    BackToTop
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list
    }
  },
  created() {
    // 请求首页数据
    this.getHomeMultidata()

    //  请求商品数据
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')

  },
  methods: {

    //事件相关
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = 'pop'
          break
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'
          break
      }
    },

    //是否显示返回到顶部的按钮
    scrollPosition(position) {
      this.isShowToTop = position.y < -1000
    },

    //点击返回顶部按钮实现返回顶部
    toTop() {
      this.$refs.scroll.scrollTo(0, 0)
    },

    //实现上拉加载更多
    LoadMore() {
      // 获取首页的商品数据 传入的类型为当前正在活跃的商品类型
      this.getHomeGoods(this.currentType)
    },

    // 网络相关
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        // 将返回的数据保存到声明好的数组中
        // console.log(res);
        this.banners = res.data.data.banner.list
        this.recommends = res.data.data.recommend.list
      })
    },
    getHomeGoods(type) {
      // 动态获取页码  （第一页请求完之后请求第二页）
      const page = this.goods[type].page + 1
      getHomeGoods(type, page).then(res => {
        // console.log(res);
        //  将获取到的结果添加到type('pop'/'new'/sell)的list数组中
        // 根据type得到对象的key 找到key值里的list 将请求的结果返回  ...运算符 解析返回的数据
        this.goods[type].list.push(...res.data.data.list)
        //  多了一组数据之后对应的key的页码需要+1
        this.goods[type].page += 1

        //  完成上拉加载更多
        this.$refs.scroll.finishLoad()
      })
    }
  }
}
</script>

<style scoped>

#home {
  /*padding-top: 44px;*/
  height: 100vh;
  position: relative;
}

.home-nav {
/*
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
*/

  color: #fff;
  background-color: var(--color-tint);

  z-index: 999;
}
/*

.tabControl {
  position: sticky;
  top: 44px;
}
*/

.content {
  position: absolute;
  overflow: hidden;
  top: 44px;
  left: 0;
  right: 0;
  bottom: 49px;
}

</style>
