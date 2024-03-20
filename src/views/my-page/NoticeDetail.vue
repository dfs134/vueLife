<template>
  <div class="text-center q-pa-lg">
    <h4 class="text-bold">공지사항</h4>
  </div>
  <div class="q-pa-md example-row-mix-and-match">

    <div class="row q-pa-md bd-bottom bd-top">
      <div class="col col-md-2 col-sm-2 col-xs-2">제목</div>
      <div class="col col-md-10 col-sm-10 col-xs-10">{{ notice.title }}</div>
    </div>
    <div class="row q-pa-md bd-bottom">
      <div class="col col-md-2 col-sm-2 col-xs-2">작성자</div>
      <div class="col col-md-10 col-sm-10 col-xs-10">{{ notice.writer }}</div>
    </div>
    <div class="row q-pa-md">
      <div class="col col-md-2 col-sm-2 col-xs-2"><strong>작성일</strong>&nbsp; {{ notice.dateCreated }}</div>
      <div class="col col-md-2 col-sm-10 col-xs-10"><strong>조회수</strong>&nbsp; {{ notice.views }}</div>
    </div>
    <div class="row q-pa-md justify-center">
      <template v-if="notice.text === ''">
        <img :src="notice.imagePath" alt="">
      </template>
      <template v-else>
        <p class="text-center" style="line-height: 35px;" v-html="handleNewLine(notice.text)"></p>
      </template>
    </div>

  </div>
</template>

<script>
import { useRoute } from 'vue-router';
export default {
  data() {
    return {
      notice: {}
    }
  },
  methods: {
    handleNewLine(str) {
      return str.replace(/\./g, ".<br>");
    },
  },
  setup() {
    const route = useRoute();
    const title = route.query.title;
    const writer = route.query.writer;
    const dateCreated = route.query.dateCreated;
    const views = route.query.views;
    const img = route.query.img;
    const imagePath = `/img/notice/${img}.png`;
    const text = route.query.text;

    const notice = {
      title,
      writer,
      dateCreated,
      views,
      imagePath,
      text
    };

    return {
      notice,
    };
  },
  

}
</script>