var apuestaMinima = 1;
var jugadores = [];
var mazoDeCartas = Mazo();

function ValidarApuestaInicial() {
  var valorInicial = document.getElementById("txtApuestaInicial");
  valorInicial = parseInt(valorInicial.value);
  if(valorInicial >= 1 && valorInicial <= 1000){
    apuestaMinima = valorInicial;
    MostrarRegistroDeJugadores();
    document.getElementById("lblApuestaMinima").innerHTML = "Por favor ingrese sus datos, recuerde que la apuesta mínima es de $"+apuestaMinima;
  }else {
    alert("La apuesta mínima no debe sobrepasar los $1000");
  }
}

function RegistrarApuestaMinima(entradaApuestaInput) {
  var entradaApuesta = document.getElementById(entradaApuestaInput).value;
  apuestaMinima = parseInt(entradaApuesta);
}
function RegistrarJugador(idJugadorInput, nombreJugadorInput, rbtnHombreInput, rbtnMujerInput, dineroJugadorInput, btnOut) {
  var idJugador = document.getElementById(idJugadorInput);
  var nombreJugador = document.getElementById(nombreJugadorInput);
  var rbtnHombre = document.getElementById(rbtnHombreInput);
  var rbtnMujer = document.getElementById(rbtnMujerInput);
  var dineroJugador = document.getElementById(dineroJugadorInput);
  var cartasJugador = [];

  if(idJugador.value != "" && nombreJugador.value != "" && dineroJugador.value != ""){
    if(jugadores.length <= 10){
      idJugador = parseInt(idJugador.value);
      nombreJugador = nombreJugador.value;
      dineroJugador = parseInt(dineroJugador.value);
      if (dineroJugador >= apuestaMinima) {
        //asignar 2 cartas
        for (var i = 0; i < 2; i++) {
          cartasJugador.push(RepartirCarta(mazoDeCartas));
        }
        var player;
        if(rbtnHombre.checked){
           player = new Jugador(idJugador,nombreJugador, true,cartasJugador,dineroJugador);
        }else {
          player = new Jugador(idJugador,nombreJugador, false,cartasJugador,dineroJugador);
        }
        jugadores.push(player);
        //Vaciar, notificar y aumetar que se ha registrado el jugador
        alert("El jugador "+jugadores[idJugador-1].nombre+" ha sido registrado con éxito");
        document.getElementById(idJugadorInput).value = ++idJugador;
        document.getElementById(nombreJugadorInput).value = "";
        document.getElementById(dineroJugadorInput).value = "";

      } else {
        alert("La apuesta minima es "+apuestaMinima);
      }
    }
  }else {
    alert("Complete todos los campos para poder registrar al jugador");
  }
  if (jugadores.length > 10) {
    document.getElementById(btnOut).disabled = true;
    alert("El número máximo de jugadores ya ha sido registrado, puede iniciar la partida");
  }
}
function ValidarParaIniciarJuego() {
  if(jugadores.length >= 0){
    MostrarAreaDeJuego();
  }else {
    alert("El mínimo de jugadores para iniciar la partida es 2");
  }
}

function mostrarJugadores(){

  if (jugadores.length == 2) {

    document.getElementById('p2').style.visibility = 'visible';
    document.getElementById('p2Nombre').innerHTML = jugadores[1].nombre;
    document.getElementById('p2Foto').src = "IMG/" + (jugadores[1].sexo?"hombre.png":"mujer.png");
    document.getElementById('p2Dinero').innerHTML = "Saldo: $"+jugadores[1].dinero;

    document.getElementById('p7').style.visibility = 'visible';
    document.getElementById('p7Nombre').innerHTML = jugadores[0].nombre;
    document.getElementById('p7Foto').src = "IMG/" + (jugadores[0].sexo?"hombre.png":"mujer.png");
    document.getElementById('p7Dinero').innerHTML = "Saldo: $"+jugadores[0].dinero;
  }
  else if (jugadores.length == 3) {
    document.getElementById('p1').style.visibility = 'visible';

    document.getElementById('p3').style.visibility = 'visible';
    document.getElementById('p7').style.visibility = 'visible';
  }
  else if (jugadores.length == 4) {
    document.getElementById('p1').style.visibility = 'visible';
    document.getElementById('p3').style.visibility = 'visible';
    document.getElementById('p8').style.visibility = 'visible';
    document.getElementById('p6').style.visibility = 'visible';
  }
  else if (jugadores.length == 5) {
    document.getElementById('p10').style.visibility = 'visible';
    document.getElementById('p2').style.visibility = 'visible';
    document.getElementById('p4').style.visibility = 'visible';
    document.getElementById('p6').style.visibility = 'visible';
    document.getElementById('p8').style.visibility = 'visible';
  }
  else if (jugadores.length == 6) {
    document.getElementById('p1').style.visibility = 'visible';
    document.getElementById('p2').style.visibility = 'visible';
    document.getElementById('p3').style.visibility = 'visible';
    document.getElementById('p6').style.visibility = 'visible';
    document.getElementById('p7').style.visibility = 'visible';
    document.getElementById('p8').style.visibility = 'visible';
  }
  else if (jugadores.length == 7) {
    document.getElementById('p1').style.visibility = 'visible';
    document.getElementById('p3').style.visibility = 'visible';
    document.getElementById('p4').style.visibility = 'visible';
    document.getElementById('p6').style.visibility = 'visible';
    document.getElementById('p7').style.visibility = 'visible';
    document.getElementById('p8').style.visibility = 'visible';
    document.getElementById('p10').style.visibility = 'visible';
  }
  else if (jugadores.length == 8) {
    document.getElementById('p1').style.visibility = 'visible';
    document.getElementById('p3').style.visibility = 'visible';
    document.getElementById('p4').style.visibility = 'visible';
    document.getElementById('p5').style.visibility = 'visible';
    document.getElementById('p6').style.visibility = 'visible';
    document.getElementById('p8').style.visibility = 'visible';
    document.getElementById('p9').style.visibility = 'visible';
    document.getElementById('p10').style.visibility = 'visible';
  }
  else if (jugadores.length == 9) {
    document.getElementById('p1').style.visibility = 'visible';
    document.getElementById('p2').style.visibility = 'visible';
    document.getElementById('p3').style.visibility = 'visible';
    document.getElementById('p4').style.visibility = 'visible';
    document.getElementById('p5').style.visibility = 'visible';
    document.getElementById('p6').style.visibility = 'visible';
    document.getElementById('p8').style.visibility = 'visible';
    document.getElementById('p9').style.visibility = 'visible';
    document.getElementById('p10').style.visibility = 'visible';
  }
  else{
    document.getElementById('p1').style.visibility = 'visible';
    document.getElementById('p2').style.visibility = 'visible';
    document.getElementById('p3').style.visibility = 'visible';
    document.getElementById('p4').style.visibility = 'visible';
    document.getElementById('p5').style.visibility = 'visible';
    document.getElementById('p6').style.visibility = 'visible';
    document.getElementById('p8').style.visibility = 'visible';
    document.getElementById('p9').style.visibility = 'visible';
    document.getElementById('p10').style.visibility = 'visible';
    document.getElementById('p7').style.visibility = 'visible';
  }


}
