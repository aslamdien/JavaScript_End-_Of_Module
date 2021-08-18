function previewFile2() {
  const image = document.querySelector(".imageup2");
  const file = document.querySelector("#product_image2").files[0];
  const reader = new FileReader();

  reader.addEventListener(
    "load",
    function () {
      // convert image file to base64 string
      image.src = reader.result;
    },
    false
  );

  if (file) {
    reader.readAsDataURL(file);
  }
};

////////////////////////////////

function button(id) {
  document.getElementById(id).classList.toggle("active");
}

///////////////////////////////

function updating() {
  let id = document.querySelector("#product_id").value;
  console.log(id);

  fetch(`https://stormy-forest-82724.herokuapp.com/edit-product/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      product_name: document.getElementById("product_name").value,
      price: document.getElementById("price").value,
      product_image: document.querySelector(".imageup2").scr,
      description: document.getElementById("description").value,
    }),
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
    });
  }
