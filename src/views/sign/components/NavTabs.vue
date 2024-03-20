<template>
  <div class="q-pa-md">
    <div class="q-gutter-y-md" >
      <q-card class="">
        <q-tabs
          v-model="tab"
          dense
          class="text-grey"
          active-color="primary"
          indicator-color="primary"
          align="justify"
          narrow-indicator
        >
          <q-route-tab label="회원 로그인" to="/Login"/>
          <q-route-tab label="비회원(주문조회)" to="/Login"/>
        </q-tabs>

        <q-separator />
      </q-card>
    </div>
  </div>
</template>
<script>
import { ref } from 'vue'
export default {
  setup() {
    return {
      tab: ref('mails'),
    }
  }
}
</script>