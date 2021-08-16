let base_URL = "https://stormy-forest-82724.herokuapp.com/show-products/";

function showProductList(url) {
  fetch(url)
    // Convert data from JSON
    .then((response) => response.json())
    //Stuff to do with data
    .then((data) => {
      // Console log to make sure I am getting the data
      console.log(data);

      let product = data.data;

      let view = document.querySelector(".show-items");

      product.forEach((item) => {
        console.log(item);
        view.innerHTML += `<div class="container">
        <img class="info image" src="${item.product_image}" alt="image"/>
        <p class="info">ID: ${item.product_id}</p>
        <h2 class="info">${item.product_name}</h2>
        <p class="info">${item.description}</p>
        <p class="info"><strong>R${item.price}</strong></p>
        <button class="add"><i class="fas fa-cart-plus"></i> ADD TO CART</button>
        </div>`;
      });
    });
}

showProductList(base_URL);