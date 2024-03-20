<template>
  <div class="q-my-md row items-start q-gutter-md justify-center">
    <img src="/img/products/health/top_img.jpg" alt="" style="width: 92%;">
  </div>
  <div class="q-pa-lg q-mx-md row items-start q-gutter-md justify-start">
    <q-card class="my-card custom q-ma-md products" v-for="(item, index) in VLine" :key="index">
      <router-link to="">
        <img :src="item.img" alt="">
        <q-card-section class="text-center q-pr-xl q-pl-xl">
          <p class="text-h6 text-center text-weight-bold text-grey-10">{{ item.topText }}</p>
          <p class="text-subtitle2 text-grey-7">{{ item.text02 }}</p>
          <p class="text-subtitle2 text-grey-7">{{ item.text03 }}</p>
          <p class="text-subtitle1 text-weight-bold text-grey-10">{{ item.price.toLocaleString('ko-KR') }}원</p>
          <div class="text-subtitle1 text-grey-7">
            <span class="text-strike">{{ item.disCount.toLocaleString('ko-KR') }}원 </span><span class="text-bold text-red-14">{{ item.percent }}%</span> 
          </div>
        </q-card-section>
      </router-link>
    </q-card>
  </div>
</template>
<script>
import AllProducts from '@/json/healthProducts.json'
export default {
  setup() {
    const VLine = AllProducts
    return {
      VLine
    }
  }
}
</script>

<style scoped>

.my-card{
  width: 100%;
  max-width: 350px;
}
.text-grey{
  width: 50%;
  margin: 0 auto;
}
.custom{
  box-shadow: none;
  background-color: #F4F4F4;
}

</style>