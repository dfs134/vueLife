<template>
  <FirstSlide/>
  <FirstCard
  :vLine="vLine"
  />
  <SecondSlide/>
  <ServiceTab
  :imgTabs="imgTabs"
  />
  <ProductLine/>

</template>

<script>
import { ref } from 'vue'
import FirstSlide from './components/FirstSlide.vue'
import FirstCard from './components/FirstCard.vue'
import SecondSlide from './components/SecondSlide.vue'
import ServiceTab from './components/ServiceTab.vue'
import ProductLine from './components/ProductLine.vue'

export default {
  components:{
    FirstSlide,
    FirstCard,
    SecondSlide,
    ServiceTab,
    ProductLine
  },
  setup () {
    const imgPath = `/img/main_price/`
    const vLine = [
      {
        imgs: imgPath + 'main01.jpg', 
        text01:'5월 한정특가 기분전환 알파플러스 땡땡함과 묵직함 고민해결',
        text02:'비트2000mg, 호박1,000mg, 모링가1,000mg, 차전자피1300mg, 녹각, 강황',
        text03:'더 강력하게 돌아온 알파플러스 식이섬유 1300mg 함유 기분전환 최대함량 5.5g',
        price:'30,000',
        sale:{
          price:'42,000',
          per:'30',
        },
        review:{
          count:'9,664',
          star:'4.8'
        }
      },
      {
        imgs: imgPath + 'main02.jpg', 
        text01:'5월 한정특가 기분전환 알파플러스 땡땡함과 묵직함 고민해결',
        text02:'비트2000mg, 호박1,000mg, 모링가1,000mg, 차전자피1300mg, 녹각, 강황',
        text03:'더 강력하게 돌아온 알파플러스 식이섬유 1300mg 함유 기분전환 최대함량 5.5g',
        price:'30,000',
        sale:{
          price:'42,000',
          per:'30',
        },
        review:{
          count:'9,664',
          star:'4.8'
        }
      },
      {
        imgs: imgPath + 'main03.jpg', 
        text01:'5월 한정특가 기분전환 알파플러스 땡땡함과 묵직함 고민해결',
        text02:'비트2000mg, 호박1,000mg, 모링가1,000mg, 차전자피1300mg, 녹각, 강황',
        text03:'더 강력하게 돌아온 알파플러스 식이섬유 1300mg 함유 기분전환 최대함량 5.5g',
        price:'30,000',
        sale:{
          price:'42,000',
          per:'30',
        },
        review:{
          count:'9,664',
          star:'4.8'
        }
      },
      {
        imgs: imgPath + 'main04.jpg', 
        text01:'5월 한정특가 기분전환 알파플러스 땡땡함과 묵직함 고민해결',
        text02:'비트2000mg, 호박1,000mg, 모링가1,000mg, 차전자피1300mg, 녹각, 강황',
        text03:'더 강력하게 돌아온 알파플러스 식이섬유 1300mg 함유 기분전환 최대함량 5.5g',
        price:'30,000',
        sale:{
          price:'42,000',
          per:'30',
        },
        review:{
          count:'9,664',
          star:'4.8'
        }
      }
    ]
    const imgTabs = [
      {
        num:'num01',
        imgs: '/img/service_tab/offline.jpg'
      },
      {
        num:'num02',
        imgs: '/img/service_tab/event.jpg'
      },
      {
        num:'num03',
        imgs: '/img/service_tab/membership.jpg'
      },
      {
        num:'num04',
        imgs: '/img/service_tab/delivery-servie.jpg'
      },
    ]
    return {
      vLine,
      imgTabs
    }
  },
  methods: {
    
  },
  mounted() {
    const move = document.querySelector('.title');
    const select = document.querySelector('.title h2');
    
    window.addEventListener('scroll', function() {
      const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
      const distanceFromViewport = select.getBoundingClientRect().top;

      if (distanceFromViewport <= 337) {
        move.classList.add('fixed');
      } else {
        move.classList.remove('fixed');
      }

      if (currentScrollPosition < 336) {
        move.classList.remove('fixed');
      }
      if (currentScrollPosition > 1384) {
        move.classList.add('abos');
        move.classList.remove('fixed');
      }
      if (currentScrollPosition < 1384 && currentScrollPosition > 336) {
        move.classList.remove('abos');
        move.classList.add('fixed');
      }

    });

  },
}
</script>

<style scoped>

</style>
