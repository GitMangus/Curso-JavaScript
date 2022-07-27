//Variables del jueguito
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

    //Para detener el tiempo y que no sea infinito
    /*if (timer == 0) {
      clearInterval(tiempoRegresivoId)
      bloquearTarjetas()
    }*/
    timer == 0 && clearInterval(tiempoRegresivoId) && bloquearTarjetas()  //Operador lógico AND

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


//Creo un objeto Usuario

class User {
  constructor(id, username, password) {
    this.id = id
    this.username = username
    this.password = password
  }
}

const formulario = document.getElementById('idForm')
const usuarios = []
let id = 1;


formulario.addEventListener('submit', (event) => {
  event.preventDefault() //Prevengo el comportamiento por defecto del formulario
  let username = document.getElementById('exampleInputUser1').value
  let password = document.getElementById('exampleInputPassword1').value
  const user = new User(id, username, password)
  usuarios.push(user)//Mis usuarios van a estar guardados dentro del array
  console.log(usuarios)
  formulario.reset()//Limpio el formulario
  id++
})//Le pedí a mi usuario que ingrese info y la guardé en un objeto


//JSON

class Jugador {
  constructor(id, nickname) {
    this.id = id
    this.nickname = nickname
    this.puntaje = 0 //Puntaje inicial, no se pasa como param
  }
}

const jugador1 = new Jugador(1, "Lala")
const jugador2 = new Jugador(2, "Lalo")

const jugadores = [jugador1, jugador2]

//Desestructuración

let { nickname, puntaje } = jugador1
console.log(nickname)
console.log(puntaje)

//Spread

const puntajeJugador1 = [1, 2, 3]
const puntajeJugador2 = [4, 5, 6]

function suma(numero1, numero2, numero3) {
  const resultado = numero1 + numero2 + numero3
  console.log(resultado)
}

suma(...puntajeJugador1) //esto es igual a decir suma(lista1[0], lista1[1], lista1[2]) suma 1+2+3


//convertí los datos y no veo [object Object]. Los pasé a formato JSON

localStorage.setItem('jugadores', JSON.stringify(jugadores)) //Stringify: paso de obj a JSON

//Hago la conversión a objeto cuando los consulto

console.log(JSON.parse(localStorage.getItem('jugadores'))) //Parse: paso de JSON a objeto

//Librerías

const loginButton = document.getElementById('loginButton')

loginButton.addEventListener('click', () => {
  Swal.fire({
    title: '¿Quieres guardar los cambios?',
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: 'Guardar',
    denyButtonText: `No guardar`,
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      Swal.fire('¡Guardado!', '', 'success')
    } else if (result.isDenied) {
      Swal.fire('Los cambios no han sido guardados', '', 'info')
    }
  })
})

Toastify({
  text: "Haz login y comienza a jugar",
  duration: 5000,
  gravity: "bottom",
  position: "right"
}).showToast();

