<template>
  <div class="text-center q-pa-lg">
    <h4 class="text-bold">주문조회</h4>
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
        <q-tab name="order-history" label="주문내역조회"/>
        <q-tab name="view-other-history" label="취소/반품/교환 내역"/>

      </q-tabs>

      <q-separator class="bg-grey-9"/>

      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="order-history">
          <OrderHistory/>
        </q-tab-panel>

        <q-tab-panel name="view-other-history">
          <ViewOtherHistory/>
        </q-tab-panel>
      </q-tab-panels>

    </q-card>
  </div>
</template>

<script>
import { ref } from 'vue'
import OrderHistory from './components/OrderHistory.vue'
import ViewOtherHistory from './components/ViewOtherHistory.vue'
export default {
  components:{
    OrderHistory,
    ViewOtherHistory
  },
  setup() {

    return {
      tab: ref('order-history'),
    }
  }
}
</script>

<style scoped>
.q-tab-panel{
  padding-left: 0;
  padding-right: 0;
}
</style>