<template>
  <header>
    <MainHeader/>
  </header>
  <main v-if="$route.name !== 'Main'" style="max-width: 1620px; margin: 0 auto;">
    <RouterView/>
  </main>
  <main v-else>
    <RouterView/>
  </main>
  <footer class="bg-grey-10 q-py-lg">
    <MainFooter/>
  </footer>
  <div>
    <MoveScroll/>
  </div>
</template>

<script setup>
import MainHeader from "./components/Header.vue";
import MainFooter from "./components/Footer.vue";
import MoveScroll from "./components/MoveScroll.vue"

</script>

<style lang="css" src="./assets/app.css"></style>
