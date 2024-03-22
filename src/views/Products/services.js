export async function getProducts() {
    try {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      return data.products;
    } catch (error) {
      throw new Error('Error al obtener productos:', error);
    }
  }

export async function getSingleProduct(productId) {
    try {
      const response = await fetch(`https://dummyjson.com/products/${productId}`);
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error('Error al obtener el producto:', error);
    }
  }
  