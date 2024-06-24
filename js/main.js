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

  // Gerencias Transações  
  document.addEventListener('DOMContentLoaded', () => {
    // ... Código existente para gerenciar usuários, moradores, quartos, contas ...

    // Gerenciar Transações
    const transactionForm = document.getElementById('transactionForm');
    const transactionList = document.querySelector('#transactionList tbody');
    const transactions = [];

    if (transactionForm) {
      transactionForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const price = event.target.price.value;
  
        const pagantes = [];
        const pagantesCheckboxes = document.querySelectorAll('#pagantesList input[type=checkbox]:checked');
        pagantesCheckboxes.forEach(checkbox => {
          pagantes.push(checkbox.value);
        });
  
        const divisao = [];
        const divisaoCheckboxes = document.querySelectorAll('#divisaoList input[type=checkbox]:checked');
        divisaoCheckboxes.forEach(checkbox => {
          divisao.push(checkbox.value);
        });
  
        const transaction = { name, price, pagantes, divisao };
        transactions.push(transaction);
        event.target.reset();
        displayTransactions();
      });
    }

    const displayTransactions = () => {
      transactionList.innerHTML = '';
      transactions.forEach((transaction, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${transaction.name}</td>
          <td>R$ ${transaction.price}</td>
          <td>${transaction.pagantes.join(', ')}</td>
          <td>${transaction.divisao.join(', ')}</td>
          <td>
            <button class="edit-btn" onclick="editTransaction(${index})">Editar</button>
            <button class="delete-btn" onclick="removeTransaction(${index})">Remover</button>
          </td>
        `;
        transactionList.appendChild(row);
      });
    };

    window.editTransaction = (index) => {
      const transaction = transactions[index];
      transactionForm.name.value = transaction.name;
      transactionForm.price.value = transaction.price;

      // Marcar checkboxes para pagantes
      const pagantesCheckboxes = document.querySelectorAll('#pagantesList input[type=checkbox]');
      pagantesCheckboxes.forEach(checkbox => {
        checkbox.checked = transaction.pagantes.includes(checkbox.value);
      });

      // Marcar checkboxes para divisão
      const divisaoCheckboxes = document.querySelectorAll('#divisaoList input[type=checkbox]');
      divisaoCheckboxes.forEach(checkbox => {
        checkbox.checked = transaction.divisao.includes(checkbox.value);
      });

      transactions.splice(index, 1);
      displayTransactions();
    };

    window.removeTransaction = (index) => {
      transactions.splice(index, 1);
      displayTransactions();
    };

    // Função para preencher checkboxes dinamicamente
    const populateCheckboxes = (containerId, options) => {
      const container = document.getElementById(containerId);
      container.innerHTML = '';
      options.forEach(option => {
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = option;
        checkbox.value = option;
        const label = document.createElement('label');
        label.textContent = option;
        label.setAttribute('for', option);
        const div = document.createElement('div');
        div.appendChild(checkbox);
        div.appendChild(label);
        container.appendChild(div);
      });
    };

    // Exemplo de dados para pagantes e divisão (substitua com os dados reais do seu sistema)
    const moradores = ['Morador1', 'Morador2', 'Morador3'];
    populateCheckboxes('pagantesList', moradores);
    populateCheckboxes('divisaoList', moradores);
});

// Dados iniciais de empregados (simulando um banco de dados)
let employees = [
  { nome: "Empregado 1", cpf: "12345678901", endereco: "Rua A, 123", salario: "R$1500,00" },
  { nome: "Empregado 2", cpf: "98765432109", endereco: "Av. B, 456", salario: "R$1800,00" }
];

// Função para adicionar ou atualizar empregado
function addOrUpdateEmployee() {
  const name = document.getElementById('empName').value.trim();
  const cpf = document.getElementById('empCPF').value.trim();
  const address = document.getElementById('empAddress').value.trim();
  const salary = document.getElementById('empSalary').value.trim();

  if (!name || !cpf || !address || !salary) {
    alert("Por favor, preencha todos os campos obrigatórios.");
    return;
  }

  // Verificar se é uma atualização ou inclusão
  const index = employees.findIndex(emp => emp.cpf === cpf);
  if (index !== -1) {
    // Atualizar empregado existente
    employees[index].endereco = address;
    employees[index].salario = salary;
  } else {
    // Incluir novo empregado
    employees.push({ nome: name, cpf: cpf, endereco: address, salario: salary });
  }

  // Limpar formulário e atualizar tabela
  document.getElementById('employeeForm').reset();
  displayEmployees();
}

// Função para exibir empregados na tabela
function displayEmployees() {
  const tbody = document.getElementById('employeeTableBody');
  tbody.innerHTML = '';

  employees.forEach(emp => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${emp.nome}</td>
      <td>${emp.cpf}</td>
      <td>${emp.endereco}</td>
      <td>${emp.salario}</td>
      <td>
        <button class="edit-btn" onclick="editEmployee('${emp.cpf}')">Editar</button>
        <button class="delete-btn" onclick="removeEmployee('${emp.cpf}')">Remover</button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

// Função para editar empregado
function editEmployee(cpf) {
  const emp = employees.find(e => e.cpf === cpf);
  if (emp) {
    document.getElementById('empName').value = emp.nome;
    document.getElementById('empCPF').value = emp.cpf;
    document.getElementById('empAddress').value = emp.endereco;
    document.getElementById('empSalary').value = emp.salario.replace("R$", "");

    // Atualizar botão para modo de edição
    const saveBtn = document.querySelector('#employeeForm button');
    saveBtn.innerHTML = 'Atualizar';
    saveBtn.onclick = function() {
      addOrUpdateEmployee();
      saveBtn.innerHTML = 'Salvar';
      saveBtn.onclick = addOrUpdateEmployee;
    };
  }
}

// Função para remover empregado
function removeEmployee(cpf) {
  employees = employees.filter(emp => emp.cpf !== cpf);
  displayEmployees();
}

// Exibir empregados inicialmente
displayEmployees();