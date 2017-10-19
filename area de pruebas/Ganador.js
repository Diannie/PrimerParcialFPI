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

function EvaluarCombinaciones(combinacionesPosibles) { //devuelve la mano de poker de las combinaciones posibles
  var limite = combinacionesPosibles.length;
  var alturas = [];
  var alturaAnterior = 0;
  var alturaActual = 0;
  var mejorCombinacion = [];
  for (var i = 0; i < limite; i++) {
    var combinacionOrdenada = OrdenarCombinacion(combinacionesPosibles[i]);
    if(MismoPalo(combinacionOrdenada)==true){
      //EscaleraReal: A,K,Q,J,10 del mismo palo
      if (combinacionOrdenada[0].valor==9 && combinacionOrdenada[1].valor==10 && combinacionOrdenada[2].valor==11 && combinacionOrdenada[3].valor==12 && combinacionOrdenada[4].valor==13) {
        alturaActual = 10;
        if(alturaActual > alturaAnterior){
          alturaAnterior = alturaActual;
          mejorCombinacion = combinacionOrdenada;
        }

      }
      //EscaleraColor: Cualquiera de estas del mismo palo: A,2,3,4,5 - 2,3,4,5,6 - 3,4,5,6,7 - 4,5,6,7,8 - 5,6,7,8,9 - 6,7,8,9,10 - 7,8,9,10,J - 8,9,10,J,Q - 9,10,J,Q,K
      else if ((combinacionOrdenada[0].valor==1 && combinacionOrdenada[1].valor==2 && combinacionOrdenada[2].valor==3 && combinacionOrdenada[3].valor==4 && combinacionOrdenada[4].valor==13) ||
              (combinacionOrdenada[0].valor==1 && combinacionOrdenada[1].valor==2 && combinacionOrdenada[2].valor==3 && combinacionOrdenada[3].valor==4 && combinacionOrdenada[4].valor==5) ||
              (combinacionOrdenada[0].valor==2 && combinacionOrdenada[1].valor==3 && combinacionOrdenada[2].valor==4 && combinacionOrdenada[3].valor==5 && combinacionOrdenada[4].valor==6) ||
              (combinacionOrdenada[0].valor==3 && combinacionOrdenada[1].valor==4 && combinacionOrdenada[2].valor==5 && combinacionOrdenada[3].valor==6 && combinacionOrdenada[4].valor==7) ||
              (combinacionOrdenada[0].valor==4 && combinacionOrdenada[1].valor==5 && combinacionOrdenada[2].valor==6 && combinacionOrdenada[3].valor==7 && combinacionOrdenada[4].valor==8) ||
              (combinacionOrdenada[0].valor==5 && combinacionOrdenada[1].valor==6 && combinacionOrdenada[2].valor==7 && combinacionOrdenada[3].valor==8 && combinacionOrdenada[4].valor==9) ||
              (combinacionOrdenada[0].valor==6 && combinacionOrdenada[1].valor==7 && combinacionOrdenada[2].valor==8 && combinacionOrdenada[3].valor==9 && combinacionOrdenada[4].valor==10) ||
              (combinacionOrdenada[0].valor==7 && combinacionOrdenada[1].valor==8 && combinacionOrdenada[2].valor==9 && combinacionOrdenada[3].valor==10 && combinacionOrdenada[4].valor==11) ||
              (combinacionOrdenada[0].valor==8 && combinacionOrdenada[1].valor==9 && combinacionOrdenada[2].valor==10 && combinacionOrdenada[3].valor==11 && combinacionOrdenada[4].valor==12)) {
                alturaActual = 9;
                if(alturaActual > alturaAnterior){
                  alturaAnterior = alturaActual;
                  mejorCombinacion = combinacionOrdenada;
                }
      }
      //Color: Cualquier combinación de cartas pero todas del mismo palo
      else {
        alturaActual = 6;
        if(alturaActual > alturaAnterior){
          alturaAnterior = alturaActual;
          mejorCombinacion = combinacionOrdenada;
        }
      }
    }else {
      //Poker: Cuatro cartas iguales
      if ((combinacionOrdenada[0].valor==combinacionOrdenada[1].valor && combinacionOrdenada[1].valor==combinacionOrdenada[2].valor && combinacionOrdenada[2].valor==combinacionOrdenada[3].valor) ||
          (combinacionOrdenada[1].valor==combinacionOrdenada[2].valor && combinacionOrdenada[2].valor==combinacionOrdenada[3].valor && combinacionOrdenada[3].valor==combinacionOrdenada[4].valor)) {
            alturaActual = 8;
            if(alturaActual > alturaAnterior){
              alturaAnterior = alturaActual;
              mejorCombinacion = combinacionOrdenada;
            }
      }
      //FullHouse: Un trío y una pareja
      else if ((combinacionOrdenada[0].valor==combinacionOrdenada[1].valor && combinacionOrdenada[2].valor==combinacionOrdenada[3].valor && combinacionOrdenada[3].valor==combinacionOrdenada[4].valor) ||
              (combinacionOrdenada[3].valor==combinacionOrdenada[4].valor && combinacionOrdenada[0].valor==combinacionOrdenada[1].valor && combinacionOrdenada[1].valor==combinacionOrdenada[2].valor)) {
                alturaActual = 7;
                if(alturaActual > alturaAnterior){
                  alturaAnterior = alturaActual;
                  mejorCombinacion = combinacionOrdenada;
                }
      }
      //Escalera: A,2,3,4,5 - 2,3,4,5,6 - 3,4,5,6,7 - 4,5,6,7,8 - 5,6,7,8,9 - 6,7,8,9,10 - 7,8,9,10,J - 8,9,10,J,Q - 9,10,J,Q,K - 10,J,Q,K,A
      else if ((combinacionOrdenada[0].valor==1 && combinacionOrdenada[1].valor==2 && combinacionOrdenada[2].valor==3 && combinacionOrdenada[3].valor==4 && combinacionOrdenada[4].valor==13) ||
              (combinacionOrdenada[0].valor==1 && combinacionOrdenada[1].valor==2 && combinacionOrdenada[2].valor==3 && combinacionOrdenada[3].valor==4 && combinacionOrdenada[4].valor==5) ||
              (combinacionOrdenada[0].valor==2 && combinacionOrdenada[1].valor==3 && combinacionOrdenada[2].valor==4 && combinacionOrdenada[3].valor==5 && combinacionOrdenada[4].valor==6) ||
              (combinacionOrdenada[0].valor==3 && combinacionOrdenada[1].valor==4 && combinacionOrdenada[2].valor==5 && combinacionOrdenada[3].valor==6 && combinacionOrdenada[4].valor==7) ||
              (combinacionOrdenada[0].valor==4 && combinacionOrdenada[1].valor==5 && combinacionOrdenada[2].valor==6 && combinacionOrdenada[3].valor==7 && combinacionOrdenada[4].valor==8) ||
              (combinacionOrdenada[0].valor==5 && combinacionOrdenada[1].valor==6 && combinacionOrdenada[2].valor==7 && combinacionOrdenada[3].valor==8 && combinacionOrdenada[4].valor==9) ||
              (combinacionOrdenada[0].valor==6 && combinacionOrdenada[1].valor==7 && combinacionOrdenada[2].valor==8 && combinacionOrdenada[3].valor==9 && combinacionOrdenada[4].valor==10) ||
              (combinacionOrdenada[0].valor==7 && combinacionOrdenada[1].valor==8 && combinacionOrdenada[2].valor==9 && combinacionOrdenada[3].valor==10 && combinacionOrdenada[4].valor==11) ||
              (combinacionOrdenada[0].valor==8 && combinacionOrdenada[1].valor==9 && combinacionOrdenada[2].valor==10 && combinacionOrdenada[3].valor==11 && combinacionOrdenada[4].valor==12) ||
              (combinacionOrdenada[0].valor==9 && combinacionOrdenada[1].valor==10 && combinacionOrdenada[2].valor==11 && combinacionOrdenada[3].valor==12 && combinacionOrdenada[4].valor==13)) {
                  alturaActual = 5;
                  if(alturaActual > alturaAnterior){
                    alturaAnterior = alturaActual;
                    mejorCombinacion = combinacionOrdenada;
                  }
      }
      //Trio: Tres cartas iguales
      else if ((combinacionOrdenada[0].valor==combinacionOrdenada[1].valor && combinacionOrdenada[1].valor==combinacionOrdenada[2].valor) ||
              (combinacionOrdenada[1].valor==combinacionOrdenada[2].valor && combinacionOrdenada[2].valor==combinacionOrdenada[3].valor) ||
              (combinacionOrdenada[2].valor==combinacionOrdenada[3].valor && combinacionOrdenada[3].valor==combinacionOrdenada[4].valor)) {
                altura = 4;
                if(alturaActual > alturaAnterior){
                  alturaAnterior = alturaActual;
                  mejorCombinacion = combinacionOrdenada;
                }
      }
      //DoblePareja: Dos parejas
      else if ((combinacionOrdenada[0].valor==combinacionOrdenada[1].valor && combinacionOrdenada[2].valor==combinacionOrdenada[3].valor) ||
              (combinacionOrdenada[1].valor==combinacionOrdenada[2].valor && combinacionOrdenada[3].valor==combinacionOrdenada[4].valor) ||
              (combinacionOrdenada[0].valor==combinacionOrdenada[1].valor && combinacionOrdenada[3].valor==combinacionOrdenada[4].valor)) {
                alturaActual = 3;
                if(alturaActual > alturaAnterior){
                  alturaAnterior = alturaActual;
                  mejorCombinacion = combinacionOrdenada;
                }
      }
      //Pareja: Una Pareja
      else if ((combinacionOrdenada[0].valor==combinacionOrdenada[1].valor) ||
              (combinacionOrdenada[1].valor==combinacionOrdenada[2].valor) ||
              (combinacionOrdenada[2].valor==combinacionOrdenada[3].valor) ||
              (combinacionOrdenada[3].valor==combinacionOrdenada[4].valor)) {
                alturaActual = 2;
                if(alturaActual > alturaAnterior){
                  alturaAnterior = alturaActual;
                  mejorCombinacion = combinacionOrdenada;
                }
      }
      //CartaAlta: Si no se cumple ninguno anterior, se toma la carta más alta
      else {
        alturaActual = 1;
        if(alturaActual > alturaAnterior){
          alturaAnterior = alturaActual;
          mejorCombinacion = combinacionOrdenada;
        }
      }
    }
  }
  var mensaje = "";
  for (var i = 0; i < mejorCombinacion.length; i++) {
    mensaje+= mejorCombinacion[i].path + "\n" ;
  }
  //SEGUIR AQUIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII
  alert(alturaActual);
  alert(mensaje);
  return ;
}

//SEGUIR AQUIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII
function EvaluarGanador(cartasEnMesa, jugadores) {
  jugadores = jugadores.length;
  var combinacionesPosibles = Combinaciones(cartasEnMesa, jugadores);
  for (var i = 0; i < jugadores; i++) {
    EvaluarCombinaciones(combinacionesPosibles[i]);
  }
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

function OrdenarCombinacion(combinacion) {
  combinacion.sort(function(a, b){return a.palo-b.palo});
  combinacion.sort(function(a, b){return a.valor-b.valor});
  return combinacion;
}
