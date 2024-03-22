import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "@/views/Dashboard.vue";
import Aboutus from "@/views/Aboutus.vue";
import Contact from "@/views/Contact.vue";
import Carshopping from "@/views/Carshopping.vue";
import Products from "@/views/Products/Products.vue";
import SingleProduct from "@/views/Products/components/SingleProduct.vue";
import SearchProducts from "@/views/SearchProducts.vue";
import Categoric from "@/views/Categoric.vue"; 

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/Aboutus/',
      name: 'Aboutus',
      component: Aboutus
    },
    {
      path: '/Contact/',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/Products/',
      name: 'Products',
      component: Products
    },
    {
      path: '/SingleProduct/:id',
      name: 'SingleProduct',
      component: SingleProduct
    },
    {
      path: '/SearchProducts/:searchQuery',
      name: 'SearchProducts',
      component: SearchProducts
    },    
    {
      path: '/Carshopping/',
      name: 'Carshopping',
      component: Carshopping
    },
    {
      path: '/Categoric/:category', 
      name: 'Categoric',
      component: Categoric
    }
  ]
});

export default router;
