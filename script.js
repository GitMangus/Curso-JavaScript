/*const cards = document.querySelectorAll(".card");

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
})*/



//Fetch: es una promesa mediante la cual puedo consultar distintas APIs y traer info a mi código

//fetch("https://criptoya.com/api/dolar") //Como 1er parámetro va la url. Envío una petición de tipo GET
//.then((response) => response.json()) //Cuando me llegue la info (es una promesa) hago una conversión a formato json para poder utilizarlos. Esto va a llevar determinado tiempo dependiendo de la cant de datos
//.then((datos) => console.log(datos)) //Los datos convertidos (datos=parámetro) los muestro en la consola
//.catch(error => console.error(error)) //Si mi url por ej tiene algún error, mediante esta forma puedo verlo
//ESTO ME DEVUELVE UN OBJETO

//Forma de pedir información sin API KEY
const divDolar = document.getElementById('divDolar') //Consulto el divDolar

fetch("https://criptoya.com/api/dolar") //Asincronía 1: TRAER LOS DATOS
    .then((response) => response.json()) //Asincronía 2: CONVERTIR LOS DATOS
    .then(({ oficial, solidario, blue, ccb }) => {//Hago una desestructuración en los parámetros de la función (voy a quedarme con ciertos valores que me interesan del objeto). Consulto los valores y los muestro en el HTML
        divDolar.innerHTML = ` 
            <p>Valores del dolar</p>
            </br>
            <p>Oficial: $${oficial} </p>
            <p>Solidario: $${solidario} </p>
            <p>Blue: $${blue} </p>
            <p>CCB: $${ccb} </p>
            `
        //console.log(oficial, solidario, blue) //Acá tengo datos que puedo utilizar en mi código en el DOM
    })

setInterval(() => { //Aplico in intervalo para que los valores se actualicen cada determinado tiempo
    fetch("https://criptoya.com/api/dolar")
        .then(response => response.json())
        .then(({ oficial, solidario, blue, ccb }) => {
            divDolar.innerHTML = `
            <p>Oficial: $${oficial} </p>
            <p>Solidario: $${solidario} </p>
            <p>Blue: $${blue} </p>
            <p>CCB: $${ccb} </p>
        `
        })
}, 30000)

//Forma de pedir información mediante una clave (API KEY)

const API_KEY = "bfd1b980aa5416c251b43fb2f1ba6c22"; //API KEY del profe

const divClima = document.getElementById('divClima')

//Tengo que hacer 2 fetch. Uno para obtener la longitud y latitud del lugar que quiero solicitar y el segundo para obtener el clima del mismo.

fetch(`http://api.openweathermap.org/geo/1.0/direct?q="Bariloche","arg"&appid=${API_KEY}`) //Puedo crear dos let o input para que mi usuario me ingrese esta info
    .then(response => response.json())
    .then(datos => {
        let { lat, lon, name: nombre, country: pais, state: provincia } = datos[0] //Destructuración de datos en la posición 0

        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=sp `) //Le puedo especificar el idioma 
            .then(response => response.json())
            .then(({ main, weather }) => { //Desestructuración y me quedo con main y clima
                divClima.innerHTML = `
                    <p>Info sobre Bariloche</p>
                    </br>
                    <p>Ciudad: ${nombre} </p>
                    <p>Provincia: ${provincia} </p>
                    <p>Pais: ${pais} </p>
                    <p>Temperatura: ${main.temp} °C</p>
                    <p>Sensacion Termica: ${main.feels_like} °C</p>
                    <p>Presion: ${main.pressure} hPa</p>
                    <p>Humedad: ${main.humidity}%</p>
                    <p>Tiempo: ${weather[0].description} </p> 
                    ` //Weather es un array, utilizo la posición 0
            })
    })

//API STAR WARS

const divStarWars = document.getElementById('divStarWars')

fetch("https://swapi.dev/api/people/5/") //Me trae la info de Leia
    .then((response) => response.json())
    .then(({ name, height, gender }) => {
        divStarWars.innerHTML = `
        <p>Este es un personaje de Star Wars</p>
        </br>
        <p>Nombre: ${name} </p>
        <p>Altura: ${height} </p>
        <p>Genéro: ${gender} </p>
    `
    })
