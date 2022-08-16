//Simulación de login: crear usuario
class User {
    constructor(id, username, password) {
        this.id = id
        this.username = username
        this.password = password
    }
}

let users = [] //Arranca siendo vacío siempre el array // let users= [] pierdo un poquito de seguridad con let, pero es para que sea un poco más simple de hacer ahora.
let id = 1;

//Uso localStorage (tengo 2 usuarios, el que ingresa por primera vez y el que ya entró)
//Consulto si existe o no el localStorage, qué info tiene (manejo el estado del almacenamiento)

if(localStorage.getItem('storageUser')){
   users = JSON.parse(localStorage.getItem('storageUser')) //si existe va a ser igual a lo que haya en tareas
} else {
    localStorage.setItem('storageUser', JSON.stringify(users))   //esto crea un array vacío si no existe
}

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
    id++
})

localStorage.setItem('users', JSON.stringify(users)) //Paso de objeto a JSON
const parsedUsers = (JSON.parse(localStorage.getItem('users'))) //Paso de JSON a objeto pero pierde la referencia a la clase y métodos

//Simulación usuarios válidos (creo objetos para no perder la ref a la clase)  Sólo es necesario hacer si mi objeto tiene métodos
parsedUsers.forEach(user => {
    const newUser = new User(user.id, user.username, user.password)
    users.push(newUser)
    console.log(users)
});

button.addEventListener('click', (e) => { //Creo el manejador de eventos para cuando el usuario haga click
    e.preventDefault()
    const data = {
        username: username.value,
        password: password.value
    }

    console.log(data)
})



//el querySelector no sería el mejor porque a la pc le cuesta más, tema de rendimiento. Hacer mejor el getElementById
/*const cards = document.querySelectorAll(".card"),
timeTag = document.querySelector(".time b"),
flipsTag = document.querySelector(".flips b"),
refreshBtn = document.querySelector(".details button");

let maxTime = 40;
let timeLeft = maxTime;
let flips = 0;
let matchedCard = 0;
let disableDeck = false;
let isPlaying = false;
let cardOne, cardTwo, timer;

function initTimer() {
    if(timeLeft <= 0) {
        return clearInterval(timer);
    }
    timeLeft--;
    timeTag.innerText = timeLeft;
}

function flipCard({target: clickedCard}) {
    if(!isPlaying) {
        isPlaying = true;
        timer = setInterval(initTimer, 1000);
    }
    if(clickedCard !== cardOne && !disableDeck && timeLeft > 0) {
        flips++;
        flipsTag.innerText = flips;
        clickedCard.classList.add("flip");
        if(!cardOne) {
            return cardOne = clickedCard;
        }
        cardTwo = clickedCard;
        disableDeck = true;
        let cardOneImg = cardOne.querySelector(".back-view img").src,
        cardTwoImg = cardTwo.querySelector(".back-view img").src;
        matchCards(cardOneImg, cardTwoImg);
    }
}

function matchCards(img1, img2) {
    if(img1 === img2) {
        matchedCard++;
        if(matchedCard == 6 && timeLeft > 0) {
            return clearInterval(timer);
        }
        cardOne.removeEventListener("click", flipCard);
        cardTwo.removeEventListener("click", flipCard);
        cardOne = cardTwo = "";
        return disableDeck = false;
    }

    setTimeout(() => {
        cardOne.classList.add("shake");
        cardTwo.classList.add("shake");
    }, 400);

    setTimeout(() => {
        cardOne.classList.remove("shake", "flip");
        cardTwo.classList.remove("shake", "flip");
        cardOne = cardTwo = "";
        disableDeck = false;
    }, 1200);
}

function shuffleCard() {
    timeLeft = maxTime;
    flips = matchedCard = 0;
    cardOne = cardTwo = "";
    clearInterval(timer);
    timeTag.innerText = timeLeft;
    flipsTag.innerText = flips;
    disableDeck = isPlaying = false;

    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    arr.sort(() => Math.random() > 0.5 ? 1 : -1);

    cards.forEach((card, index) => {
        card.classList.remove("flip");
        let imgTag = card.querySelector(".back-view img");
        setTimeout(() => {
            imgTag.src = `./images/${arr[index]}.png`;
        }, 500);
        card.addEventListener("click", flipCard);
    });
}

shuffleCard();

refreshBtn.addEventListener("click", shuffleCard);

cards.forEach(card => {
    card.addEventListener("click", flipCard);
});*/