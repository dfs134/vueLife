<template>
  <div class="text-center q-pa-lg">
    <h4 class="text-bold">적립금</h4>
    <p class="text-subtitle2 q-py-md">고객님의 사용가능 적립금 금액 입니다.</p>
  </div>
  <div class="text-center q-px-lg q-my-lg row text-grey-8">
    <div class="col q-py-md q-px-md">
      <div class="row " v-for="(item, index) in items" :key="index">
        <div class="col text-subtitle1 text-left text-bold">{{ item.left }}</div>
        <div class="col text-subtitle2 text-right">{{ item.right.toLocaleString('ko-KR') }} Point</div>
      </div>
    </div>
    <div class="col q-py-md q-px-md pd-left">
      <div class="row " v-for="(item, index) in items2" :key="index">
        <div class="col text-subtitle1 text-left text-bold">{{ item.left }}</div>
        <div class="col text-subtitle2 text-right">{{ item.right.toLocaleString('ko-KR') }} Point</div>
      </div>
    </div>
  </div>
  <div class="text-center q-py-lg">
    <q-card class="" style="box-shadow: none;">
      <q-tabs
        v-model="tab"
        class="text-grey"
        active-color="grey-10"
        indicator-color="grey-10"
        active-bg-color="grey-3"
        align="justify-start"
        narrow-indicator
      >
        <q-tab name="accumulation-details" label="적립내역보기"/>
        <q-tab name="earn-unspent" label="미가용적립내역보기"/>
        <q-tab name="unused-coupons" label="미가용쿠폰/회원등급적립내역"/>
      </q-tabs>

      <q-separator class="bg-grey-9"/>

      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="accumulation-details">
          <AccumulationDetails/>
        </q-tab-panel>

        <q-tab-panel name="earn-unspent">
          <EarnUnspent/>
        </q-tab-panel>

        <q-tab-panel name="unused-coupons">
          <UnusedCoupons/>
        </q-tab-panel>
      </q-tab-panels>

    </q-card>
  </div>
  <div class="col text-left q-mb-xl text-grey-8" style="border: 1px solid #ccc;">
    <p class="text-subtitle1 q-pt-lg q-pa-md text-bold" style="border-bottom: 1px solid #ccc;">적립금 안내</p>
    <div class="text-subtitle2">
      <ul style="list-style: inside;" class="q-pa-md">
        <li v-for="(item, index) in basketGuide" :key="index" class="text-subtitle2">{{ item.text }}</li>
      </ul>
    </div>  
  </div>
</template>

<script>
import AccumulationDetails from './components/AccumulationDetails.vue'
import EarnUnspent from './components/EarnUnspent.vue'
import UnusedCoupons from './components/UnusedCoupons.vue'
import { ref } from 'vue'
export default {
  components:{
    AccumulationDetails,
    EarnUnspent,
    UnusedCoupons
  },
  setup() {
    const items = [
      {left: '총 적립금', right: 26595},
      {left: '사용된 적립금', right: 20336},
      {left: '환불예정 적립금', right: 0},
    ]

    const items2 = [
      {left: '사용가능 적립금', right: 26595},
      {left: '미가용 적립금', right: 20336},
    ]

    const basketGuide = [
      {text : '주문으로 발생한 적립금은 배송완료 후 7일 부터 실제 사용 가능한 적립금으로 전환됩니다. 배송완료 시점으로부터 7일 동안은 미가용 적립금으로 분류됩니다.'},
      {text : '미가용 적립금은 반품, 구매취소 등을 대비한 임시 적립금으로 사용가능 적립금으로 전환되기까지 상품구매에 사용하실 수 없습니다.'},
      {text : '사용가능 적립금(총적립금 - 사용된적립금 - 미가용적립금)은 상품구매 시 바로 사용가능합니다.'},
    ]
    return {
      tab: ref('accumulation-details'),
      items,
      items2,
      basketGuide,
    }
  }
}
</script>

<style scoped>
.text-center.q-px-lg.row {
  border: 1px solid #ccc;
}
.text-center.q-my-lg.row .col.pd-left{
  border-left: 1px solid #ccc;
}
</style>