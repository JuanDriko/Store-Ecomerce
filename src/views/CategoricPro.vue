<template>
  <div class="container py-5">
    <div class="row">
      <div class="dropdown">
        <button class="dropdown-toggle nav-link ms-5 mt-3" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
          Ordenar
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <div>                            
            <FilterPrice :array="categoric.products" @sorted="updateProducts" />
          </div>
          <div>                            
            <FilterDiscount :array="categoric.products" @sorted="updateProducts"/>
          </div>
          <div>
            <FilterRating :array="categoric.products" @sorted="updateProducts"/>
          </div>
        </div>
      </div>
      <div v-for="product in categoric.products" :key="product.id" class="col-sm-4 mb-4">
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
    <PopularPro/>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import { useCartStore } from '@/store/car.js';
import PopularPro from '@/components/PopularPro.vue';
import FilterPrice from './components/FilterPrice.vue';
import FilterDiscount from './components/FilterDiscount.vue';
import FilterRating from './components/FilterRating.vue';
import { getProductsByCategory } from './services/services.js';

const route = useRoute();
const categoric = ref({
  products: []
});

const getCategoric = async () => {
  try {
    const category = route.params.category;
    if (!category) return; // Evita errores si no hay categoría
    categoric.value.products = await getProductsByCategory(category);
  } catch (error) {
    console.error(error.message);
  }
};


const addToCart = (product) => {
  useCartStore().addToCart(product);
};

const updateProducts = (sortedProducts) => {
  categoric.value.products = sortedProducts;
};

onMounted(getCategoric);

watch(() => route.params.category, () => {
  getCategoric();
});
</script>

  
<style lang="scss" scoped>
</style>
  