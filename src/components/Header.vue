<template>
  <div class="q-pa-sm example-row-column-width bg-black">
    <p class="text-white text-center">신규회원가입시 10% 추가할인쿠폰 증정</p>
  </div>
  <div class="q-pa-md q-py-lg example-row-column-width">
    <div class="row text-center flex-center">
      <div class="col">
        <router-link :to="item.url" v-for="(item, index) in selectMenu" :key="index">{{ item.name }}</router-link>
      </div>
      <div class="col">
        <router-link to="/">
          <img src="/img/logo.png" alt="">
        </router-link>
      </div>
      <div class="col">
        <router-link :to="item.url" v-for="(item, index) in myOrder" :key="index">

          <template v-if="item.name === '마이페이지'">
            <q-btn-dropdown flat round dense label="마이페이지" style="font-size: 16px; padding: 0;">
              <q-list>
                <q-item v-for="(menuItem, menuItemIndex) in myPageDropdownItems" :key="menuItemIndex" :to="menuItem.url">
                  <q-item-section style="color: #333;">{{ menuItem.name }}</q-item-section>
                </q-item>
              </q-list>
            </q-btn-dropdown>
          </template>

          <template v-else>
            {{ item.name }}
          </template>

        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup(){
    const selectMenu = [
      { name : '기분전환무료', url :'/PriceDetail'},
      { name : 'V라인', url :'/VLineProducts'},
      { name : '다이어트', url :'/DietProducts'},
      { name : '건강고민', url :'/HealthProducts'},
      { name : '전제품', url :'/AllProducts'},
    ]
    const myOrder = [
      {name :'로그인', url :'/Login'},
      {name :'회원가입', url :'/NewSignUp'},
      {name :'브랜드', url :'/Brand'},
      {name :'정기배송', url :'/RegularDelivery'},
      {name :'마이페이지', url :''},
      {name :'장바구니', url :'/ShoppingBasket'}
    ]
    const myPageDropdownItems = [
      { name: '적립금', url: '/Reserves' },
      { name: '관심상품', url: '/ProductInterest' },
      { name: '상품문의', url: '/Notice' },
      { name: '주문조회', url: '/OrderInquiry' },
    ];
    return {
      selectMenu,
      myOrder,
      myPageDropdownItems
    }
  }
}
</script>

<style lang="css" src="@/css/header.css" scoped></style>