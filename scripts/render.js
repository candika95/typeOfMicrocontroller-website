import products from '../datas/data.json' with { type: "json" };

console.log(products.image);
let productsHTML = '';

products.forEach((product) => {
  productsHTML += `
    <div class="product-card">
      <h3 class="product-name">${product.model}</h3>
      <div class="product-image-container">
        <img class="product-image" src="${product.image}">
      </div>

      <div class="product-details">
        <p class="product-core">Core: ${product.core}</p>
        <p class="product-description">${product.description}</p>
      </div>
      
    </div>
  `;
  document.querySelector('.js-products').innerHTML = productsHTML;
});
// <p class="product-description">Core: ${product.description}</p>
// document.querySelector('.js-products').innerHTML = productsHTML;