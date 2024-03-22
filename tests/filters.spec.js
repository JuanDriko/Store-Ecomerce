const { shallowMount } = require('@vue/test-utils');
const FilterPrice = require('@/components/FilterPrice.vue').default;

describe('FilterPrice', () => {
  it('emits "sorted" event with sorted array when button is clicked', async () => {

    const array = [
      { name: 'Product 1', discountPercentage: 20 },
      { name: 'Product 2', discountPercentage: 10 },
      { name: 'Product 3', discountPercentage: 30 },
    ];


    const wrapper = shallowMount(FilterPrice, {
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

