const products = []; // array of Products
let curId = 0; // incremental id
class Product {
  id;
  title;
  price;
  description;
  constructor(id, title, price, description) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.description = description;
  }
}
function addProduct(title, price, description) {
  const newId = curId;
  curId++;
  const newProduct = Product(newId, title, price, description);
  products.push(newProduct);
}
function removeProduct(id) {
  for (let i = products.length; i >= 0; i--) {
    const curProduct = products[i];
    if (curProduct.id === id) {
      products.splice(i, 1);
      break;
    }
  }
}
function getAllProducts() {
  return products;
}
module.exports = {
  removeProduct,
  getAllProducts,
};
