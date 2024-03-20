<template>
  <div class="q-px-xl">
    <form @submit.prevent="submitForm">
      <q-input v-model="text" label="아이디" />
      <q-input v-model="passWd" label="패스워드" />
      <div class="col col-1 q-py-sm bd-bottom all-check flex-between">
        <q-checkbox size="sm" color="teal" v-model="maintain" /><span>로그인 상태 유지</span>
      </div>
      <q-btn style="width: 100%;" class="q-px-xl q-py-md q-mt-lg" type="submit" label="로그인" color="black" :ripple="{ color: 'light-blue-1' }" no-caps size="20px"/>
    </form>
  </div>
  <div class="q-pa-md q-gutter-sm text-center">
    <div class="find q-my-md">
      <a href="">아이디찾기</a>
      <a href="">비밀번호찾기</a>
    </div>
    <div class="q-px-xl column">
      <q-btn color="grey-6" outline  class="q-my-sm q-py-sm" to="">
        <q-icon left size="3em" name="apple" color="green-7"/>
        <div>네이버 로그인</div>
      </q-btn>
      <q-btn color="grey-6" outline class="q-my-sm q-py-sm" to="">
        <q-icon left size="3em" name="wechat" color="yellow-7"/>
        <div>카카오 로그인</div>
      </q-btn>
    </div>
    <div class="q-px-xl column">
      <div class="row items-center">
        <div class="col-12 col-md-8 text-subtitle1 text-bold text-grey-8 text-left">아직 회원이 아니신가요?</div>
        <div class="col-12 col-md-4">
          <q-btn to="/NewSignUp" label="회원가입" outline color="grey-10" class="q-px-lg"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  setup() {
    const maintain = ref(false)
    const text = ref('')
    const passWd = ref('')

    const submitForm = () => {
      const formData = {
        maintain: maintain.value,
        text: text.value,
        passWd: passWd.value,
      }
      console.log(formData)
    }

    return {
      maintain,
      text,
      passWd,
      submitForm
    }
  }
}
</script>

<style scoped>
  .flex-between{
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
  }
  .find a{
    padding:0 20px;
    font-size: 16px;
    color: #666;
  }
</style>