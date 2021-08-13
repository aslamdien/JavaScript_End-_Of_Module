function previewFile() {
  const image = document.querySelector(".imageup");
  const file = document.querySelector("#product_image").files[0];
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


function addproduct(){
  fetch('https://stormy-forest-82724.herokuapp.com/add-product/', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      product_name: document.getElementById("product_name").value,
      price: document.getElementById("price").value,
      product_image: document.querySelector(".imageup").src,
      description: document.getElementById("description").value,
    }),
  })
  .then((res) => res.json).then((data) => {
    console.log(data);
    console.log("success");
  })
};