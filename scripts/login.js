const myStorage = window.localStorage

function login() {
  fetch("https://stormy-forest-82724.herokuapp.com/auth", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: document.getElementById("username").value,
      password: document.getElementById("password").value,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      if (data['description'] == "Invalid credentials"){
        alert("Username or Password is Incorrect. Please enter correct details")
      }else{
        console.log(data['access_token'])
        myStorage.setItem('jwt-token', data['access_token'])
        window.location.href = "./show.html"
      }
    });
}