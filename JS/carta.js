function Mazo() {
  var valorRandom = Math.floor((Math.random()*13)+1);
  var paloRandom = Math.floor((Math.random()*4)+1);
  var mazoDesordenado = [];
  while (mazoDesordenado.length<52) {
    var cartaRandom = new Carta(valorRandom, paloRandom);
    if(Existe(mazoDesordenado, cartaRandom)==false){
      mazoDesordenado.push(cartaRandom);
    }
    valorRandom = Math.floor((Math.random()*13)+1);
    paloRandom = Math.floor((Math.random()*4)+1);
  }
  return mazoDesordenado;
}

function Existe(arreglo, cartaAleatoria) {
  var resultado = false;
  var limite = arreglo.length;
  for (var i = 0; i < limite; i++) {
    if(arreglo[i].valor==cartaAleatoria.valor && arreglo[i].palo==cartaAleatoria.palo){
      resultado = true;
    }
}
return resultado;
}

function Carta(valor, palo) {
  this.valor=valor;
  this.palo=palo;
  this.path= valor+"."+palo;
}

function RepartirCarta(arreglo){
  var cartaRepartida = arreglo.pop();
  return cartaRepartida;
}
