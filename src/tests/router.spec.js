const { createRouter, createWebHistory } = require('vue-router');
const App = require('../src/App.vue').default;
const Dashboard = require('../src/views/Dashboard.vue').default;
const Aboutus = require('../src/views/Aboutus.vue').default;

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: Aboutus },
  ],
});

test('navegación a la página de inicio', async () => {
  const wrapper = mount(App, { global: { plugins: [router] } });

  await router.push('/');

  expect(wrapper.text()).toContain('Página de inicio');
});
