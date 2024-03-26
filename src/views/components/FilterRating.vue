<template>
    <button @click="sortProducts" class="dropdown-item">Mas populares de mayor a menor</button>
  </template>
  
  <script>
  export default {
    props: {
      array: {
        type: Array,
        required: true
      }
    },
    methods: {
      sortProducts() {
        const sortedProducts = this.array.slice().sort((a, b) => b.rating - a.rating);
        this.$emit('sorted', sortedProducts);
      }
    }
  }
  </script>
  
  <style scoped>
  </style>
  
  