var elemento = '';

function clearInput() {
  document.getElementById('entrada').value = '';
}

/* function add() {
  var tarea = document.getElementById('entrada').value;

  var lista = document.getElementsByTagName('ul')[0];

  elemento = elemento + '<li>' + tarea + '</li>';

  lista.innerHTML = elemento;

  clearInput();
} */

function add() {
  var tarea = document.getElementById('entrada').value;

  var lista = document.getElementsByTagName('ul')[0];

  var elemento = document.createElement('li');

  elemento.innerHTML = tarea;

  lista.appendChild(elemento);

  clearInput();
}

function addImage() {
  var imagen = document.getElementById('imagen').value;
  var lista = document.getElementsByClassName('cards')[0];
  var divImagen = document.createElement('div');

  divImagen.innerHTML = '<img width="300" src="' + imagen + '" alt=""></img>';

  console.log(divImagen);
  console.log(lista);

  lista.appendChild(divImagen);

  //No jalo el fakepath luego se modificará

  clearInput();
}
