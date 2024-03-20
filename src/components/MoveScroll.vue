<template>
  <div>
    <q-btn round color="cyan-10" icon="arrow_upward" @click="scrollToTop" class="scroll-top"/>
    
  </div>
  <div>
    <q-btn round color="cyan-10" icon="arrow_downward" @click="scrollToBottom" class="scroll-bottom">
    </q-btn>
  </div>
</template>
<script>

export default {
  setup() {
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth' 
      });
    };

    const scrollToBottom = () => {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth'
      });
    };


    return {
      scrollToTop,
      scrollToBottom
    };
  }
}
</script>

<style scoped>
  .scroll-top{
    position: fixed;
    right: 5%;
    bottom: 13%;
  }
  .scroll-bottom{
    position: fixed;
    right: 5%;
    bottom: 8%;
  }
</style>