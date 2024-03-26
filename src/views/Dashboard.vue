<template>
  <div>
    <BannerSection />
    <PopularPro />
    <CategorieS />    
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import BannerSection from '../components/BannerSection.vue';
import CategorieS from '../components/CategorieS.vue';
import PopularPro from '../components/PopularPro.vue';

export default defineComponent({
  components: {
    BannerSection,
    CategorieS,
    PopularPro
  }
});
</script>
<style lang="scss" scoped>
</style>