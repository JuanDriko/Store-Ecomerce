import { createRouter, createWebHistory } from 'vue-router';
import router from '@/router'; // Importa el enrutador desde el archivo router.js

describe('Router', () => {
  it('Should have the correct number of routes', () => {
    expect(router.getRoutes()).toHaveLength(8); // Ajusta el número de rutas según tu configuración
  });

  it('Should have a route for DashBoard', () => {
    const dashBoardRoute = router.getRoutes().find(route => route.name === 'DashBoard');
    expect(dashBoardRoute).toBeDefined();
  });

  it('Should have a route for AboutUs', () => {
    const aboutUsRoute = router.getRoutes().find(route => route.name === 'AboutUs');
    expect(aboutUsRoute).toBeDefined();
  });

  // Agrega pruebas para otras rutas aquí...

  it('Should navigate to DashBoard when accessing root path', async () => {
    await router.push('/');
    expect(router.currentRoute.value.name).toBe('DashBoard');
  });

  it('Should navigate to AboutUs when accessing /AboutUs path', async () => {
    await router.push('/AboutUs');
    expect(router.currentRoute.value.name).toBe('AboutUs');
  });

  // Agrega más pruebas de navegación aquí...
});
