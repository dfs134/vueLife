<template>
  <div class="text-center q-pa-lg">
    <h4 class="text-bold">공지사항</h4>
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
      { name: 'sodium', label: 'Sodium (mg)', field: 'sodium' },
      { name: 'calcium', label: 'Calcium (%)', field: 'calcium', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) },
      { name: 'iron', label: 'Iron (%)', field: 'iron', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) },
      { name: 'img', label: 'Image', field: 'img', sortable: false },
      { name: 'text', label: 'Text', field: 'text', sortable: false },
    ]

    const rows = [
      { id: 1, title: '생활약속 올리브영 입점안내', writer: '생활약속', dateCreated: '2022-08-30 18:28:54	', views: '1330', img:'noticeImg', text:''  },
      { id: 2, title: '5월 공휴일 출고일정 및 고객센터 운영 안내', writer: '생활약속', dateCreated: '2022-08-30 18:28:54	', views: '1330', img:'', text:'5월 1일 근로자의 날 / 5월 5일 어린이날 로 인하여 제품 출고가 진행되지 않으니, 주문시 참고 부탁드립니다.'  },
      { id: 3, title: '미 사용 적립금 소멸 예정안내', writer: '생활약속', dateCreated: '2022-08-30 18:28:54	', views: '1330', img:'', text:'소멸된 적립금은 복구 처리가 불가하오니, 빠른 사용을 권장 드립니다.'  },
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