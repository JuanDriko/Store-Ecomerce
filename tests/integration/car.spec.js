import { mount } from '@vue/test-utils';
import ProductsAll from '../../src/views/ProductsAll.vue';
import NavBar from '../../src/components/NavBar.vue';
import { useCartStore } from '../../src/store/car.js';

jest.mock('../../src/store/car.js');

describe('Integration Test - adición de producto a carrito de compras', () => {
  it('agregando producto a carrito reflejado en el NavBar', async () => {
    const addToCart = jest.fn();
    useCartStore.mockReturnValue({
      addToCart,
      totalItems: 1,
    });

    const productsWrapper = mount(ProductsAll);
    const navBarWrapper = mount(NavBar);

    await productsWrapper.vm.$nextTick();
    await navBarWrapper.vm.$nextTick();

    const addButton = productsWrapper.find('[data-testid="add-to-cart-button"]');
    await addButton.trigger('click');

    await productsWrapper.vm.$nextTick();
    await navBarWrapper.vm.$nextTick();

    expect(addToCart).toHaveBeenCalled();
    expect(addToCart.mock.calls[0][0]).toEqual(productsWrapper.vm.products[0]);

    const cartLength = navBarWrapper.find('.badge').text();
    expect(cartLength).toBe('1'); 
  });
});