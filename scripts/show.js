let base_URL = "https://stormy-forest-82724.herokuapp.com/show-products/";

let product = [];
let cart = [];
console.log(cart);

function showProductList(url) {
  fetch(url)
    // Convert data from JSON
    .then((response) => response.json())
    //Stuff to do with data
    .then((data) => {
      // Console log to make sure I am getting the data
      console.log(data);

      product = data.data;
      console.log(product);

      let view = document.querySelector(".show-items");

      product.forEach((item) => {
        console.log(item);
        view.innerHTML += `<div class="container">
        <img class="info image" src="${item.product_image}" alt="image"/>
        <p class="info">ID: ${item.product_id}</p>
        <h2 class="info">${item.product_name}</h2>
        <p class="info">${item.description}</p>
        <p class="info"><strong>R${item.price}</strong></p>
        <button class="add" onclick="getProduct(${item.product_id})"><i class="fas fa-cart-plus"></i> ADD TO CART</button>
        </div>`;
      });
    });
}

showProductList(base_URL);

function getProduct(id) {
  fetch(`https://stormy-forest-82724.herokuapp.com/view-product/${id}`, {
    method: "GET",
    body: JSON.stringify(),
    headers: {
      "content-type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      let productID = `${data.data[0]}`;
      let name = `${data.data[1]}`;
      let picture = `${data.data[4]}`;
      let description = `${data.data[2]}`;
      let price = `${data.data[3]}`;
      console.log(name);
      addToPlate(productID, name, picture, description, price);
    });
}

function addToPlate(productID, name, picture, description, price) {
  let platediv = document.createElement("div");
  platediv.classList.add("viewcart_items");
  let plateItems = document.getElementsByClassName("plate_items")[0];
  let plateItemName = plateItems.getElementsByClassName("plate_item_name");
  for (let i = 0; i < plateItemName.length; i++) {
    if (plateItemName[i].innerText == name) {
      alert("You already added to your plate");
      return;
    }
  }
  let PlateContent = `<div class="container">
  <img class="info image" src="${picture}" alt="image"/>
  <p class="info">ID: ${productID}</p>
  <h2 class="info">${name}</h2>
  <p class="info">${description}</p>
  <p class="info"><strong>R${price}</strong></p>
  <button class ="rmbtn" onclick="removeFromCart()">Remove</button>`;
  platediv.innerHTML = PlateContent;
  plateItems.append(platediv);
}

function removeFromCart() {
  let removePlate = document.getElementsByClassName("rmbtn");
  for (let i = 0; i < removePlate.length; i++) {
    let button = removePlate[i];
    button.addEventListener("click", function (event) {
      let remBtn = event.target;
      remBtn.parentElement.parentElement.remove();
    });
  }
}