function erase() {
    let id = document.querySelector('#out').value;
    console.log(id);

    fetch(`https://stormy-forest-82724.herokuapp.com/delete-product/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
            id: document.getElementById('out').value,
        }),
      })
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
        });
    
}