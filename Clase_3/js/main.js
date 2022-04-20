// || operador "or"

//Solo pueden entrar hombres mayores de edad con más de 40usd

var generoCliente = prompt('¿Genero? ("h", "m", "otro")');
var dinero = prompt('¿Cuánto dinero tiene? (Sólo el numero)');
var edad = prompt('¿Qué edad tiene? (Sólo el numero)');

if (generoCliente == 'h') {
  if (dinero >= 40) {
    if (edad >= 10) {
      alert('Puede pasar');
    } else {
      alert('Estas muy joven');
    }
  } else {
    alert('Se necesita más dinero para el consumo minimo');
  }
} else {
  alert('Una disculpa, es solo para caballeros');
}
