<template>
  <div class="text-center q-pa-lg">
    <h4 class="text-bold">로그인</h4>
  </div>
  <div style="max-width: 550px; margin: 0 auto;">
    <div class="q-pa-md">
      <div class="q-gutter-y-md" >
        <q-card class="" style="box-shadow: none;">
          
          <q-tabs
            v-model="tab"
            dense
            class="text-grey"
            active-color="teal-6"
            indicator-color="teal-6"
            active-bg-color="grey-3"
            align="justify"
            narrow-indicator
          >
            <q-tab name="login" label="회원 로그인"/>
            <q-tab name="non-members" label="비회원(주문조회)" />
          </q-tabs>

          <q-separator class="bg-grey-9"/>

          <q-tab-panels v-model="tab" animated>
            <q-tab-panel name="login">
              <LoginTab/>
            </q-tab-panel>

            <q-tab-panel name="non-members">
              <NonMembers/>
            </q-tab-panel>
          </q-tab-panels>

        </q-card>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

import LoginTab from './components/LoginTab.vue'
import NonMembers from './components/NonMembers.vue'
export default {
  components:{

    LoginTab,
    NonMembers
  },
  setup () {

    return {
      tab: ref('login')
    }
  }
}
</script>

