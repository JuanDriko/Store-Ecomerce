import { mount } from '@vue/test-utils';
import FilterRating from '@/views/components/FilterRating.vue';

describe('FilterRating', () => {
  it('emite el evento ordenado con productos ordenados por clasificación en orden descendente', async () => {

    const products = [
      { id: 1, rating: 4 },
      { id: 2, rating: 2 },
      { id: 3, rating: 5 }
    ];
    const wrapper = mount(FilterRating, {
      props: {
        array: products
      }
    });

    await wrapper.find('button').trigger('click');

    expect(wrapper.emitted('sorted')).toBeTruthy();
    expect(wrapper.emitted('sorted')[0][0]).toEqual([
      { id: 3, rating: 5 },
      { id: 1, rating: 4 },
      { id: 2, rating: 2 }
    ]);
  });
});
