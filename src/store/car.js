import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: JSON.parse(localStorage.getItem('cartItems')) || [],
  }),
  actions: {
    addToCart(item) {
      const existingProduct = this.items.find(p => p.id === item.id);
      if (existingProduct) {
        existingProduct.quantity++;
      } else {
        item.quantity = 1;
        this.items.push(item);
      }
      this.saveCart();
    },
    removeFromCart(index) {
      this.items.splice(index, 1);
      this.saveCart();
    },
    clearCart() {
      this.items = [];
      this.saveCart();
    },
    saveCart() {
      localStorage.setItem('cartItems', JSON.stringify(this.items));
    },
    loadCart() {
      const savedCart = JSON.parse(localStorage.getItem('cartItems'));
      if (savedCart) {
        this.items = savedCart;
      }
    },
  },
  getters: {
    totalItems() {
      return this.items.length;
    },
    totalPrice() {
      return this.items.reduce((total, item) => total + item.price * item.quantity, 0);
    },
  },
  created() {
    this.loadCart();
  },
});
