function AlturaCombinacion(cartasOrdenadas) { //devuelve la mano de poker de las combinaciones posibles
  var altura = 0;
  if(MismoPalo(cartasOrdenadas) == true){
    //EscaleraReal: A,K,Q,J,10 del mismo palo
    if (true) {

    }
    //EscaleraColor: Cualquiera de estas del mismo palo: A,2,3,4,5 - 2,3,4,5,6 - 3,4,5,6,7 - 4,5,6,7,8 - 5,6,7,8,9 - 6,7,8,9,10 - 7,8,9,10,J - 8,9,10,J,Q - 9,10,J,Q,K
    else if (true) {

    }
    //Color: Cualquier combinación de cartas pero todas del mismo palo
    else {

    }
  }else {
    //Poker: Cuatro cartas iguales
    if (true) {

    }
    //FullHouse: Un trío y una pareja
    else if (true) {

    }
    //Escalera: A,2,3,4,5 - 2,3,4,5,6 - 3,4,5,6,7 - 4,5,6,7,8 - 5,6,7,8,9 - 6,7,8,9,10 - 7,8,9,10,J - 8,9,10,J,Q - 9,10,J,Q,K - 10,J,Q,K,A
    else if (true) {
    }
    //Trio: Tres cartas iguales
    else if (true) {

    }
    //DoblePareja: Dos parejas
    else if (true) {

    }
    //Pareja: Una Pareja
    else if (true) {

    }
    //CartaAlta: Si no se cumple ninguno anterior, se toma la carta más alta
    else {

    }
  }
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
function MismoColor(Combinacion) {
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
function EscaleraReal(cartasIngresadas) {
  var str = "";
  var limite = cartasIngresadas.length;
  for (var i = 0; i < limite; i++) {
    str += cartasIngresadas[i].valor+",";
  }
  var patt = /9,10,11,12,13,/g; //EscaleraReal: A,K,Q,J,10 del mismo palo
  return patt.test(str);
}
