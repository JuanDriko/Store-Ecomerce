import { mount } from '@vue/test-utils';
import ProductsAll from '@/views/ProductsAll.vue';
import NavBar from '@/components/NavBar.vue';
import { useCartStore } from '@/store/car.js';

jest.mock('@/store/car.js');

describe('Integration Test - Product Addition to Cart', () => {
  it('adds a product to the cart and reflects the change in the NavBar', async () => {
    const addToCart = jest.fn();
    useCartStore.mockReturnValue({
      addToCart,
      totalItems: 1,
    });

    const productsWrapper = mount(ProductsAll);
    const navBarWrapper = mount(NavBar);

    await waitForComponentToRender(productsWrapper);
    await waitForComponentToRender(navBarWrapper);

    const addButton = productsWrapper.find('[data-testid="add-to-cart-button"]');
    await addButton.trigger('click');

    await waitForComponentToRender(productsWrapper);
    await waitForComponentToRender(navBarWrapper);

    expect(addToCart).toHaveBeenCalled();
    expect(addToCart.mock.calls[0][0]).toEqual(productsWrapper.vm.getProductById(1));

    const cartLength = navBarWrapper.find('.badge').text();
    expect(cartLength).toBe('1'); 
  });
});

async function waitForComponentToRender(wrapper) {
  await wrapper.vm.$nextTick();
}

