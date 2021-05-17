<template>
  <div class="recommend">
    <div v-for="item in recommends" class="recommend-items">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{ item.title }}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "SwiperRecommend",
  props: {
  //  接收父组件传来的recommends数据
    recommends: {
      type: Array,
      default() {
        return [];
      }
    }
  }
}
</script>

<style scoped>

.recommend{
  /*将其设置位弹性盒 让其水平排列*/
  display: flex;
  /*设置上下边距*/
  padding: 10px 0;
  /*让其居中显示*/
  text-align: center;
/*  设置下面的灰色部分*/
  border-bottom: 10px solid #f1f1f1;
  font-size: 12px;
}

.recommend-items {
  flex: 1;
}

/*因为传过来的数据图片可能不一致 所以需要设置以下图片的样式*/
.recommend-items img{
  width: 80%;
  margin-bottom: 5px;
}
</style>
