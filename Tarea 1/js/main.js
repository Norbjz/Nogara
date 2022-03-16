//Ejercicios de programación básica #1

//Pedir 3 nombres y su edad correspondientes, para después mandar por mensaje al que tiene más edad

/* Pedir el nombre del alumno y si:
el nombre es “Pedro” tiene de calificación 8
el nombre es “María” tiene de calificación 10
el nombre es “Juanita” tiene de calificación 7 */

var nom2 = prompt('¿Cuál es tu nombre');

if (nom2 == 'Pedro') {
    alert('Tu calificación es 8');
} else if (nom2 == 'Maria') {
    alert('Tu calificación es 10');
} else if (nom2 == 'Juanita') {
    alert('Tu calificación es 7');
} else {
    alert('No eres alumno de este grupo');
}

/* Pedir el número de aciertos en el examen y si:
Más de 30 aciertos es igual a 6
Más de 40 aciertos es igual a 8
Más de 50 aciertos es igual a 10
Menos o igual de 30 aciertos es igual a 5 */

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

//Pedir dos números y mostrar cual es mayor

var num1 = prompt('Dame un número');
var num2 = prompt('Dame otro número');

if (num1 === num2) {
    alert('Son números iguales');
} else if (num1 > num2) {
    alert(num1 + ' es mayor.');
} else {
    alert(num2 + ' es mayor.');
}

//Pedir 2 números y mostrar el menor

var num1 = prompt('Dame un número');
var num2 = prompt('Dame otro número');

if (num1 === num2) {
    alert('Son números iguales');
} else if (num1 < num2) {
    alert(num1 + ' es el menor.');
} else {
    alert(num2 + ' es el menor.');
}


//Preguntar cúal es la contraseña secreta (“Pay de Manzana”) y si es correcto dejarlo entrar en caso de que no mostrar un mensaje de Sigue participando

var pass = prompt('¿Cuál es la contraseña secreta?')
var secretPass = 'Pay de Manzana'

if (pass === secretPass) {
    alert('Puede pasar, buen hombre')
} else {
    alert('¡Largo de aquí, perro!')
}

//Crear algoritmo para detectar si un número es par o impar


//Preguntar la edad del usuario y si es mayor de 18 mostrar mensaje de que ya puede manejar
