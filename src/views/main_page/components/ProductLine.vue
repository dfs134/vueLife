<template>
  <div class="q-pa-md" style="width: 80%; margin: 0 auto;">
    <h3 style="text-align: center; padding: 40px 0;" class="top-logo">Product Line</h3>
    <div class="q-gutter-y-md">

        <q-tabs
          v-model="tab"
          dense
          class="text-grey"
          active-color="teal-6"
          indicator-color="teal-6"
          align="justify"
          narrow-indicator
          active-bg-color="grey-3"
        >
          <q-tab :name="tab.name" :label="tab.label" v-for="(tab, index) in tabs" :key="index" />

        </q-tabs>
        <q-separator class="bg-grey-5" style="margin-top: 0;"/>

        <q-tab-panels v-model="tab" animated>

          <q-tab-panel name="VLine">
            <vLine
            :VLine="VLine"
            />
          </q-tab-panel>
          <q-tab-panel name="Diet">
            <Diet
            :Diet="Diet"
            />
          </q-tab-panel>
          <q-tab-panel name="LifeStyle">
            <LifeStyle
            :LifeStyle="LifeStyle"
            />
          </q-tab-panel>
          <q-tab-panel name="SetItams">
            <SetItams
            :SetItams="SetItams"
            />
          </q-tab-panel>

        </q-tab-panels>

    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import vLine from './components/VLine.vue'
import Diet from './components/Diet.vue'
import LifeStyle from './components/LifeStyle.vue'
import SetItams from './components/SetItams.vue'
export default {
  components:{
    vLine,
    Diet,
    LifeStyle,
    SetItams
  },
  methods: {
    
  },
  mounted() {
    window.addEventListener('scroll', function() {
      const select = this.document.querySelector('.q-pa-md')
      const active = this.document.querySelector('.top-logo')
      const active2 = this.document.querySelector('.q-gutter-y-md')
      const distanceFromViewport = select.getBoundingClientRect().top;
  
      if (distanceFromViewport <= -2300) {
        active.classList.add('animate'); 
        active2.classList.add('animate'); 
      } 

    });

  },
  setup () {
    const tabs = [
      {
        name:'VLine',
        label:'V-line',
      },
      {
        name:'Diet',
        label:'Diet',
      },
      {
        name:'LifeStyle',
        label:'Life style',
      },
      {
        name:'SetItams',
        label:'Set itams',
      },
    ]
    const VLine = [
      {
        img:'/img/product_line/vLine01.jpg',
        topText:'5월 한정특가',
        priceName:'기분전환 S 60포 53% ',
        text01:'땡땡함과 피부밸런스를 위한 한 포',
        text02:'비트1,500mg, 호박750mg, 모링가750mg, S-mix, NP-mix, 백야초, 특허성분2종',
        text03:'한의사 공동개발 V라인을 책임질 스페셜레시피 100가지산야초를 한 포에 담았다!',
        price:'29,500',
        disCount:'42,000',
        percent:'30'
      },
      {
        img:'/img/product_line/vLine02.jpg',
        topText:'5월 한정특가',
        priceName:'기분전환 S 60포 53% ',
        text01:'땡땡함과 피부밸런스를 위한 한 포',
        text02:'비트1,500mg, 호박750mg, 모링가750mg, S-mix, NP-mix, 백야초, 특허성분2종',
        text03:'한의사 공동개발 V라인을 책임질 스페셜레시피 100가지산야초를 한 포에 담았다!',
        price:'29,500',
        disCount:'42,000',
        percent:'30'
      },
      {
        img:'/img/product_line/vLine03.jpg',
        topText:'5월 한정특가',
        priceName:'기분전환 S 60포 53% ',
        text01:'땡땡함과 피부밸런스를 위한 한 포',
        text02:'비트1,500mg, 호박750mg, 모링가750mg, S-mix, NP-mix, 백야초, 특허성분2종',
        text03:'한의사 공동개발 V라인을 책임질 스페셜레시피 100가지산야초를 한 포에 담았다!',
        price:'29,500',
        disCount:'42,000',
        percent:'30'
      },
    ];
    const Diet = [
      {
        img:'/img/product_line/vLine01.jpg',
        topText:'5월 한정특가',
        priceName:'기분전환 S 60포 53% ',
        text01:'땡땡함과 피부밸런스를 위한 한 포',
        text02:'비트1,500mg, 호박750mg, 모링가750mg, S-mix, NP-mix, 백야초, 특허성분2종',
        text03:'한의사 공동개발 V라인을 책임질 스페셜레시피 100가지산야초를 한 포에 담았다!',
        price:'29,500',
        disCount:'42,000',
        percent:'30'
      },
      {
        img:'/img/product_line/vLine02.jpg',
        topText:'5월 한정특가',
        priceName:'기분전환 S 60포 53% ',
        text01:'땡땡함과 피부밸런스를 위한 한 포',
        text02:'비트1,500mg, 호박750mg, 모링가750mg, S-mix, NP-mix, 백야초, 특허성분2종',
        text03:'한의사 공동개발 V라인을 책임질 스페셜레시피 100가지산야초를 한 포에 담았다!',
        price:'29,500',
        disCount:'42,000',
        percent:'30'
      },
      {
        img:'/img/product_line/vLine03.jpg',
        topText:'5월 한정특가',
        priceName:'기분전환 S 60포 53% ',
        text01:'땡땡함과 피부밸런스를 위한 한 포',
        text02:'비트1,500mg, 호박750mg, 모링가750mg, S-mix, NP-mix, 백야초, 특허성분2종',
        text03:'한의사 공동개발 V라인을 책임질 스페셜레시피 100가지산야초를 한 포에 담았다!',
        price:'29,500',
        disCount:'42,000',
        percent:'30'
      },
    ];
    const LifeStyle = [
      {
        img:'/img/product_line/vLine01.jpg',
        topText:'5월 한정특가',
        priceName:'기분전환 S 60포 53% ',
        text01:'땡땡함과 피부밸런스를 위한 한 포',
        text02:'비트1,500mg, 호박750mg, 모링가750mg, S-mix, NP-mix, 백야초, 특허성분2종',
        text03:'한의사 공동개발 V라인을 책임질 스페셜레시피 100가지산야초를 한 포에 담았다!',
        price:'29,500',
        disCount:'42,000',
        percent:'30'
      },
      {
        img:'/img/product_line/vLine02.jpg',
        topText:'5월 한정특가',
        priceName:'기분전환 S 60포 53% ',
        text01:'땡땡함과 피부밸런스를 위한 한 포',
        text02:'비트1,500mg, 호박750mg, 모링가750mg, S-mix, NP-mix, 백야초, 특허성분2종',
        text03:'한의사 공동개발 V라인을 책임질 스페셜레시피 100가지산야초를 한 포에 담았다!',
        price:'29,500',
        disCount:'42,000',
        percent:'30'
      },
      {
        img:'/img/product_line/vLine03.jpg',
        topText:'5월 한정특가',
        priceName:'기분전환 S 60포 53% ',
        text01:'땡땡함과 피부밸런스를 위한 한 포',
        text02:'비트1,500mg, 호박750mg, 모링가750mg, S-mix, NP-mix, 백야초, 특허성분2종',
        text03:'한의사 공동개발 V라인을 책임질 스페셜레시피 100가지산야초를 한 포에 담았다!',
        price:'29,500',
        disCount:'42,000',
        percent:'30'
      },
    ];
    const SetItams = [
      {
        img:'/img/product_line/vLine01.jpg',
        topText:'5월 한정특가',
        priceName:'기분전환 S 60포 53% ',
        text01:'땡땡함과 피부밸런스를 위한 한 포',
        text02:'비트1,500mg, 호박750mg, 모링가750mg, S-mix, NP-mix, 백야초, 특허성분2종',
        text03:'한의사 공동개발 V라인을 책임질 스페셜레시피 100가지산야초를 한 포에 담았다!',
        price:'29,500',
        disCount:'42,000',
        percent:'30'
      },
      {
        img:'/img/product_line/vLine02.jpg',
        topText:'5월 한정특가',
        priceName:'기분전환 S 60포 53% ',
        text01:'땡땡함과 피부밸런스를 위한 한 포',
        text02:'비트1,500mg, 호박750mg, 모링가750mg, S-mix, NP-mix, 백야초, 특허성분2종',
        text03:'한의사 공동개발 V라인을 책임질 스페셜레시피 100가지산야초를 한 포에 담았다!',
        price:'29,500',
        disCount:'42,000',
        percent:'30'
      },
      {
        img:'/img/product_line/vLine03.jpg',
        topText:'5월 한정특가',
        priceName:'기분전환 S 60포 53% ',
        text01:'땡땡함과 피부밸런스를 위한 한 포',
        text02:'비트1,500mg, 호박750mg, 모링가750mg, S-mix, NP-mix, 백야초, 특허성분2종',
        text03:'한의사 공동개발 V라인을 책임질 스페셜레시피 100가지산야초를 한 포에 담았다!',
        price:'29,500',
        disCount:'42,000',
        percent:'30'
      },
    ];

    return {
      tab: ref('VLine'),
      tabs,
      VLine,
      Diet,
      LifeStyle,
      SetItams
    }
  }
}
</script>

<style scoped>
.top-logo.animate {
  animation-name: topLogo;
  animation-duration: 1.0s;
  display: block;
}
.q-gutter-y-md.animate{
  animation-name: mainLogo;
  animation-duration: 1.0s;
  display: block;
}
@keyframes topLogo {
  0% {
    opacity: 0;
    transform: translateX(-20%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
@keyframes mainLogo {
  0% {
    opacity: 0;
  }
  10% {
    opacity: 0.1;
  }
  20% {
    opacity: 0.2;
  }
  30% {
    opacity: 0.3;
  }
  100% {
    opacity: 1;
  }
}
</style>

