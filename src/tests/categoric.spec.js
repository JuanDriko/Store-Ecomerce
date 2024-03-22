import { shallowMount } from '@vue/test-utils';
import ProductList from '@/components/ProductList.vue';

jest.mock('@/services/services', () => ({
  getProductsByCategory: jest.fn().mockResolvedValue([
    { id: 1, title: 'Product 1', price: 100, rating: 4, discountPercentage: 10 },
    { id: 2, title: 'Product 2', price: 200, rating: 5, discountPercentage: 20 },
    { id: 3, title: 'Product 3', price: 150, rating: 3, discountPercentage: 15 },
  ]),
}));


const addToCartMock = jest.fn();

describe('ProductList', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(ProductList, {
      mocks: {
        $route: {
          params: { category: 'someCategory' },
        },
      },
      methods: {
        addToCart: addToCartMock,
      },
    });
  });

  afterEach(() => {
    addToCartMock.mockClear();
  });

  it('renders product list with correct data', async () => {
    await wrapper.vm.getCategoric();

    const products = wrapper.findAll('.card');
    expect(products.length).toBe(3); 
    expect(products.at(0).find('.card-title').text()).toBe('Product 1');
    expect(products.at(1).find('.card-title').text()).toBe('Product 2');
    expect(products.at(2).find('.card-title').text()).toBe('Product 3');
  });

  it('adds product to cart when "Agregar" button is clicked', async () => {
    await wrapper.vm.getCategoric();

    await wrapper.find('.btn-primary').trigger('click');

    expect(addToCartMock).toHaveBeenCalledWith({ id: 1, title: 'Product 1', price: 100, rating: 4, discountPercentage: 10 });
  });
});
