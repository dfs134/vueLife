<template>
  <div class="text-center q-pa-lg">
    <h4 class="text-bold">관심상품</h4>
  </div>
  <div class="q-pa-md">
    <q-table
      flat
      title=""
      :rows="rows"
      :columns="columns"
      row-key="name"
      :selected-rows-label="getSelectedString"
      selection="multiple"
      v-model:selected="selected"
      class="text-center border-top"
    >
      <template v-for="column in columns" v-slot:[`body-cell-${column.name}`]="{ row }" :key="column">
        <td class="custom-column" v-if="column.name === 'image'">
          <img :src="row[column.src]" alt="" style="max-width: 100px;"/>
        </td>
        <td class="custom-column text-left" v-else-if="column.name === 'product-information'">
          <p class="q-pb-md">{{ row.productInformation }}</p>
          <q-btn outline style="color: #333;" label="옵션변경" size="12px" class="q-mt-sm text-bold"/>
        </td>
        
        <td class="custom-column" v-else-if="column.name === 'purchase-amount'">
          <p>{{ row.price.value.toLocaleString('ko-KR') }} 원</p>
        </td>
      
        <td class="custom-column display-column" v-else-if="column.name === 'choose'" style="height: 100%;">
          <q-btn outline label="주문하기" size="12px" class="q-mt-sm text-bold bg-grey-10 text-grey-2 width-120"/>
          <q-btn outline label="관심상품등록" size="12px" class="q-mt-sm text-bold text-grey-10 width-120"/>
          <q-btn outline label="X 삭제" size="12px" class="q-mt-sm text-bold text-grey-10 width-120"/>
        </td>
      </template>
    </q-table>
    <div class="row text-black q-pa-lg">
      <div class="col display-row">
        <p class="text-subtitle2">선택상품을</p>
        <q-btn outline label="X 삭제하기" size="12px" class="q-mt-sm q-mx-sm text-bold bg-grey-7 text-grey-2 width-120"/>
        <q-btn outline label="장바구니 담기" size="12px" class="q-mt-sm q-mx-sm text-bold text-grey-10 width-120"/>
      </div>
      <div class="col text-right">
        <q-btn outline label="전체상품주문" size="12px" class="q-pa-md q-mt-sm q-mx-sm text-bold bg-grey-10 text-grey-3 width-150"/>
        <q-btn outline label="관심상품 비우기" size="12px" class="q-pa-md q-mt-sm q-mx-sm text-bold bg-grey-6 text-grey-3 width-150"/>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  setup () {

    const selected = ref([])

    const columns = [
      {
        name: 'image',
        required: true,
        label: '이미지',
        align: 'center',
        src:'src',
        field: row => row.name,
        format: val => `${val}`,
      },
      { name: 'product-information', align: 'center', label: '상품정보', field: 'productInformation' },
      { name: 'purchase-amount', align: 'center', label: '판매가', field: 'purchase-amount' },
      { name: 'choose', align: 'center', label: '선택', field: 'choose',  }
    ]

    const rows = [
      {
        name:'row1',
        num: ref(1),
        src: '/img/datail_img/slide01.jpg',
        productInformation: '나만의 단식원 하루비움 호박쉐이크',
        price: ref(30000),
      },
      {
        name:'row2',
        num: ref(1),
        src: '/img/datail_img/slide01.jpg',
        productInformation: '나만의 단식원 하루비움 호박쉐이크',
        price: ref(30000),
      },
      {
        name:'row3',
        num: ref(1),
        src: '/img/datail_img/slide01.jpg',
        productInformation: '나만의 단식원 하루비움 호박쉐이크',
        price: ref(30000),
      },
      
      
    ]


    return {
      selected,
      columns,
      rows,
    }
  },
  
}
</script>

<style scoped>

  .display-row button{
    margin-top: 0;
  }
  .border-top{
    border-top: 1px solid #666;
  }
  .width-120{
    width: 120px;
  }
  .width-150{
    width: 150px;
  }

</style>