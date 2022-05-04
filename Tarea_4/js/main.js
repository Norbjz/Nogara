var screenValue = '';
var total = 0;
var encendido = 0;
var prevNum = 0;
var igualBtn = true;
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
    prevNum = 0;
    igualBtn = true;
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
  arr.push(total);
  arr.push(op);
  screenValue = '';
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
      igualBtn = true;
      calcular(arr[1]);
    }
  }
}
