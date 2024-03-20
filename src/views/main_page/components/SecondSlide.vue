<template>
  <div class="slider">
    <q-carousel
      animated
      v-model="slide"
      swipeable
      arrows
      navigation-icon="radio_button_unchecked"
      control-type="regular"
      control-color="white"
      control-size="56px"
      control-text-color="grey-8"
      height="400px"
      class="text-black rounded-borders mg50"
      @mouseenter="autoplay = false"
      @mouseleave="autoplay = true"
    >
      <div v-for="(item, index) in img" :name="item.names" :key="index">
        <q-carousel-slide class="column no-wrap flex-center" >
          <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
            <div class="q-mt-md text-end">
              <h2>BEST<br>REVIEW</h2>
              <h3>#{{ item.number }}</h3>
            </div>
            <q-img class="img-margin rounded-borders col-6 full-height" :src="item.url" />
            <div class="q-mt-md text-start">
              <p>★★★★★</p>
              <p>기분전환 알파플러스</p>
              <p>이건 끊을수가 없어요 끊는다 생각해도 몸이 붓기 시작하면 다시 찾아요 ㅠㅠ 너무 효과 좋아요</p>
              <button>MORE</button>
            </div>
          </div>
        </q-carousel-slide>
      </div>
    </q-carousel>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const img = [
      { names: 1, number:'01', url: '/img/main_slide/review01.jpg' },
      { names: 2, number:'02', url: '/img/main_slide/review02.jpg' },
      { names: 3, number:'03', url: '/img/main_slide/review03.jpg' },
      { names: 4, number:'04', url: '/img/main_slide/review04.jpg' },
    ]

    const slide = ref(1)
    const autoplay = ref(true)

    return {
      img,
      slide,
      autoplay,
    }
  },
}
</script>

<style scoped>
.slider{
  width: 70%;
  margin: 0 auto;
}
.slider .mg50 div{
  width: 100%;
  margin: 0 auto;
}
.text-end{
  text-align: end;
  padding-right: 100px;
}
.text-start{
  padding-left: 100px;
}
.img-margin{
  width: 25% !important;
  border-radius: 55%;
  height: 300px !important;
}

</style>
<style>

</style>