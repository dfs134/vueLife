<template>
  <div class="price-detail q-ma-xl">
    <div class="img-price q-mx-lg row justify-evenly">
      <div class="q-pa-md col-4" style="height: 600px; width: 600px;">
        <q-carousel
          swipeable
          animated
          v-model="slide"
          infinite
          thumbnails
          style="width: 100%; height: 100%;"
        >
          <q-carousel-slide v-for="(item, index) in img" :name="item.names" :key="index" :img-src="item.url" />
          
        </q-carousel>
      </div>
      <div class="col-4 text-grey-9">
        <div>
          <div class="row justify-between items-center">
            <h5 class="text-h5 text-bold q-py-md">[웰컴키트] 기분전환 알파플러스 7개입</h5>
            <q-btn round color="grey-1" icon="favorite_border" class="text-grey-10"/>
          </div>
            <p class="q-py-md" style="width: 60%;">먹을수록 예뻐지는 기분전환 7일 꾸준히 드셔보시면 알아요먹고 안먹고 차이를 느껴보세요</p>
        </div>
        <div class="q-py-md">
          <q-table
            flat
            :rows="rows"
            :columns="columns"
            row-key="name"
            hide-header
            hide-bottom
            class="no-pointer-events text-grey-9"
          />
        </div>
        <div class="q-py-md">
          <p class="q-py-sm">(최소주문수량 1개 이상 / 최대주문수량 1개 이하)</p>
          <div class="row justify-end items-center bg-grey-2 q-pa-md">
            <div class="row justify-center items-center" style="width: 20%;">
              <p class="text-subtitle1">{{ quantity }}</p>
              <div class="column">
                <q-btn
                  class="col bg-grey-1"
                  size="5px"
                  icon="add"
                  @click="increment"
                />
                <q-btn
                  class="col bg-grey-1"
                  size="5px"
                  icon="remove"
                  @click="decrement"
                  :disabled="quantity === 1"
                />       
              </div>
            </div>
            <div class="q-ml-xl text-subtitle1">
              <p>{{ price.toLocaleString('ko-KR') }}원</p>
            </div>
          </div>
        </div>
        <div class="q-py-md row justify-between items-center text-grey-10">
          <h6 class="col text-weight-bold">총 상품금액(수량)</h6>
          <div class="col text-right">
            <span class="text-h6 text-weight-bold">{{ price.toLocaleString('ko-KR') }}원</span>
            <span class="text-subtitle1">({{ quantity }}개)</span>
          </div>
        </div>
        <div class="q-py-md row justify-between items-center">
          <q-btn outline unelevated rounded size="20px" color="grey-1 text-grey-10 q-px-xl q-py-sm" label="장바구니담기" />
          <q-btn unelevated rounded size="20px" color="teal-10 q-px-xl q-py-sm" label="바로구매하기" />
        </div>
      </div>
    </div>

    <div class="q-ma-xl text-center">
      <img v-for="(item, index) in pageImg" :name="item.names" :key="index" :src="item.url">
    </div>
  </div>
  
</template>
<script>
import { ref } from 'vue'
export default {
  data() {
    return {
      quantity: 1,
      price:14400
    }
  },
  methods: {
    increment() {
      this.quantity++;
      const firstData = this.rows[0]; 
      console.log(this.price)
      console.log(firstData.calories)
      this.price += parseInt(firstData.calories.replace(/,/g, '')); 
    },
    decrement() {
      if (this.quantity > 0) {
        this.quantity--;
        const firstData = this.rows[0]; 
        this.price -= parseInt(firstData.calories.replace(/,/g, '')); 
      }
    }
  },
  setup () {
    const img = [
      { names: 1, url: `/img/datail_img/slide01.jpg` },
      { names: 2, url: `/img/datail_img/slide02.jpg` },
      { names: 3, url: `/img/datail_img/slide03.jpg` },
      { names: 4, url: `/img/datail_img/slide04.jpg` },
    ]
    const pageImg = [
      {names: 1, url: `/img/datail_img/page01.jpg`},
      {names: 2, url: `/img/datail_img/page02.jpg`},
      {names: 3, url: `/img/datail_img/page03.jpg`},
      {names: 4, url: `/img/datail_img/page04.jpg`},
      {names: 5, url: `/img/datail_img/page05.jpg`},
    ]
    
    const columns = [
      {
        name: 'desc',
        required: true,
        align: 'left',
        field: row => row.name,
        format: val => `${val}`,
        style:'border:none; width:30%; font-weight: bold; padding-left:0; font-size:16px'
      },
      { 
        name: 'calories', 
        align: 'center', 
        label: 'Calories', 
        field: 'calories', 
        sortable: false, 
        style:'border:none; text-align:left; word-break: break-word; white-space: normal; padding-left:0; font-size:16px' 
      },

    ]
    const rows = [
      {
        name: '판매가',
        calories: '14,400원',
      },
      {
        name: '상품정보',
        calories: '먹을수록 예뻐지는 기분전환 7일 꾸준히 드셔보시면 알아요 먹고 안먹고 차이를 느껴보세요',
      },
      {
        name: '원료정보',
        calories: '비트2000mg, 호박1,000mg, 모링가1,000mg, 차전자피1300mg, 녹각, 강황',
      },
      {
        name: '배송비',
        calories: '3,000원 (30,000원 이상 구매 시 무료)',
      }
    ]

    return {
      slide: ref(1),
      columns,
      rows,
      img,
      pageImg

    }
  },
  mounted() {
    const move = document.querySelector('.col-4.text-grey-9');
    const select = document.querySelector('.q-ma-xl.text-center');
    const imgLeft = document.querySelector('.q-ma-xl.text-center');
    
    window.addEventListener('scroll', function() {
      const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
      const distanceFromViewport = select.getBoundingClientRect().top;

      if (distanceFromViewport <= 1800) {
        move.classList.add('right-fixed');
        imgLeft.classList.add('img-left')
      } else {
        move.classList.remove('right-fixed');
        imgLeft.classList.remove('img-left')
      }

      if (currentScrollPosition < 1800) {
        move.classList.remove('right-fixed');
        imgLeft.classList.remove('img-left')
      }
      if (currentScrollPosition > 1384) {
        move.classList.remove('right-fixed');
        imgLeft.classList.remove('img-left')
      }
      if (currentScrollPosition < 5000 && currentScrollPosition > 1000) {
        move.classList.add('right-fixed');
        imgLeft.classList.add('img-left')
      }

    });

  },
}
</script>

<style scoped>
  p.text-subtitle1{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 34px;
    text-align: center;
    background: #fafafa !important;
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2), 0 2px 2px rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12);
    border-radius: 5px;
  }
  .right-fixed{
    position: fixed;
    top: 0;
    right: 0;
    background-color: #fff;
    padding: 20px;
  }
  .img-left{
    text-align: left;
  }
</style>
