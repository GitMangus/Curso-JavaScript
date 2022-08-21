const cards = document.querySelectorAll(".card"),
    timeTag = document.querySelector(".time b"),
    flipsTag = document.querySelector(".flips b"),
    refreshBtn = document.querySelector(".details button")

let maxTime = 60
let timeLeft = maxTime
let flips = 0
let matchedCard = 0 //Reiniciar el tablero una vez que todas las cartas sean iguales
let disableDeck = false //Las cartas van a estar deshabilitadas al jugador hasta que se vuelvan a ocultar o sean iguales. Por ende no podrá dar vuelta otras cartas hasta que esto suceda.
let isPlaying = false
let cardOne, cardTwo, timer
let totalFlips = 0

function initTimer() {
    if (timeLeft <= 0) {
        return clearInterval(timer)
    }
    timeLeft--
    timeTag.innerText = timeLeft
}

function flipCard({ target: clickedCard }) { //Me devuelve la carta seleccionada por el jugador
    if (!isPlaying) {
        isPlaying = true
        timer = setInterval(initTimer, 1000)
    }
    if (clickedCard !== cardOne && !disableDeck && timeLeft > 0) { //Evito que el jugador haga click dos veces en la misma carta
        flips++
        flipsTag.innerText = flips
        clickedCard.classList.add("flip") //Agrego la clase flip en las etiquetas li seleccionada
        if (!cardOne) {
            //Retorna el valor de la primer carta seleccionada en clickedCard
            return cardOne = clickedCard
        }
        cardTwo = clickedCard
        disableDeck = true
        let cardOneImg = cardOne.querySelector(".back-view img").src,
            cardTwoImg = cardTwo.querySelector(".back-view img").src
        matchCards(cardOneImg, cardTwoImg)
    }
}

function matchCards(img1, img2) {
    if (img1 === img2) { //Si las dos cartas son iguales
        matchedCard++ //Incrementa el valor de las cartas iguales en 1
        //Si el valor de los pares iguales es 10, el jugador encontró todos los pares (10*2 = 20 cartas)
        if (matchedCard == 10 && timeLeft > 0) {
            Swal.fire({
                title: '¡FELICITACIONES! Has adivinado todas las tarjetas.',
                width: 600,
                padding: '3em',
                color: '#716add',
                backdrop: `
                  rgba(0,0,123,0.4)
                  url("/images/nyan-cat.gif")
                  top left
                  no-repeat
                `
            })
            return clearInterval(timer)
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
    timeLeft = maxTime
    flips = matchedCard = 0
    cardOne = cardTwo = ""
    clearInterval(timer)
    timeTag.innerText = timeLeft
    flipsTag.innerText = flips
    disableDeck = isPlaying = false
    //Creo un array de 20 items y cada uno se repite dos veces
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    arr.sort(() => Math.random() > 0.5 ? 1 : -1) //Ordeno los elementos de la matriz al azar

    //Remueve la clase flip de todas las cartas y le pasa una imagen aleatoria a cada tarjeta
    cards.forEach((card, index) => {
        card.classList.remove("flip")
        let imgTag = card.querySelector(".back-view img")
        setTimeout(() => {
            imgTag.src = `./images/${arr[index]}.png`
        }, 500)
        card.addEventListener("click", flipCard)
    })
}

shuffleCard() //Esta función hace 2 llamados: cuando matchean todas las cartas y cuando refrescan el navegador
refreshBtn.addEventListener("click", shuffleCard)

cards.forEach(card => { //Agrego evento click a todas las cartas
    card.addEventListener("click", flipCard)
})

