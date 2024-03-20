<template>
  <div class="q-px-lg text-center">
    <form @submit.prevent="submitForm">
      <p class="text-center q-py-md text-grey-6 text-bold text-subtitle2">비회원의 경우, 주문시의 주문번호로 주문조회가 가능합니다.</p>
      <div class="col col-1 q-pa-sm all-check flex-between">
        <q-input v-model="ordererName" label="주문자명" class="q-py-md"/>
        <q-input v-model="ordererNum" label="주문번호" class="q-py-md"/>
        <q-input v-model="ordererPw" label="비회원주문 비밀번호" class="q-py-md"/>
      </div>
      <q-btn style="width: 400px;" class="q-px-xl q-py-md q-my-lg" type="submit" label="조회" color="black" :ripple="{ color: 'light-blue-1' }" no-caps size="20px"/>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  setup() {
    const ordererName = ref('')
    const ordererNum = ref('')
    const ordererPw = ref('')

    const submitForm = () => {
      const formData = {
        ordererName: ordererName.value,
        ordererNum: ordererNum.value,
        ordererPw: ordererPw.value,
      }
      console.log(formData)
    }

    return {
      ordererName,
      ordererNum,
      ordererPw,
      submitForm
    }
  }
}
</script>