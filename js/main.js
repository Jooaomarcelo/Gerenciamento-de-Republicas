document.addEventListener('DOMContentLoaded', () => {
    // Gerenciar Usuários
    const userForm = document.getElementById('userForm');
    const userList = document.getElementById('userList');
    const users = [];
  
    if (userForm) {
      userForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const cpf = event.target.cpf.value;
        const rg = event.target.rg.value;
        const profile = event.target.profile.value;
  
        const user = { name, cpf, rg, profile };
        users.push(user);
        event.target.reset();
        displayUsers();
      });
    }
  
    const displayUsers = () => {
      userList.innerHTML = '';
      users.forEach((user, index) => {
        const userItem = document.createElement('div');
        userItem.innerHTML = `
          <p>${user.name} - ${user.cpf}</p>
          <button onclick="editUser(${index})">Editar</button>
          <button onclick="removeUser(${index})">Remover</button>
        `;
        userList.appendChild(userItem);
      });
    };
  
    window.editUser = (index) => {
      const user = users[index];
      userForm.name.value = user.name;
      userForm.cpf.value = user.cpf;
      userForm.rg.value = user.rg;
      userForm.profile.value = user.profile;
      users.splice(index, 1);
      displayUsers();
    };
  
    window.removeUser = (index) => {
      users.splice(index, 1);
      displayUsers();
    };
  
    // Gerenciar Moradores
    const residentForm = document.getElementById('residentForm');
    const residentList = document.getElementById('residentList');
    const residents = [];
  
    if (residentForm) {
      residentForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const cpf = event.target.cpf.value;
        const year = event.target.year.value;
        const room = event.target.room.value;
        const responsible = event.target.responsible.value;
        const state = event.target.state.value;
  
        const resident = { name, cpf, year, room, responsible, state };
        residents.push(resident);
        event.target.reset();
        displayResidents();
      });
    }
  
    const displayResidents = () => {
      residentList.innerHTML = '';
      residents.forEach((resident, index) => {
        const residentItem = document.createElement('div');
        residentItem.innerHTML = `
          <p>${resident.name} - ${resident.cpf}</p>
          <button onclick="editResident(${index})">Editar</button>
          <button onclick="removeResident(${index})">Remover</button>
        `;
        residentList.appendChild(residentItem);
      });
    };
  
    window.editResident = (index) => {
      const resident = residents[index];
      residentForm.name.value = resident.name;
      residentForm.cpf.value = resident.cpf;
      residentForm.year.value = resident.year;
      residentForm.room.value = resident.room;
      residentForm.responsible.value = resident.responsible;
      residentForm.state.value = resident.state;
      residents.splice(index, 1);
      displayResidents();
    };
  
    window.removeResident = (index) => {
      residents.splice(index, 1);
      displayResidents();
    };
  });
  