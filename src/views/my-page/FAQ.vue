<template>
  <div class="text-center q-pa-lg">
    <h4 class="text-bold">FQA</h4>
  </div>
  <NavTabs/>

  <div class="q-pa-md">
    <q-table
      flat
      ref="tableRef"
      :class="tableClass"
      tabindex="0"
      title=""
      :rows="rows"
      row-key="name"
      v-model:selected="selected"
      v-model:pagination="pagination"
      :filter="filter"
      @keydown="onKey"
      @row-click = "editBtn"
    >
      <template v-slot:top-right>
        <q-input borderless dense debounce="300" v-model="filter" placeholder="검색" outlined >
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>

      <template v-slot:header="props">
        <q-tr :props="props">
          <q-th
            v-for="col in props.cols.filter(col => col.name !== 'img' && col.name !== 'text')"
            :key="col.name"
            :props="props"
            class="text-italic bg-grey-3"
          >
            {{ getTheadTitle(col.name) }}
          </q-th>
        </q-tr>
      </template>

      <template v-slot:body-cell-name="props">
        <q-td :props="props" :class="navigationActive ? 'cursor-pointer' : ''" @click="navigationActive ? navigateTo(props.row) : null">
          {{ props.row.name }}
        </q-td>
      </template>
      <template v-slot:body-cell-img="">
        <!-- This template slot is added for the 'img' property -->
      </template>
      <template v-slot:body-cell-text="">
        <!-- This template slot is added for the 'text' property -->
      </template>
      
    </q-table>
  </div>
</template>

<script>
import { ref, computed, nextTick, toRaw } from 'vue'
import { useRouter } from 'vue-router';
import NavTabs from './components/NavTabs.vue'
export default {
  components:{
    NavTabs
  },
  setup() {
    const router = useRouter();

    const columns = [
      {
        name: 'desc',
        required: true,
        label: 'Notice',
        align: 'left',
        field: row => row.name,
        format: val => `${val}`,
        sortable: true
      },
      { name: 'calories', align: 'center', label: 'Calories', field: 'calories', sortable: true },
      { name: 'fat', label: 'Fat (g)', field: 'fat', sortable: true },
      { name: 'carbs', label: 'Carbs (g)', field: 'carbs' },
      { name: 'protein', label: 'Protein (g)', field: 'protein' },

    ]

    const rows = [
      { id: 1, title: '예약발송 제품과 일반제품 함께 주문했는데 일반제품 선출고 가능한가요?', writer: '생활약속', dateCreated: '2022-08-30 18:28:54	', views: '1330', img:'', text:'예약발송과 일반제품 함께 구매시 예약발송 일자에 두제품 함께 출고가 진행되고 있습니다. 선출고를 원하시는 경우 게시판으로 기재 부탁드리며, 무료배송 이하의 금액의 경우 배송비는 고객님께서 부과하셔야 햐는 점 양해부탁드립니다. 또한 주문자명과 연락처, 주소가 동일한 경우 전산에서 자동으로 합배송 처리가 진행되고 있습니다. 일반 주문건 선출고를 원하시는 경우 주문 후 꼭! 게시판으로 선출고 요청 부탁드립니다. (많은 주문건으로 인하여 개별적으로 연락드리기 어려운 점 양해부탁드립니다). 더 궁금하신 사항은 게시판 문의 또는 카카오톡 플러스 친구 (@생활약속)에 남겨주시면, 확인 후 안내드리겠습니다. -생활약속 고객센터(1899-5541) 운영시간 / 월~금 (주말 및 공휴일 제외) 11:00 ~ 17:30 (점심12:00~13:30) '  },
      { id: 2, title: '주문했는데 언제 출고되나요?', writer: '생활약속', dateCreated: '2022-08-30 18:28:54	', views: '1330', img:'', text:'생활약속의 주문 건은 오후 2시 이전 주문 건들은 당일출고가 진행되고 있습니다.(오전 10시 1차출고 / 오후 2시 2차출고)오후 2시 이후 주문 건들은 익일 출고가 진행되며, 공휴일 및 주말에는 배송업무가 진행되지 않습니다.우체국 택배를 이용하고 있으며, 기본 배송일 1~2일 정도 소요되나 택배사 사정으로 지연될 수 있는 점 참고 부탁드립니다.(이벤트, 공휴일 후 다음날은 주문폭주로 인하여 출고가 지연될 수 있습니다).더 궁금하신 사항은 게시판 문의 또는 카카오톡 플러스 친구 (@생활약속)에 남겨주시면, 확인 후 안내드리겠습니다.-생활약속 고객센터(1899-5541) 운영시간 / 월~금 (주말 및 공휴일 제외) 11:00 ~ 17:30 (점심12:00~13:30)'  },
      { id: 3, title: '배송준비중 단계인데 수령인 정보(주소,연락처) 변경 또는 취소가 가능한가요?', writer: '생활약속', dateCreated: '2022-08-30 18:28:54	', views: '1330', img:'', text:'상품준비 중 일 경우 고객님께서 마이페이지에서 배송정보 수령인 수정 및 취소가 가능하나, 배송준비중 단계에서는 고객님께서 직접 수정 또는 취소신청 불가합니다.고객센터(1899-5541)로 연락 주시거나, 게시판으로 문의 글 남겨주시면 변경 가능 여부 확인 후 도움드리도록 하겠습니다.확인 시 운송장번호가 발급된 경우 정보 변경 또는 취소처리가 불가할 수 있는 점 양해부탁드립니다.더 궁금하신 사항은 게시판 문의 또는 카카오톡 플러스 친구 (@생활약속)에 남겨주시면, 확인 후 안내드리겠습니다.-생활약속 고객센터(1899-5541) 운영시간 / 월~금 (주말 및 공휴일 제외) 11:00 ~ 17:30 (점심12:00~13:30)'  },
    ]

    const tableRef = ref(null)

    const navigationActive = ref(false)
    const pagination = ref({})
    const selected = ref([])

    return {
      tableRef,
      filter: ref(''),
      columns,
      rows,
      navigationActive,
      pagination,
      selected,
      
      tableClass: computed(() => navigationActive.value === true ? 'shadow-8 no-outline' : null),
      
      editBtn(e, index) {
        const title = index.title;
        const writer = index.writer;
        const dateCreated = index.dateCreated;
        const views = index.views;
        const img = index.img;
        const text = index.text;

        const routeParams = {
          path: '/NoticeDetail',
          query: { 
            title: title,
            writer: writer,
            dateCreated: dateCreated,
            views: views,
            img: img,
            text: text
          }
        };
        router.push(routeParams);

      },

      getTheadTitle(titleName) {
        if (titleName === 'id') {
          return '번호';
        } else if (titleName === 'title') {
          return '제목';
        } else if (titleName === 'writer') {
          return '작성자';
        } else if (titleName === 'dateCreated') {
          return '작성일';
        } else if (titleName === 'views') {
          return '조회';
        } 
        return titleName;
      },


      onKey (evt) {
        if (
          navigationActive.value !== true ||
          [ 33, 34, 35, 36, 38, 40 ].indexOf(evt.keyCode) === -1 ||
          tableRef.value === null
        ) {
          return
        }

        evt.preventDefault()

        const { computedRowsNumber, computedRows } = tableRef.value

        if (computedRows.length === 0) {
          return
        }

        const currentIndex = selected.value.length > 0 ? computedRows.indexOf(toRaw(selected.value[ 0 ])) : -1
        const currentPage = pagination.value.page
        const rowsPerPage = pagination.value.rowsPerPage === 0 ? computedRowsNumber : pagination.value.rowsPerPage
        const lastIndex = computedRows.length - 1
        const lastPage = Math.ceil(computedRowsNumber / rowsPerPage)

        let index = currentIndex
        let page = currentPage

        switch (evt.keyCode) {
          case 36: // Home
            page = 1
            index = 0
            break
          case 35: // End
            page = lastPage
            index = rowsPerPage - 1
            break
          case 33: // PageUp
            page = currentPage <= 1 ? lastPage : currentPage - 1
            if (index < 0) {
              index = 0
            }
            break
          case 34: // PageDown
            page = currentPage >= lastPage ? 1 : currentPage + 1
            if (index < 0) {
              index = rowsPerPage - 1
            }
            break
          case 38: // ArrowUp
            if (currentIndex <= 0) {
              page = currentPage <= 1 ? lastPage : currentPage - 1
              index = rowsPerPage - 1
            }
            else {
              index = currentIndex - 1
            }
            break
          case 40: // ArrowDown
            if (currentIndex >= lastIndex) {
              page = currentPage >= lastPage ? 1 : currentPage + 1
              index = 0
            }
            else {
              index = currentIndex + 1
            }
            break
        }

        if (page !== pagination.value.page) {
          pagination.value.page = page

          nextTick(() => {
            const { computedRows } = tableRef.value
            selected.value = [computedRows[ Math.min(index, computedRows.length - 1) ]]
            tableRef.value.$el.focus()
          })
        }
        else {
          selected.value = [computedRows[ index ]]
        }
      }
    }

  }
}
</script>