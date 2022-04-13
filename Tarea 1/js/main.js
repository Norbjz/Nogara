//Ejercicios de programación básica #1

//Pedir 3 nombres y su edad correspondientes, para después mandar por mensaje al que tiene más edad
function masEdad() {
  var persona1 = new Object();
  var persona2 = new Object();
  var persona3 = new Object();

  persona1.name = prompt('Dame un nombre');
  persona1.edad = prompt('¿Cuál es la edad de ' + persona1.name + '?');

  persona2.name = prompt('Dame otro nombre');
  persona2.edad = prompt('¿Cuál es la edad de ' + persona2.name + '?');

  persona3.name = prompt('Dame otro nombre');
  persona3.edad = prompt('¿Cuál es la edad de ' + persona3.name + '?');

  if (persona1.edad > persona2.edad && persona1.edad > persona3.edad) {
    alert(persona1.name + ' es el/la mayor.');
  } else if (persona2.edad > persona1.edad && persona2.edad > persona3.edad) {
    alert(persona2.name + ' es el/la mayor.');
  } else if (persona3.edad > persona1.edad && persona3.edad > persona2.edad) {
    alert(persona3.name + ' es el/la mayor.');
  } else if (persona1.edad === persona2.edad) {
    alert(persona1.name + ' y ' + persona2.name + ' tienen la misma edad.');
  } else if (persona1.edad === persona3.edad) {
    alert(persona1.name + ' y ' + persona3.name + ' tienen la misma edad.');
  } else if (persona2.edad === persona3.edad) {
    alert(persona2.name + ' y ' + persona3.name + ' tienen la misma edad.');
  } else {
    alert('Algo salio mal, vuelva a intentarlo');
  }
}

/* Pedir el nombre del alumno y si:
el nombre es “Pedro” tiene de calificación 8
el nombre es “María” tiene de calificación 10
el nombre es “Juanita” tiene de calificación 7 */

function calificacion() {
  var nom = prompt('¿Cuál es tu nombre');

  if (nom == 'Pedro') {
    alert('Tu calificación es 8');
  } else if (nom == 'Maria') {
    alert('Tu calificación es 10');
  } else if (nom == 'Juanita') {
    alert('Tu calificación es 7');
  } else {
    alert('No eres alumno de este grupo');
  }
}

/* Pedir el número de aciertos en el examen y si:
Más de 30 aciertos es igual a 6
Más de 40 aciertos es igual a 8
Más de 50 aciertos es igual a 10
Menos o igual de 30 aciertos es igual a 5 */

function aciertos() {
  var aciertos = prompt('¿Cuántos aciertos tuviste en el exámen?');

  if (aciertos > 50) {
    alert('Tu calificación es de 10');
  } else if (aciertos > 40) {
    alert('Tu calificación es de 8');
  } else if (aciertos > 30) {
    alert('Tu calificación es de 6');
  } else {
    alert('Tu calificación es de 5');
  }
}

//Pedir dos números y mostrar cual es mayor

function mayor() {
  var num1 = prompt('Dame un número');
  var num2 = prompt('Dame otro número');

  if (num1 === num2) {
    alert('Son números iguales');
  } else if (num1 > num2) {
    alert(num1 + ' es mayor.');
  } else {
    alert(num2 + ' es mayor.');
  }
}

//Pedir 2 números y mostrar el menor

function menor() {
  var num1 = prompt('Dame un número');
  var num2 = prompt('Dame otro número');

  if (num1 === num2) {
    alert('Son números iguales');
  } else if (num1 < num2) {
    alert(num1 + ' es el menor.');
  } else {
    alert(num2 + ' es el menor.');
  }
}

//Preguntar cúal es la contraseña secreta (“Pay de Manzana”) y si es correcto dejarlo entrar en caso de que no mostrar un mensaje de Sigue participando

function pass() {
  var pass = prompt('¿Cuál es la contraseña secreta?');
  var secretPass = 'Pay de Manzana';

  if (pass === secretPass) {
    alert('Puede pasar, buen hombre');
  } else {
    alert('¡Largo de aquí, perro!');
  }
}

//Crear algoritmo para detectar si un número es par o impar
function parImpar(params) {
  var num = prompt('Dame un número');

  if (num % 2 == 0) {
    alert(num + ' es par');
  } else {
    alert(num + ' es impar');
  }
}

//Preguntar la edad del usuario y si es mayor de 18 mostrar mensaje de que ya puede manejar

function manejar() {
  var edad = prompt('¿Cuántos años tienes');

  if (edad > 18) {
    alert('¡Ya puedes manejar!');
  } else if (edad < 18) {
    alert('Eres todavia muy joven para estar detrás de un volante');
  } else if (edad == 18) {
    alert('¡Justo la edad para iniciar a manejar! ¡Ya puedes manejar!');
  }
}
