<template>
  <div class="goods">
    <goods-item v-for="item in goods" :goods-item="item"/>
  </div>
</template>

<script>

import GoodsItem from "@/components/content/goodsList/GoodsItem";

export default {
  name: "GoodList",
  props: {
    goods: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {}
  },
  components: {
    GoodsItem
  }
}
</script>

<style scoped>

.goods {
  display: flex;
  /*自适应一行显示多少个*/
  flex-wrap: wrap;
  justify-content: space-evenly;
}

</style>
