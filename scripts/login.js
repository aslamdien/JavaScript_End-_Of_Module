const username = document.getElementsByName('username')
const password = document.getElementsByName('password')


fetch('https://stormy-forest-82724.herokuapp.com/auth', {
method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({"username": username, "password": password})
}).then(res => res.json())
  .then(res => {
            console.log(res);
            myStorage = window.localStorage;
            console.log(res["access_token"]);
            myStorage.setItem("jwt-token", res["access_token"]);
   });