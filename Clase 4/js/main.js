//Arrays
//Un arreglo es una colección de datos

var frutas = ['manzana', 'pera', 'naranja', 'platano'];

//Null - Undefined

console.log(frutas[4]); //Undefined

//Sobreescribir valores

frutas[1] = 'toronja';
console.log(frutas);

//Ejercicio

/* var perfilUsuario = [];

perfilUsuario[0] = prompt('¿Qué edad tienes?');
perfilUsuario[1] = prompt('¿Cuál es tu nombre?');
perfilUsuario[2] = prompt('¿Esta usted casado(a)?');
perfilUsuario[3] = prompt('Introduzca su numero telefónico');
perfilUsuario[4] = prompt('¿Tiene hijos?');

perfilUsuario[0] = parseInt(perfilUsuario[0]);

if (
  perfilUsuario[2] == 'si' ||
  perfilUsuario[2] == 'Si' ||
  perfilUsuario[2] == 'SI'
) {
  perfilUsuario[2] = true;
} else {
  perfilUsuario[2] = false;
}

perfilUsuario[3] = parseInt(perfilUsuario[3]);

if (
  perfilUsuario[4] == 'si' ||
  perfilUsuario[4] == 'Si' ||
  perfilUsuario[4] == 'SI'
) {
  perfilUsuario[4] = true;
} else {
  perfilUsuario[4] = false;
} */

//Iterador, for

for (let i = 0; i < 4; i++) {
  //Primer i define inicio, segundo i define el limite, ultimo i el intervalo en que aumenta
  console.log(frutas[i]);
}

//Ejercicio

var imagen = [
  'img/pin.jpg',
  'img/pin1.jpg',
  'img/pin2.jpg',
  'img/pin3.jpg',
  'img/pin4.jpg',
];

for (let index = 0; index < imagen.length; index++) {
  document.write('<img width="300" src="' + imagen[index] + '" alt=""></img>');
}
