<template>
    <div class="vh-50">
        <section class="bg-light">
            <div class="container pb-5">
                <div class="row">
                    <div class="col-lg-5 mt-5">
                        <div class="card mb-3 w-40 h-40">
                            <img class="card-img img-fluid" :src="currentImage" :alt="'Product Image ' + (index + 1)" id="product-detail">
                        </div>
                        <div class="row">
                            <div class="col-1 align-self-center">
                                <a href="#multi-item-example" role="button" data-bs-slide="prev">
                                    <i class="text-dark fas fa-chevron-left"></i>
                                    <span class="sr-only">Previous</span>
                                </a>
                            </div>
                            <div id="multi-item-example" class="col-10 carousel slide carousel-multi-item" data-bs-ride="carousel">
                                <div class="carousel-inner product-links-wap" role="listbox">
                                    <div v-for="(groupIndex) in Array(Math.ceil(singleProduct.images.length / 3)).fill().map((_, i) => i * 3)" :key="groupIndex" :class="{ 'carousel-item': true, 'active': groupIndex === 0 }">
                                        <div class="row">
                                            <div v-for="(image, imageIndex) in singleProduct.images.slice(groupIndex, groupIndex + 3)" :key="imageIndex" class="col-4">
                                                <a href="#" @click="index = groupIndex + imageIndex">
                                                    <img class="card-img img-fluid" :src="image" :alt="'Product Image ' + (groupIndex + imageIndex + 1)">
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-1 align-self-center">
                                <a href="#multi-item-example" role="button" data-bs-slide="next" >
                                    <i class="text-dark fas fa-chevron-right"></i>
                                    <span class="sr-only">Next</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-7 mt-5">
                        <div class="card">
                            <div class="card-body">
                                <h1 class="h2">{{ singleProduct.title }}</h1>
                                <p class="h3 py-2">$ {{ singleProduct.price }}</p>
                                <h6>Descripción:</h6>
                                <p>{{ singleProduct.description }}</p>
                                <ul class="list-inline">
                                    <li class="list-inline-item">
                                        <h6>Marca :</h6>
                                    </li>
                                    <li class="list-inline-item">
                                        <p class="text-muted"><strong>{{ singleProduct.brand }}</strong></p>
                                    </li> <br>
                                    <li class="list-inline-item">
                                        <h6>En stock :</h6>
                                    </li>
                                    <li class="list-inline-item">
                                        <p class="text-muted"><strong>{{ singleProduct.stock }}</strong></p>
                                    </li>
                                </ul>
                                <form action="" method="GET">
                                    <input type="hidden" name="product-title" :value="singleProduct.title">
                                    <div class="row pb-3">
                                        <div class="col d-grid">
                                            <button @click.prevent="addToCart(product)" type="submit" class="btn btn-primary btn-lg" name="submit" value="addtocard">Agregar <i class="fa fa-fw fa-cart-arrow-down text-light"></i></button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div>
        <Popular/>
        </div>
    </div>
</template>

<script>
import { useCartStore } from '@/store/car.js';
import Popular from '@/components/Popular.vue';
import { getSingleProduct } from '../services.js';

export default {
  components: {
    Popular
  },
  data() {
    return {
      singleProduct: {
        images: [],
        title: '',
        price: '',
        description: '',
        brand: '',
        stock: ''
      },
      index: 0
    };
  },
  computed: {
    currentImage() {
      return this.singleProduct.images[this.index] || ''; 
    }
  },
  methods: {
    async fetchSingleProduct(productId) {
      try {
        this.singleProduct = await getSingleProduct(productId);
      } catch (error) {
        console.error(error.message);
      }
    },

    addToCart() {
      useCartStore().addToCart(this.singleProduct);
    }
  },
  async mounted() {
    await this.fetchSingleProduct(this.$route.params.id);
  },
  watch: {
    '$route.params.id': {
      handler: 'fetchSingleProduct',
      immediate: true 
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
