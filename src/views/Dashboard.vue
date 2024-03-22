<template>
  <div>
    <Banner/>
    <Popular/>
    <Categories/>    
  </div>
</template>

<script>
import Banner from '../components/Banner.vue'
import Categories from '../components/Categories.vue'
import Popular from '../components/Popular.vue'

  export default {
    components:{
      Banner,
      Categories,
      Popular
    },
    data() {
      return {
        
      }
    },
    
  }
</script>

<style lang="scss" scoped>

</style>
