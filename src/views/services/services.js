export async function searchProducts(searchQuery) {
    try {
      const response = await fetch(`https://dummyjson.com/products/search?q=${searchQuery}`);
      const data = await response.json();
      return data.products;
    } catch (error) {
      throw new Error('Error al obtener productos:', error);
    }
  }

export async function getProductsByCategory(category) {
  try {
    const response = await fetch(`https://dummyjson.com/products/category/${category}`);
    const data = await response.json();
    return data.products;
  } catch (error) {
    throw new Error('Error al obtener productos por categoría:', error);
  }
}
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