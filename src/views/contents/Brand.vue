<template>
  <div class="q-pa-xl text-center">
    <div class="text-left q-py-lg">
      <h4 class="text-bold q-pb-xl text-center">Brand</h4>
      <h6 class="text-h5 q-pt-xl text-green-6">자연의 에너지로부터</h6>
      <h6 class="text-h5 text-green-6">당신의 일상을 더욱 빛나게, 생기있게.</h6>
      <div class="q-py-lg text-grey-8">
        <p class="text-body1">생활약속은 자연으로부터 얻은 에너지가</p>
        <p class="text-body1">현대인의 생활을 지탱하는 근원이라고 믿습니다.</p>
        <p class="text-body1 q-py-lg">자연의 생명 에너지를 그대로 담은 생활약속의 제품들은 현대인들의 식습관과 고민을 토대로 적합한 배합에 대해 연구하고 만듭니다.</p>
        <p class="text-body1">생활약속은 가장 좋은 환경에서 자라 에너지를 가득담은 자연재료를 이용하여 오랜 지혜의 방법에서부터 현대의 기술을 아울러 가장 효과적인 제조방식과 레시피를 찾기위해 노력합니다.</p>
        <p class="text-body1 q-py-lg">늘 피로한 현대인의 일상에 생기있는 에너지를 전달할 수 있도록 고객이 표현한 니즈에 적합한 제품을 출시하고 가장 높은 품질과 편리한 섭취방법을 약속합니다.</p>
        <p class="text-body1">Vibrant. Simple, but potent. Sustainable</p>
      </div>
    </div>
    <img :src="item.img" alt="" v-for="(item, index) in VLine" :key="index" style="width: 100%;">
    <div class="text-left q-py-lg">
      <h6 class="text-h5 text-green-6 q-pt-xl">생활약속은 생기있는 일상을 위해 누구에게나 안전하게 섭취할 수 있도록 자연원료를 이용하여 연구하고 만듭니다.</h6>
      <p class="text-body1 q-py-lg text-grey-8">채소섭취가 부족한 현대인에게 합성부형제가 들어가지 않은 자연원물 그대로의 건강한 제품만을 제공합니다.</p>
      <h6 class="text-h5 text-green-6 q-pt-xl">생활약속은 최상의 원료생산을 위해 영양성분이 풍부한 원료를 연구합니다.</h6>
      <p class="text-body1 q-py-lg text-grey-8">생활약속 비트는 청정자연을 간직한 진도에서 계약재배를 통해 신선하고 건강한 농작물이 자랄 수 있는 환경에서 무농약으로 재배하고 있습니다.</p>
      <ul class="row text-center text-body1 text-green-7 q-mx-lg q-py-xl">
        <li class="col">
          <p>자연원료</p>
          <p>100%</p>
        </li>
        <li class="col">
          <p>최상의</p>
          <p>원료선정</p>
        </li>
        <li class="col bg-yellow-2">
          <p>생기있는</p>
          <p>일상</p>
        </li>
        <li class="col">
          <p>가장 효과적인</p>
          <p>제조방식</p>
        </li>
        <li class="col">
          <p>간편한</p>
          <p>한포습관</p>
        </li>
      </ul>
      <h6 class="text-h5 text-green-6 q-pt-xl">생활약속은 느리더라도 바른방식을 선택했습니다.</h6>
      <p class="text-body1 q-py-lg text-grey-8">59도이하 8시간이상 저온건조하여 영양소 파괴를 최소화 하기 위한 방법을 연구하였습니다. 그리고 조금 더 편리하게 섭취/보관 할 수 있는 방법으로 개별 포장된 스틱을 개발하였습니다.</p>
      <h6 class="text-h5 text-green-6 q-pt-xl">생활약속은 자연원료의 영양분을 그대로, 고함량으로 섭취할 수 있는 방법을 연구합니다.</h6>
      <p class="text-body1 q-py-lg text-grey-8">자연원료를 200메쉬 고운입자로 분말화하여 흡수가 빠른 소환 형태로 제환하는 환가공법을 선택했습니다.</p>
    </div>
    <img src="/img/brand/brand_img_03.jpg" alt="" style="width: 100%;">
  </div>
</template>
<script>
export default {
  setup() {
    const VLine = [
      {img:'/img/brand/brand_img_01.jpg'},
      {img:'/img/brand/brand_img_02.jpg'},
    ]

    return {
      VLine
    }
  }
}
</script>

<style scoped>
  .q-pa-xl.text-center{
    width: 60%;
    margin: 0 auto;
  }
  .row.text-center .col{
    border: 1px solid;
    height: 190px;
    border-radius: 50%;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    margin: 0 -15px;
  }
  .row.text-center .col.bg-yellow-2{
    z-index: -1;
    margin: -10px -20px;
    height: 210px;
  }
</style>