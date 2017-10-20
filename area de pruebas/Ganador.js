
function AlturaCombinacion(cartasDesorden) { //devuelve la mano de poker de las combinaciones posibles
  var altura = 0;
  var cartasOrdenadas = OrdenarCombinacion(cartasDesorden);
  if(MismoPalo(cartasOrdenadas)){
    //EscaleraReal: A,K,Q,J,10 del mismo palo
    if (EscaleraReal(cartasOrdenadas)) {
      altura = 10;
    }
    //EscaleraColor: Cualquiera de estas del mismo palo: A,2,3,4,5 - 2,3,4,5,6 - 3,4,5,6,7 - 4,5,6,7,8 - 5,6,7,8,9 - 6,7,8,9,10 - 7,8,9,10,J - 8,9,10,J,Q - 9,10,J,Q,K
    else if (EscaleraColor(cartasOrdenadas)) {
      altura = 9;
    }
    //Color: Cualquier combinación de cartas pero todas del mismo palo
    else {
      altura = 6;
    }
  }else {
    //Poker: Cuatro cartas iguales
    if (Poker(cartasOrdenadas)) {
      altura = 8;
    }
    //FullHouse: Un trío y una pareja
    else if (FullHouse(cartasOrdenadas)) {
      altura = 7;
    }
    //Escalera: A,2,3,4,5 - 2,3,4,5,6 - 3,4,5,6,7 - 4,5,6,7,8 - 5,6,7,8,9 - 6,7,8,9,10 - 7,8,9,10,J - 8,9,10,J,Q - 9,10,J,Q,K - 10,J,Q,K,A
    else if (Escalera(cartasOrdenadas)) {
      altura = 5;
    }
    //Trio: Tres cartas iguales
    else if (Trio(cartasOrdenadas)) {
      altura = 4;
    }
    //DoblePareja: Dos parejas
    else if (DoblePareja(cartasOrdenadas)) {
      altura = 3;
    }
    //Pareja: Una Pareja
    else if (Pareja(cartasOrdenadas)) {
      altura = 2;
    }
    //CartaAlta: Si no se cumple ninguno anterior, se toma la carta más alta
    else {
      altura = 1;
    }
  }
  return altura;
}
function Combinaciones(cartasEnMesa, jugadores) {
  var combinacionesPosibles = [];
  var limite = jugadores.length;
  for (var i = 0; i < limite; i++) {
    var combinacionesDelJugador =[];
    combinacionesDelJugador.push([cartasEnMesa[0], cartasEnMesa[1], cartasEnMesa[2], jugadores[i].cartas[0], jugadores[i].cartas[1]]);
    combinacionesDelJugador.push([cartasEnMesa[1], cartasEnMesa[2], cartasEnMesa[3], jugadores[i].cartas[0], jugadores[i].cartas[1]]);
    combinacionesDelJugador.push([cartasEnMesa[2], cartasEnMesa[3], cartasEnMesa[4], jugadores[i].cartas[0], jugadores[i].cartas[1]]);
    combinacionesDelJugador.push([cartasEnMesa[0], cartasEnMesa[2], cartasEnMesa[4], jugadores[i].cartas[0], jugadores[i].cartas[1]]);
    combinacionesDelJugador.push([cartasEnMesa[0], cartasEnMesa[1], cartasEnMesa[3], jugadores[i].cartas[0], jugadores[i].cartas[1]]);
    combinacionesDelJugador.push([cartasEnMesa[0], cartasEnMesa[1], cartasEnMesa[4], jugadores[i].cartas[0], jugadores[i].cartas[1]]);
    combinacionesDelJugador.push([cartasEnMesa[0], cartasEnMesa[3], cartasEnMesa[4], jugadores[i].cartas[0], jugadores[i].cartas[1]]);
    combinacionesDelJugador.push([cartasEnMesa[1], cartasEnMesa[2], cartasEnMesa[4], jugadores[i].cartas[0], jugadores[i].cartas[1]]);
    combinacionesDelJugador.push([cartasEnMesa[0], cartasEnMesa[2], cartasEnMesa[3], jugadores[i].cartas[0], jugadores[i].cartas[1]]);
    combinacionesDelJugador.push([cartasEnMesa[1], cartasEnMesa[3], cartasEnMesa[4], jugadores[i].cartas[0], jugadores[i].cartas[1]]);
    combinacionesPosibles.push(combinacionesDelJugador);
  }
  return combinacionesPosibles;
}

function OrdenarCombinacion(combinacion) {
  combinacion.sort(function(a, b){return a.palo-b.palo});
  combinacion.sort(function(a, b){return a.valor-b.valor});
  return combinacion;
}
function EscaleraReal(cartasIngresadas) {
  var str = "";
  var limite = cartasIngresadas.length;
  for (var i = 0; i < limite; i++) {
    str += cartasIngresadas[i].valor+",";
  }
  var patt = /9,10,11,12,13,/g; //EscaleraReal: A,K,Q,J,10 del mismo palo
  return patt.test(str);
}

function EscaleraColor(cartasIngresadas) {
  var str = "";
  var limite = cartasIngresadas.length;
  for (var i = 0; i < limite; i++) {
    str += cartasIngresadas[i].valor+",";
  }
  //A,2,3,4,5 - 2,3,4,5,6 - 3,4,5,6,7 - 4,5,6,7,8 - 5,6,7,8,9
  //6,7,8,9,10 - 7,8,9,10,J - 8,9,10,J,Q - 9,10,J,Q,K
  var patt = [/1,2,3,4,13,/g,/1,2,3,4,5,/g,/2,3,4,5,6,/g,/3,4,5,6,7,/g,/4,5,6,7,8,/g,/5,6,7,8,9,/g,/6,7,8,9,10,/g,/7,8,9,10,11,/g,/8,9,10,11,12,/g];
  var limite2 = patt.length;
  for (var i = 0; i < limite2; i++) {
    if (patt[i].test(str)) {
      return true;
    }
  }
  return false;
}

function Poker(Combinacion) {
  var limite = Combinacion.length;
  var contador = 0;
  var valor = Combinacion[2].valor;
  for (var icarta = 0; icarta < limite; icarta++) {
    if(Combinacion[icarta].valor == valor){
      contador++;
    }
  }
  if (contador == limite-1) {
    return true;
  }
  return false;
}

function FullHouse(Combinacion) {
  var limite = Combinacion.length;
  var contadorTres = 0;
  var contadorDos = 0;
  var valorTres = Combinacion[2].valor;
  var valorDos = Combinacion[0].valor;
  if(valorDos == valorTres){
    valorDos=Combinacion[4].valor;
  }
  for (var icarta = 0; icarta < limite; icarta++) {
    if(Combinacion[icarta].valor == valorTres){
      contadorTres++;
    }else if(Combinacion[icarta].valor == valorDos){
      contadorDos++;
    }
  }
  if (contadorTres == 3 && contadorDos == 2) {
    return true;
  }
  return false;

}
function Escalera(cartasIngresadas) {
  var str = "";
  var limite = cartasIngresadas.length;
  for (var i = 0; i < limite; i++) {
    str += cartasIngresadas[i].valor+",";
  }
  //A,2,3,4,5 - 2,3,4,5,6 - 3,4,5,6,7 - 4,5,6,7,8 - 5,6,7,8,9
  //6,7,8,9,10 - 7,8,9,10,J - 8,9,10,J,Q - 9,10,J,Q,K
  var patt = [/1,2,3,4,13,/g,/1,2,3,4,5,/g,/2,3,4,5,6,/g,/3,4,5,6,7,/g,/4,5,6,7,8,/g,/5,6,7,8,9,/g,/6,7,8,9,10,/g,/7,8,9,10,11,/g,/8,9,10,11,12,/g,/9,10,11,12,13,/g];
  var limite2 = patt.length;
  for (var i = 0; i < limite2; i++) {
    if (patt[i].test(str)) {
      return true;
    }
  }
  return false;
}
function Trio(Combinacion) {
  var limite = Combinacion.length;
  var contadorTres = 0;
  var contadorDos = 0;
  var valorTres = Combinacion[2].valor;
  for (var icarta = 0; icarta < limite; icarta++) {
    if(Combinacion[icarta].valor == valorTres){
      contadorTres++;
    }
  }
  if (contadorTres == 3) {
    return true;
  }
  return false;

}
function DoblePareja(Combinacion) {
  var limite = Combinacion.length;
  var contadorSobra = 0;
  var contadorDos1 = 0;
  var contadorDos2 = 0;
  var valorDos1 = Combinacion[1].valor;
  var valorDos2 = Combinacion[3].valor;

  for (var icarta = 0; icarta < limite; icarta++) {
    if(Combinacion[icarta].valor == valorDos1){
      contadorDos1++;
    }else if(Combinacion[icarta].valor == valorDos2){
      contadorDos2++;
    }else {
      contadorSobra++;
    }
  }
  if (contadorSobra == 1 && contadorDos1 == 2 && contadorDos2 == 2) {
    return true;
  }
  return false;
}
function Pareja(Combinacion) {
  var limite = Combinacion.length;
  var contadorPareja = 0;
  for (var i = 0; i < limite; i++) {
    var valorPareja = Combinacion[i].valor;
    for (var icarta = 0; icarta < limite; icarta++) {
      if(Combinacion[icarta].valor == valorPareja){
        contadorPareja++;
        if (contadorPareja == 2) {
          return true;
        }
      }
    }
  }
  return false;
}
function MismoPalo(Combinacion) {
  var limite = Combinacion.length;
  var contador = 0;
  var palo = Combinacion[0].palo;
  for (var icarta = 0; icarta < limite; icarta++) {
    if(Combinacion[icarta] == palo){
      contador++;
    }
  }
  if (contador == limite) {
    return true;
  }
  return false;
}
