
function ajax(url) {
  return fetch(url)
    .then(res => res.json())
    .catch(err => console.log(err))
}

function render(data) {
  const productList = document.querySelector('#product-list');
  data.forEach(product => {
    const list = document.createElement('li');
    list.textContent = `${product.name} | ${product.description} | $${product.price}`;
    productList.append(list);
  });
}

ajax("https://appworks-school.github.io/Remote-Assignment-Data/products")
  .then(data => render(data));