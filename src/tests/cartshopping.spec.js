import { shallowMount } from '@vue/test-utils';
import ShoppingCart from '@/components/ShoppingCart.vue';
import { useCartStore } from '@/store/car.js';

jest.mock('@/store/car.js', () => ({
  useCartStore: jest.fn(),
}));

describe('ShoppingCart', () => {
  let wrapper;

  beforeEach(() => {
    useCartStore.mockReturnValue({
      items: [
        { title: 'Product 1', images: ['image1.jpg'], quantity: 2, price: 100 },
        { title: 'Product 2', images: ['image2.jpg'], quantity: 1, price: 50 },
      ],
      removeFromCart: jest.fn(),
      saveCart: jest.fn(),
    });
    wrapper = shallowMount(ShoppingCart);
  });

  it('renders cart table with correct data', () => {
    const rows = wrapper.findAll('tbody tr');
    expect(rows.length).toBe(2);

    expect(rows.at(0).find('td').at(0).text()).toBe('Product 1');
    expect(rows.at(1).find('td').at(0).text()).toBe('Product 2');
    expect(rows.at(0).find('img').attributes('src')).toBe('image1.jpg');
    expect(rows.at(1).find('img').attributes('src')).toBe('image2.jpg');
    expect(rows.at(0).find('input').element.value).toBe('2');
    expect(rows.at(1).find('input').element.value).toBe('1');
    expect(rows.at(0).find('td').at(3).text()).toBe('$200');
    expect(rows.at(1).find('td').at(3).text()).toBe('$50');
  });

  it('updates quantity of product when input changes', async () => {
    await wrapper.find('tbody tr input').setValue('3');

    expect(useCartStore().saveCart).toHaveBeenCalled();
  });

  it('removes product from cart when "Eliminar" button is clicked', async () => {
    await wrapper.find('tbody tr button').trigger('click');

    expect(useCartStore().removeFromCart).toHaveBeenCalled();
    expect(useCartStore().saveCart).toHaveBeenCalled();
  });

  it('displays "No tienes productos aún en el carrito de compras" message if cart is empty', async () => {
    useCartStore.mockReturnValueOnce({ items: [], removeFromCart: jest.fn(), saveCart: jest.fn() });
    wrapper = shallowMount(ShoppingCart);

    expect(wrapper.find('section').text()).toBe('No tienes productos aún en el carrito de compras');
  });
});
