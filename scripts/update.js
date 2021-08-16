function updateproduct(update) {
  document.getElementById(update).classList.toggle("active");
}

function updating() {
  let id = document.querySelector("#id").value;
  console.log(id);

  fetch(`https://stormy-forest-82724.herokuapp.com/edit-product/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: document.getElementById("id").value,
      product_name: document.getElementById("product_name").value,
    }),
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
    });

  fetch(`https://stormy-forest-82724.herokuapp.com/edit-product/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: document.getElementById("id").value,
      price: document.getElementById("price").value,
    }),
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
    });

  fetch(`https://stormy-forest-82724.herokuapp.com/edit-product/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: document.getElementById("id").value,
      product_image: document.getElementById("product_image").src,
    }),
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
    });

  fetch(`https://stormy-forest-82724.herokuapp.com/edit-product/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: document.getElementById("id").value,
      description: document.getElementById("description").value,
    }),
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
    });
}
