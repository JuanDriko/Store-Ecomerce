import { mount } from '@vue/test-utils';
import NavBar from '@/components/NavBar.vue';
import CarShopping from '@/views/CarShopping.vue';
import { useCartStore } from '@/store/car.js';

describe('Integration Test: Car Shopping Cart', () => {
  it('Should update cart items when adding/removing products from CarShopping component', async () => {
    const wrapper = mount(NavBar);

    const firstProduct = { id: 1, title: 'Product 1', price: 10, quantity: 1 };
    await wrapper.findComponent(CarShopping).setData({ cartProducts: [firstProduct] });

    expect(useCartStore().items).toHaveLength(1);

    await wrapper.findComponent(CarShopping).vm.removeProduct(firstProduct);

    expect(useCartStore().items).toHaveLength(0);

    const secondProduct = { id: 2, title: 'Product 2', price: 20, quantity: 1 };
    await wrapper.findComponent(CarShopping).setData({ cartProducts: [secondProduct] });

    expect(useCartStore().items).toHaveLength(1);
    expect(useCartStore().items[0]).toEqual(secondProduct);
  });
});
