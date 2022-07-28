function calculate(data) {
  let productsList = data.products;
  let discount = data.discount;
  let totalPrice = productsList.reduce((totalPrice, product) => totalPrice + product.price, 0);
  return totalPrice * discount;
}

const discountedPrice = calculate({
  discount: 0.1,
  products: [
    {
      name: "Product 1",
      price: 100
    },
    {
      name: "Product 2",
      price: 700
    },
    {
      name: "Product 3",
      price: 250
    }
  ]
});

console.log('practice 3');
console.log(discountedPrice);
