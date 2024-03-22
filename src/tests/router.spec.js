import { createRouter, createWebHistory } from 'vue-router';
import App from '@/App.vue';
import Home from '@/views/Home.vue';
import About from '@/views/Aboutus.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About },
  ],
});

test('navegación a la página de inicio', async () => {
  const wrapper = mount(App, { global: { plugins: [router] } });

  await router.push('/');

  expect(wrapper.text()).toContain('Página de inicio');
});
