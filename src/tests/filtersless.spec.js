const { shallowMount } = require('@vue/test-utils');
const FilterDiscount = require('@/components/FilterDiscount.vue').default;
const FilterRating = require('@/components/FilterRating.vue').default;

describe('FilterDiscount', () => {
  it('emits "sorted" event with sorted array when button is clicked', async () => {
    const array = [
      { name: 'Product 1', discountPercentage: 20 },
      { name: 'Product 2', discountPercentage: 10 },
      { name: 'Product 3', discountPercentage: 30 },
    ];

    const wrapper = shallowMount(FilterDiscount, {
      propsData: { array },
    });

    await wrapper.find('button').trigger('click');

    const emittedEvent = wrapper.emitted('sorted');

    expect(emittedEvent).toBeTruthy();

    const sortedArray = emittedEvent[0][0];
    expect(sortedArray).toEqual([
      { name: 'Product 3', discountPercentage: 30 },
      { name: 'Product 1', discountPercentage: 20 },
      { name: 'Product 2', discountPercentage: 10 },
    ]);
  });
});

describe('FilterRating', () => {
  it('emits "sorted" event with sorted array when button is clicked', async () => {
    const array = [
      { name: 'Product 1', rating: 4 },
      { name: 'Product 2', rating: 5 },
      { name: 'Product 3', rating: 3 },
    ];

    const wrapper = shallowMount(FilterRating, {
      propsData: { array },
    });

    await wrapper.find('button').trigger('click');

    const emittedEvent = wrapper.emitted('sorted');
    expect(emittedEvent).toBeTruthy();

    const sortedArray = emittedEvent[0][0];
    expect(sortedArray).toEqual([
      { name: 'Product 2', rating: 5 },
      { name: 'Product 1', rating: 4 },
      { name: 'Product 3', rating: 3 },
    ]);
  });
});
