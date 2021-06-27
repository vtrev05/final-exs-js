const persona = {};
persona.name = 'Susana';
persona.age = 34;
persona.profession = 'periodista';
persona.run = correr => `${correr}`;
persona.runAMarathon = distance => `Estoy corriendo ${distance} km`;
persona.showBio = function() {
    return 'Hola, me llamo ' + this.name + ' tengo ' + this.age + ' años y soy ' + this.profession;
}



const buttonValue = document.querySelector('.button');

buttonValue.addEventListener('click', (e) => {
  console.log(e)
})



// Muestra en la consola 31
console.log(persona.showBio());

let perasActuales = cestaPeras.inicial + sumar - restar;

const cestaPeras = {};
cestaPeras.max = 50;
cestaPeras.min = 1;
cestaPeras.inicial = 0;
cestaPeras.perasActuales = function() {
    let peras = (cestaPeras.inicial + cestaPeras.sumar - cestaPeras.restar);
    return peras;
}
cestaPeras.sumar = function(adicion) {
    let actualValor = this.perasActuales;
    let suma = actualValor + adicion;
    return suma
}
cestaPeras.restar = function(resta) {
    let actualValor = this.perasActuales;
    let restas = actualValor - resta;
    return restas;
}
cestaPeras.resetear = function() {
    let actualValor = this.perasActuales;
    let reset = actualValor - actualValor;
    return reset;
}

console.log(cestaPeras.sumar(5));
console.log(cestaPeras.restar(2));
console.log(cestaPeras.perasActuales(0));
console.log(cestaPeras.resetear());


//lista de películas con dos eventos

const buttonList = document.querySelector('.button')
const list = document.querySelector('.lista')

function buttonPress () { 
  list.innerHTML = '<input class="inception" type="button" value="inception"></input>\
  <input class="theButterFlyEffect" type="button" value="theButterFlyEffect"></input>\
  <input class="eternalSunshineOfTheSM" type="button" value="eternalSunshineOfTheSM"></input>\
  <input class="blueVelvet" type="button" value="blueVelvet"></input>\
  <input class="split" type="button" value="split"></input>';
}

buttonList.addEventListener('click', buttonPress)


//ejercicios objetos.

const adalaber1 = {}
adalaber1.name = 'Susana';
adalaber1.age = 34;
adalaber1.profession = 'journalist';
adalaber1.run = 'estoy corriendo';
adalaber1.runAMarathon = distance => `Estoy corriendo un maratón de ${distance} km`
adalaber1.showBio = function () {
  return `Mi nombre es ` + this.name + ' tengo' + this.age + ' años y soy ' + this.profession;
}
console.log(adalaber1.showBio())

const adalaber2 = {
  name: 'Rocío',
  age: 25,
  profession: 'actriz'
}
console.log(`Mi nombre es ${adalaber1.name}, tengo ${adalaber1.age} años y soy ${adalaber1.profession}`)


//EJERCICIO DE CESTA DE PERAS
const peras = {}
peras.max = 10;
peras.min = 0;
peras.currentValue = 0;
peras.initialValue = 0;
peras.addPera = function(numberOfPeras) {
  this.currentValue += numberOfPeras;
  return this.currentValue;
}
peras.removePera = function(numberOfPeras) {
  this.currentValue -= numberOfPeras;
  return this.currentValue;
}
peras.resetPera = function() {
  this.currentValue = this.initialValue;
  return this.currentValue;
}

console.log(peras.addPera(3), peras.currentValue, peras.resetPera(), peras.currentValue);

//EJERCICIO DE ESTRUCTURA DE DATOS
const job = 'developer'; 

const infoUser = {}
infoUser.firstName = 'Ramón';
infoUser.lName = 'Rodríguez';
infoUser.age = 34;
infoUser.job = job;

console.log(infoUser);


//EJERCICIOS DE ARRAYS
for (let index = 1; index < 11; index++) {
  console.log('Voy por la vuelta ' + index);
  
}
acc = 0;
for (let index = 0; index < 10; index++) {
  acc +=2;
  console.log('El resultado es ' + acc)
  
}
console.log('La suma final del acumulador es ' + acc)

let año = 2017;
for (let index = 0; index < 15; index ++) {
  año += 3;
  console.log('en el año ' + año + ' habrá una luna del cazador');
  
}


//ejercicio de for of para recorrer pelis
const obraFav = document.querySelector('.text');
const enviarFav = document.querySelector('.submit-button');



function consultarFav () {
  let valorInput = obraFav.value;
  const arrayValue = valorInput.split(',');
  for (const iterator of arrayValue) {
    console.log(`Buah, a mí también me encantó ${iterator}`)
  }
}

enviarFav.addEventListener('click', consultarFav);


//EJERCICIO DE ARRAYS CREANDO FUNCIONES 
const adalaber = {}
adalaber.name = ['María', 'Lucía', 'Susana', 'Rocío', 'Inmaculada'];
adalaber.age = [29, 31, 34, 25, 21];
adalaber.profession = ['diseñadora', 'ingeniera', 'periodista', 'actriz', 'diseñadora'];
acc = 0;
let age = adalaber.age;

function averageAge (edad) {
for (let index = 0; index < edad.length; index++) {
    acc += edad[index];
  }
  return 'la edad media es ' + acc/age.length;
}

console.log(averageAge(age));

function countAdalabers () {
  return adalaber.name.length;
}

//EJERCICIO SIN ACABAR PETICIONES SERVIDOR


function getUser() {
  fetch('https://api.github.com/organizations/Adalab')
    .then(response => response.json())
    .then(data => {
      const img = document.querySelector('img');
      img.src = data.avatar_url;
      img.alt = '';
      const name = document.querySelector('.username');
      name.innerHTML = data.name;
      const repos = document.querySelector('.repos');
      repos.innerHTML = data.public_repos;
    });
}
document.querySelector('.js-search-user').addEventListener("click", getUser);

//EJERCICIO 3 PETICIONES AL SERVIDOR

const button = document.querySelector('.button')

function inputValue () {
  let inputName = document.getElementById('githubUser');
  let inputNameContainer = inputName.value;
  fetch(`https://api.github.com/users/${inputNameContainer}`)
  .then(response => response.json())
  .then(data => {
    const name = document.querySelector('.name');
    name.innerHTML = data.login;
    const repos = document.querySelector('.repos');
    repos.innerHTML = data.public_repos;
    const img = document.querySelector("img");
      img.src = data.avatar_url;
      img.alt = "foto";
    });
}

button.addEventListener('click', inputValue)


//EJERCICIO 4 PETICIONES AL SERVIDOR (NO CONSIGO QUE ME LO DEVUELVA EN JSON, SOLO EN TEXT)

const button = document.querySelector('.button')

function inputValue () {
  let inputName = document.getElementById('githubOrg');
  let inputNameContainer = inputName.value;
  fetch(`https://api.github.com/orgs/${inputNameContainer}`)
  .then(response => response.json())
  .then(data => document.body.innerHTML = data);
  
}

button.addEventListener('click', inputValue)

//EJERCICIO DE DOM AVANZADO

let numbers = [1, 2, 3]
const accesList = document.querySelector('.empty-list');

for (let index = 0; index < numbers.length; index++) {
  const newElementList = document.createElement('li');
  const contentList = document.createTextNode(numbers[index]);
  newElementList.appendChild(contentList);
  accesList.appendChild(newElementList);
}

//EJERCICIO DOM 2


const madridOption = document.querySelector('.option-madrid');
const parisOption = document.querySelector('.option-paris');
const romaOption = document.querySelector('.option-roma');


function srcMadrid () {
  document.getElementById('imgMadrid').src="madrid.jpg";
  document.getElementById('imgParis').src="madrid.jpg";
  document.getElementById('imgRoma').src="madrid.jpg";
}
function srcParis () {
  document.getElementById("imgMadrid").src="paris.jpg";
  document.getElementById("imgParis").src="paris.jpg";
  document.getElementById("imgRoma").src="paris.jpg";

}
function srcRoma () {
  document.getElementById('imgMadrid').src="roma.jpg";
  document.getElementById('imgParis').src="roma.jpg";
  document.getElementById('imgRoma').src="roma.jpg";
}


madridOption.addEventListener('click', srcMadrid);
parisOption.addEventListener('click', srcParis);
romaOption.addEventListener('click', srcRoma);

//EJERCICIO DOM 3

const people = [
  { name:'Paco', lastname:'Ramos', phoneNumber:456745},
  { name:'Francisco', lastname:'Pacheco', phoneNumber: 234542 },
  { name:'Isco', lastname:'Torres', phoneNumber:238654},
];

const user1 = document.querySelector('.user-1')
const user2 = document.querySelector('.user-2')
const user3 = document.querySelector('.user-3')

function setName() {
  document.getElementById('fname').value = people[0].name;
  document.getElementById('lname').value = people[0].lastname;
  document.getElementById('tel').value = people[0].phoneNumber;
}
function setLastName() {
  document.getElementById('fname').value = people[1].name;
  document.getElementById('lname').value = people[1].lastname;
  document.getElementById('tel').value = people[1].phoneNumber;
}
function setPhoneNumber() {
  document.getElementById('fname').value = people[2].name;
  document.getElementById('lname').value = people[2].lastname;
  document.getElementById('tel').value = people[2].phoneNumber;
}

user1.addEventListener('click', setName)
user2.addEventListener('click', setLastName)
user3.addEventListener('click', setPhoneNumber)

//EJERCICIO DOM 4

let div = document.getElementById('container');
div.style.height = '29px';
console.log(div.style.height)

//EJERCICIO 2 PETICIONES SERVIDOR 2

const button = document.querySelector('.button')

function inputValue () {
  let inputName = document.getElementById('fname');
  let inputNameContainer = inputName.value;
  fetch(`https://swapi.dev/api/people/?search=${inputNameContainer}`)
  .then(response => response.text())
  .then(data => document.body.innerHTML = data);
}

button.addEventListener('click', inputValue)

//EJERCICIO 4 PETICIONES SERVIDOR 2

const inputEelement = document.querySelector('#fname')

function inputValue () {
  const content = document.querySelector('.paragraph');
  let finalValue = inputEelement.value;
  content.innerHTML = finalValue;
  localStorage.setItem('content', finalValue);
}

inputEelement.addEventListener('keyup', inputValue)

//EJERCICIO 5 PETICIONES SERVIDOR 2

const darkButton = document.querySelector('#dark')
const shineButton = document.querySelector('#shine')

function dark () {
 const paragraph1Content = document.querySelector('.paragraph');
 const paragraph2Content = document.querySelector('.paragraph-2');
 paragraph1Content.classList.toggle('dark-background-color', 'shine-background-color');
 paragraph2Content.classList.toggle('dark-background-color', 'shine-background-color');
}

function shine () {
  const paragraph1Content = document.querySelector('.paragraph');
  const paragraph2Content = document.querySelector('.paragraph-2');
  paragraph1Content.classList.toggle('shine-background-color','dark-background-color');
  paragraph2Content.classList.toggle('shine-background-color','dark-background-color');
}


darkButton.addEventListener('click', dark)
shineButton.addEventListener('click', shine)

//EJERCICIO 1 MÉTODOS FUNCIONALES ARRAY

const marks = [5, 4, 6, 7, 9];
const marksAdition = mark => mark + 1;
const finalMarks = marks.map(marksAdition);

console.log(finalMarks);


//EJERCICIO 2 MÉTODOS FUNCIONALES ARRAY

const names = ['María', 'Lucía', 'Susana', 'Rocío', 'Inmaculada'];
const salute = myName => `Bienvenida ${myName}`;
const completedSalute = names.map(salute);
console.log(completedSalute);


//EJERCICIO 3 MÉTODOS FUNCIONALES ARRAY

const users = [
  { name: 'María', isPremium: false },
  { name: 'Lucía', isPremium: true },
  { name: 'Susana', isPremium: true },
  { name: 'Rocío', isPremium: false },
  { name: 'Inmaculada', isPremium: false }
];

const usersPremium = [false, true, true, false, false];

function premium (user) {
  if (user.isPremium === true) {
    console.log('Bienvenida Yolanda. Gracias por confiar en nosotros.')
  } else {
    console.log('Bienvenida Yolanda');
  }
}

const finaSalute = users.map(premium);
console.log(finaSalute);


//EJERCICIO 4
const usersPremium = [false, true, true, false, false];
const premiumUsers = usersPremium.filter(user => user===true);
console.log(premiumUsers)

//EJERCICIO 5
const pins = [2389, 2384, 2837, 5232, 8998];
const pairNumbers = pins.filter(number => number%2 === 0);
console.log(pairNumbers);

// EJERCICIO 6
const users = [
  { name: 'María', isPremium: false, pin: 2389 },
  { name: 'Lucía', isPremium: true, pin: 2384 },
  { name: 'Susana', isPremium: true, pin: 2837 },
  { name: 'Rocío', isPremium: false, pin: 5232 },
  { name: 'Inmaculada', isPremium: false, pin: 8998 }
];

const pairPinUsers = users.filter(user => user.pin%2 === 0)
console.log(pairPinUsers);

// EJERCICIO 7
const times = [56, 9, 45, 28, 35];

const result = times.reduce((number, acc) => (acc + number), 0);
const finalResult = result / times.length;
console.log(finalResult);

//EJERCICIO 8 (sin acabar)

const runners = [
  { name: 'Gregory Goyle', time: 56, student: true },
  { name: 'Nymphadora Tonks', time: 9, student: false },
  { name: 'Luna Lovegood', time: 45, student: true },
  { name: 'Cedric Diggory', time: 28, student: true },
  { name: 'Cho Chang', time: 35, student: true }
];
const result = runners.reduce((acc) => Math.min(acc.time));
console.log(result)

//EJERCICIO 10

const users = [
  { name: 'María', isPremium: false, pin: 2389 },
  { name: 'Lucía', isPremium: true, pin: 2384 },
  { name: 'Susana', isPremium: true, pin: 2837 },
  { name: 'Rocío', isPremium: false, pin: 5232 },
  { name: 'Inmaculada', isPremium: false, pin: 8998 }
];

const findPin = users.find(user => user.pin === 5232);
console.log(findPin);
const finIndexPin = users.findIndex(user => user.pin === 5232);
console.log(finIndexPin);

const reduce = users.splice(3, 1);
console.log(reduce)
console.log(users)

//EJERCICIO 12 (SORT EN ARRAYS QUE CONTIENEN OBJETOS)

const users = [
  { name: 'María', isPremium: false, pin: 2389 },
  { name: 'Lucía', isPremium: true, pin: 2384 },
  { name: 'Susana', isPremium: true, pin: 2837 },
  { name: 'Rocío', isPremium: false, pin: 5232 },
  { name: 'Inmaculada', isPremium: false, pin: 8998 }
];

users.sort((a, b) => {
  if (a.pin < b.pin) {
    return -1;
  } else if (a.pin > b.pin) {
    return 1;
  } else {
    return 0;
  }
})

users.sort((a, b) => {
  if (a.name < b.name) {
    return -1;
  } else if (a.name > b.name) {
    return 1;
  } else {
    return 0;
  }
})

console.log(users)

//EJERCICIO 1 ASINCRONÍA

// <p class="time">0</p> (contador en html)

let counter = 0;

const incrementAndShowCounter = () => {
  counter++;
  const time = document.querySelector('.time');
  time.innerHTML = counter;
};

setInterval(incrementAndShowCounter, 2000);

//EJERCICIO 2 ASINCRONÍA

let counter = 0;
let temp;

const incrementAndShowCounter = () => {
  counter++;
  const time = document.querySelector('.time');
  time.innerHTML = counter;
  if (counter === 12) {
    clearInterval(temp);
  }
};

temp = setInterval(incrementAndShowCounter, 1000);


//EJERCICIO 3 ASINCRONÍA

let counter = 0;
let temp;

const incrementAndShowCounter = () => {
  counter++;
  const time = document.querySelector('.time');
  time.innerHTML = 'Escrito hace ' + counter + ' segundos';
  if (counter > 59) {
  time.innerHTML = 'Escrito hace un minuto';
  clearInterval(temp);
  }
};

temp = setInterval(incrementAndShowCounter, 1000);

//EJERCICIO 4 ASINCRONÍA

let temp;

const incrementAndShowCounter = () => {
  const msg = document.querySelector('.msg');
  msg.innerHTML = 'Su sesión ha expirado';
  clearInterval(temp);
  }

temp = setInterval(incrementAndShowCounter, 15000);

//EJERCICIO 6 ASINCRONÍA
const stopped = document.querySelector('.stop')
const letsGo = document.querySelector('.continue')

let counter = 0;
let temp;

const incrementAndShowCounter = () => {
  counter++;
  const time = document.querySelector('.time');
  time.innerHTML = counter;
  temp;
};
const stopCount = () => {
  clearInterval(temp);
};

temp = setInterval(incrementAndShowCounter, 1000);

stopped.addEventListener('click', stopCount)
letsGo.addEventListener('click', incrementAndShowCounter)

//EJERCICIO 7 ASINCRONÍA
let temp;
let newTemp;
const stopped = document.querySelector('.stop')

const showMessage = () => {
  const msg = document.querySelector('.msg');
  msg.innerHTML = '¿Te has dormido?';
  clearInterval(temp); 
  }
temp = setInterval(showMessage, 10000);

const removeMsg = () => {
  const msg = document.querySelector('.msg');
  msg.innerHTML = '';
};

stopped.addEventListener('click', removeMsg)
temp = setInterval(showMessage, 10000);