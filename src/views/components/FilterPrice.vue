<template>
    <button @click="sortProducts" class="dropdown-item">Precio de menor a mayor</button>
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
          const sortedProducts = this.array.slice().sort((a, b) => a.price - b.price);
          this.$emit('sorted', sortedProducts);
      }
    }
  }
  </script>
  
  <style scoped>
  </style>
  