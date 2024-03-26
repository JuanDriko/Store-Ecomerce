<template>
  <nav class="navbar navbar-expand-lg navbar-light shadow navbar-lg">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand text-primary logo h1 fs-4">
        <h3>Store+</h3>
      </router-link>

      <button
        class="navbar-toggler border-0"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#templatemo_main_nav"
        aria-controls="templatemo_main_nav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="templatemo_main_nav">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item ms-4">
            <router-link to="/" class="nav-link ms-5 mt-3">Inicio</router-link>
          </li>
          <li class="nav-item ms-4">
            <router-link to="/Aboutus/" class="nav-link ms-5 mt-3">Nosotros</router-link>
          </li>
          <li class="nav-item ms-4">
            <div class="dropdown">
              <button class="dropdown-toggle nav-link ms-5 mt-3" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                Categorías
              </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <router-link v-for="category in categories" :key="category" :to="{ name: 'CategoricPro', params: { category: category }}" class="dropdown-item">{{ category }}</router-link>
              </div>
            </div>
          </li>
          <li class="nav-item ms-4">
            <router-link to="/ProductsAll/" class="nav-link ms-5 mt-3">Productos</router-link>
          </li>
          <li class="nav-item ms-4">
            <router-link to="/Carshopping/" class="nav-link ms-4">
              <div class="m-2">
                <a class="nav-icon position-relative text-decoration-none fs-4" href="#">
                  <i class="fa fa-fw fa-cart-arrow-down text-dark"></i>
                  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-light text-dark ms-2">{{ cartLength }}</span>
                </a>
              </div>
            </router-link>
          </li>
          <li class="nav-item ms-4">
              <SearchQuery />
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { ref, onMounted, watch } from 'vue';
import SearchQuery from './SearchQuery.vue';
import { useCartStore } from '@/store/car.js';
import { getCategories } from './services/services.js';

export default {
  components: {
    SearchQuery,
  },
  setup() {
    const categories = ref([]);
    const cartLength = ref(useCartStore().totalItems);

    const fetchCategories = async () => {
      try {
        categories.value = await getCategories();
      } catch (error) {
        console.error(error.message);
      }
    };

    onMounted(fetchCategories);

    watch(() => useCartStore().totalItems, (newValue) => {
      cartLength.value = newValue;
    });

    return {
      categories,
      cartLength,
    };
  },
};
</script>

<style scoped>
</style>