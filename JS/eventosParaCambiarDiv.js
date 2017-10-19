function MostrarInicionDeJuego() {
  document.getElementById('inicioDeJuego').style.display = 'block';
  document.getElementById('idheader').style.display = 'block';
  document.getElementById('registroDeJugadores').style.display = 'none';
  document.getElementById('areaDeJuego').style.display = 'none';
  document.getElementById('footerBotones').style.display = 'none';
}

function MostrarRegistroDeJugadores() {
  document.getElementById('inicioDeJuego').style.display = 'none';
  document.getElementById('idheader').style.display = 'block';
  document.getElementById('registroDeJugadores').style.display = 'block';
  document.getElementById('areaDeJuego').style.display = 'none';
  document.getElementById('footerBotones').style.display = 'none';
}

function MostrarAreaDeJuego() {
  document.getElementById('inicioDeJuego').style.display = 'none';
  document.getElementById('idheader').style.display = 'none';
  document.getElementById('registroDeJugadores').style.display = 'none';
  document.getElementById('areaDeJuego').style.display = 'block';
  document.getElementById('footerBotones').style.display = 'block';
}

function mostrarJugadores(jugadores){
  if (jugadores.length == 2) {
    Posicionamiento(jugadores[1], 2);
    Posicionamiento(jugadores[0], 7);
  }
  else if (jugadores.length == 3) {
    Posicionamiento(jugadores[2], 1);
    Posicionamiento(jugadores[1], 3);
    Posicionamiento(jugadores[0], 7);
  }
  else if (jugadores.length == 4) {
    Posicionamiento(jugadores[3], 1);
    Posicionamiento(jugadores[2], 3);
    Posicionamiento(jugadores[1], 8);
    Posicionamiento(jugadores[0], 6);
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

function Posicionamiento(jugador, posicion) {
  document.getElementById('p'+posicion).style.visibility = 'visible';
  document.getElementById('p'+posicion+'Nombre').innerHTML = jugador.nombre;
  document.getElementById('p'+posicion+'Foto').src = "IMG/" + (jugador.sexo?"hombre.png":"mujer.png");
  document.getElementById('p'+posicion+'Dinero').innerHTML = "Saldo: $"+jugador.dinero;

}
