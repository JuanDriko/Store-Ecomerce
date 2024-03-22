export async function getCategories() {
    try {
      const response = await fetch("https://dummyjson.com/products/categories");
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error('Error al obtener categorías:', error);
    }
  }
  
export async function fetchTopProducts() {
    try {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      const products = data.products;
      products.sort((a, b) => b.rating - a.rating);
      return products.slice(0, 9);
    } catch (error) {
      console.error('Error al obtener los productos:', error);
      return [];
    }
  }
  