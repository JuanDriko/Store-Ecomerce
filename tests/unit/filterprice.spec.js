import { mount } from '@vue/test-utils';
import FilterPrice from '@/views/components/FilterPrice.vue';

describe('FilterPrice', () => {
  it('emits the sorted event with products sorted by price in ascending order', async () => {

    const products = [
      { id: 1, price: 20 },
      { id: 2, price: 10 },
      { id: 3, price: 30 }
    ];
    const wrapper = mount(FilterPrice, {
      props: {
        array: products
      }
    });

    await wrapper.find('button').trigger('click');

    expect(wrapper.emitted('sorted')).toBeTruthy();
    expect(wrapper.emitted('sorted')[0][0]).toEqual([
      { id: 2, price: 10 },
      { id: 1, price: 20 },
      { id: 3, price: 30 }
    ]);
  });
});
