<template>
  <div>
    <NavBar/>
    <router-view></router-view>
    <FooteR/>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import FooteR from './components/FooteR.vue'

export default {
  components: {
    NavBar,
    FooteR
  }
}
</script>

<style>
</style>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>