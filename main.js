//EJERCICIO 4 PETICIONES AL SERVIDOR (NO CONSIGO QUE ME LO DEVUELVA EN JSON, SOLO EN TEXT)

const button = document.querySelector('.button')

function inputValue () {
  let inputName = document.getElementById('githubUser');
  let inputNameContainer = inputName.value;
  fetch(`https://api.github.com/orgs/${inputNameContainer}/repos`)
  .then(response => response.text())
  .then(data => document.body.innerHTML = data);
  
}

button.addEventListener('click', inputValue)


