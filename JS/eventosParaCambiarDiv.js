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
  document.getElementById('footerBotones').style.display = 'none';

}
