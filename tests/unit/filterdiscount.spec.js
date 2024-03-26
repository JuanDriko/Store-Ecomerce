import { mount } from '@vue/test-utils';
import FilterDiscount from '@/views/components/FilterDiscount.vue';

describe('FilterDiscount', () => {
  it('emits the sorted event with products sorted by discountPercentage in descending order', async () => {

    const products = [
      { id: 1, discountPercentage: 20 },
      { id: 2, discountPercentage: 10 },
      { id: 3, discountPercentage: 30 }
    ];
    const wrapper = mount(FilterDiscount, {
      props: {
        array: products
      }
    });

    await wrapper.find('button').trigger('click');

    expect(wrapper.emitted('sorted')).toBeTruthy();
    expect(wrapper.emitted('sorted')[0][0]).toEqual([
      { id: 3, discountPercentage: 30 },
      { id: 1, discountPercentage: 20 },
      { id: 2, discountPercentage: 10 }
    ]);
  });
});

