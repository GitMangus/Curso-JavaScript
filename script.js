//Alerta invitando a probar el juego

Toastify({
    text: "Haz login y comienza a jugar",
    duration: 4000,
    gravity: "top",
    position: "right"
  }).showToast();

//Login: Simulación de base de datos de usuarios válidos
class User {
    constructor(id, username, password) {
        this.id = id
        this.username = username
        this.password = password
    }
}

const user1 = new User(1, "Billy", "billy123")
const user2 = new User(2, "Mandy", "mandy123")

const users = [user1, user2] 

localStorage.setItem('storageUser', JSON.stringify(users)) //Paso de objeto a JSON
const parsedUsers = (JSON.parse(localStorage.getItem('storageUser'))) //Paso de JSON a objeto pero pierde la referencia a la clase y métodos

//Chequear si hay localStorage creado, sino crea uno utilizando op. ternario

let arrayUsers = (localStorage.getItem('storageUser')) ? JSON.parse(localStorage.getItem('storageUser')) : []

//Consulto los elementos del DOM

const form = document.getElementById('idForm')
const username = document.getElementById('username')
const password = document.getElementById('password')
const button = document.getElementById('button')

//Cuando el usuario haga click en el botón consulto por el valor

 form.addEventListener('submit', (e) => {
    e.preventDefault() //Prevengo su comportamiento por defecto para poder consultar sus valores
    let username = document.getElementById('username').value
    let password = document.getElementById('password').value
    const user = new User(id, username, password)
    users.push(user) //guardo los datos del usuario en un array
    console.log(users)
    localStorage.setItem('storageUser', JSON.stringify(users)) //Modifico el localStorage
    form.reset() //limpio mi formulario
}) 

//Creo los manejadores de eventos para cuando el usuario haga click

button.addEventListener('click', (e) => { 
    e.preventDefault()
    const data = {
        username: username.value,
        password: password.value
    }
    console.log(data)
}) 

//Me redirecciona a la pág del juego

 button.addEventListener('click', () => { 
    
    setTimeout( () => { 
         window.location.href = "juego.html"
    }, 2000 ) //Asincronía cuyo tiempo en realidad va a depender de cada usuario
}) 

//Asincronía aplicada a una función

async function getUsers () {
    const info = await fetch('./json/usuarios.json')
    const infoConv = await info.json()
    return infoConv
}

const array = getUsers()
array.then(data => console.log(data)) 