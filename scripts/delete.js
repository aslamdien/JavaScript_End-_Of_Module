function erase() {
  let id = document.querySelector("#out").value;
  console.log(id);
  if (id) {
    fetch(`https://stormy-forest-82724.herokuapp.com/delete-product/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch((err) => alert("Error. Please try again, or log in again"));
  } else {
    alert("Please Select Product To Delete");
  }
}