<template>
  <div class="row justify-start text-left q-mb-md text-grey-8 items-center" style="border: 1px solid #ccc;">
    <div class="q-px-md col" style="max-width: 220px;">
      <q-btn-dropdown label="전체 주문처리상태" outline>
        <q-list>
          <q-item clickable v-close-popup @click="onItemClick" v-for="(item, index) in items" :key="index">
            <q-item-section>
              <q-item-label>{{ item.text }}</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-btn-dropdown>
    </div>
    <div class="q-px-md col" style="max-width: 370px;">
      <q-btn-group v-for="(item, index) in items2" :key="index" flat>
        <q-btn class="text-black" color="grey-3" glossy :label="item.text" />
      </q-btn-group>
    </div>
    <div class="q-px-md col" style="max-width: 300px;">
      <q-input filled v-model="formattedDateRange " :rules="['dateRange']" class="q-py-sm">
        <template v-slot:append>
          <q-icon name="event" class="cursor-pointer">
            <q-popup-proxy cover transition-show="scale" transition-hide="scale">
              <q-date v-model="dateRange" range>
                <div class="row items-center justify-end">
                  <q-btn v-close-popup label="Close" color="primary" flat />
                </div>
              </q-date>
            </q-popup-proxy>
          </q-icon>
        </template>
      </q-input>
    </div>
    <div class="q-px-md col">
      <q-btn color="black" label="조회"/> 
    </div>
  </div>
  <div class="row justify-start text-left q-mb-md text-grey-8 items-center">
    <ul>
      <li class="q-pb-xs" v-for="(item, index) in items3" :key="index">{{ item.text }}</li>
    </ul>
  </div>
  <div class="q-py-md">
    <q-table
      flat
      :rows="rows"
      :columns="columns"
      row-key="name"
      v-model:pagination="pagination"
      :rows-per-page-options="[0]"
      hide-pagination
      class="text-center border-top"
      :filter="filter"
    >
      <template v-slot:top>
        <p class="text-subtitle1 text-weight-bold">주문 상품 정보</p>
        <q-input borderless dense debounce="300" color="primary" v-model="filter">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>
      <template v-for="column in columns" v-slot:[`body-cell-${column.name}`]="{ row }" :key="column">
        <td class="custom-column" v-if="column.name === 'order-number'">
          <p>{{ row.date }}</p>
          <p>[{{ row.order }}]</p>
        </td>
        <td class="custom-column" v-if="column.name === 'image'">
          <img :src="row[column.src]" alt="" style="max-width: 100px;"/>
        </td>
        <td class="custom-column text-left" v-else-if="column.name === 'product-information'">
          <p class="q-pb-md">{{ row.productInformation }}</p>
          <p>[ 옵션: {{ row.option }} ]</p>
        </td>

        <td class="custom-column" v-else-if="column.name === 'price-num'">
          <p>{{ row.num }}</p>
        </td>

        <td class="custom-column" v-else-if="column.name === 'purchase-amount'">
          <p>{{ row.price.value.toLocaleString('ko-KR') }} 원</p>
        </td>
      
        <td class="custom-column display-column" v-else-if="column.name === 'situation'" style="height: 100%;">
          <p>{{ row.deliveryStatus }}</p>
          <p>{{ row.shippingCompany }}</p>
          <p>[{{ row.shippingNumber }}]</p>
          <q-btn outline label="구매후기" size="12px" class="q-my-sm text-bold bg-grey-10 text-grey-2 width-120"/>
        </td>

        <td class="custom-column" v-else-if="column.name === 'other'">
          <p>-</p>
        </td>
      </template>
    </q-table>
    <custom-pagination :rows="rows" :pagination="pagination" />
  </div>
</template>

<script>
import CustomPagination from '@/components/CustomPagination.vue'
import { ref, computed } from 'vue'
export default {
  components:{
    CustomPagination
  },
  setup() {

    const items = [
      {text : '전체 주문처리상태'},
      {text : '입급전'},
      {text : '배송준비중'},
      {text : '배송중'},
      {text : '배송완료'},
      {text : '교환'},
      {text : '취소'},
      {text : '반품'},
    ]
    const items2 = [
      {text : '오늘'},
      {text : '1주일'},
      {text : '1개월'},
      {text : '3개월'},
      {text : '6개월'},
    ]
    const items3 = [
      { text : '기본적으로 최근 3개월간의 자료가 조회되며, 기간 검색시 주문처리완료 후 36개월 이내의 주문내역을 조회하실 수 있습니다.' },
      { text : '완료 후 36개월 이상 경과한 주문은 [과거주문내역]에서 확인할 수 있습니다.' },
      { text : '주문번호를 클릭하시면 해당 주문에 대한 상세내역을 확인하실 수 있습니다.' },
      { text : '취소/교환/반품 신청은 배송완료일 기준 7일까지 가능합니다.' },
    ]

    const today = new Date();
    const from = new Date(today);
    from.setDate(today.getDate() - 1); // Set the default start date (e.g., 10 days ago)
    const to = new Date(today); // Set the default end date as today
    const dateRange = ref({ from: from.toISOString().slice(0, 10), to: to.toISOString().slice(0, 10) });
    const formattedDateRange = computed(() => {
      const fromDate = new Date(dateRange.value.from).toLocaleDateString();
      const toDate = new Date(dateRange.value.to).toLocaleDateString();
      return `${fromDate} ~ ${toDate}`;
    });

    const selected = ref([])

    const columns = [
      { name: 'order-number', align: 'center', label: '주문번호', field: 'order-number' },
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
      { name: 'price-num', align: 'center', label: '수량', field: 'price-num', },
      { name: 'purchase-amount', align: 'center', label: '상품구매가격', field: 'purchase-amount' },
      { name: 'situation', align: 'center', label: '주문처리상태', field: 'situation', },
      { name: 'other', align: 'center', label: '취소/교환/반품', field: 'other',  }
    ]

    const rows = [
      {
        name:'row1',
        date:'2023-01-01',
        order:'20230109-0002125',
        num: 1,
        src: '/img/datail_img/slide01.jpg',
        productInformation: '나만의 단식원 하루비움 호박쉐이크',
        option:'[49%]기분전환 알파플러스(60포) (+55,500)',
        price: ref(30000),
        deliveryStatus:'입금전',
        shippingCompany:'우체국택배',
        shippingNumber:'6091412577605',
      },
      {
        name:'row2',
        date:'2023-01-01',
        order:'20230109-0002125',
        num: 2,
        src: '/img/datail_img/slide01.jpg',
        productInformation: '나만의 단식원 하루비움 호박쉐이크',
        option:'[49%]기분전환 알파플러스(60포) (+55,500)',
        price: ref(30000),
        deliveryStatus:'배송준비중',
        shippingCompany:'우체국택배',
        shippingNumber:'6091412577605',
      },
      {
        name:'row3',
        date:'2023-01-01',
        order:'20230109-0002125',
        num: 4,
        src: '/img/datail_img/slide01.jpg',
        productInformation: '나만의 단식원 하루비움 호박쉐이크',
        option:'[49%]기분전환 알파플러스(60포) (+55,500)',
        price: ref(30000),
        deliveryStatus:'배송중',
        shippingCompany:'우체국택배',
        shippingNumber:'6091412577605',
      },
      {
        name:'row1',
        date:'2023-01-01',
        order:'20230109-0002125',
        num: 1,
        src: '/img/datail_img/slide01.jpg',
        productInformation: '나만의 단식원 하루비움 호박쉐이크',
        option:'[49%]기분전환 알파플러스(60포) (+55,500)',
        price: ref(30000),
        deliveryStatus:'배송완료',
        shippingCompany:'우체국택배',
        shippingNumber:'6091412577605',
      },
      {
        name:'row2',
        date:'2023-01-01',
        order:'20230109-0002125',
        num: 2,
        src: '/img/datail_img/slide01.jpg',
        productInformation: '나만의 단식원 하루비움 호박쉐이크',
        option:'[49%]기분전환 알파플러스(60포) (+55,500)',
        price: ref(30000),
        deliveryStatus:'교환',
        shippingCompany:'우체국택배',
        shippingNumber:'6091412577605',
      },
      {
        name:'row3',
        date:'2023-01-01',
        order:'20230109-0002125',
        num: 4,
        src: '/img/datail_img/slide01.jpg',
        productInformation: '나만의 단식원 하루비움 호박쉐이크',
        option:'[49%]기분전환 알파플러스(60포) (+55,500)',
        price: ref(30000),
        deliveryStatus:'취소',
        shippingCompany:'우체국택배',
        shippingNumber:'6091412577605',
      },
      {
        name:'row1',
        date:'2023-01-01',
        order:'20230109-0002125',
        num: 1,
        src: '/img/datail_img/slide01.jpg',
        productInformation: '나만의 단식원 하루비움 호박쉐이크',
        option:'[49%]기분전환 알파플러스(60포) (+55,500)',
        price: ref(30000),
        deliveryStatus:'반품',
        shippingCompany:'우체국택배',
        shippingNumber:'6091412577605',
      },
      {
        name:'row2',
        date:'2023-01-01',
        order:'20230109-0002125',
        num: 2,
        src: '/img/datail_img/slide01.jpg',
        productInformation: '나만의 단식원 하루비움 호박쉐이크',
        option:'[49%]기분전환 알파플러스(60포) (+55,500)',
        price: ref(30000),
        deliveryStatus:'배송완료',
        shippingCompany:'우체국택배',
        shippingNumber:'6091412577605',
      },
      {
        name:'row3',
        date:'2023-01-01',
        order:'20230109-0002125',
        num: 4,
        src: '/img/datail_img/slide01.jpg',
        productInformation: '나만의 단식원 하루비움 호박쉐이크',
        option:'[49%]기분전환 알파플러스(60포) (+55,500)',
        price: ref(30000),
        deliveryStatus:'배송완료',
        shippingCompany:'우체국택배',
        shippingNumber:'6091412577605',
      },
      {
        name:'row1',
        date:'2023-01-01',
        order:'20230109-0002125',
        num: 1,
        src: '/img/datail_img/slide01.jpg',
        productInformation: '나만의 단식원 하루비움 호박쉐이크',
        option:'[49%]기분전환 알파플러스(60포) (+55,500)',
        price: ref(30000),
        deliveryStatus:'배송완료',
        shippingCompany:'우체국택배',
        shippingNumber:'6091412577605',
      },
      {
        name:'row2',
        date:'2023-01-01',
        order:'20230109-0002125',
        num: 2,
        src: '/img/datail_img/slide01.jpg',
        productInformation: '나만의 단식원 하루비움 호박쉐이크',
        option:'[49%]기분전환 알파플러스(60포) (+55,500)',
        price: ref(30000),
        deliveryStatus:'배송완료',
        shippingCompany:'우체국택배',
        shippingNumber:'6091412577605',
      },
      {
        name:'row3',
        date:'2023-01-01',
        order:'20230109-0002125',
        num: 4,
        src: '/img/datail_img/slide01.jpg',
        productInformation: '나만의 단식원 하루비움 호박쉐이크',
        option:'[49%]기분전환 알파플러스(60포) (+55,500)',
        price: ref(30000),
        deliveryStatus:'배송완료',
        shippingCompany:'우체국택배',
        shippingNumber:'6091412577605',
      },
      
      
    ]

    const pagination = ref({
      sortBy: 'desc',
      descending: false,
      page: 1,
      rowsPerPage: 3,

    })
    const filter = ref('')

    return {
      items,
      items2,
      items3,
      onItemClick () {
        // console.log('Clicked on an Item')
      },
      dateRange,
      formattedDateRange,
      selected,
      columns,
      rows,
      pagination,
      filter

    }
  }
}
</script>

<style scoped>
.justify-start ul li{
  font-size: 12px;
  list-style: outside;
}
</style>
<style>
.q-px-md.col .relative-position, .q-px-md.col .q-field__marginal {
  height: 36px !important;
}
</style>