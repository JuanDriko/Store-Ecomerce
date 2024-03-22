<template>
    <div class="container py-5">
      <div class="row">
        <div class="row">
          <div class="dropdown">
            <button class="dropdown-toggle nav-link ms-5 mt-3" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
              Ordenar
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <div>
                <FilterPrice :array="products" @sorted="updateProducts" />
              </div>
              <div>
                <FilterDiscount :array="products" @sorted="updateProducts"/>
              </div>
              <div>
                <FilterRating :array="products" @sorted="updateProducts"/>
              </div>
            </div>
          </div>
  
          <div v-for="product in products" :key="product.id" class="col-sm-4 mb-4">
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
                <p class="mt-4">Popularidad:</p>
                <h6 class="text-warning text-center mb-2">{{ product.rating }}<i class="fa-solid fa-star"></i></h6> 
                <h6 class="text-danger text-center mb-2">{{ product.discountPercentage }}% Off</h6> 
                <a href="#" class="btn btn-primary mt-2" @click="addToCart(product)">Agregar <i class="fa fa-fw fa-cart-arrow-down text-light"></i></a>
              </div>                    
            </div>
          </div>
        </div>
        <Popular :addToCart="addToCart"/>
      </div>
    </div>
  </template>
  
  <script>
  import { useCartStore } from '@/store/car.js';
  import Popular from '@/components/Popular.vue';
  import FilterPrice from './components/FilterPrice.vue';
  import FilterDiscount from './components/FilterDiscount.vue';
  import FilterRating from './components/FilterRating.vue';
  import { getProducts } from '../Products/services.js';
  
  export default {
    components: {
      Popular,
      FilterPrice,
      FilterDiscount,
      FilterRating
    },
    data() {
      return {
        products: [],
      }
    },
    methods: {
      async fetchProducts() {
        try {
          this.products = await getProducts();
        } catch (error) {
          console.error(error.message);
        }
      },
      addToCart(product) {
        useCartStore().addToCart(product);
      },
      updateProducts(sortedProducts) {
        this.products = sortedProducts; 
      }
    },
    async mounted() {
      await this.fetchProducts();
    },
  }
  </script>
  
  <style scoped>
  
  </style>
  