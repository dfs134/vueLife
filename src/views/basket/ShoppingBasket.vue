<template>
  <div class="text-center q-pa-lg">
    <h4 class="text-bold">장바구니</h4>
  </div>
  <div style="margin: 0 auto;">
    <div class="q-pa-md">
      <div class="q-gutter-y-md" >
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
            <q-tab name="domestic-delivery" label="국내배송상품"/>
            <q-tab name="overseas-delivery" label="해외배송상품"/>
            <p class="col-10 text-right">장바구니에 담긴 상품은 7일 동안 보관됩니다.</p>
          </q-tabs>

          <q-separator class="bg-grey-9"/>

          <q-tab-panels v-model="tab" animated>
            <q-tab-panel name="domestic-delivery">
              <DomesticDelivery/>
            </q-tab-panel>

            <q-tab-panel name="overseas-delivery">
              <OverseasDelivery/>
            </q-tab-panel>
          </q-tab-panels>

        </q-card>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import DomesticDelivery from "./components/DomesticDelivery.vue";
import OverseasDelivery from "./components/OverseasDelivery.vue";
export default {
  components:{
    DomesticDelivery,
    OverseasDelivery
  },
  setup() {
    return {
      tab: ref('domestic-delivery'),
    }
  }
}
</script>