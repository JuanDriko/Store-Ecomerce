<template>
  <div class="vh-100 p-5">
    <table class="table text-center">
      <thead v-if="hasCartProducts">
        <tr>
          <th>Nombre</th>
          <th>Imagen</th>
          <th>Cantidad</th>
          <th>Precio</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody v-if="hasCartProducts">
        <tr v-for="(product, index) in cartProducts" :key="index">
          <td>{{ product.title }}</td>
          <td><img class="col-2" :src="product.images[0]" :alt="product.title"></td>
          <td>
            <input class="col-2" type="number" v-model.number="product.quantity" @change="updateQuantity(product)" min="1">
          </td>
          <td>${{ product.price }}</td>
          <td>
            <button class="btn btn-danger mt-2" @click="removeProduct(product)">Eliminar</button>
          </td>
        </tr>
        <tr>
          <td colspan="2"></td>
          <td><strong></strong></td>
          <td><strong>Total:  ${{ totalCartPrice }}</strong></td>
          <td><button class="btn btn-success mt-2">Comprar</button></td>
        </tr>
      </tbody>
      <section class="vh-100 d-flex align-items-center justify-content-center" v-else>
          <h1>No tienes productos aún en el carrito de compras</h1>
      </section>
    </table>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useCartStore } from '@/store/car.js';

const cartProducts = computed(() => useCartStore().items);
const hasCartProducts = computed(() => cartProducts.value.length > 0);
const totalCartPrice = computed(() =>
  cartProducts.value.reduce((total, product) => total + product.price * product.quantity, 0)
);

const removeProduct = (product) => {
  const index = cartProducts.value.findIndex((p) => p === product);
  if (index !== -1) {
    useCartStore().removeFromCart(index);
  }
};

const updateQuantity = (product) => {
  product.quantity = Math.max(parseInt(product.quantity) || 0, 1);
  useCartStore().saveCart();
};
</script>

<style  scoped>
</style>