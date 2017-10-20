function mostrarTurnoJugador(jugadores, idJugador) {

  if (jugadores.length == 2) {
    if(idJugador == 1){
      PosicionamientoConCarta(jugadores[0], 7);
      PosicionamientoSinCarta(jugadores[1], 2);
    }else if(idJugador == 2){
      PosicionamientoSinCarta(jugadores[0], 7);
      PosicionamientoConCarta(jugadores[1], 2);
    }
  }
  else if (jugadores.length == 3) {
    if(idJugador == 1){
      PosicionamientoConCarta(jugadores[0], 1);
      PosicionamientoSinCarta(jugadores[1], 3);
      PosicionamientoSinCarta(jugadores[2], 7);
    }else if(idJugador == 2){
      PosicionamientoSinCarta(jugadores[0], 1);
      PosicionamientoConCarta(jugadores[1], 3);
      PosicionamientoSinCarta(jugadores[2], 7);
    }else if (idJugador == 3) {
      PosicionamientoSinCarta(jugadores[0], 1);
      PosicionamientoSinCarta(jugadores[1], 3);
      PosicionamientoConCarta(jugadores[2], 7);
    }
  }
  else if (jugadores.length == 4) {
    if (idJugador == 1) {
      PosicionamientoConCarta(jugadores[0], 1);
      PosicionamientoSinCarta(jugadores[1], 3);
      PosicionamientoSinCarta(jugadores[2], 6);
      PosicionamientoSinCarta(jugadores[3], 8);
    }else if (idJugador == 2) {
      PosicionamientoSinCarta(jugadores[0], 1);
      PosicionamientoConCarta(jugadores[1], 3);
      PosicionamientoSinCarta(jugadores[2], 6);
      PosicionamientoSinCarta(jugadores[3], 8);
    }else if (idJugador == 3) {
      PosicionamientoSinCarta(jugadores[0], 1);
      PosicionamientoSinCarta(jugadores[1], 3);
      PosicionamientoConCarta(jugadores[2], 6);
      PosicionamientoSinCarta(jugadores[3], 8);
    }else if (idJugador == 4) {
      PosicionamientoSinCarta(jugadores[0], 1);
      PosicionamientoSinCarta(jugadores[1], 3);
      PosicionamientoSinCarta(jugadores[2], 6);
      PosicionamientoConCarta(jugadores[3], 8);
    }
  }
  else if (jugadores.length == 5) {
    if (idJugador == 1) {
      PosicionamientoSinCarta(jugadores[4], 10);
      PosicionamientoConCarta(jugadores[0], 2);
      PosicionamientoSinCarta(jugadores[1], 4);
      PosicionamientoSinCarta(jugadores[2], 6);
      PosicionamientoSinCarta(jugadores[3], 8);
  }
  if (idJugador == 2) {
    PosicionamientoSinCarta(jugadores[4], 10);
    PosicionamientoSinCarta(jugadores[0], 2);
    PosicionamientoConCarta(jugadores[1], 4);
    PosicionamientoSinCarta(jugadores[2], 6);
    PosicionamientoSinCarta(jugadores[3], 8);
}
if (idJugador == 3) {
  PosicionamientoSinCarta(jugadores[4], 10);
  PosicionamientoSinCarta(jugadores[0], 2);
  PosicionamientoSinCarta(jugadores[1], 4);
  PosicionamientoConCarta(jugadores[2], 6);
  PosicionamientoSinCarta(jugadores[3], 8);
}
if (idJugador == 4) {
  PosicionamientoSinCarta(jugadores[4], 10);
  PosicionamientoSinCarta(jugadores[0], 2);
  PosicionamientoSinCarta(jugadores[1], 4);
  PosicionamientoSinCarta(jugadores[2], 6);
  PosicionamientoConCarta(jugadores[3], 8);
}
if (idJugador == 5) {
  PosicionamientoConCarta(jugadores[4], 10);
  PosicionamientoSinCarta(jugadores[0], 2);
  PosicionamientoSinCarta(jugadores[1], 4);
  PosicionamientoSinCarta(jugadores[2], 6);
  PosicionamientoSinCarta(jugadores[3], 8);
 }
}
  else if (jugadores.length == 6) {
    if (idJugador == 1) {
    PosicionamientoConCarta(jugadores[0], 1);
    PosicionamientoSinCarta(jugadores[1], 2);
    PosicionamientoSinCarta(jugadores[2], 3);
    PosicionamientoSinCarta(jugadores[3], 6);
    PosicionamientoSinCarta(jugadores[4], 7);
    PosicionamientoSinCarta(jugadores[5], 8);
  }
  if (idJugador == 2) {
  PosicionamientoSinCarta(jugadores[0], 1);
  PosicionamientoConCarta(jugadores[1], 2);
  PosicionamientoSinCarta(jugadores[2], 3);
  PosicionamientoSinCarta(jugadores[3], 6);
  PosicionamientoSinCarta(jugadores[4], 7);
  PosicionamientoSinCarta(jugadores[5], 8);
}
  if (idJugador == 3) {
  PosicionamientoSinCarta(jugadores[0], 1);
  PosicionamientoSinCarta(jugadores[1], 2);
  PosicionamientoConCarta(jugadores[2], 3);
  PosicionamientoSinCarta(jugadores[3], 6);
  PosicionamientoSinCarta(jugadores[4], 7);
  PosicionamientoSinCarta(jugadores[5], 8);
  }
  if (idJugador == 4) {
  PosicionamientoSinCarta(jugadores[0], 1);
  PosicionamientoSinCarta(jugadores[1], 2);
  PosicionamientoSinCarta(jugadores[2], 3);
  PosicionamientoConCarta(jugadores[3], 6);
  PosicionamientoSinCarta(jugadores[4], 7);
  PosicionamientoSinCarta(jugadores[5], 8);
  }
  if (idJugador == 5) {
  PosicionamientoSinCarta(jugadores[0], 1);
  PosicionamientoSinCarta(jugadores[1], 2);
  PosicionamientoSinCarta(jugadores[2], 3);
  PosicionamientoSinCarta(jugadores[3], 6);
  PosicionamientoConCarta(jugadores[4], 7);
  PosicionamientoSinCarta(jugadores[5], 8);
}
  if (idJugador == 6) {
  PosicionamientoSinCarta(jugadores[0], 1);
  PosicionamientoSinCarta(jugadores[1], 2);
  PosicionamientoSinCarta(jugadores[2], 3);
  PosicionamientoSinCarta(jugadores[3], 6);
  PosicionamientoSinCarta(jugadores[4], 7);
  PosicionamientoConCarta(jugadores[5], 8);
  }
}
  else if (jugadores.length == 7) {
    if (idJugador == 1) {
    PosicionamientoConCarta(jugadores[0], 1);
    PosicionamientoSinCarta(jugadores[1], 3);
    PosicionamientoSinCarta(jugadores[2], 4);
    PosicionamientoSinCarta(jugadores[3], 6);
    PosicionamientoSinCarta(jugadores[4], 7);
    PosicionamientoSinCarta(jugadores[5], 8);
    PosicionamientoSinCarta(jugadores[6], 10);
  }
    if (idJugador == 2) {
    PosicionamientoSinCarta(jugadores[0], 1);
    PosicionamientoConCarta(jugadores[1], 3);
    PosicionamientoSinCarta(jugadores[2], 4);
    PosicionamientoSinCarta(jugadores[3], 6);
    PosicionamientoSinCarta(jugadores[4], 7);
    PosicionamientoSinCarta(jugadores[5], 8);
    PosicionamientoSinCarta(jugadores[6], 10);
  }
    if (idJugador == 3) {
    PosicionamientoSinCarta(jugadores[0], 1);
    PosicionamientoSinCarta(jugadores[1], 3);
    PosicionamientoConCarta(jugadores[2], 4);
    PosicionamientoSinCarta(jugadores[3], 6);
    PosicionamientoSinCarta(jugadores[4], 7);
    PosicionamientoSinCarta(jugadores[5], 8);
    PosicionamientoSinCarta(jugadores[6], 10);
  }
    if (idJugador == 4) {
    PosicionamientoSinCarta(jugadores[0], 1);
    PosicionamientoSinCarta(jugadores[1], 3);
    PosicionamientoSinCarta(jugadores[2], 4);
    PosicionamientoConCarta(jugadores[3], 6);
    PosicionamientoSinCarta(jugadores[4], 7);
    PosicionamientoSinCarta(jugadores[5], 8);
    PosicionamientoSinCarta(jugadores[6], 10);
}
    if (idJugador == 5) {
    PosicionamientoSinCarta(jugadores[0], 1);
    PosicionamientoSinCarta(jugadores[1], 3);
    PosicionamientoSinCarta(jugadores[2], 4);
    PosicionamientoSinCarta(jugadores[3], 6);
    PosicionamientoConCarta(jugadores[4], 7);
    PosicionamientoSinCarta(jugadores[5], 8);
    PosicionamientoSinCarta(jugadores[6], 10);
    }
    if (idJugador == 6) {
    PosicionamientoSinCarta(jugadores[0], 1);
    PosicionamientoSinCarta(jugadores[1], 3);
    PosicionamientoSinCarta(jugadores[2], 4);
    PosicionamientoSinCarta(jugadores[3], 6);
    PosicionamientoSinCarta(jugadores[4], 7);
    PosicionamientoConCarta(jugadores[5], 8);
    PosicionamientoSinCarta(jugadores[6], 10);
  }
    if (idJugador == 7) {
    PosicionamientoSinCarta(jugadores[0], 1);
    PosicionamientoSinCarta(jugadores[1], 3);
    PosicionamientoSinCarta(jugadores[2], 4);
    PosicionamientoSinCarta(jugadores[3], 6);
    PosicionamientoSinCarta(jugadores[4], 7);
    PosicionamientoSinCarta(jugadores[5], 8);
    PosicionamientoConCarta(jugadores[6], 10);
  }
  }
  else if (jugadores.length == 8) {
    if (idJugador == 1) {
    PosicionamientoConCarta(jugadores[0], 1);
    PosicionamientoSinCarta(jugadores[1], 3);
    PosicionamientoSinCarta(jugadores[2], 4);
    PosicionamientoSinCarta(jugadores[3], 5);
    PosicionamientoSinCarta(jugadores[4], 6);
    PosicionamientoSinCarta(jugadores[5], 8);
    PosicionamientoSinCarta(jugadores[6], 9);
    PosicionamientoSinCarta(jugadores[7], 10);
  }
    if (idJugador == 2) {
    PosicionamientoSinCarta(jugadores[0], 1);
    PosicionamientoConCarta(jugadores[1], 3);
    PosicionamientoSinCarta(jugadores[2], 4);
    PosicionamientoSinCarta(jugadores[3], 5);
    PosicionamientoSinCarta(jugadores[4], 6);
    PosicionamientoSinCarta(jugadores[5], 8);
    PosicionamientoSinCarta(jugadores[6], 9);
    PosicionamientoSinCarta(jugadores[7], 10);
  }
    if (idJugador == 3) {
    PosicionamientoSinCarta(jugadores[0], 1);
    PosicionamientoSinCarta(jugadores[1], 3);
    PosicionamientoConCarta(jugadores[2], 4);
    PosicionamientoSinCarta(jugadores[3], 5);
    PosicionamientoSinCarta(jugadores[4], 6);
    PosicionamientoSinCarta(jugadores[5], 8);
    PosicionamientoSinCarta(jugadores[6], 9);
    PosicionamientoSinCarta(jugadores[7], 10);
  }
    if (idJugador == 4) {
    PosicionamientoSinCarta(jugadores[0], 1);
    PosicionamientoSinCarta(jugadores[1], 3);
    PosicionamientoSinCarta(jugadores[2], 4);
    PosicionamientoConCarta(jugadores[3], 5);
    PosicionamientoSinCarta(jugadores[4], 6);
    PosicionamientoSinCarta(jugadores[5], 8);
    PosicionamientoSinCarta(jugadores[6], 9);
    PosicionamientoSinCarta(jugadores[7], 10);
  }
    if (idJugador == 5) {
    PosicionamientoSinCarta(jugadores[0], 1);
    PosicionamientoSinCarta(jugadores[1], 3);
    PosicionamientoSinCarta(jugadores[2], 4);
    PosicionamientoSinCarta(jugadores[3], 5);
    PosicionamientoConCarta(jugadores[4], 6);
    PosicionamientoSinCarta(jugadores[5], 8);
    PosicionamientoSinCarta(jugadores[6], 9);
    PosicionamientoSinCarta(jugadores[7], 10);
  }
    if (idJugador == 6) {
    PosicionamientoSinCarta(jugadores[0], 1);
    PosicionamientoSinCarta(jugadores[1], 3);
    PosicionamientoSinCarta(jugadores[2], 4);
    PosicionamientoSinCarta(jugadores[3], 5);
    PosicionamientoSinCarta(jugadores[4], 6);
    PosicionamientoConCarta(jugadores[5], 8);
    PosicionamientoSinCarta(jugadores[6], 9);
    PosicionamientoSinCarta(jugadores[7], 10);
  }
    if (idJugador == 7) {
    PosicionamientoSinCarta(jugadores[0], 1);
    PosicionamientoSinCarta(jugadores[1], 3);
    PosicionamientoSinCarta(jugadores[2], 4);
    PosicionamientoSinCarta(jugadores[3], 5);
    PosicionamientoSinCarta(jugadores[4], 6);
    PosicionamientoSinCarta(jugadores[5], 8);
    PosicionamientoConCarta(jugadores[6], 9);
    PosicionamientoSinCarta(jugadores[7], 10);
  }
    if (idJugador == 8) {
    PosicionamientoSinCarta(jugadores[0], 1);
    PosicionamientoSinCarta(jugadores[1], 3);
    PosicionamientoSinCarta(jugadores[2], 4);
    PosicionamientoSinCarta(jugadores[3], 5);
    PosicionamientoSinCarta(jugadores[4], 6);
    PosicionamientoSinCarta(jugadores[5], 8);
    PosicionamientoSinCarta(jugadores[6], 9);
    PosicionamientoConCarta(jugadores[7], 10);
  }
  }
  else if (jugadores.length == 9) {
    if (idJugador == 1) {
    PosicionamientoConCarta(jugadores[0], 1);
    PosicionamientoSinCarta(jugadores[1], 2);
    PosicionamientoSinCarta(jugadores[2], 3);
    PosicionamientoSinCarta(jugadores[3], 4);
    PosicionamientoSinCarta(jugadores[4], 5);
    PosicionamientoSinCarta(jugadores[5], 6);
    PosicionamientoSinCarta(jugadores[6], 8);
    PosicionamientoSinCarta(jugadores[7], 9);
    PosicionamientoSinCarta(jugadores[8], 10);
  }
    if (idJugador == 2) {
    PosicionamientoSinCarta(jugadores[0], 1);
    PosicionamientoConCarta(jugadores[1], 2);
    PosicionamientoSinCarta(jugadores[2], 3);
    PosicionamientoSinCarta(jugadores[3], 4);
    PosicionamientoSinCarta(jugadores[4], 5);
    PosicionamientoSinCarta(jugadores[5], 6);
    PosicionamientoSinCarta(jugadores[6], 8);
    PosicionamientoSinCarta(jugadores[7], 9);
    PosicionamientoSinCarta(jugadores[8], 10);
  }
    if (idJugador == 3) {
    PosicionamientoSinCarta(jugadores[0], 1);
    PosicionamientoSinCarta(jugadores[1], 2);
    PosicionamientoConCarta(jugadores[2], 3);
    PosicionamientoSinCarta(jugadores[3], 4);
    PosicionamientoSinCarta(jugadores[4], 5);
    PosicionamientoSinCarta(jugadores[5], 6);
    PosicionamientoSinCarta(jugadores[6], 8);
    PosicionamientoSinCarta(jugadores[7], 9);
    PosicionamientoSinCarta(jugadores[8], 10);
  }
    if (idJugador == 4) {
    PosicionamientoSinCarta(jugadores[0], 1);
    PosicionamientoSinCarta(jugadores[1], 2);
    PosicionamientoSinCarta(jugadores[2], 3);
    PosicionamientoConCarta(jugadores[3], 4);
    PosicionamientoSinCarta(jugadores[4], 5);
    PosicionamientoSinCarta(jugadores[5], 6);
    PosicionamientoSinCarta(jugadores[6], 8);
    PosicionamientoSinCarta(jugadores[7], 9);
    PosicionamientoSinCarta(jugadores[8], 10);
  }
    if (idJugador == 5) {
    PosicionamientoSinCarta(jugadores[0], 1);
    PosicionamientoSinCarta(jugadores[1], 2);
    PosicionamientoSinCarta(jugadores[2], 3);
    PosicionamientoSinCarta(jugadores[3], 4);
    PosicionamientoConCarta(jugadores[4], 5);
    PosicionamientoSinCarta(jugadores[5], 6);
    PosicionamientoSinCarta(jugadores[6], 8);
    PosicionamientoSinCarta(jugadores[7], 9);
    PosicionamientoSinCarta(jugadores[8], 10);
  }
    if (idJugador == 6) {
    PosicionamientoSinCarta(jugadores[0], 1);
    PosicionamientoSinCarta(jugadores[1], 2);
    PosicionamientoSinCarta(jugadores[2], 3);
    PosicionamientoSinCarta(jugadores[3], 4);
    PosicionamientoSinCarta(jugadores[4], 5);
    PosicionamientoConCarta(jugadores[5], 6);
    PosicionamientoSinCarta(jugadores[6], 8);
    PosicionamientoSinCarta(jugadores[7], 9);
    PosicionamientoSinCarta(jugadores[8], 10);
  }
    if (idJugador == 7) {
    PosicionamientoSinCarta(jugadores[0], 1);
    PosicionamientoSinCarta(jugadores[1], 2);
    PosicionamientoSinCarta(jugadores[2], 3);
    PosicionamientoSinCarta(jugadores[3], 4);
    PosicionamientoSinCarta(jugadores[4], 5);
    PosicionamientoSinCarta(jugadores[5], 6);
    PosicionamientoConCarta(jugadores[6], 8);
    PosicionamientoSinCarta(jugadores[7], 9);
    PosicionamientoSinCarta(jugadores[8], 10);
  }
    if (idJugador == 8) {
    PosicionamientoSinCarta(jugadores[0], 1);
    PosicionamientoSinCarta(jugadores[1], 2);
    PosicionamientoSinCarta(jugadores[2], 3);
    PosicionamientoSinCarta(jugadores[3], 4);
    PosicionamientoSinCarta(jugadores[4], 5);
    PosicionamientoSinCarta(jugadores[5], 6);
    PosicionamientoSinCarta(jugadores[6], 8);
    PosicionamientoConCarta(jugadores[7], 9);
    PosicionamientoSinCarta(jugadores[8], 10);
  }
    if (idJugador == 9) {
    PosicionamientoSinCarta(jugadores[0], 1);
    PosicionamientoSinCarta(jugadores[1], 2);
    PosicionamientoSinCarta(jugadores[2], 3);
    PosicionamientoSinCarta(jugadores[3], 4);
    PosicionamientoSinCarta(jugadores[4], 5);
    PosicionamientoSinCarta(jugadores[5], 6);
    PosicionamientoSinCarta(jugadores[6], 8);
    PosicionamientoSinCarta(jugadores[7], 9);
    PosicionamientoConCarta(jugadores[8], 10);
  }
  }
  else{
    if (idJugador == 1) {
    PosicionamientoConCarta(jugadores[0], 1);
    PosicionamientoSinCarta(jugadores[1], 2);
    PosicionamientoSinCarta(jugadores[2], 3);
    PosicionamientoSinCarta(jugadores[3], 4);
    PosicionamientoSinCarta(jugadores[4], 5);
    PosicionamientoSinCarta(jugadores[5], 6);
    PosicionamientoSinCarta(jugadores[6], 7);
    PosicionamientoSinCarta(jugadores[7], 8);
    PosicionamientoSinCarta(jugadores[8], 9);
    PosicionamientoSinCarta(jugadores[9], 10);
  }
    if (idJugador == 2) {
    PosicionamientoSinCarta(jugadores[0], 1);
    PosicionamientoConCarta(jugadores[1], 2);
    PosicionamientoSinCarta(jugadores[2], 3);
    PosicionamientoSinCarta(jugadores[3], 4);
    PosicionamientoSinCarta(jugadores[4], 5);
    PosicionamientoSinCarta(jugadores[5], 6);
    PosicionamientoSinCarta(jugadores[6], 7);
    PosicionamientoSinCarta(jugadores[7], 8);
    PosicionamientoSinCarta(jugadores[8], 9);
    PosicionamientoSinCarta(jugadores[9], 10);
  }
    if (idJugador == 3) {
    PosicionamientoSinCarta(jugadores[0], 1);
    PosicionamientoSinCarta(jugadores[1], 2);
    PosicionamientoConCarta(jugadores[2], 3);
    PosicionamientoSinCarta(jugadores[3], 4);
    PosicionamientoSinCarta(jugadores[4], 5);
    PosicionamientoSinCarta(jugadores[5], 6);
    PosicionamientoSinCarta(jugadores[6], 7);
    PosicionamientoSinCarta(jugadores[7], 8);
    PosicionamientoSinCarta(jugadores[8], 9);
    PosicionamientoSinCarta(jugadores[9], 10);
  }
    if (idJugador == 4) {
    PosicionamientoSinCarta(jugadores[0], 1);
    PosicionamientoSinCarta(jugadores[1], 2);
    PosicionamientoSinCarta(jugadores[2], 3);
    PosicionamientoConCarta(jugadores[3], 4);
    PosicionamientoSinCarta(jugadores[4], 5);
    PosicionamientoSinCarta(jugadores[5], 6);
    PosicionamientoSinCarta(jugadores[6], 7);
    PosicionamientoSinCarta(jugadores[7], 8);
    PosicionamientoSinCarta(jugadores[8], 9);
    PosicionamientoSinCarta(jugadores[9], 10);
  }
    if (idJugador == 5) {
    PosicionamientoSinCarta(jugadores[0], 1);
    PosicionamientoSinCarta(jugadores[1], 2);
    PosicionamientoSinCarta(jugadores[2], 3);
    PosicionamientoSinCarta(jugadores[3], 4);
    PosicionamientoConCarta(jugadores[4], 5);
    PosicionamientoSinCarta(jugadores[5], 6);
    PosicionamientoSinCarta(jugadores[6], 7);
    PosicionamientoSinCarta(jugadores[7], 8);
    PosicionamientoSinCarta(jugadores[8], 9);
    PosicionamientoSinCarta(jugadores[9], 10);
  }
    if (idJugador == 6) {
    PosicionamientoSinCarta(jugadores[0], 1);
    PosicionamientoSinCarta(jugadores[1], 2);
    PosicionamientoSinCarta(jugadores[2], 3);
    PosicionamientoSinCarta(jugadores[3], 4);
    PosicionamientoSinCarta(jugadores[4], 5);
    PosicionamientoConCarta(jugadores[5], 6);
    PosicionamientoSinCarta(jugadores[6], 7);
    PosicionamientoSinCarta(jugadores[7], 8);
    PosicionamientoSinCarta(jugadores[8], 9);
    PosicionamientoSinCarta(jugadores[9], 10);
  }
    if (idJugador == 7) {
    PosicionamientoSinCarta(jugadores[0], 1);
    PosicionamientoSinCarta(jugadores[1], 2);
    PosicionamientoSinCarta(jugadores[2], 3);
    PosicionamientoSinCarta(jugadores[3], 4);
    PosicionamientoSinCarta(jugadores[4], 5);
    PosicionamientoSinCarta(jugadores[5], 6);
    PosicionamientoConCarta(jugadores[6], 7);
    PosicionamientoSinCarta(jugadores[7], 8);
    PosicionamientoSinCarta(jugadores[8], 9);
    PosicionamientoSinCarta(jugadores[9], 10);
  }
    if (idJugador == 8) {
    PosicionamientoSinCarta(jugadores[0], 1);
    PosicionamientoSinCarta(jugadores[1], 2);
    PosicionamientoSinCarta(jugadores[2], 3);
    PosicionamientoSinCarta(jugadores[3], 4);
    PosicionamientoSinCarta(jugadores[4], 5);
    PosicionamientoSinCarta(jugadores[5], 6);
    PosicionamientoSinCarta(jugadores[6], 7);
    PosicionamientoConCarta(jugadores[7], 8);
    PosicionamientoSinCarta(jugadores[8], 9);
    PosicionamientoSinCarta(jugadores[9], 10);
  }
    if (idJugador == 9) {
    PosicionamientoSinCarta(jugadores[0], 1);
    PosicionamientoSinCarta(jugadores[1], 2);
    PosicionamientoSinCarta(jugadores[2], 3);
    PosicionamientoSinCarta(jugadores[3], 4);
    PosicionamientoSinCarta(jugadores[4], 5);
    PosicionamientoSinCarta(jugadores[5], 6);
    PosicionamientoSinCarta(jugadores[6], 7);
    PosicionamientoSinCarta(jugadores[7], 8);
    PosicionamientoConCarta(jugadores[8], 9);
    PosicionamientoSinCarta(jugadores[9], 10);
  }
    if (idJugador == 10) {
    PosicionamientoSinCarta(jugadores[0], 1);
    PosicionamientoSinCarta(jugadores[1], 2);
    PosicionamientoSinCarta(jugadores[2], 3);
    PosicionamientoSinCarta(jugadores[3], 4);
    PosicionamientoSinCarta(jugadores[4], 5);
    PosicionamientoSinCarta(jugadores[5], 6);
    PosicionamientoSinCarta(jugadores[6], 7);
    PosicionamientoSinCarta(jugadores[7], 8);
    PosicionamientoSinCarta(jugadores[8], 9);
    PosicionamientoConCarta(jugadores[9], 10);
  }
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
  if (typeof jugador.sexo == 'undefined') {
    document.getElementById('p'+posicion+'Foto').src = "IMG/error.png";
  }else {
    document.getElementById('p'+posicion+'Foto').src = "IMG/" + (jugador.sexo?"hombre.png":"mujer.png");
  }
  document.getElementById('p'+posicion+'Dinero').innerHTML = "Saldo: $"+jugador.dinero;
  document.getElementById('p'+posicion+'Apuesta').innerHTML = "Apuesta: $"+jugador.apuesta;

}
function PosicionamientoConCarta(jugador, posicion) {
  document.getElementById('p'+posicion).style.visibility = 'visible';
  document.getElementById('p'+posicion+'Nombre').innerHTML = jugador.nombre;
  document.getElementById('p'+posicion+'Carta1').src = "IMG/"+jugador.cartas[0].path+".png";
  document.getElementById('p'+posicion+'Carta2').src = "IMG/"+jugador.cartas[1].path+".png";
  if (typeof jugador.sexo == 'undefined') {
    document.getElementById('p'+posicion+'Foto').src = "IMG/error.png";
  }else {
    document.getElementById('p'+posicion+'Foto').src = "IMG/" + (jugador.sexo?"hombre.png":"mujer.png");
  }

  document.getElementById('p'+posicion+'Dinero').innerHTML = "Saldo: $"+jugador.dinero;
  document.getElementById('p'+posicion+'Apuesta').innerHTML = "Apuesta: $"+jugador.apuesta;
}
function PosicionamientoSinCarta(jugador, posicion) {
  document.getElementById('p'+posicion).style.visibility = 'visible';
  document.getElementById('p'+posicion+'Nombre').innerHTML = jugador.nombre;
  document.getElementById('p'+posicion+'Carta1').src = "IMG/back.png";
  document.getElementById('p'+posicion+'Carta2').src = "IMG/back.png";
  if (typeof jugador.sexo == 'undefined') {
    document.getElementById('p'+posicion+'Foto').src = "IMG/error.png";
  }else {
    document.getElementById('p'+posicion+'Foto').src = "IMG/" + (jugador.sexo?"hombre.png":"mujer.png");
  }
  document.getElementById('p'+posicion+'Dinero').innerHTML = "Saldo: $"+jugador.dinero;
  document.getElementById('p'+posicion+'Apuesta').innerHTML = "Apuesta: $"+jugador.apuesta;
}

function mostrarAllCartas(jugadores, idJugador) {
  for (var i = 0; i < jugadores.length; i++) {
    if (idJugador == 2) {
      PosicionamientoConCarta(jugadores[0], 1);
      PosicionamientoConCarta(jugadores[1], 2);
    }
    else if (idJugador == 3) {
      PosicionamientoConCarta(jugadores[0], 1);
      PosicionamientoConCarta(jugadores[1], 2);
      PosicionamientoConCarta(jugadores[2], 3);
    }
    else if (idJugador == 4) {
      PosicionamientoConCarta(jugadores[0], 1);
      PosicionamientoConCarta(jugadores[1], 2);
      PosicionamientoConCarta(jugadores[2], 3);
      PosicionamientoConCarta(jugadores[3], 4);
    }
    else if (idJugador == 5) {
      PosicionamientoConCarta(jugadores[0], 1);
      PosicionamientoConCarta(jugadores[1], 2);
      PosicionamientoConCarta(jugadores[2], 3);
      PosicionamientoConCarta(jugadores[3], 4);
      PosicionamientoConCarta(jugadores[4], 5);
    }
    else if (idJugador == 6) {
      PosicionamientoConCarta(jugadores[0], 1);
      PosicionamientoConCarta(jugadores[1], 2);
      PosicionamientoConCarta(jugadores[2], 3);
      PosicionamientoConCarta(jugadores[3], 4);
      PosicionamientoConCarta(jugadores[4], 5);
      PosicionamientoConCarta(jugadores[5], 6);
    }
    else if (idJugador == 7) {
      PosicionamientoConCarta(jugadores[0], 1);
      PosicionamientoConCarta(jugadores[1], 2);
      PosicionamientoConCarta(jugadores[2], 3);
      PosicionamientoConCarta(jugadores[3], 4);
      PosicionamientoConCarta(jugadores[4], 5);
      PosicionamientoConCarta(jugadores[5], 6);
      PosicionamientoConCarta(jugadores[6], 7);
    }
    else if (idJugador == 8) {
      PosicionamientoConCarta(jugadores[0], 1);
      PosicionamientoConCarta(jugadores[1], 2);
      PosicionamientoConCarta(jugadores[2], 3);
      PosicionamientoConCarta(jugadores[3], 4);
      PosicionamientoConCarta(jugadores[4], 5);
      PosicionamientoConCarta(jugadores[5], 6);
      PosicionamientoConCarta(jugadores[6], 7);
      PosicionamientoConCarta(jugadores[7], 8);
    }
    else if (idJugador == 9) {
      PosicionamientoConCarta(jugadores[0], 1);
      PosicionamientoConCarta(jugadores[1], 2);
      PosicionamientoConCarta(jugadores[2], 3);
      PosicionamientoConCarta(jugadores[3], 4);
      PosicionamientoConCarta(jugadores[4], 5);
      PosicionamientoConCarta(jugadores[5], 6);
      PosicionamientoConCarta(jugadores[6], 7);
      PosicionamientoConCarta(jugadores[7], 8);
      PosicionamientoConCarta(jugadores[8], 9);
    }
    else {
      PosicionamientoConCarta(jugadores[0], 1);
      PosicionamientoConCarta(jugadores[1], 2);
      PosicionamientoConCarta(jugadores[2], 3);
      PosicionamientoConCarta(jugadores[3], 4);
      PosicionamientoConCarta(jugadores[4], 5);
      PosicionamientoConCarta(jugadores[5], 6);
      PosicionamientoConCarta(jugadores[6], 7);
      PosicionamientoConCarta(jugadores[7], 8);
      PosicionamientoConCarta(jugadores[8], 9);
      PosicionamientoConCarta(jugadores[9], 10);
    }
  }
}

function mostrarAllCartas(jugadores, idJugador) {
  for (var i = 0; i < jugadores.length; i++) {
    if (idJugador == 2) {
      PosicionamientoConCarta(jugadores[0], 1);
      PosicionamientoConCarta(jugadores[1], 2);
    }
    else if (idJugador == 3) {
      PosicionamientoConCarta(jugadores[0], 1);
      PosicionamientoConCarta(jugadores[1], 2);
      PosicionamientoConCarta(jugadores[2], 3);
    }
    else if (idJugador == 4) {
      PosicionamientoConCarta(jugadores[0], 1);
      PosicionamientoConCarta(jugadores[1], 2);
      PosicionamientoConCarta(jugadores[2], 3);
      PosicionamientoConCarta(jugadores[3], 4);
    }
    else if (idJugador == 5) {
      PosicionamientoConCarta(jugadores[0], 1);
      PosicionamientoConCarta(jugadores[1], 2);
      PosicionamientoConCarta(jugadores[2], 3);
      PosicionamientoConCarta(jugadores[3], 4);
      PosicionamientoConCarta(jugadores[4], 5);
    }
    else if (idJugador == 6) {
      PosicionamientoConCarta(jugadores[0], 1);
      PosicionamientoConCarta(jugadores[1], 2);
      PosicionamientoConCarta(jugadores[2], 3);
      PosicionamientoConCarta(jugadores[3], 4);
      PosicionamientoConCarta(jugadores[4], 5);
      PosicionamientoConCarta(jugadores[5], 6);
    }
    else if (idJugador == 7) {
      PosicionamientoConCarta(jugadores[0], 1);
      PosicionamientoConCarta(jugadores[1], 2);
      PosicionamientoConCarta(jugadores[2], 3);
      PosicionamientoConCarta(jugadores[3], 4);
      PosicionamientoConCarta(jugadores[4], 5);
      PosicionamientoConCarta(jugadores[5], 6);
      PosicionamientoConCarta(jugadores[6], 7);
    }
    else if (idJugador == 8) {
      PosicionamientoConCarta(jugadores[0], 1);
      PosicionamientoConCarta(jugadores[1], 2);
      PosicionamientoConCarta(jugadores[2], 3);
      PosicionamientoConCarta(jugadores[3], 4);
      PosicionamientoConCarta(jugadores[4], 5);
      PosicionamientoConCarta(jugadores[5], 6);
      PosicionamientoConCarta(jugadores[6], 7);
      PosicionamientoConCarta(jugadores[7], 8);
    }
    else if (idJugador == 9) {
      PosicionamientoConCarta(jugadores[0], 1);
      PosicionamientoConCarta(jugadores[1], 2);
      PosicionamientoConCarta(jugadores[2], 3);
      PosicionamientoConCarta(jugadores[3], 4);
      PosicionamientoConCarta(jugadores[4], 5);
      PosicionamientoConCarta(jugadores[5], 6);
      PosicionamientoConCarta(jugadores[6], 7);
      PosicionamientoConCarta(jugadores[7], 8);
      PosicionamientoConCarta(jugadores[8], 9);
    }
    else {
      PosicionamientoConCarta(jugadores[0], 1);
      PosicionamientoConCarta(jugadores[1], 2);
      PosicionamientoConCarta(jugadores[2], 3);
      PosicionamientoConCarta(jugadores[3], 4);
      PosicionamientoConCarta(jugadores[4], 5);
      PosicionamientoConCarta(jugadores[5], 6);
      PosicionamientoConCarta(jugadores[6], 7);
      PosicionamientoConCarta(jugadores[7], 8);
      PosicionamientoConCarta(jugadores[8], 9);
      PosicionamientoConCarta(jugadores[9], 10);
    }
  }
}
