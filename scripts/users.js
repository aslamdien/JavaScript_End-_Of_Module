let base_URL = "https://stormy-forest-82724.herokuapp.com/show-users/"

function showAllUsers(url){
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);

        let user = data.data;

        let view = document.querySelector(".Users");

        user.forEach((person) => {
            console.log(person);
            view.innerHTML += `
        <div class="profiles">
            <table>
            <th>Name</th>
            <th>Surname</th>
            <th>ID Number</th>
            <th>Email</th>
            <th>Username</th>
            <th>password</th>
              <tr>
              <td>${person.name}</td>
              <td>${person.surname}</td>
              <td>${person.id_number}</td>
              <td>${person.email}</td>
              <td>${person.username}</td>
              <td>${person.password}</td>
              </tr>
            </table>
        </div>`
        });
    });
}

showAllUsers(base_URL);