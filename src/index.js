import { getUsers, deleteUser } from './api/userApi';

//Populate table of users via API call
getUsers().then(result => {
  let usersBody = "";

  result.forEach(user => {
    usersBody += ` <tr>
      <td><a href="#" data-id="${user.id}" class="deleteUser">Delete</a></td>
      <td>${user.id}</td>
      <td>${user.firstName}</td>
      <td>${user.lastName}</td>
      <td>${user.email}</td>
      </tr>`
  });
  window.document.getElementById('users').innerHTML= usersBody;

  const deleteLinks = window.document.getElementsByClassName('deleteUser');

  // use Array.from to create an array from a DOM collection
Array.from(deleteLinks, link => {
  link.onclick = function(event) {
    const element = event.target;
    event.preventDefault();
    deleteUser(element.attributes["data-id"].value);
    const row = element.parentNode.parentNode;
    row.parentNode.removeChild(row);
  };
});
});
