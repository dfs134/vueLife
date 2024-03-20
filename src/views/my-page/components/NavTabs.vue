<template>
  <div class="q-pa-md">
    <div class="q-gutter-y-md" style="max-width: 1600px; margin: 0 auto;">
      <q-card>
        <q-tabs
          v-model="tab"
          dense
          class="text-grey"
          active-color="primary"
          indicator-color="primary"
          align="justify"
          narrow-indicator
        >
          <q-route-tab label="공지사항" to="/Notice"/>
          <q-route-tab label="FAQ" to="/FAQ"/>
          <q-route-tab label="REVIEW" to="/Review"/>
          <q-route-tab label="Q&A" to="/Notice"/>
        </q-tabs>

        <q-separator />
      </q-card>
    </div>
  </div>
</template>
<script>
import { ref } from 'vue'
export default {
  setup() {
    return {
      tab: ref('mails'),
    }
  }
}
</script>