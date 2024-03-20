<template>
  <div class="q-pa-md row items-start q-gutter-md justify-evenly">
    <q-card class="my-card custom" v-for="(item, index) in Diet" :key="index">
      <img :src="item.img" alt="">
      <q-card-section class="text-center q-pr-xl q-pl-xl">
        <div class="text-h6 text-center text-weight-bold">{{ item.topText }}</div>
        <div class="text-h6 text-center text-weight-bold">{{ item.priceName }}</div>
        <div class="text-h6 text-center text-weight-bold">{{ item.text01 }}</div>
        <div class="text-subtitle2 text-grey-7">{{ item.text02 }}</div>
        <div class="text-subtitle2 text-grey-7">{{ item.text03 }}</div>
        <div class="text-subtitle1 text-weight-bold">{{ item.price }}원</div>
        <div class="text-subtitle1 text-grey-7">
          <span class="text-strike">{{ item.disCount }}원 </span><span class="text-bold text-red-14">{{ item.percent }}%</span> 
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>
<script>
export default {
  props: ['Diet'],
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