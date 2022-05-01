var screenValue = '';
var totalAux = 0;
var total = 0;

function magia() {
  document.getElementsByClassName('calculadora')[0].classList.toggle('volteo');
  document.getElementsByClassName('screen')[0].classList.toggle('volteada');
}

function clearAll() {
  screenValue = '0';
  totalAux = 0;
  total = 0;
  updateScreen(screenValue);
}

function clearScreen() {
  screenValue = '0';
  updateScreen(screenValue);
}

function deleteLast() {
  screenValue = screenValue.slice(0, -1);
  updateScreen(screenValue);
}

function updateScreen(info) {
  var screen = document.getElementsByClassName('screen')[0];
  screen.innerHTML = info;
}

function numbers(num) {
  screenValue = screenValue.toString() + num.toString();
  if (screenValue.charAt(0) == 0) {
    screenValue = screenValue.substring(1, screenValue.length);
    updateScreen(screenValue);
  }
  updateScreen(screenValue);
}

function percent() {
  screenValue = screenValue / 10;
  updateScreen(screenValue);
}

function suma() {
  total = parseFloat(total) + parseFloat(screenValue);
  clearScreen();

  if (total != 0) {
    totalAux = total;
    updateScreen(totalAux);
  }
  console.log(total);
}

function resta() {
  total = parseFloat(screenValue) - parseFloat(total);
  clearScreen();

  if (total != 0) {
    totalAux = total;
    updateScreen(totalAux);
  }
  console.log(total);
}
