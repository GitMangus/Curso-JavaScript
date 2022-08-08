//Login
const username = document.getElementById('username')
const password = document.getElementById('password')
const button = document.getElementById('button')

button.addEventListener('click', (e) => {
    e.preventDefault()
    const data = {
        username: username.value,
        password: password.value
    }

    console.log(data)
})


const cards = document.querySelectorAll(".playingCard");

//Reiniciar el tablero una vez que todas seas iguales
let matchedCard = 0

let cardOne, cardTwo
//Las cartas van a estar deshabilitadas al jugador hasta que se vuelvan a ocultar o sean iguales. Por ende no podrá dar vuelta otras cartas hasta que esto suceda.
let disableDeck = false

function flipCard(e) {
    let clickedCard = e.target //Me devuelve la carta seleccionada por el jugador
    if (clickedCard !== cardOne && !disableDeck) { //Evito que el jugador haga click dos veces en la misma carta
        clickedCard.classList.add("flip") //Agrego la clase flip en las etiquetas li seleccionada    
        if (!cardOne) {
            //Retorna el valor de la primer carta seleccionada en clickedCard
            return cardOne = clickedCard
        }
        cardTwo = clickedCard
        disableDeck = true
        let cardOneImg = cardOne.querySelector("img").src,
            cardTwoImg = cardTwo.querySelector("img").src
        matchCards(cardOneImg, cardTwoImg)
    }
}

function matchCards(img1, img2) {
    if (img1 === img2) { //Si las dos cartas son iguales
        matchedCard++ //Incrementa el valor de las cartas iguales en 1
        //Si el valor de los pares iguales es 10, el jugador encontró todos los pares (10*2 = 20 cartas)
        if (matchedCard == 10) {
            setTimeout(() => {
                return shuffleCard()
            }, 1000) //Llamo a la función shuffleCard después de 1 seg
        }
        cardOne.removeEventListener("click", flipCard)
        cardTwo.removeEventListener("click", flipCard)
        cardOne = cardTwo = "" //Ambos valores se resetean
        return disableDeck = false
    }
    //Si dos cartas no son iguales
    setTimeout(() => {
        //Agrego la clase shake a las dos cartas después de 400ms
        cardOne.classList.add("shake")
        cardTwo.classList.add("shake")
    }, 400)

    setTimeout(() => {
        //Remuevo las clases shake y flip de las dos cartas después de 1.2seg
        cardOne.classList.remove("shake", "flip")
        cardTwo.classList.remove("shake", "flip")
        cardOne = cardTwo = "" //Ambos valores se resetean
        disableDeck = false
    }, 1200)
}

function shuffleCard() {
    matchedCard = 0
    cardOne = cardTwo = ""
    disableDeck = false
    //Creo un array de 20 items y cada uno se repite dos veces
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    arr.sort(() => Math.random() > 0.5 ? 1 : -1) //Ordeno los elementos de la matriz al azar
    
    //Remueve la clase flip de todas las cartas y le pasa una imagen aleatoria a cada tarjeta
    cards.forEach((card, index) => {
        card.classList.remove("flip")
        let imgTag = card.querySelector("img")
        imgTag.src = `./images/${arr[index]}.png`
        card.addEventListener("click", flipCard)
    })
}

shuffleCard() //Esta función hace 2 llamados: cuando matchean todas las cartas y cuando refrescan el navegador

cards.forEach(card => { //Agrego evento click a todas las cartas
    card.addEventListener("click", flipCard)
})