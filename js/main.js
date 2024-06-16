document.addEventListener('DOMContentLoaded', () => {
    // Gerenciar Usuários
    const userForm = document.getElementById('userForm');
    const userList = document.getElementById('userList');
    const users = [];

<<<<<<< Updated upstream
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
=======
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
>>>>>>> Stashed changes

    // Gerenciar Moradores
    const residentForm = document.getElementById('residentForm');
    const residentList = document.getElementById('residentList');
    const residents = [];

<<<<<<< Updated upstream
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

    // Gerenciar Quartos
    const roomForm = document.getElementById('roomForm');
    const roomList = document.getElementById('roomList');
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
            const roomItem = document.createElement('div');
            roomItem.innerHTML = `
                <p>${room.name} - Capacidade: ${room.capacity} - Tipo: ${room.type}</p>
                <button onclick="editRoom(${index})">Editar</button>
                <button onclick="removeRoom(${index})">Remover</button>
            `;
            roomList.appendChild(roomItem);
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
    const accountList = document.getElementById('accountList');
    const accounts = [];

    if (accountForm) {
        accountForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const name = event.target.name.value;
            const type = event.target.type.value;
            const date = event.target.date.value;

            let priceInput = event.target.price; // Input para preço (Aluguel) ou valor total (Contas)
            let price = null;

            if (type === 'Aluguel') {
                price = {};
                rooms.forEach((room, index) => {
                    const roomPrice = prompt(`Digite o preço para o quarto "${room.name}" (R$):`);
                    price[index] = roomPrice;
                });
            } else {
                price = priceInput.value;
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
            const accountItem = document.createElement('div');
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

            accountItem.innerHTML = `
                <p>${account.name} - ${account.date} - ${priceDisplay}</p>
                <button onclick="editAccount(${index})">Editar</button>
                <button onclick="removeAccount(${index})">Remover</button>
            `;
            accountList.appendChild(accountItem);
        });
    };

    window.editAccount = (index) => {
        const account = accounts[index];
        accountForm.name.value = account.name;
        accountForm.type.value = account.type;
        accountForm.date.value = account.date;

        if (account.type === 'Aluguel') {
            // Mostrar os preços dos quartos para edição
            rooms.forEach((room, idx) => {
                const roomPrice = prompt(`Digite o preço para o quarto "${room.name}" (R$):`, account.price[idx]);
                account.price[idx] = roomPrice;
            });
        } else {
            // Mostrar o preço da conta para edição
            accountForm.price.value = account.price;
        }

        accounts.splice(index, 1);
        displayAccounts();
    };

    window.removeAccount = (index) => {
        accounts.splice(index, 1);
        displayAccounts();
    };
=======
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

  // Gerenciar Quartos
  const roomForm = document.getElementById('roomForm');
  const roomList = document.getElementById('roomList');
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
          const roomItem = document.createElement('div');
          roomItem.innerHTML = `
              <p>${room.name} - Capacidade: ${room.capacity} - Tipo: ${room.type}</p>
              <button onclick="editRoom(${index})">Editar</button>
              <button onclick="removeRoom(${index})">Remover</button>
          `;
          roomList.appendChild(roomItem);
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
  const accountList = document.getElementById('accountList');
  const accounts = [];

  if (accountForm) {
      accountForm.addEventListener('submit', (event) => {
          event.preventDefault();
          const name = event.target.name.value;
          const type = event.target.type.value;
          const date = event.target.date.value;

          let priceInput = event.target.price; // Input para preço (Aluguel) ou valor total (Contas)
          let price = null;

          if (type === 'Aluguel') {
              price = {};
              rooms.forEach((room, index) => {
                  const roomPrice = prompt(`Digite o preço para o quarto "${room.name}" (R$):`);
                  price[index] = roomPrice;
              });
          } else {
              price = priceInput.value;
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
          const accountItem = document.createElement('div');
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

          accountItem.innerHTML = `
              <p>${account.name} - ${account.date} - ${priceDisplay}</p>
              <button onclick="editAccount(${index})">Editar</button>
              <button onclick="removeAccount(${index})">Remover</button>
          `;
          accountList.appendChild(accountItem);
      });
  };

  window.editAccount = (index) => {
      const account = accounts[index];
      accountForm.name.value = account.name;
      accountForm.type.value = account.type;
      accountForm.date.value = account.date;

      if (account.type === 'Aluguel') {
          // Mostrar os preços dos quartos para edição
          rooms.forEach((room, idx) => {
              const roomPrice = prompt(`Digite o preço para o quarto "${room.name}" (R$):`, account.price[idx]);
              account.price[idx] = roomPrice;
          });
      } else {
          // Mostrar o preço da conta para edição
          accountForm.price.value = account.price;
      }

      accounts.splice(index, 1);
      displayAccounts();
  };

  window.removeAccount = (index) => {
      accounts.splice(index, 1);
      displayAccounts();
  };
>>>>>>> Stashed changes
});
