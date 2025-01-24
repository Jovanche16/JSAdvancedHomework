class User {
  constructor(id, name, username, email, address, phone, website, company) {
    this.id = id;
    this.name = name;
    this.username = username;
    this.email = email;
    this.address = address;
    this.phone = phone;
    this.website = website;
    this.company = company;
  }
  fillTableRow() {
    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${this.id}</td>
        <td>${this.name}</td>
        <td>${this.username}</td>
        <td>${this.email}</td>
        <td>${this.phone}</td>
        <td>${this.website}</td>
        <td>${this.address.street}</td>
        <td>${this.address.suite}</td>
        <td>${this.address.city}</td>
        <td>${this.address.zipcode}</td>
        <td>${this.address.geo.lat}</td>
        <td>${this.address.geo.lng}</td>
        <td>${this.company.name}</td>
        <td>${this.company.catchPhrase}</td>
        <td>${this.company.bs}</td>
      `;

    return row;
  }
}

let i = 1;
document.getElementById("getUser").addEventListener("click", function () {

  if (i > 10) {
    alert("No more users to fetch!");
    return;
  }

  fetch(`https://jsonplaceholder.typicode.com/users/${i}`)
    .then(response => response.json())
    .then(function (data) {
      const user = new User(
        data.id,
        data.name,
        data.username,
        data.email,
        data.address,
        data.phone,
        data.website,
        data.company
      );
      i++;

      const tableBody = document.querySelector("#dataTable tbody");
      if (tableBody) {
        tableBody.appendChild(user.fillTableRow());
      }
    })
    .catch(error => alert("Error fetching data: " + error));
});
