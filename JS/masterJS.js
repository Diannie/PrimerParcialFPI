var apuestaMinima = 1;
var jugadores = [];
var mazoDeCartas = Mazo();
var cartasMesa = [];
//variables para jugabilidad
var dineroMesa = 0;
var turno = 1;
var ronda = 1;
var activos = 0;
var ganadorPorDefault;

function AumentarTurno() {
  turno++;
  if (jugadores.length < turno) {
    turno = 1;
  }
    var estadoRonda = false;
    var apuestaBase = jugadores[0].apuesta;
    for (var i = 0; i < jugadores.length; i++) {
      if(jugadores[i].apuesta == apuestaBase){
        estadoRonda = true;
      }else {
        estadoRonda = false;
        break;
      }
    }
    if (estadoRonda) {
      ronda++;
    }
    if (ronda == 2) {
      GenerarFlop();
    }else if(ronda == 3){
      GenerarTurn();
    }else if(ronda == 4){
      GenerarRiver();
    }
  console.log("turno:"+turno);
  console.log("ronda:"+ronda);
  mostrarTurnoJugador(jugadores,turno);
}

function Paso() {
  if(ronda == 1){
    document.getElementById('btnPaso').disabled = true;
  }else {
    document.getElementById('btnPaso').disabled = false;
    AumentarTurno();
  }

}

function IgualarApuesta() {
  var diferencia = 0;
  diferencia = apuestaMinima - jugadores[turno-1].apuesta;
  if(jugadores[turno-1].dinero >= diferencia){
    jugadores[turno-1].apuesta += diferencia;
    jugadores[turno-1].dinero -= diferencia;
    dineroMesa += diferencia;
    document.getElementById('sumaAcumulada').innerHTML = "$" + dineroMesa;
    AumentarTurno();
  }else {
    alert("Dinero Insufiente");
  }
}

function IgualarApuestaInicial() {
  jugadores[0].dinero = jugadores[0].dinero - apuestaMinima;
  dineroMesa = apuestaMinima;
  jugadores[0].apuesta = apuestaMinima;
  document.getElementById('sumaAcumulada').innerHTML = "$" + dineroMesa;
  AumentarTurno();
}

function AumentarApuesta() {
  var diferencia = 0;
  diferencia = apuestaMinima - jugadores[turno-1].apuesta;
  var ingresada = prompt("Ingrese cuanto aumentara su apuesta");//validar esto despues, numeros
  var ingresadaInt = parseInt(ingresada);//luego comparar con la apuesta minima
  if(jugadores[turno-1].dinero >= ingresadaInt){
    jugadores[turno-1].dinero = jugadores[turno-1].dinero - (ingresadaInt+diferencia);
    jugadores[turno-1].apuesta += (ingresadaInt+diferencia);//incrementar la apuesta del jugador
    dineroMesa += (ingresadaInt+diferencia);
    apuestaMinima+=ingresadaInt;
    document.getElementById('sumaAcumulada').innerHTML = "$" + dineroMesa;
    AumentarTurno();
  }else {
    alert("Dinero Insufiente");
  }
}

function Retirarse() { //arreglarlo ah
  jugadores[turno-1].activo = false;
  jugadores[turno-1].sexo = undefined;
  for (var i = 0; i < jugadores.length; i++) {
    if(jugadores[i].activo == true){
      activos++;
      ganadorPorDefault = i;
    }
  }
  if(activos==1){
    alert("El ganador por default es"+jugadores[ganadorPorDefault].nombre);
  }
  AumentarTurno();
}

function apostarTodo(){
  var diferencia = 0;
  diferencia = apuestaMinima - jugadores[turno-1].apuesta;
  jugadores[turno-1].apuesta += (jugadores[turno-1].dinero);//incrementar la apuesta del jugador
  dineroMesa += (jugadores[turno-1].dinero);

    if (jugadores[turno-1].dinero > diferencia) {
      apuestaMinima+=jugadores[turno-1].dinero;
    }
    jugadores[turno-1].dinero = 0;
    document.getElementById('sumaAcumulada').innerHTML = "$" + dineroMesa;
    AumentarTurno();

}
function GenerarFlop() {
  for (var i = 0; i < 3; i++) {
    cartasMesa.push(RepartirCarta(mazoDeCartas));
    document.getElementById('carta'+(i+1)+'Mesa').src = "IMG/"+cartasMesa[i].path+".png";
  }
}
function GenerarTurn() {
  cartasMesa.push(RepartirCarta(mazoDeCartas));
  document.getElementById('carta4Mesa').src = "IMG/"+cartasMesa[3].path+".png";
}
function GenerarRiver() {
  cartasMesa.push(RepartirCarta(mazoDeCartas));
  document.getElementById('carta5Mesa').src = "IMG/"+cartasMesa[4].path+".png";
}

function ValidarApuestaInicial() {
  var valorInicial = document.getElementById("txtApuestaInicial");
  valorInicial = parseInt(valorInicial.value);
  if(valorInicial >= 1 && valorInicial <= 1000){
    apuestaMinima = valorInicial;
    MostrarRegistroDeJugadores();
    document.getElementById("lblApuestaMinima").innerHTML = "Por favor ingrese sus datos, recuerde que la apuesta mínima es de $"+apuestaMinima;
  }else {
    alert("La apuesta mínima debe estar entre $1 y $1000");
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
    mostrarJugadores(jugadores);
    mostrarTurnoJugador(jugadores,turno);
    IgualarApuestaInicial();
  }else {
    alert("El mínimo de jugadores para iniciar la partida es 2");
  }
}
