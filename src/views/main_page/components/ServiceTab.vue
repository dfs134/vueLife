<template>
  <div class="q-pa-md q-gutter-lg row items-start justify-evenly">
    <q-card class="my-card" v-for="(item, index) in imgTabs" :key="index" :class="item.num">
      <router-link to="">
        <img :src="getImagePath(item.imgs)" alt="">
      </router-link>
    </q-card>
  </div>
</template>
<script>
import { ref } from 'vue'
export default {
  props: ['imgTabs'],
  setup(props) {
    const animate = ref(false)

    const getImagePath = (img) => {
      return img.default ? img.default : img
    }
    return {
      animate,
      getImagePath,
    }
  },
  mounted() {
    window.addEventListener('scroll', function() {
      const select = this.document.querySelector('.q-pa-md.q-gutter-lg.row.items-start.justify-evenly')
      const active = this.document.querySelectorAll('.my-card')
      const distanceFromViewport = select.getBoundingClientRect().top;
      if (distanceFromViewport <= -1100) {
        active.forEach(function(item){
          item.classList.add('animate');
        })
      } 

    });

  },
}
</script>

<style scoped>
  .justify-evenly{
    width: 80%;
    margin: 0 auto;
  }
  .my-card{
    width: 550px;
    height: 300px;
    display: none;
  }
  .my-card:nth-of-type(even){
    margin-top: 50px;
  }
  .my-card img{
    width: 100%;
    height: 100%;
  }
  .my-card.animate.num01 {
    animation-name: num01;
    animation-duration: 1.0s;
    display: block;
  }
  .my-card.animate.num02 {
    animation-name: num02;
    animation-duration: 1.3s;
    display: block;
  }
  .my-card.animate.num03 {
    animation-name: num03;
    animation-duration: 1.6s;
    display: block;
  }
  .my-card.animate.num04 {
    animation-name: num04;
    animation-duration: 1.8s;
    display: block;
  }
  @keyframes num01 {
    0% {
      opacity: 0;
      transform: translateX(-100%);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
  @keyframes num02 {
    0% {
      opacity: 0;
      transform: translateX(100%);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
  @keyframes num03 {
    0% {
      opacity: 0;
      transform: translateX(-100%);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
  @keyframes num04 {
    0% {
      opacity: 0;
      transform: translateX(100%);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }


</style>