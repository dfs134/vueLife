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
          <q-carousel-slide v-for="(item, index) in product.img" :name="item.names" :key="index" :img-src="item.url" />
          
        </q-carousel>
      </div>
      <div class="col-4 text-grey-9">
        <div>
          <div class="row justify-between items-center">
            <h5 class="text-h5 text-bold q-py-md">{{ product.mainText }}<br>{{ product.mainText2 }}</h5>
            <q-btn round color="grey-1" class="text-grey-10" @click="heartClk">
              <q-icon v-if="heart" name="bi-heart" />
              <q-icon v-else name="bi-heart-fill" color="red" />
            </q-btn>
          </div>
            <p class="q-py-md" style="width: 60%;">{{ product.subText }}</p>
        </div>
        <div class="q-py-md">
          <q-table
            flat
            :rows="product.rows"
            :columns="product.columns"
            row-key="name"
            hide-header
            hide-bottom
            class="no-pointer-event text-grey-9"
            :rows-per-page-options="[10]"
          >
            <template #body-cell-desc="props">
              <td class="text-left format">{{ formatValue(props.row.name) }}</td>
              
            </template>
            <template #bottom-row>
              <tr class="q-tr--no-hover">
                <td colspan="2">
                  <div style="display: flex; flex-flow: column;">
                    <q-btn @click="btnClk(index)" class="q-my-xs" outline color="grey-7" v-for="(item, index) in product.selectBox" :key="index" :label="item.text" />
                    <p>[필수] 제품을 선택해주세요</p>
                  </div>
                </td>
              </tr>
            </template>
          </q-table>
        </div>
        <div class="q-py-md">
          <p class="q-py-sm">(최소주문수량 1개 이상 / 최대주문수량 1개 이하)</p>
          <div class="text-red">
            ※ 위 옵션선택 박스를 선택하시면 아래에 상품이 추가됩니다.
          </div>
          <template v-if="option == true">
            <div class="row justify-end items-center bg-grey-2 q-pa-md" v-for="(item, index) in product.selectItem" :key="index">
              <div class="row justify-end items-center bg-grey-2 q-pa-md" style="width: 70%;">
                <p>{{ item.text }}</p>
                <div class="row justify-center items-center" style="width: 30%;">
                  <p class="text-subtitle1">{{ item.quantity }}</p>
                  <div class="column">
                    <q-btn
                      class="col bg-grey-1"
                      size="5px"
                      icon="add"
                      @click="increment(index)"
                    />
                    <q-btn
                      class="col bg-grey-1"
                      size="5px"
                      icon="remove"
                      @click="decrement(index)"
                    />       
                  </div>
                </div>
              </div>
              <div class="text-subtitle1 text-right" style="width: 20%;">
                <p>{{ item.price.toLocaleString('ko-KR') }}원</p>
              </div>
            </div>
          </template>
        </div>
        <div class="q-py-md row justify-between items-center text-grey-10">
          <h6 class="col text-weight-bold">총 상품금액(수량)</h6>
          <div class="col text-right">
            <!-- <span class="text-h6 text-weight-bold">{{ product.price.toLocaleString('ko-KR') }}원</span> -->
            <span class="text-h6 text-weight-bold">{{ totalQuantity2.toLocaleString('ko-KR') }}원</span>
            <span class="text-subtitle1">({{ totalQuantity }}개)</span>
          </div>
        </div>
        <div class="q-py-md row justify-between items-center">
          <q-btn outline unelevated rounded size="20px" color="grey-1 text-grey-10 q-px-xl q-py-sm" label="장바구니담기" />
          <q-btn unelevated rounded size="20px" color="teal-10 q-px-xl q-py-sm" label="바로구매하기" />
        </div>

      </div>
    </div>
    <div class="q-ma-xl text-center">
      <img v-for="(item, index) in product.pageImg" :name="item.names" :key="index" :src="item.url">
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import dynamicDetail from './dynamicDetail.json'
export default {
  props: ['id'],
  data() {
    return {
      option:ref(false),
      quantity: 1,
      products: dynamicDetail,  
      product: {},
      heart:ref(true),
      initialPrices: [],
      initialPricesSet: false,
    };
  },
  watch: {
    id: {
      immediate: true,
      handler(newId) {
        this.product = this.products.find(product => product.id === Number(newId));
      },
    },
  },
  setup() {
    return {
      slide: ref(1),
    }
  },
  created() {
    this.$watch(
      () => this.product,
      (newProduct) => {
        this.initialPrices = newProduct.selectItem.map((item) => item.price);
      },
      { immediate: true }
    );
  },
  methods: {
    btnClk(idx){
      console.log(idx)
      this.option = true
    },
    formatValue(val) {
      return `${val}`;
    },
    increment(idx) {

      this.product.selectItem[idx].quantity++;

      const initialPrice = this.initialPrices[idx];
      this.product.selectItem[idx].price = initialPrice * this.product.selectItem[idx].quantity;

    },
    decrement(idx) {

      if (this.product.selectItem[idx].quantity > 1) {
        this.product.selectItem[idx].quantity--;

        const initialPrice = this.initialPrices[idx];
        this.product.selectItem[idx].price = initialPrice * this.product.selectItem[idx].quantity;

      }
    },
    heartClk(){
      this.heart = !this.heart;
    },
    scrollEvt(){
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
    textStrike(){
      const td = document.querySelector('td.text-center')
      td.classList.add('text-strike','text-grey-7')
      const td2 = document.querySelector('tr:nth-of-type(2) td.text-center')
      td2.classList.add('text-bold', 'font-20')
    }
  },
  mounted() {
    this.scrollEvt();
    this.textStrike();

  },
  computed: {
    totalQuantity() {
      return this.product.selectItem.reduce((total, item) => total + item.quantity, 0);
    },
    totalQuantity2() {
      return this.product.selectItem.reduce((total, item) => total + item.price, 0);
    },
  }
};
</script>

<style scoped>
  td.format{
    border: none;
    width: 30%;
    font-weight: bold;
    padding-left: 0px;
    font-size: 16px;
    vertical-align: top;
  }
  td.format2{
    border: none;
    text-align: left;
    word-break: break-word;
    white-space: normal;
    padding-left: 0px;
    font-size: 16px;
    vertical-align: top;
  }
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