<template>
  <div class="text-center q-pa-lg">
    <h4 class="text-bold">회원가입</h4>
  </div>
  <form @submit.prevent="submitForm">
    <div class="q-pa-md">
      <q-markup-table>
        <tbody>
          <tr>
            <th class="text-left bg-grey-12"><strong class="text-red-14">*</strong> 아이디</th>
            <td class="text-left">
              <q-input outlined v-model="id" label="아이디" :rules="idRules" class="py-20"/>
            </td>
            <td class="text-left">(영문자/숫자, 4~16자)</td>
          </tr>
          <tr>
            <th class="text-left bg-grey-12"><strong class="text-red-14">*</strong> 비밀번호</th>
            <td class="text-left">
              <q-input outlined v-model="passwd" label="비밀번호" :rules="pwRules" type="password" class="py-20"/>
            </td>
            <td class="text-left">(영문 대소문자/숫자/특수문자 중 3가지 이상 조합, 8자~16자)</td>
          </tr>
          <tr>
            <th class="text-left bg-grey-12"><strong class="text-red-14">*</strong> 비밀번호 확인</th>
            <td class="text-left">
              <q-input outlined v-model="pwCheck" label="비밀번호 확인" :rules="checkRules" type="password" class="py-20"/>
            </td>
            <td class="text-left"></td>
          </tr>
          <tr>
            <th class="text-left bg-grey-12"><strong class="text-red-14">*</strong> 이름</th>
            <td class="text-left">
              <q-input v-model="name" outlined label="이름" class="py-20"/>
            </td>
            <td class="text-left"></td>
          </tr>
          <tr>
            <th class="text-left bg-grey-12"><strong class="text-red-14">*</strong> 휴대전화</th>
            <td class="text-left">
              <q-input outlined v-model="phone" label="휴대전화" mask="### - #### - ####" class="py-20"/>
            </td>
            <td class="text-left"></td>
          </tr>
          <tr>
            <th class="text-left bg-grey-12"><strong class="text-red-14">*</strong> 이메일</th>
            <td class="text-left">
              <q-input outlined v-model="email" type="email" label="이메일" :rules="emailRules" class="py-20"></q-input>
            </td>
            <td class="text-left"></td>
          </tr>
          <tr>
            <th class="text-left bg-grey-12"><strong class="text-red-14">*</strong> 평생회원</th>
            <td class="text-left">
              <q-radio v-model="shape" val="agree" label="동의함" />
              <q-radio v-model="shape" val="disagree" label="동의안함" />
            </td>
            <td class="text-left">평생회원으로 가입하시면 생활약속 회원 탈퇴시까지는 휴면회원으로 전환되지 않으며, 고객님의 개인정보가 탈퇴시까지 안전하게 보관됩니다.</td>
          </tr>
        </tbody>
      </q-markup-table>
    </div>
    <div class="q-pa-md agree">
      <p class="text-weight-bold text-subtitle1">전체동의</p>
      <div class="example-column-row-width bg-grey-2">

        <div class="column" style="height: 800px;">

          <div class="col col-1 q-pa-md bd-bottom all-check">
            <q-checkbox size="sm" color="teal" v-model="val" /><span>이용약관 및 개인정보수집 및 이용, 쇼핑정보 수신(선택)에 모두 동의합니다.</span>
          </div>

          <div class="col q-pa-md bd-bottom part-check">
            <p class="text-weight-bold">[필수] 이용약관 동의</p>
            <q-virtual-scroll
              class="q-my-sm bg-grey-1"
              style="height: 50%; border: 1px solid #ccc;"
              :items="heavyList"
              separator
              v-slot="{ item, index }"
            >
              <q-item
                :key="index"
                dense
              >
                <q-item-section>
                  <q-item-label>
                    #{{ index }} - {{ item.label }}
                  </q-item-label>
                </q-item-section>
              </q-item>
            </q-virtual-scroll>
            <span>이용약관에 동의하십니까?</span> <q-checkbox size="xs" color="teal" v-model="terms" /> <span>동의함</span>
          </div>
          <div class="col q-pa-md bd-bottom part-check">
            <p class="text-weight-bold">[필수] 개인정보 수집 및 이용 동의</p>
            <q-virtual-scroll
              class="q-my-sm bg-grey-1"
              style="height: 50%; border: 1px solid #ccc;"
              :items="heavyList"
              separator
              v-slot="{ item, index }"
            >
              <q-item
                :key="index"
                dense
              >
                <q-item-section>
                  <q-item-label>
                    #{{ index }} - {{ item.label }}
                  </q-item-label>
                </q-item-section>
              </q-item>
            </q-virtual-scroll>
            <span>개인정보 수집 및 이용에 동의하십니까?</span> <q-checkbox size="xs" color="teal" v-model="collection" /> <span>동의함</span>
          </div>
          <div class="col q-pa-md bd-bottom part-check">
            <p class="text-weight-bold">[선택] 개인정보 처리 위탁 동의</p>
            <q-virtual-scroll
              class="q-my-sm bg-grey-1"
              style="height: 50%; border: 1px solid #ccc;"
              :items="heavyList"
              separator
              v-slot="{ item, index }"
            >
              <q-item
                :key="index"
                dense
              >
                <q-item-section>
                  <q-item-label>
                    #{{ index }} - {{ item.label }}
                  </q-item-label>
                </q-item-section>
              </q-item>
            </q-virtual-scroll>
            <span>개인정보 처리 위탁에 동의하십니까?</span> <q-checkbox size="xs" color="teal" v-model="consignment" /> <span>동의함</span>
          </div>
          <div class="col-3 q-pa-md bd-bottom part-check">
            <p class="text-weight-bold">[선택] 쇼핑정보 수신 동의</p>
            <q-virtual-scroll
              class="q-my-sm bg-grey-1"
              style="height: 30%; border: 1px solid #ccc;"
              :items="heavyList"
              separator
              v-slot="{ item, index }"
            >
              <q-item
                :key="index"
                dense
              >
                <q-item-section>
                  <q-item-label>
                    #{{ index }} - {{ item.label }}
                  </q-item-label>
                </q-item-section>
              </q-item>
            </q-virtual-scroll>
              <div>
                <span>SMS 수신을 동의하십니까?</span> <q-checkbox size="xs" color="teal" v-model="snsReception" /> <span>동의함</span>
              </div>
            
            <span>이메일 수신을 동의하십니까?</span> <q-checkbox size="xs" color="teal" v-model="emailReception" /> <span>동의함</span>
          </div>
        </div>

      </div>
    </div>
    <div class="q-pa-md q-gutter-sm text-center">
      <q-btn class="q-px-xl" type="submit" label="회원가입" color="blue-grey-14" :ripple="{ color: 'light-blue-1' }" no-caps size="20px"/>
    </div>
  </form>

</template>

<script>
import { ref, watch  } from 'vue'
const maxSize = 10000
const heavyList = []
for (let i = 0; i < maxSize; i++) {
  heavyList.push({
    label: 'Option ' + (i + 1),
    banner: i % 5 === 0
  })
}
import { useRouter } from 'vue-router';
export default {
  watch: {
    val(value) {
      this.terms = value;
      this.collection = value;
      this.consignment = value;
      this.snsReception = value;
      this.emailReception = value;
    },
  },
  setup () {
    const router = useRouter();

    const id = ref('')
    const passwd = ref('')
    const pwCheck = ref('')
    const name = ref('')
    const phone = ref('')
    const email = ref('')
    const shape = ref('')
    const val = ref(false)
    const terms = ref(false)
    const collection = ref(false)
    const consignment = ref(false)
    const snsReception = ref(false)
    const emailReception = ref(false)
    const idRules = [
      val => ( /^[a-zA-Z0-9]{4,16}$/.test(val) ) || '아이디는 (영문자/숫자, 4~16자) 로 만들어야 합니다'
    ]
    const pwRules = [
      val => ( /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,17}$/.test(val) ) || '비밀번호는 (영문 대소문자/숫자/특수문자 중 3가지 이상 조합, 8자~16자) 로 만들어야 합니다'
    ]
    const checkRules = [
      val => ( val === passwd ) || '비밀번호와 일치하지 않습니다.'
    ]
    watch(passwd, (newValue) => {
      checkRules[0] = val => (val === newValue) || '비밀번호가 일치합니다.'
    })
    const emailRules = [
      val => ( /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(val) || '이메일 형식이 아닙니다' )
    ]

    const submitForm = () => {
      const formData = {
        id: id.value,
        passwd: passwd.value,
        pwCheck: pwCheck.value,
        name: name.value,
        phone: phone.value,
        email: email.value,
        shape: shape.value,
        val: val.value,
        terms: terms.value,
        collection: collection.value,
        consignment: consignment.value,
        snsReception: snsReception.value,
        emailReception: emailReception.value
      }
      // router.push('/')
      console.log(formData)
    }

    return {
      id,
      passwd,
      pwCheck,
      name,
      phone,
      email,
      shape,
      val,
      terms,
      collection,
      consignment,
      snsReception,
      emailReception,
      submitForm,
      heavyList,
      idRules,
      pwRules,
      checkRules,
      emailRules

    }
  },

}
</script>

<style scoped>
  th.text-left{
    width: 15%;
    font-size: 16px;
    font-weight: bold;
    border-bottom: 1px solid #0000001f;
  }
  td.text-left:nth-of-type(1){
    width: 30%;
  }
  .agree .example-column-row-width{
    border: 1px solid #ddd;
  }

</style>

<style>
  .q-checkbox__bg{
    border: 1px solid !important;
    background-color: #fff;
  }
</style>