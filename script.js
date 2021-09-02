//Exemplo de como utilizar o faker
/*
let faker = require('faker');
faker.locale = 'pt_BR';
let clients = [];

for (let index = o; index < 10; index++) {
    let name = faker.name.findName();
    let email = faker.internet.email(name);
    let phoneNumber = faker.phone.phoneNumber();
    let birth = faker.date.past(30, 2000);

    client = {
        name,
        email,
        phoneNumber,
        birth,
    }
    clients.push(client);
}
console.log(clients);

*/

/*
let select = document.querySelector('select');
let para = document.querySelector('p');

select.addEventListener('change', perfil);

function perfil() {
  let choice = select.value;

  if (choice === 'senior') {
    para.textContent = 'Acesso aos níveis 0, 1 e 2';
  } else if (choice === 'middle') {
    para.textContent = 'Acesso aos níveis 1 e 2';
  } else if (choice === 'junior') {
    para.textContent = 'acesso ao nível 1';
  } else if (choice === 'intern') {
    para.textContent = 'Acesso ao nível 0, 1 e 2 (somente sob organization STUFFA';
  } else {
    para.textContent = '';
  }
}
*/

