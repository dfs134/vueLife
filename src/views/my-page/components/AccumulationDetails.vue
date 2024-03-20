<template>
  <div class="q-py-md">
    <q-table
      :rows="rows"
      :columns="columns"
      row-key="name"
      flat bordered
      class="order-table"
      v-model:pagination="pagination"
      :rows-per-page-options="[0]"
      hide-pagination
    >
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td key="name" :props="props" style="width: 20%;">
            {{ props.row.name }}
          </q-td>
          <q-td key="calories" :props="props" style="width: 20%;">
            {{ props.row.calories.toLocaleString('ko-KR') }}
          </q-td>
          <q-td key="fat" :props="props" style="width: 20%;">
            {{ props.row.fat }}
          </q-td>
          <q-td key="fat" :props="props" style="width: 40%;">
            {{ props.row.carbs }}
          </q-td>
        </q-tr>
      </template>

      <template v-slot:no-data="{ }">
        <div class="full-width row flex-center text-accent q-gutter-sm">
          <span class="text-bold text-grey-7 text-h6 q-py-xl">
            적립금 내역이 없습니다.
          </span>
        </div>
      </template>

    </q-table>
    <custom-pagination :rows="rows" :pagination="pagination" />

  </div>
</template>
<script>
import CustomPagination from '@/components/CustomPagination.vue'
import { ref, onMounted } from 'vue'
export default {
  components:{
    CustomPagination
  },
  setup() {
    const pagination = ref({
      sortBy: 'desc',
      descending: false,
      page: 1,
      rowsPerPage: 5

    })

    const columns = [
      {
        name: 'name',
        required: true,
        label: '주문날짜',
        align: 'center',
        field: row => row.name,
        format: val => `${val}`,
      },
      { name: 'calories', align: 'center', label: '적립금', field: 'calories'},
      { name: 'fat', align: 'center', label: '관련주문', field: 'fat'},
      { name: 'carbs', align: 'center', label: '내용', field: 'carbs'},
    ]
    const rows = [
      {
        name: '2023-01-20',
        calories: 159,
        fat: '20230109-0002125',
        carbs: '회원등급 적립금',
      },
      {
        name: '2023-01-20',
        calories: 15900,
        fat: '20230109-0002125',
        carbs: '회원등급 적립금',
      },
      {
        name: '2023-01-20',
        calories: 159,
        fat: '20230109-0002125',
        carbs: '회원등급 적립금',
      },
      {
        name: '2023-01-20',
        calories: 15900,
        fat: '20230109-0002125',
        carbs: '회원등급 적립금',
      },
      {
        name: '2023-01-20',
        calories: 159,
        fat: '20230109-0002125',
        carbs: '회원등급 적립금',
      },
      {
        name: '2023-01-20',
        calories: 15900,
        fat: '20230109-0002125',
        carbs: '회원등급 적립금',
      },
      {
        name: '2023-01-20',
        calories: 159,
        fat: '20230109-0002125',
        carbs: '회원등급 적립금',
      },
      {
        name: '2023-01-20',
        calories: 15900,
        fat: '20230109-0002125',
        carbs: '회원등급 적립금',
      },
      {
        name: '2023-01-20',
        calories: 159,
        fat: '20230109-0002125',
        carbs: '회원등급 적립금',
      },
      {
        name: '2023-01-20',
        calories: 15900,
        fat: '20230109-0002125',
        carbs: '회원등급 적립금',
      },
      {
        name: '2023-01-20',
        calories: 159,
        fat: '20230109-0002125',
        carbs: '회원등급 적립금',
      },
      {
        name: '2023-01-20',
        calories: 15900,
        fat: '20230109-0002125',
        carbs: '회원등급 적립금',
      },
    ]

    onMounted(() => {

    });

    return {
      columns,
      rows,
      pagination,
      
    }
  }
}
</script>

<style>
  .order-table.q-table--no-wrap th, .order-table.q-table--no-wrap td {
    white-space: break-spaces !important;
  }
</style>