<template>
  <div class="m-2">
    <form @submit.prevent="getSearch" class="form-inline d-flex">
      <input v-model="search" class="form-control mr-sm-2 border-0" type="search" placeholder="Buscar"/>
      <button type="submit" class="btn btn-outline-primary my-2 my-sm-0 border-0">
        <i class="fa fa-fw fa-search text-dark mr-2"></i>
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: null
    };
  },
  methods: {
    getSearch() {
      console.log(this.search);
      this.$router.push({ name: 'SearchProducts', params: { searchQuery: this.search } });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
