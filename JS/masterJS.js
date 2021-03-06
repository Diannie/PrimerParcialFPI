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
var jugadoresActivos = [];
var numeroPasos = 0;
var retirado=false;


function AumentarTurno() {
  turno++;
  if (jugadores.length < turno) {
    turno = 1;
  }
  if (jugadores[turno-1].activo == true) {
    if (jugadores[turno-1].conDinero) {
      document.getElementById('btnAumentar').disabled = false;
      document.getElementById('btnIgualar').disabled = false;
      document.getElementById('btnTodo').disabled = false;
  }else {
      document.getElementById('btnAumentar').disabled = true;
      document.getElementById('btnIgualar').disabled = true;
      document.getElementById('btnTodo').disabled = true;

  }


    var estadoRonda = false;
    for (var i = 0; i < (jugadoresActivos.length-1); i++) {
      if ((jugadores[(jugadoresActivos[i])- 1].apuesta) == (jugadores[(jugadoresActivos[i+1]-1)].apuesta)) {
        estadoRonda = true;
      }
      else {
        estadoRonda = false;
        break;
      }
    }
    if (estadoRonda == true && (numeroPasos == 0 || numeroPasos == jugadoresActivos.length) && retirado == false) {
      if (numeroPasos == 0) {
          numeroPasos = jugadoresActivos.length;
      }
      ronda++;
      document.getElementById('btnPaso').disabled = false;
      document.getElementById('btnIgualar').disabled = true;
    }
    if (ronda == 2) {
      GenerarFlop();
    }else if(ronda == 3){
      GenerarTurn();
    }else if(ronda == 4){
      GenerarRiver();
      document.getElementById('btnRetirarse').disabled = true;
    }
    else if (ronda > 4) {
      document.getElementById('footerBotones').style.display = 'none';
      document.getElementById('btnPaso').disabled = true;
      var playersActivos = soloJugadoresActivos(jugadores);
      var allBest = MejoresCombinacionesJugadores(cartasMesa,playersActivos);
      var mensaje = "";
      for (var j = 0; j < allBest.length; j++) {
        mensaje += playersActivos[j].nombre+" sus mejores cartas son: ";
        for (var c = 0; c < allBest[j].length; c++) {
          mensaje+= allBest[j][c].path + "  ";
        }
        mensaje += " su altura es :"+AlturaCombinacion(allBest[j]);
        mensaje += "\n";
      }
      document.getElementById('areaGanador').innerHTML = 'El ganador es: ' + Ganador(playersActivos,allBest).nombre + ' con una combinación de: ' + DecirCualAltura(altura);
      document.getElementById('areaGanador').style.display = 'block';
      console.log(mensaje);
      for (var i = 1; i <= jugadores.length; i++) {
        mostrarAllCartas(jugadores, i);
      }
    }

  }else{
    for (var i = 0; i < jugadores.length; i++) {
      if (jugadores[turno-1].activo) {
                break;
      }else {
        turno++;
        if (jugadores.length < turno) {
          turno = 1;
        }
        mostrarTurnoJugador(jugadores,turno);
      }
    }
  }
  if (ronda <= 4) {
    mostrarTurnoJugador(jugadores,turno);
  }
}

function Paso() {
  numeroPasos --;
  retirado = false;
  AumentarTurno();

}

function IgualarApuesta() {
  var diferencia = 0;
  diferencia = apuestaMinima - jugadores[turno-1].apuesta;
  if(jugadores[turno-1].dinero >= diferencia){
    jugadores[turno-1].apuesta += diferencia;
    jugadores[turno-1].dinero -= diferencia;
    dineroMesa += diferencia;
    if (jugadores[turno-1].dinero == 0) {
      jugadores[turno-1].conDinero = false;
    }
    document.getElementById('sumaAcumulada').innerHTML = "$" + dineroMesa;
    numeroPasos = jugadoresActivos.length;
    retirado = false;
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
  numeroPasos = jugadoresActivos.length;
  AumentarTurno();

}

function AumentarApuesta() {
  var diferencia = 0;
  diferencia = apuestaMinima - jugadores[turno-1].apuesta;
  var ingresada = prompt("Ingrese cuanto aumentara su apuesta");//validar esto despues, numeros
  var ingresadaInt = parseInt(ingresada);//luego comparar con la apuesta minima
  if(jugadores[turno-1].dinero > ingresadaInt){
    jugadores[turno-1].dinero = jugadores[turno-1].dinero - (ingresadaInt+diferencia);
    jugadores[turno-1].apuesta += (ingresadaInt+diferencia);//incrementar la apuesta del jugador
    dineroMesa += (ingresadaInt+diferencia);
    apuestaMinima+=ingresadaInt;
    document.getElementById('sumaAcumulada').innerHTML = "$" + dineroMesa;
    retirado = false;
    AumentarTurno();
    document.getElementById('btnPaso').disabled = true;
    document.getElementById('btnIgualar').disabled = false;
    numeroPasos = jugadoresActivos.length;
  }else {
    alert("Dinero Insuficiente, ingrese una cantidad menor o apueste todo");
  }
}

function Retirarse() {
  jugadores[turno-1].activo = false;
  jugadores[turno-1].sexo = undefined;
  retirado = true;

  for (var i = 0; i < jugadoresActivos.length; i++) {
    if (turno == jugadoresActivos[i]) {
      jugadoresActivos.splice(i,1);
    }
  }

  if(jugadoresActivos.length==1){
    document.getElementById('areaGanador').innerHTML = "El ganador por default es: "+jugadores[jugadoresActivos[0]-1].nombre;
    document.getElementById('areaGanador').style.display = 'block';
    document.getElementById('footerBotones').style.display = 'none';
  }
  numeroPasos = jugadoresActivos.length;
  AumentarTurno();
}

function apostarTodo(){
  var diferencia = 0;
  diferencia = apuestaMinima - jugadores[turno-1].apuesta;
  jugadores[turno-1].apuesta += (jugadores[turno-1].dinero);//incrementar la apuesta del jugador
  dineroMesa += (jugadores[turno-1].dinero);

    if (jugadores[turno-1].dinero >= diferencia) {
      apuestaMinima=jugadores[turno-1].apuesta;
    }
    jugadores[turno-1].dinero = 0;
    jugadores[turno-1].conDinero = false;
    document.getElementById('sumaAcumulada').innerHTML = "$" + dineroMesa;
    document.getElementById('btnPaso').disabled = true;
    document.getElementById('btnIgualar').disabled = false;
    numeroPasos = jugadoresActivos.length;
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
        jugadoresActivos.push(player.id);
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
  document.getElementById('btnPaso').disabled = true;
  if(jugadores.length >= 0){
    MostrarAreaDeJuego();
    mostrarJugadores(jugadores);
    mostrarTurnoJugador(jugadores,turno);
    IgualarApuestaInicial();
  }else {
    alert("El mínimo de jugadores para iniciar la partida es 2");
  }
}
