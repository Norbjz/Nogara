function clearInput() {
  document.getElementById('user').value = '';
  document.getElementById('pass').value = '';
}

function add() {
  var user = document.getElementById('user').value;
  var pass = document.getElementById('pass').value;

  var lista = document.getElementsByTagName('div')[1];

  var datos = document.createElement('div');
  var elemento1 = document.createElement('p');
  var elemento2 = document.createElement('p');

  elemento1.innerHTML = 'Usuario: ' + user;
  elemento2.innerHTML = 'Contraseña: ' + pass;

  datos.appendChild(elemento1);
  datos.appendChild(elemento2);
  lista.appendChild(datos);

  clearInput();
}

function show() {
  document.getElementsByTagName('div')[0].style.display = 'block';
}
function hide() {
  document.getElementsByTagName('div')[0].style.display = 'none';
}
