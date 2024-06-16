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

  // Gerenciar Quartos
  const quartoForm = document.getElementById('quartoForm');
  const quartosList = document.getElementById('quartosList');
  const quartos = [];

  if (quartoForm) {
    quartoForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const nome = event.target.quartoNome.value;
      const capacidade = event.target.quartoCapacidade.value;
      const caracteristica = event.target.quartoCaracteristica.value;

      const quarto = { nome, capacidade, caracteristica };
      quartos.push(quarto);
      event.target.reset();
      displayQuartos();
    });
  }

  const displayQuartos = () => {
    quartosList.innerHTML = '';
    quartos.forEach((quarto, index) => {
      const quartoItem = document.createElement('div');
      quartoItem.innerHTML = `
        <p>${quarto.nome} - ${quarto.capacidade} pessoas (${quarto.caracteristica})</p>
        <button onclick="editQuarto(${index})">Editar</button>
        <button onclick="removeQuarto(${index})">Remover</button>
      `;
      quartosList.appendChild(quartoItem);
    });
  };

  window.editQuarto = (index) => {
    const quarto = quartos[index];
    quartoForm.quartoNome.value = quarto.nome;
    quartoForm.quartoCapacidade.value = quarto.capacidade;
    quartoForm.quartoCaracteristica.value = quarto.caracteristica;
    quartos.splice(index, 1);
    displayQuartos();
  };

  window.removeQuarto = (index) => {
    quartos.splice(index, 1);
    displayQuartos();
  };

  // Gerenciar Contas
  const contaForm = document.getElementById('contaForm');
  const contasList = document.getElementById('contasList');
  const contas = [];

  if (contaForm) {
    contaForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const nome = event.target.contaNome.value;
      const tipo = event.target.contaTipo.value;
      const data = event.target.contaData.value;

      const conta = { nome, tipo, data };
      contas.push(conta);
      event.target.reset();
      displayContas();
    });
  }

  const displayContas = () => {
    contasList.innerHTML = '';
    contas.forEach((conta, index) => {
      const contaItem = document.createElement('div');
      contaItem.innerHTML = `
        <p>${conta.nome} - ${conta.tipo} (${conta.data})</p>
        <button onclick="editConta(${index})">Editar</button>
        <button onclick="removeConta(${index})">Remover</button>
      `;
      contasList.appendChild(contaItem);
    });
  };

  window.editConta = (index) => {
    const conta = contas[index];
    contaForm.contaNome.value = conta.nome;
    contaForm.contaTipo.value = conta.tipo;
    contaForm.contaData.value = conta.data;
    contas.splice(index, 1);
    displayContas();
  };

  window.removeConta = (index) => {
    contas.splice(index, 1);
    displayContas();
  };
});
