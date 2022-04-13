/* funciones */
var usuarios = [];
var noUsuarios = 0;

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

function getInfo(input) {
  return input.value;
}

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

function saveInfo(info) {
  document.getElementsByClassName('registrado')[0].style.display = 'block';
  document.getElementsByClassName('requerido')[0].style.display = 'none';
  usuarios[noUsuarios] = info;
  noUsuarios++;
}

function clearInput(user, pass) {
  user.value = '';
  pass.value = '';
}

function mostrar() {
  document.getElementsByClassName('modal')[0].style.display = 'flex';
  document.getElementsByClassName('form')[0].style.display = 'none';
}

function ocultar() {
  document.getElementsByClassName('modal')[0].style.display = 'none';
  document.getElementsByClassName('form')[0].style.display = 'flex';
}

function pintar() {
  document.getElementsByClassName('cards')[0].replaceChildren('');

  for (let index = 0; index < usuarios.length; index++) {
    var card = document.createElement('div');
    card.classList = 'userCard';

    var contenido = `<img src="https://picsum.photos/150" alt="User" />
    <h3>Usuario ${index + 1}</h2>
      <p>${usuarios[index][0]}</p>
    <h3>Contraseña</h3>
    <p>${usuarios[index][1]}</p>
    </div>`;

    card.innerHTML = contenido;

    document.getElementsByClassName('cards')[0].appendChild(card);
  }
}
