//Variables
let tarjetasDestapadas = 0
let tarjeta1 = null
let tarjeta2 = null
let primerResultado = null
let segundoResultado = null
let movimientos = 0
let aciertos = 0
let temporizador = false
let timer = 30
let timerInicial = 30
let tiempoRegresivoId = null

//Documento HTML
let mostrarMovimientos = document.getElementById('movimientos')
let mostrarAciertos = document.getElementById('aciertos')
let mostrarTiempo = document.getElementById('tiempoRestante')

//Generación de un arreglo de números aleatorios
let numbers = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8]
numbers = numbers.sort(() => { return Math.random() - 0.5 })
console.log(numbers)

//Funciones
function contarTiempo() {
  tiempoRegresivoId = setInterval(() => {
    timer--
    mostrarTiempo.innerHTML = `Tiempo: ${timer} segundos`
    //Para detener el tiempo y no sea infinito
    if (timer == 0) {
      clearInterval(tiempoRegresivoId)
      bloquearTarjetas()
    }
  }, 1000)
}

//Muestro todas las tarjetas cuando se me termina el tiempo

function bloquearTarjetas() {
  for (let i = 0; i <= 15; i++) {
    let tarjetaBloqueada = document.getElementById(i)
    tarjetaBloqueada.innerHTML = numbers[i]
    tarjetaBloqueada.disabled = true
  }
}

//Función principal

function show(id) {

  if (temporizador == false) {
    contarTiempo()
    temporizador = true
  }

  tarjetasDestapadas++
  console.log(tarjetasDestapadas)

  if (tarjetasDestapadas == 1) {
    //Mostrar primer número
    tarjeta1 = document.getElementById(id)
    primerResultado = numbers[id]
    tarjeta1.innerHTML = primerResultado

    //Deshabilitar el primer botón
    tarjeta1.disabled = true
  } else if (tarjetasDestapadas == 2) {
    //Mostrar segundo número
    tarjeta2 = document.getElementById(id)
    segundoResultado = numbers[id]
    tarjeta2.innerHTML = segundoResultado

    //Deshabilitar el segundo botón
    tarjeta2.disabled = true

    //Incrementar movimientos
    movimientos++
    mostrarMovimientos.innerHTML = `Movimientos: ${movimientos}`

    if (primerResultado == segundoResultado) {
      //Llevo a 0 el contador de tarjetas destapadas
      tarjetasDestapadas = 0

      //Aumentar aciertos
      aciertos++
      mostrarAciertos.innerHTML = `Aciertos: ${aciertos}`

      if (aciertos == 8) {
        clearInterval(tiempoRegresivoId) //Detener el contador
        mostrarAciertos.innerHTML = `Aciertos: ${aciertos} 😎`
        mostrarTiempo.innerHTML = `¡Genial! Sólo tardaste ${timerInicial - timer} seg`
        mostrarMovimientos.innerHTML = `Movimientos: ${movimientos} 👌`
      }

    } else {
      //Mostrar momentáneamente valores y volver a ocultar
      setTimeout(() => {
        tarjeta1.innerHTML = ' '
        tarjeta2.innerHTML = ' '
        tarjeta1.disabled = false
        tarjeta2.disabled = false
        tarjetasDestapadas = 0
      }, 800)
    }
  }
}
