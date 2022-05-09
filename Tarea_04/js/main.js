var screenValue = '';
var total = 0;
var encendido = false;
var prevNum = 0;
var igualBtn = true;
var arr = [];

function magia() {
  document.getElementsByClassName('calculadora')[0].classList.toggle('volteo');
  document.getElementsByClassName('screen')[0].classList.toggle('volteada');
}

function onOff() {
  if (encendido == false) {
    encendido = true;
    screenValue = '0';
    total = 0;
    prevNum = 0;
    igualBtn = true;
    arr = [];
    updateScreen(screenValue);
  } else {
    encendido = false;
    updateScreen();
  }
}

function clearAll() {
  screenValue = '0';
  total = 0;
  prevNum = 0;
  igualBtn = true;
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
  if (encendido) {
    if (info.length > 7) {
      info = parseFloat(info);
      screen.innerHTML = info.toExponential(2);
    } else {
      screen.innerHTML = info;
    }
  } else {
    screen.innerHTML = '';
  }
}

function percent() {
  screenValue = parseFloat(screenValue) / 10;
  updateScreen(screenValue);
}

function numbers(num) {
  if (igualBtn) {
    total = 0;
    prevNum = 0;
    arr = [];
  }

  screenValue = screenValue.toString() + num.toString();
  if (screenValue.charAt(0) == 0) {
    screenValue = screenValue.substring(1, screenValue.length);
    updateScreen(screenValue);
  }
  updateScreen(screenValue);
}

function operator(op) {
  var operador = op.innerHTML;
  igualBtn = false;

  if (arr.length == 0) {
    arr.push(parseFloat(screenValue));
    arr.push(operador);
    screenValue = '';
  } else if (arr.length == 2) {
    if (screenValue != '') {
      arr.push(parseFloat(screenValue));
      prevNum = arr[2];
      calcular(operador);
    } else {
      arr[1] = operador;
    }
  }
}

function calcular(op) {
  var operador = arr[1];
  switch (operador) {
    case '÷':
      if (igualBtn) {
        total = parseFloat(arr[0]) / prevNum;
      } else {
        total = parseFloat(arr[0]) / parseFloat(arr[2]);
      }

      break;

    case 'x':
      if (igualBtn) {
        total = parseFloat(arr[0]) * prevNum;
      } else {
        total = parseFloat(arr[0]) * parseFloat(arr[2]);
      }

      break;

    case '-':
      if (igualBtn) {
        total = parseFloat(arr[0]) - prevNum;
      } else {
        total = parseFloat(arr[0]) - parseFloat(arr[2]);
      }

      break;

    case '+':
      if (igualBtn) {
        total = parseFloat(arr[0]) + prevNum;
      } else {
        total = parseFloat(arr[0]) + parseFloat(arr[2]);
      }

      break;

    default:
      'error';
      break;
  }

  arr = [];
  total = Math.round((total + Number.EPSILON) * 10000) / 10000;
  arr.push(total);
  arr.push(op);
  screenValue = '';
  total = total.toString();
  updateScreen(total);
}

function igual() {
  if (arr.length == 0) {
    return;
  } else {
    if (igualBtn == false) {
      igualBtn = true;
      arr.push(parseFloat(screenValue));
      prevNum = arr[2];
      calcular(arr[1]);
    } else {
      calcular(arr[1]);
    }
  }
}
