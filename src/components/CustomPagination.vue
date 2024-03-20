<template>
  <div class="row justify-center q-mt-md">
    <q-btn
      v-if="pagesNumber > 2"
      icon="first_page"
      color="grey-8"
      round
      dense
      flat
      :disable="isFirstPage"
      @click="firstPage"
    />
    <q-btn
      icon="chevron_left"
      color="grey-8"
      round
      dense
      flat
      :disable="isFirstPage"
      @click="prevPage"
    />
    <q-pagination
      v-model="pagination.page"
      color="grey-8"
      :max="pagesNumber"
      size="md"
      class="q-px-md"
    />
    <q-btn
      icon="chevron_right"
      color="grey-8"
      round
      dense
      flat
      :disable="isLastPage"
      @click="nextPage"
    />
    <q-btn
      v-if="pagesNumber > 2"
      icon="last_page"
      color="grey-8"
      round
      dense
      flat
      :disable="isLastPage"
      @click="lastPage"
    />
  </div>
</template>

<script>
import { ref, computed } from 'vue';

export default {
  props: {
    rows: Array,
    pagination: Object,
  },
  setup(props) {
    const pagesNumber = computed(() =>
      Math.ceil(props.rows.length / props.pagination.rowsPerPage)
    );
    const isFirstPage = computed(() => props.pagination.page === 1);
    const isLastPage = computed(() => props.pagination.page === pagesNumber.value);

    const firstPage = () => {
      props.pagination.page = 1;
    };

    const prevPage = () => {
      if (!isFirstPage.value) {
        props.pagination.page -= 1;
      }
    };

    const nextPage = () => {
      if (!isLastPage.value) {
        props.pagination.page += 1;
      }
    };

    const lastPage = () => {
      props.pagination.page = pagesNumber.value;
    };

    return {
      pagesNumber,
      isFirstPage,
      isLastPage,
      firstPage,
      prevPage,
      nextPage,
      lastPage,
    };
  },
};
</script>