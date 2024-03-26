import { createRouter, createWebHistory } from 'vue-router';
import router from '@/router'; 

describe('Router', () => {
  it('Número correcto de rutas.', () => {
    expect(router.getRoutes()).toHaveLength(8);
  });

  it('Debería tener una ruta para DashBoard', () => {
    const dashBoardRoute = router.getRoutes().find(route => route.name === 'DashBoard');
    expect(dashBoardRoute).toBeDefined();
  });

  it('Debería tener una ruta para AboutUs', () => {
    const aboutUsRoute = router.getRoutes().find(route => route.name === 'AboutUs');
    expect(aboutUsRoute).toBeDefined();
  });


  it('Debe navegar al DashBoard al acceder a la ruta raíz', async () => {
    await router.push('/');
    expect(router.currentRoute.value.name).toBe('DashBoard');
  });

  it('Debe navegar a AboutUs al acceder a la ruta /AboutUs', async () => {
    await router.push('/AboutUs');
    expect(router.currentRoute.value.name).toBe('AboutUs');
  });

});
