import { getUsers } from './api/userApi';

// import css
import './index.css';

// Populate table of users via API call.
getUsers().then(result => {
  let usersBody = '';

  result.forEach(user => {
    usersBody += `<tr>
    <td><a href="#" data-id="${user.id}" class="deleteUser">Delete</a></td>
    <td>${user.id}</td>
    <td>${user.fname}</td>
    <td>${user.lname}</td>
    <td>${user.email}</td>
    </tr>`;
  });

  global.document.getElementById('users').innerHTML = usersBody;
});
