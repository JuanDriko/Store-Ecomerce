<template>
  <div class="container py-5">
    <div class="row">
      <div v-if="searchPro.length" class="row">
        <div v-for="product in searchPro" :key="product.id" class="col-sm-4 mb-4">
          <div class="card border-0 shadow">
            <div class="card p-2 border-0 position-relative" style="height: 300px; overflow: hidden;">
              <img class="card-img" :src="product.images[0]" alt="Product Image" style="object-fit: contain; height: 100%; width: 100%;">
              <div class="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                <ul class="list-unstyled text-center d-none">
                  <li><router-link :to="{ name: 'SingleProduct', params: { id: product.id }}" class="btn btn-primary text-white mt-2">Ver <i class="far fa-eye"></i></router-link></li>
                </ul>
              </div>
            </div>
            <div class="card-body d-flex flex-column align-items-center">
              <div>
                <a class="h5 text-decoration-none">{{ product.title }}</a>
              </div>
              <h5 class="card-title text-center mt-2">Precio: $ {{ product.price }}</h5>
              <h6 class="text-danger text-center mb-2 mt-4">{{ product.discountPercentage }}% Off</h6> 
              <button class="btn btn-primary mt-2" @click="addToCart(product)">Agregar <i class="fa fa-fw fa-cart-arrow-down text-light"></i></button>
            </div>                    
          </div>
        </div>
      </div>
      <div v-else>
        <h2 class="uppercase mt-5 text-yellow-500 text-lg font-semibold m-5">No se encontraron resultados, inténtelo nuevamente</h2>
      </div>
      <Popular :addToCart="addToCart"/>
    </div>
  </div>
</template>

<script>
import { useCartStore } from '@/store/car.js';
import Popular from '@/components/Popular.vue';
import { searchProducts } from './services/services.js';

export default {
  components: {
    Popular,
  },
  data() {
    return {
      searchPro: [],
    };
  },
  methods: {
    async getSearchProducts() {
      const searchQuery = this.$route.params.searchQuery.trim().toLowerCase();
      try {
        this.searchPro = await searchProducts(searchQuery);
        console.log('searchdata', searchQuery);
      } catch (error) {
        console.error(error.message);
      }
    },
    addToCart(product) {
      useCartStore().addToCart(product);
    },
  },
  mounted() {
    this.getSearchProducts();
  },
  watch: {
    '$route'() {
      this.getSearchProducts(); 
    },
  },
};
</script>

<style scoped>
</style>
