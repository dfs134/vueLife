<template>
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
      hide-bottom
      class="text-center"
    >
      <template v-for="column in columns" v-slot:[`body-cell-${column.name}`]="{ row }" :key="column">
        <td class="custom-column" v-if="column.name === 'image'">
          <img :src="row[column.src]" alt="" style="max-width: 100px;"/>
        </td>
        <td class="custom-column text-left" v-else-if="column.name === 'product-information'">
          <p>{{ row.productInformation }}</p>
          <p>옵션 : {{ row.option }}</p>
          <q-btn outline style="color: #333;" label="옵션변경" size="12px" class="q-mt-sm text-bold"/>
        </td>
        <td class="custom-column" v-else-if="column.name === 'quantity'">
          <div class="row justify-center items-center" style="flex-flow: row nowrap;">
            <p class="text-subtitle1 q-pa-lg">{{ row.num }}개</p>
            <div class="column">
              <q-btn 
                color="grey-7"
                class="col "
                size="5px"
                icon="add"
                @click="() => increment(row)"
              />
              <q-btn
                class="col"
                size="5px"
                icon="remove"
                @click="() => decrement(row)"
          
              />       
            </div>
          </div>
        </td>
        <td class="custom-column" v-else-if="column.name === 'purchase-amount'">
          <p>{{ row.price.value.toLocaleString('ko-KR') }} 원</p>
        </td>
        <td class="custom-column" v-else-if="column.name === 'discount-amount'">
          <p v-if="row.discount == ''">-</p>
          <p v-else>{{ row.discount.toLocaleString('ko-KR') }} 원</p>
        </td>
        <td class="custom-column" v-else-if="column.name === 'reserves'">
          <p v-if="row.reserves == ''">-</p>
          <p v-else>{{ row.reserves.toLocaleString('ko-KR') }} 원</p>
        </td>
        <td class="custom-column" v-else-if="column.name === 'delivery'">
          <p v-if="row.parcel == ''">무료배송</p>
          <p v-else>{{ row.parcel }} 기본배송</p>
        </td>
        <td class="custom-column" v-else-if="column.name === 'delivery-fee'">
          <p v-if="row.deliveryFee == ''">0 원</p>
          <p v-else>{{ row.deliveryFee.toLocaleString('ko-KR') }} 원</p>
        </td>
        <td class="custom-column display-column" v-else-if="column.name === 'choose'" style="height: 100%;">
          <q-btn outline label="주문하기" size="12px" class="q-mt-sm text-bold bg-grey-10 text-grey-2 width-120"/>
          <q-btn outline label="관심상품등록" size="12px" class="q-mt-sm text-bold text-grey-10 width-120"/>
          <q-btn outline label="X 삭제" size="12px" class="q-mt-sm text-bold text-grey-10 width-120"/>
        </td>
      </template>
    </q-table>
    <div class="row bg-grey-2 text-black q-pa-lg" style="border-top: 1px solid #0000001f; border-bottom: 1px solid #0000001f;">
        <div class="col">
          <p>[기본배송]</p>
        </div>
        <div class="col text-right">
          <p v-if="totalPrice.delivery.toLocaleString('ko-KR') === '0'">
            상품구매금액 
            <strong>{{ totalPrice.price.toLocaleString('ko-KR') }}</strong>원 + 배송비
            <strong>{{ totalPrice.delivery.toLocaleString('ko-KR') }}</strong>원 (무료) = 합계 : 
            <strong>{{ totalPrice.total.toLocaleString('ko-KR') }}</strong>원
          </p> 
          <p v-else>
            상품구매금액 
            <strong>{{ totalPrice.price.toLocaleString('ko-KR') }}</strong>원 + 배송비 
            <strong>{{ totalPrice.delivery.toLocaleString('ko-KR') }}</strong>원 = 합계 : 
            <strong>{{ totalPrice.total.toLocaleString('ko-KR') }}</strong>원
          </p>
        </div>
    </div>
    <div class="row text-black q-pa-lg ">
      <div class="col display-row">
        <p class="text-subtitle2">선택상품을</p>
        <q-btn outline label="X 삭제하기" size="12px" class="q-mt-sm q-mx-sm text-bold bg-grey-7 text-grey-2 width-120"/>
        <q-btn outline label="해외배송상품 장바구니로 이동" size="12px" class="q-mt-sm q-mx-sm text-bold text-grey-10 width-220"/>
      </div>
      <div class="col text-right">
        <q-btn outline label="장바구니비우기" size="12px" class="q-mt-sm q-mx-sm text-bold text-grey-10 width-120"/>
        <q-btn outline label="견적서출력" size="12px" class="q-mt-sm q-mx-sm text-bold text-grey-10 width-120"/>
      </div>
    </div>
    <q-table
      flat bordered
      :rows="totalRows"
      :columns="totalColumns"
      row-key="name"
      hide-bottom
      :separator="separator"
      class="no-pointer-events"
      :table-header-class="{ 'thead-class': [Boolean] }"
    >
      <template v-slot:body="props">
          <q-tr :props="props" class="text-bold">
            <q-td key="price" :props="props">
              {{ totalPrice.price.toLocaleString('ko-KR') }} 원
            </q-td>
            <q-td key="delivery" :props="props">
              + {{ totalPrice.delivery.toLocaleString('ko-KR') }} 원
            </q-td>
            <q-td key="payment" :props="props">
              = {{ totalPrice.total.toLocaleString('ko-KR') }} 원
            </q-td>
          </q-tr>
      </template>
    </q-table>
    <div class="col text-center q-mt-lg">
      <q-btn outline label="전체상품주문" size="12px" class="q-pa-sm q-mx-sm text-bold bg-grey-10 text-grey-2 width-120"/>
      <q-btn outline label="선택상품주문" size="12px" class="q-pa-sm q-mx-sm text-bold bg-grey-7 text-grey-2 width-120"/>
      <q-btn outline label="쇼핑계속하기" size="12px" class="q-pa-sm q-mx-sm text-bold bg-grey-2 text-grey-8 width-120"/>
    </div>
    <div class="col text-left q-mt-xl text-grey-8" style="border: 1px solid #ccc;">
      <p class="text-h6 q-pt-lg q-pa-md" style="border-bottom: 1px solid #ccc;">이용안내</p>
      <div class="q-py-sm text-subtitle1">
        <ul style="list-style: inside;" class="q-pa-md">
          <p>장바구니 이용안내</p>
          <li v-for="(item, index) in basketGuide" :key="index" class="text-subtitle2">{{ item.text }}</li>
        </ul>
        
        <ul style="list-style: inside;" class="q-pa-md">
          <p>무이자할부 이용안내</p>
          <li v-for="(item, index) in installmentGuide" :key="index" class="text-subtitle2">{{ item.text }}</li>
        </ul>
      </div>  
    </div>
  </div>
</template>

<script>
import { ref, watch, reactive } from 'vue'
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
        sortable: true
      },
      { name: 'product-information', align: 'center', label: '상품정보', field: 'productInformation' },
      { name: 'quantity', align: 'center', label: '수량', field: 'quantity' },
      { name: 'purchase-amount', align: 'center', label: '상품구매금액', field: 'purchase-amount' },
      { name: 'discount-amount', align: 'center', label: '할인금액', field: 'discount-amount' },
      { name: 'reserves', align: 'center', label: '적립금', field: 'reserves' },
      { name: 'delivery', align: 'center', label: '배송구분', field: 'delivery', },
      { name: 'delivery-fee', align: 'center', label: '배송비', field: 'delivery-fee',  },
      { name: 'choose', align: 'center', label: '선택', field: 'choose',  }
    ]

    const rows = [
      {
        name:'row1',
        num: ref(1),
        src: '/img/datail_img/slide01.jpg',
        productInformation: '나만의 단식원 하루비움 호박쉐이크',
        option:'[30%]호박쉐이크 1박스(10포)',
        price: ref(30000),
        discount: '',
        reserves: 1000,
        parcel: '',
        deliveryFee: 3000,
      },
      {
        name:'row2',
        num: ref(1),
        src: '/img/datail_img/slide01.jpg',
        productInformation: '나만의 단식원 하루비움 호박쉐이크',
        option:'[30%]호박쉐이크 1박스(10포)',
        price: ref(30000),
        discount: '',
        reserves: 1000,
        parcel: '',
        deliveryFee: 3000,
      },
      {
        name:'row3',
        num: ref(1),
        src: '/img/datail_img/slide01.jpg',
        productInformation: '나만의 단식원 하루비움 호박쉐이크',
        option:'[30%]호박쉐이크 1박스(10포)',
        price: ref(30000),
        discount: '',
        reserves: '1000',
        parcel: '',
        deliveryFee: 3000,
      },
      
    ]

    const totalPrice = reactive({
      price: 0,
      delivery: 0,
      total: 0
    });

    const initialPrice = ref(rows[0].price.value);

    const increment = (row) => {

      const isSelected = selected.value.some((selectedRow) => selectedRow.name === row.name);
      if (isSelected){
        row.num.value++;
        row.price.value += initialPrice.value;
        totalPrice.price += initialPrice.value;

        if (totalPrice.price > 50000) {
          totalPrice.delivery = 0;
        }
        totalPrice.total = totalPrice.price + totalPrice.delivery;
      }

    };

    const decrement = (row) => {
      const isSelected = selected.value.some((selectedRow) => selectedRow.name === row.name);
      if(isSelected) {
        if (row.num.value > 1) {
          row.num.value--;
          row.price.value -= initialPrice.value;
          totalPrice.price -= initialPrice.value;

          if (totalPrice.price < 50000) {
            totalPrice.delivery = 3000
          }
        }
        
        totalPrice.total = totalPrice.price + totalPrice.delivery;
      }
      
    }


    watch(selected, (newSelected) => {
      totalPrice.price = newSelected.reduce((total, index) => {
        return total + index.price
      }, 0)
      totalPrice.delivery = newSelected.reduce((total, index) =>{
        return total + index.deliveryFee
      }, 0)
      if(totalPrice.price > 50000){
        totalPrice.delivery = 0
        totalPrice.total = totalPrice.price
      } else {
        totalPrice.total = totalPrice.price + totalPrice.delivery
      }
      
    });


    const totalColumns = [
      { name: 'price', align: 'center', label: '총 상품금액', field: 'price', style:'font-weight:bold; font-size:18px' },
      { name: 'delivery', align: 'center', label: '총 배송비', field: 'delivery', style:'font-weight:bold; font-size:18px' },
      { name: 'payment', align: 'center', label: '결제예정금액', field: 'payment', style:'font-weight:bold; font-size:18px' },
    ]
    
    const totalRows = [
      {
        price: 30000,
        delivery: 3000,
        payment: 33000,
      }
    ]

    const basketGuide = [
      {text : '해외배송 상품과 국내배송 상품은 함께 결제하실 수 없으니 장바구니 별로 따로 결제해 주시기 바랍니다.'},
      {text : '해외배송 가능 상품의 경우 국내배송 장바구니에 담았다가 해외배송 장바구니로 이동하여 결제하실 수 있습니다.'},
      {text : '선택하신 상품의 수량을 변경하시려면 수량변경 후 [변경] 버튼을 누르시면 됩니다.'},
      {text : '[쇼핑계속하기] 버튼을 누르시면 쇼핑을 계속 하실 수 있습니다.'},
      {text : '장바구니와 관심상품을 이용하여 원하시는 상품만 주문하거나 관심상품으로 등록하실 수 있습니다.'},
      {text : '파일첨부 옵션은 동일상품을 장바구니에 추가할 경우 마지막에 업로드 한 파일로 교체됩니다.'},
    ]

    const installmentGuide = [
      {text: "상품별 무이자할부 혜택을 받으시려면 무이자할부 상품만 선택하여 [주문하기] 버튼을 눌러 주문/결제 하시면 됩니다."},
      {text: "[전체 상품 주문] 버튼을 누르시면 장바구니의 구분없이 선택된 모든 상품에 대한 주문/결제가 이루어집니다."},
      {text: "단, 전체 상품을 주문/결제하실 경우, 상품별 무이자할부 혜택을 받으실 수 없습니다."},
      {text: "무이자할부 상품은 장바구니에서 별도 무이자할부 상품 영역에 표시되어, 무이자할부 상품 기준으로 배송비가 표시됩니다."},
      {text: "실제 배송비는 함께 주문하는 상품에 따라 적용되오니 주문서 하단의 배송비 정보를 참고해주시기 바랍니다."},
    ]

    return {
      selected,
      columns,
      rows,
      totalColumns,
      totalRows,
      increment,
      decrement,
      totalPrice,
      basketGuide,
      installmentGuide,
      separator: ref('vertical'),
      getSelectedString () {
        return selected.value.length === 0 ? '' : `${selected.value.length} record${selected.value.length > 1 ? 's' : ''} selected of ${rows.length}`
      },
      
    }
  },
  
}
</script>

<style scoped>
  p.text-subtitle1{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 28px;
    text-align: center;
  }
  .display-row button{
    margin-top: 0;
  }
  .no-pointer-events{
    border-top: 1px solid #666;
    border-bottom: 1px solid #666;
  }
  .width-120{
    width: 120px;
  }
  .width-220{
    width: 220px;
  }
</style>
<style>
  .thead-class th{
    font-size: 16px !important;
    font-weight: bold !important;
  }
</style>