<template>
    <button @click="sortProducts" class="dropdown-item">Descuento de mayor a menor</button>
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
        const sortedProducts = this.array.slice().sort((a, b) => b.discountPercentage - a.discountPercentage);
        this.$emit('sorted', sortedProducts);
      }
    }
  }
  </script>
  
  <style scoped>
  </style>
  