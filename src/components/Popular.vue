<template>
  <div class="mt-5">
    <div class="col-lg-6 m-auto text-center">
      <h1 class="h1">Mas Populares</h1>
    </div>
    
    <div v-if="screenWidth" class="card-wrapper d-flex justify-content-center flex-wrap">
      <div v-for="(product, index) in topProducts.slice(6, 9)" :key="index" class="card m-5 pb-0 col-lg-4 col-md-6">
        <img class="card-img p-2" :src="product.thumbnail" alt="Card image cap" />
        <div class="card-body d-flex flex-column justify-content-center mt-3">
          <h5 class="card-title">{{ product.title }}</h5>
          <h5 class="card-title text-center mt-2">Precio: $ {{ product.price }}</h5>
                <h6 class="text-danger text-center mb-2 mt-4">{{ product.discountPercentage }}% Off</h6>
          <router-link :to="{ name: 'SingleProduct', params: { id: product.id }}" class="btn btn-primary m-auto col-5 mt-3" href="#">Ver Producto</router-link>
          <a @click="addToCart(product)" class="btn btn-primary m-auto mt-2 col-5" href="#">Agregar <i class="fa fa-fw fa-cart-arrow-down text-light"></i></a>
        </div>
      </div>
    </div>

    <div v-else id="carouselExampleControls" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div class="card-wrapper d-flex justify-content-center">
            <div v-for="(product, index) in topProducts.slice(0, 3)" :key="index" class="card m-5 pb-0 d-sm-block">
              <img class="card-img p-2" :src="product.thumbnail" alt="Card image cap" />
              <div class="card-body d-flex flex-column justify-content-center mt-3">
                <h5 class="card-title text-center">{{ product.title }}</h5>
                <h5 class="card-title text-center mt-2">Precio: $ {{ product.price }}</h5>
                <h6 class="text-danger text-center mb-2 mt-4">{{ product.discountPercentage }}% Off</h6>
                <div class="d-flex flex-column justify-content-center">
                  <router-link href="#" :to="{ name: 'SingleProduct', params: { id: product.id }}" class="btn btn-primary m-auto col-5 mt-3" >Ver Producto</router-link>
                  <a @click="addToCart(product)" class="btn btn-primary col-md-5 align-self-center m-2" href="#">Agregar <i class="fa fa-fw fa-cart-arrow-down text-light"></i></a>
                </div>

              </div>
            </div>
          </div>
        </div>
        
        <div class="carousel-item">
          <div class="card-wrapper d-flex justify-content-center p-2">
            <div v-for="(product, index) in topProducts.slice(3, 6)" :key="index" class="card m-5 p-0 d-sm-block">
              <img class="card-img p-2" :src="product.images[2]" alt="Card image cap" />
              <div class="card-body d-flex flex-column justify-content-center mt-3">
                <h5 class="card-title text-center">{{ product.title }}</h5>
                <h5 class="card-title text-center mt-2">Precio: $ {{ product.price }}</h5>
                <h6 class="text-danger text-center mb-2 mt-4">{{ product.discountPercentage }}% Off</h6>
                <div class="d-flex flex-column justify-content-center">
                  <router-link :to="{ name: 'SingleProduct', params: { id: product.id }}" class="btn btn-primary m-auto col-5 mt-3" href="#">Ver Producto</router-link>
                  <a @click="addToCart(product)" class="btn btn-primary col-md-5 align-self-center m-2" href="#">Agregar <i class="fa fa-fw fa-cart-arrow-down text-light"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div class="carousel-item">
          <div class="card-wrapper d-flex justify-content-center p-2">
            <div v-for="(product, index) in topProducts.slice(6, 9)" :key="index" class="card m-5 p-0 d-sm-block">
              <img class="card-img p-2" :src="product.images[2]" alt="Card image cap" />
              <div class="card-body d-flex flex-column justify-content-center mt-3">
                <h5 class="card-title text-center">{{ product.title }}</h5>
                <h5 class="card-title text-center mt-2">Precio: $ {{ product.price }}</h5>
                <h6 class="text-danger text-center mb-2 mt-4">{{ product.discountPercentage }}% Off</h6>
                <div class="d-flex flex-column justify-content-center">
                  <router-link :to="{ name: 'SingleProduct', params: { id: product.id }}" class="btn btn-primary m-auto col-5 mt-3" href="#">Ver Producto</router-link>
                  <a @click="addToCart(product)" class="btn btn-primary col-md-5 align-self-center m-2" href="#">Agregar <i class="fa fa-fw fa-cart-arrow-down text-light"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      <a class="carousel-control-prev text-decoration-none w-auto ps-3" href="#carouselExampleControls" role="button" data-bs-slide="prev">
        <i aria-hidden="true" class="fas fa-chevron-left text-primary fa-3x w-auto pe-3 m-2"></i>
      </a>
      <a class="carousel-control-next text-decoration-none w-auto ps-3" href="#carouselExampleControls" role="button" data-bs-slide="next">
        <i aria-hidden="true" class="fas fa-chevron-right text-primary fa-3x w-auto pe-3 m-2"></i>
      </a>
    </div>
  </div>
</template>

<script>
import { useCartStore } from '@/store/car.js';
import { fetchTopProducts } from './services/services.js';

export default {
  data() {
    return {
      topProducts: [],
      screenWidth: false
    };
  },
  methods: {
    async getTopProducts() {
      this.topProducts = await fetchTopProducts();
    },
    addToCart(product) {
      useCartStore().addToCart(product);
    },
    screenSize() {
      this.screenWidth = window.innerWidth <= 800;
    }
  },
  mounted() {
    this.getTopProducts();
    window.addEventListener('resize', this.screenSize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.screenSize);
  }
};
</script>

<style scoped>
.card {
  width: 20rem;
  height: 35rem;
}

.card-img {
  height: 50%;
  object-fit: contain;
}
@media (max-width: 1300px) {
  a {
    font-size: small;
  }
  .btn{
    width: 110px;
  }
}
@media (max-width: 1050px) {
  a {
    font-size: x-small;
  }
}
</style>
