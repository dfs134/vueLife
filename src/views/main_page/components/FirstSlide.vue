<template>
  <div class="slider">
    <q-carousel
      animated
      v-model="slide"
      navigation
      infinite
      :autoplay="autoplay"
      arrows
      transition-prev="slide-right"
      transition-next="slide-left"
      @mouseenter="autoplay = false"
      @mouseleave="autoplay = true"
      :style="{ backgroundColor: bgColor }">
    >
      <router-link to="#" v-for="(item, index) in img" :name="item.names" :key="index">
        <q-carousel-slide class="column no-wrap flex-center mg-center" :img-src="item.url" />
      </router-link>
    </q-carousel>
  </div>
</template>

<script>
import { ref, watch  } from 'vue'

export default {
  setup() {

    const img = [
      { names: 1, url: `/img/main_slide/slider01.png` },
      { names: 2, url: `/img/main_slide/slider02.png` },
      { names: 3, url: `/img/main_slide/slider03.png` },
      { names: 4, url: `/img/main_slide/slider04.png` },
    ]

    const slide = ref(1)
    const autoplay = ref(true)
    const bgColor = ref('#124D26')

    watch(slide, (newValue, oldValue) => {
      switch (newValue) {
        case 1:
        bgColor.value = '#124D26'
          break
        case 2:
        bgColor.value = '#B1305F'
          break
        case 3:
        bgColor.value = '#FCBF41'
          break
        case 4:
        bgColor.value = '#861C38'
          break
        default:
        bgColor.value = '#124D26'
      }
    })

    return {
      img,
      slide,
      autoplay,
      bgColor
    }
  },
}
</script>

<style scoped>

</style>