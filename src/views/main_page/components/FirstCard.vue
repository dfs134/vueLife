<template>
  <div class="q-pa-md q-gutter-lg row items-start justify-evenly">
    <q-card class="my-card" v-for="(item, index) in vLine" :key="index">
      <img :src="getImagePath(item.imgs)" alt="">
      <q-card-section class="text-center">
        <div class="text-h6"> {{ item.text01 }} </div>
        <div class="text-subtitle2"> {{ item.text02 }} </div>
        <div class="text-subtitle2"> {{ item.text03 }} </div>
        <div class="text-subtitle2"> {{ item.price }}원</div>
        <div class="text-subtitle2"> <span class="text-strike">{{ item.sale.price }}원</span> {{ item.sale.per }}%</div>
        <div class="text-subtitle2">리뷰 {{ item.review.count }} | ★{{ item.review.star }} </div>
      </q-card-section>
    </q-card>
    <div class="title">
      <h2>V-LINE SOLUTION</h2>
    </div>
  </div>
</template>

<script>

export default {
  props: ['vLine'],
  setup(props) {
    const getImagePath = (img) => {
      return img.default ? img.default : img
    }
    return {
      getImagePath,
    }
  },
}
</script>

<style scoped>
.q-card{
  box-shadow: none;
}
.my-card{
  width: 100%;
  max-width: 400px;
  background-color: #F5F5F5;
}
.my-card:nth-of-type(even){
  margin-top: 100px;
}

.justify-evenly{
  width: 65%;
  margin: 0 auto;
}
.title{
  position: absolute;
  width: 34px;
  margin: 250px 0 0 0;
  padding: 50px 0;
  line-height: 1;
  background: none;
  z-index: 99;
}
.title h2{
  color: #000;
  font-size: 35px;
  font-weight: 700;
  writing-mode: tb-rl;
  -webkit-writing-mode: vertical-rl;
  -moz-writing-mode: vertical-rl;
  -o-writing-mode: vertical-rl;
  -ms-writing-mode: vertical-rl;
  -epub-writing-mode: vertical-rl;
  transform: rotateZ(360deg);
}
.fixed{
  position: fixed;
  top: 0;
}
.abos{
  position: absolute;
  top: 1400px;
}
</style>