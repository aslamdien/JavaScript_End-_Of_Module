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
}

function addproduct() {
  let name = document.getElementById("product_name").value;
  let product_price = document.getElementById("price").value;
  let product_description = document.getElementById("description").value;
  let image = document.querySelector(".imageup").src;

  if (name && product_price && image && product_description) {
    fetch("https://stormy-forest-82724.herokuapp.com/add-product/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        product_name: name,
        price: product_price,
        product_image: image,
        description: product_description,
      }),
    })
      .then((res) => res.json)
      .then((data) => {
        console.log(data);
        console.log(name);
        console.log("success");
      })
      .catch((err) => alert("Error. Please try again, or log in again"));
  } else {
    alert("Please Fill out all Information");
  }
}
