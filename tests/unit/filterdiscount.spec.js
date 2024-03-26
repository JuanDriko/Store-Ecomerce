import { mount } from '@vue/test-utils';
import FilterDiscount from '@/views/components/FilterDiscount.vue';

describe('FilterDiscount', () => {
  it('emite el evento ordenado con productos ordenados por porcentaje de descuento en orden descendente', async () => {

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

