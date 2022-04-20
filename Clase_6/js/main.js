function holi() {
  var user = prompt('¿Quién eres?');
  alert('Bienvenido ' + user + '! Te extrañé mucho!');
}

function arcoiris() {
  var randomColor = Math.floor(Math.random() * 16777215).toString(16);
  document.getElementsByTagName('button')[1].style.backgroundColor =
    '#' + randomColor;
}

var index = 0;

function resetColor() {
  var colores = ['#47e3ff', '#ff6347'];
  document.getElementsByTagName('button')[2].style.backgroundColor =
    colores[index];

  if (index == 0) {
    index++;
  } else {
    index = 0;
  }
}

var index = 0;

function cambioColor() {
  var colores = ['deeppink', 'green', '#6666ff', 'blueviolet', 'orange', 'red'];
  document.getElementsByTagName('button')[3].style.backgroundColor =
    colores[index];

  index++;

  if (index == colores.length) {
    index = 0;
  }
}
