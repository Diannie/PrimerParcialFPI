function mostrarTurnoJugador(jugadores, idJugador) {
  if (jugadores.length == 2) {
    if(idJugador == 1){
      PosicionamientoConCarta(jugadores[1], 2);
      PosicionamientoSinCarta(jugadores[0], 7);
    }else if(idJugador == 2){
      PosicionamientoSinCarta(jugadores[0], 7);
      PosicionamientoConCarta(jugadores[1], 2);
    }
  }
  else if (jugadores.length == 3) {
    if(idJugador == 1){
      PosicionamientoConCarta(jugadores[2], 1);
      PosicionamientoSinCarta(jugadores[1], 3);
      PosicionamientoSinCarta(jugadores[0], 7);
    }else if(idJugador == 2){
      PosicionamientoSinCarta(jugadores[2], 1);
      PosicionamientoConCarta(jugadores[1], 3);
      PosicionamientoSinCarta(jugadores[0], 7);
    }else if (idJugador == 3) {
      PosicionamientoSinCarta(jugadores[2], 1);
      PosicionamientoSinCarta(jugadores[1], 3);
      PosicionamientoConCarta(jugadores[0], 7);
    }
  }
  else if (jugadores.length == 4) {
    if (idJugador == 1) {
      PosicionamientoConCarta(jugadores[3], 1);
      PosicionamientoSinCarta(jugadores[2], 3);
      PosicionamientoSinCarta(jugadores[1], 8);
      PosicionamientoSinCarta(jugadores[0], 6);
    }else if (idJugador == 2) {
      PosicionamientoSinCarta(jugadores[3], 1);
      PosicionamientoConCarta(jugadores[2], 3);
      PosicionamientoSinCarta(jugadores[1], 8);
      PosicionamientoSinCarta(jugadores[0], 6);
    }else if (idJugador == 3) {
      PosicionamientoSinCarta(jugadores[3], 1);
      PosicionamientoSinCarta(jugadores[2], 3);
      PosicionamientoConCarta(jugadores[1], 8);
      PosicionamientoSinCarta(jugadores[0], 6);
    }else if (idJugador == 4) {
      PosicionamientoSinCarta(jugadores[3], 1);
      PosicionamientoSinCarta(jugadores[2], 3);
      PosicionamientoSinCarta(jugadores[1], 8);
      PosicionamientoConCarta(jugadores[0], 6);
    }
  }
  else if (jugadores.length == 5) {
    Posicionamiento(jugadores[4], 10);
    Posicionamiento(jugadores[3], 2);
    Posicionamiento(jugadores[2], 4);
    Posicionamiento(jugadores[1], 6);
    Posicionamiento(jugadores[0], 8);
  }
  else if (jugadores.length == 6) {
    Posicionamiento(jugadores[5], 1);
    Posicionamiento(jugadores[4], 2);
    Posicionamiento(jugadores[3], 3);
    Posicionamiento(jugadores[2], 6);
    Posicionamiento(jugadores[1], 7);
    Posicionamiento(jugadores[0], 8);
  }
  else if (jugadores.length == 7) {
    Posicionamiento(jugadores[6], 1);
    Posicionamiento(jugadores[5], 3);
    Posicionamiento(jugadores[4], 4);
    Posicionamiento(jugadores[3], 6);
    Posicionamiento(jugadores[2], 7);
    Posicionamiento(jugadores[1], 8);
    Posicionamiento(jugadores[0], 10);
  }
  else if (jugadores.length == 8) {
    Posicionamiento(jugadores[7], 1);
    Posicionamiento(jugadores[6], 3);
    Posicionamiento(jugadores[5], 4);
    Posicionamiento(jugadores[4], 5);
    Posicionamiento(jugadores[3], 6);
    Posicionamiento(jugadores[2], 8);
    Posicionamiento(jugadores[1], 9);
    Posicionamiento(jugadores[0], 10);
  }
  else if (jugadores.length == 9) {
    Posicionamiento(jugadores[8], 1);
    Posicionamiento(jugadores[7], 2);
    Posicionamiento(jugadores[6], 3);
    Posicionamiento(jugadores[5], 4);
    Posicionamiento(jugadores[4], 5);
    Posicionamiento(jugadores[3], 6);
    Posicionamiento(jugadores[2], 8);
    Posicionamiento(jugadores[1], 9);
    Posicionamiento(jugadores[0], 10);
  }
  else{
    Posicionamiento(jugadores[9], 1);
    Posicionamiento(jugadores[8], 2);
    Posicionamiento(jugadores[7], 3);
    Posicionamiento(jugadores[6], 4);
    Posicionamiento(jugadores[5], 5);
    Posicionamiento(jugadores[4], 6);
    Posicionamiento(jugadores[3], 8);
    Posicionamiento(jugadores[2], 9);
    Posicionamiento(jugadores[1], 10);
    Posicionamiento(jugadores[0], 7);
  }

}

function mostrarJugadores(jugadores){
  if (jugadores.length == 2) {
    Posicionamiento(jugadores[1], 2);
    Posicionamiento(jugadores[0], 7);
  }
  else if (jugadores.length == 3) {
    Posicionamiento(jugadores[0], 1);
    Posicionamiento(jugadores[1], 3);
    Posicionamiento(jugadores[2], 7);
  }
  else if (jugadores.length == 4) {
    Posicionamiento(jugadores[0], 1);
    Posicionamiento(jugadores[1], 3);
    Posicionamiento(jugadores[3], 8);
    Posicionamiento(jugadores[2], 6);
  }
  else if (jugadores.length == 5) {
    Posicionamiento(jugadores[4], 10);
    Posicionamiento(jugadores[0], 2);
    Posicionamiento(jugadores[1], 4);
    Posicionamiento(jugadores[2], 6);
    Posicionamiento(jugadores[3], 8);
  }
  else if (jugadores.length == 6) {
    Posicionamiento(jugadores[0], 1);
    Posicionamiento(jugadores[1], 2);
    Posicionamiento(jugadores[2], 3);
    Posicionamiento(jugadores[3], 6);
    Posicionamiento(jugadores[4], 7);
    Posicionamiento(jugadores[5], 8);
  }
  else if (jugadores.length == 7) {
    Posicionamiento(jugadores[0], 1);
    Posicionamiento(jugadores[1], 3);
    Posicionamiento(jugadores[2], 4);
    Posicionamiento(jugadores[3], 6);
    Posicionamiento(jugadores[4], 7);
    Posicionamiento(jugadores[5], 8);
    Posicionamiento(jugadores[6], 10);
  }
  else if (jugadores.length == 8) {
    Posicionamiento(jugadores[0], 1);
    Posicionamiento(jugadores[1], 3);
    Posicionamiento(jugadores[2], 4);
    Posicionamiento(jugadores[3], 5);
    Posicionamiento(jugadores[4], 6);
    Posicionamiento(jugadores[5], 8);
    Posicionamiento(jugadores[6], 9);
    Posicionamiento(jugadores[7], 10);
  }
  else if (jugadores.length == 9) {
    Posicionamiento(jugadores[0], 1);
    Posicionamiento(jugadores[1], 2);
    Posicionamiento(jugadores[2], 3);
    Posicionamiento(jugadores[3], 4);
    Posicionamiento(jugadores[4], 5);
    Posicionamiento(jugadores[5], 6);
    Posicionamiento(jugadores[6], 8);
    Posicionamiento(jugadores[7], 9);
    Posicionamiento(jugadores[8], 10);
  }
  else{
    Posicionamiento(jugadores[0], 1);
    Posicionamiento(jugadores[1], 2);
    Posicionamiento(jugadores[2], 3);
    Posicionamiento(jugadores[3], 4);
    Posicionamiento(jugadores[4], 5);
    Posicionamiento(jugadores[5], 6);
    Posicionamiento(jugadores[7], 8);
    Posicionamiento(jugadores[8], 9);
    Posicionamiento(jugadores[9], 10);
    Posicionamiento(jugadores[6], 7);
  }
}

function Posicionamiento(jugador, posicion) {
  document.getElementById('p'+posicion).style.visibility = 'visible';
  document.getElementById('p'+posicion+'Nombre').innerHTML = jugador.nombre;
  document.getElementById('p'+posicion+'Foto').src = "IMG/" + (jugador.sexo?"hombre.png":"mujer.png");
  document.getElementById('p'+posicion+'Dinero').innerHTML = "Saldo: $"+jugador.dinero;

}
function PosicionamientoConCarta(jugador, posicion) {
  document.getElementById('p'+posicion).style.visibility = 'visible';
  document.getElementById('p'+posicion+'Nombre').innerHTML = jugador.nombre;
  document.getElementById('p'+posicion+'Carta1').src = "IMG/"+jugador.cartas[0].path+".png";
  document.getElementById('p'+posicion+'Carta2').src = "IMG/"+jugador.cartas[1].path+".png";
  document.getElementById('p'+posicion+'Foto').src = "IMG/" + (jugador.sexo?"hombre.png":"mujer.png");
  document.getElementById('p'+posicion+'Dinero').innerHTML = "Saldo: $"+jugador.dinero;
}
function PosicionamientoSinCarta(jugador, posicion) {
  document.getElementById('p'+posicion).style.visibility = 'visible';
  document.getElementById('p'+posicion+'Nombre').innerHTML = jugador.nombre;
  document.getElementById('p'+posicion+'Carta1').src = "IMG/back.png";
  document.getElementById('p'+posicion+'Carta2').src = "IMG/back.png";
  document.getElementById('p'+posicion+'Foto').src = "IMG/" + (jugador.sexo?"hombre.png":"mujer.png");
  document.getElementById('p'+posicion+'Dinero').innerHTML = "Saldo: $"+jugador.dinero;
}
