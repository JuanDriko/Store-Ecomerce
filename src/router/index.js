import { createRouter, createWebHistory } from "vue-router";
import DashBoard from "@/views/DashBoard.vue";
import AboutUs from "@/views/AboutUs.vue";
import ContactS from "@/views/ContactS.vue";
import CarShopping from "@/views/CarShopping.vue";
import ProductsAll from "@/views/ProductsAll.vue";
import SingleProduct from "@/views/SingleProduct.vue";
import SearchProducts from "@/views/SearchProducts.vue";
import CategoricPro from "@/views/CategoricPro.vue"; 

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/Store-Ecomerce/',
      name: 'DashBoard',
      component: DashBoard
    },
    {
      path: '/AboutUs/',
      name: 'AboutUs',
      component: AboutUs
    },
    {
      path: '/ContactS/',
      name: 'ContactS',
      component: ContactS
    },
    {
      path: '/ProductsAll/',
      name: 'ProductsAll',
      component: ProductsAll
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
      path: '/CarShopping/',
      name: 'CarShopping',
      component: CarShopping
    },
    {
      path: '/CategoricPro/:category', 
      name: 'CategoricPro',
      component: CategoricPro
    }
  ]
});

export default router;
