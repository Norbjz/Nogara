var usuarios = [];
var noUsuarios = 0;

//Inicia la recolección de datos de usuario para contrastarlos con el array de usuarios existente
function init() {
  var user = document.getElementById('user');
  var pass = document.getElementById('pass');
  document.getElementsByClassName('existente')[0].style.display = 'none';
  document.getElementsByClassName('requerido')[0].style.display = 'none';
  document.getElementsByClassName('registrado')[0].style.display = 'none';

  if (user.value === '' || pass.value === '') {
    document.getElementsByClassName('registrado')[0].style.display = 'none';
    document.getElementsByClassName('requerido')[0].style.display = 'block';
  } else {
    var info = [];

    info[0] = getInfo(user);
    info[1] = getInfo(pass);

    if (usuarios != 0) {
      checkInfo(info[0], info[1]);
    } else {
      saveInfo(info);
    }

    clearInput(user, pass);
  }
}

//Recupera el valor colocado en los inputs para enviarlo a un array
function getInfo(input) {
  return input.value;
}

//Verifica que no exista un nombre de usuario identico en el array "usuarios"
function checkInfo(user, pass) {
  var contador = 0;

  for (let index = 0; index < usuarios.length; index++) {
    var checkeo = usuarios[index][0].indexOf(user);
    if (checkeo != -1) {
      contador++;
    }
  }

  if (contador != 0) {
    document.getElementsByClassName('existente')[0].style.display = 'block';
  } else {
    var info = [];
    info[0] = user;
    info[1] = pass;
    saveInfo(info);
  }
}

//Registra los datos de usuario en el array "usuarios"
function saveInfo(info) {
  document.getElementsByClassName('registrado')[0].style.display = 'block';
  document.getElementsByClassName('requerido')[0].style.display = 'none';
  usuarios[noUsuarios] = info;
  noUsuarios++;
}

//Borra la información colocada en los inputs para que se pueda volver a ingresar nuevos datos
function clearInput(user, pass) {
  user.value = '';
  pass.value = '';
}

//Muestra el modal
function mostrar() {
  document.getElementsByClassName('modal')[0].style.display = 'flex';
  document.getElementsByClassName('form')[0].style.display = 'none';
}

//Oculta el modal
function ocultar() {
  document.getElementsByClassName('modal')[0].style.display = 'none';
  document.getElementsByClassName('form')[0].style.display = 'flex';
}

//Inicializa las funciones borraContenido y crearTarjetas
function pintar() {
  borrarContenido();
  crearTarjetas();
}

//Elimina el contenido del contenedor donde se encuentran las tarjetas de usuario
//para no duplicarlas cuando intentemos pintarlas
function borrarContenido() {
  //No hemos visto este metodo jeje
  /*  document.getElementsByClassName('cards')[0].replaceChildren(''); */

  var container = document.getElementsByClassName('cards')[0];

  container.innerHTML = '';
}

//Genera una tarjeta con los datos de usuario y contraseña por cada elemento del array "usuarios"
function crearTarjetas() {
  for (let index = 0; index < usuarios.length; index++) {
    var card = document.createElement('div');
    card.classList = 'userCard';

    var contenido = `<img src="img/usuario.png" alt="User" />
    <h3>Usuario ${index + 1}</h2>
      <p>${usuarios[index][0]}</p>
    <h3>Contraseña</h3>
    <p>${usuarios[index][1]}</p>
    </div>`;

    card.innerHTML = contenido;

    document.getElementsByClassName('cards')[0].appendChild(card);
  }
}
