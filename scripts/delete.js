function erase() {
    let id = document.querySelector('#out').value;
    console.log(id);

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
        });
    
}

