var screenValue = '';
var total = 0;
var encendido = 0;
var lastOperador = 0;
var arr = [];

function magia() {
  document.getElementsByClassName('calculadora')[0].classList.toggle('volteo');
  document.getElementsByClassName('screen')[0].classList.toggle('volteada');
}

function onOff() {
  if (encendido == 0) {
    encendido = 1;
    screenValue = '0';
    totalAux = 0;
    total = 0;
    arr = [];
    updateScreen(screenValue);
  } else {
    encendido = 0;
    updateScreen(screenValue);
  }
}

function clearAll() {
  screenValue = '0';
  totalAux = 0;
  total = 0;
  arr = [];
  updateScreen(screenValue);
}

function deleteLast() {
  screenValue = screenValue.slice(0, -1);
  if (screenValue.length == 0) {
    screenValue = '0';
  }
  updateScreen(screenValue);
}

function updateScreen(info) {
  var screen = document.getElementsByClassName('screen')[0];
  if (encendido == 1) {
    screen.innerHTML = info;
  } else {
    screen.innerHTML = '';
  }
}

function percent() {
  screenValue = parseFloat(screenValue) / 10;
  updateScreen(screenValue);
}

function numbers(num) {
  screenValue = screenValue.toString() + num.toString();
  if (screenValue.charAt(0) == 0) {
    screenValue = screenValue.substring(1, screenValue.length);
    updateScreen(screenValue);
  }
  updateScreen(screenValue);
}

function operator(op) {
  var operador = op.innerHTML;

  if (arr.length == 0) {
    arr.push(parseFloat(screenValue));
    arr.push(operador);
    screenValue = '';
  } else if (arr.length == 2) {
    if (screenValue != '') {
      arr.push(parseFloat(screenValue));
      calcular(operador);
    } else {
      arr[1] = operador;
    }
  }
}

/* function igual() {
  arr.push(parseFloat(screenValue));

  console.log(arr.length);
  if (arr.length == 2) {
  } else {
  }
  arr.push(totalAux);
  console.log(arr.length);
  calcular(arr[1]);
} */

function calcular(op) {
  var operador = arr[1];
  switch (operador) {
    case '÷':
      total = parseFloat(arr[0]) / parseFloat(arr[2]);
      arr = [];
      arr.push(total);
      arr.push(op);
      screenValue = '';
      anterior = true;
      updateScreen(total);
      break;

    case 'x':
      total = parseFloat(arr[0]) * parseFloat(arr[2]);
      arr = [];
      arr.push(total);
      arr.push(op);
      screenValue = '';
      anterior = true;
      updateScreen(total);
      break;

    case '-':
      total = parseFloat(arr[0]) - parseFloat(arr[2]);
      arr = [];
      arr.push(total);
      arr.push(op);
      screenValue = '';
      anterior = true;
      updateScreen(total);
      break;

    case '+':
      total = parseFloat(arr[0]) + parseFloat(arr[2]);
      arr = [];
      arr.push(total);
      arr.push(op);
      screenValue = '';
      anterior = true;
      updateScreen(total);
      break;

    default:
      'error';
      break;
  }
}
