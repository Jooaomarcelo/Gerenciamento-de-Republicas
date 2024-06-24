document.addEventListener('DOMContentLoaded', () => {
    // Gerenciar Usuários
    const userForm = document.getElementById('userForm');
    const userList = document.querySelector('#userList tbody');
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
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${user.name}</td>
          <td>${user.cpf}</td>
          <td>${user.rg}</td>
          <td>${user.profile}</td>
          <td>
            <button class="edit-btn" onclick="editUser(${index})">Editar</button>
            <button class="delete-btn" onclick="removeUser(${index})">Remover</button>
          </td>
        `;
        userList.appendChild(row);
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
    const residentList = document.querySelector('#residentList tbody');
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
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${resident.name}</td>
          <td>${resident.cpf}</td>
          <td>${resident.year}</td>
          <td>${resident.room}</td>
          <td>${resident.responsible}</td>
          <td>${resident.state}</td>
          <td>
            <button class="edit-btn" onclick="editResident(${index})">Editar</button>
            <button class="delete-btn" onclick="removeResident(${index})">Remover</button>
          </td>
        `;
        residentList.appendChild(row);
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
  
    // Gerenciar Quartos
    const roomForm = document.getElementById('roomForm');
    const roomList = document.querySelector('#roomList tbody');
    const rooms = [];
  
    if (roomForm) {
      roomForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const capacity = event.target.capacity.value;
        const type = event.target.type.value;
  
        const room = { name, capacity, type };
        rooms.push(room);
        event.target.reset();
        displayRooms();
      });
    }
  
    const displayRooms = () => {
      roomList.innerHTML = '';
      rooms.forEach((room, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${room.name}</td>
          <td>${room.capacity}</td>
          <td>${room.type}</td>
          <td>
            <button class="edit-btn" onclick="editRoom(${index})">Editar</button>
            <button class="delete-btn" onclick="removeRoom(${index})">Remover</button>
          </td>
        `;
        roomList.appendChild(row);
      });
    };
  
    window.editRoom = (index) => {
      const room = rooms[index];
      roomForm.name.value = room.name;
      roomForm.capacity.value = room.capacity;
      roomForm.type.value = room.type;
      rooms.splice(index, 1);
      displayRooms();
    };
  
    window.removeRoom = (index) => {
      rooms.splice(index, 1);
      displayRooms();
    };
  
    // Gerenciar Contas
    const accountForm = document.getElementById('accountForm');
    const accountList = document.querySelector('#accountList tbody');
    const accounts = [];
  
    if (accountForm) {
      accountForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const type = event.target.type.value;
        const date = event.target.date.value;
        let price = event.target.price.value;
  
        if (type === 'Aluguel') {
          price = {};
          rooms.forEach((room, index) => {
            const roomPrice = prompt(`Digite o preço para o quarto "${room.name}" (R$):`);
            price[index] = roomPrice;
          });
        }
  
        const account = { name, type, date, price };
        accounts.push(account);
        event.target.reset();
        displayAccounts();
      });
    }
  
    const displayAccounts = () => {
      accountList.innerHTML = '';
      accounts.forEach((account, index) => {
        let priceDisplay = '';
  
        if (account.type === 'Aluguel') {
          priceDisplay += '<ul>';
          Object.keys(account.price).forEach((key) => {
            priceDisplay += `<li>${rooms[key].name}: R$ ${account.price[key]}</li>`;
          });
          priceDisplay += '</ul>';
        } else {
          priceDisplay = `R$ ${account.price}`;
        }
  
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${account.name}</td>
          <td>${account.type}</td>
          <td>${account.date}</td>
          <td>${priceDisplay}</td>
          <td>
            <button class="edit-btn" onclick="editAccount(${index})">Editar</button>
            <button class="delete-btn" onclick="removeAccount(${index})">Remover</button>
          </td>
        `;
        accountList.appendChild(row);
      });
    };
  
    window.editAccount = (index) => {
      const account = accounts[index];
      accountForm.name.value = account.name;
      accountForm.type.value = account.type;
      accountForm.date.value = account.date;
  
      if (account.type === 'Aluguel') {
        rooms.forEach((room, idx) => {
          const roomPrice = prompt(`Digite o preço para o quarto "${room.name}" (R$):`, account.price[idx]);
          account.price[idx] = roomPrice;
        });
      } else {
        accountForm.price.value = account.price;
      }
  
      accounts.splice(index, 1);
      displayAccounts();
    };
  
    window.removeAccount = (index) => {
      accounts.splice(index, 1);
      displayAccounts();
    };
  });
  