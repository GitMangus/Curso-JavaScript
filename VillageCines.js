/*

//Creo la clase Película con todas sus propiedades
class Pelicula {
    constructor(id, nombre, idioma, precio) {
        this.id = id
        this.nombre = nombre
        this.idioma = idioma
        this.precio = precio
    }
}

//Creo los objetos películas

const peli1 = new Pelicula(1, "THOR: AMOR Y TRUENO", "subtitulado", 1040)
const peli2 = new Pelicula(2, "MINIONS: NACE UN VILLANO", "español", 1040)
const peli3 = new Pelicula(3, "LIGHTYEAR", "español", 1040)
const peli4 = new Pelicula(4, "JURASSIC WORLD: DOMINIO", "español", 1040)
const peli5 = new Pelicula(5, "TOP GUN: MAVERICK", "subtitulado", 1040)
const peli6 = new Pelicula(6, "DOCTOR STRANGE EN EL MULTIVERSO DE LA LOCURA", "subtitulado", 1040)
const peli7 = new Pelicula(7, "SONIC LA PELICULA", "español", 1040)

//Creo un array de los objetos películas

const peliculas = [peli1, peli2, peli3, peli4, peli5, peli6, peli7]

//Creo un array con cupones a aplicar cuando se haga una compra

const cupones = [
    { nombre: "VILLAGECINES", apply: false }  //apply:false porque no se aplica todavía el cupon
]

//Creo mi carrito vacío

const carrito = []

class PeliculaCarrito {
    constructor(objeto, cantidad) {
        this.id = objeto.id
        this.nombre = objeto.nombre
        this.idioma = objeto.idioma
        this.precio = objeto.precio
        this.cantidad = cantidad
    }
}

//Buscador de películas en la página

const buscadorPeliculas = (peli) => {
    const peliculasEncontradas = peliculas.filter(p => p.nombre.includes(peli)) //Filtro de películas y lo almaceno en la variable
    if (peliculasEncontradas.length == 0){
        return "La película especificada no se encuentra en la página"
    }

    return peliculasEncontradas
}

//Función para agregar películas al carrito
const agregarPeliACarrito = (id, cantidad = 1) => {
    const peli = peliculas.find(p => p.id == id)   //p = película, con find busco si existe la película
    if (!peli) {
        return "La película no existe"
    }

    const peliCarrito = carrito.find(p => p.id == id)
    if (peliCarrito) {
        peliCarrito.cantidad += cantidad
    } else {
        carrito.push((new PeliculaCarrito(peli, cantidad)))    //Agrego pelis al carrito
    }

    return carrito
}

//Método para eliminar una peli del carrito

const eliminarPeliDelCarrito = (id, cantidad = 1) => {
    const peli = carrito.find(p => p.id == id)
    if (!peli) {
        return "La película no existe en el carrito"
    }

    peli.cantidad -= cantidad

    if (peli.cantidad < 1) {
        const index = carrito.indexOf(p => p.id == id)
        carrito.splice(index - 1, 1)
        console.log(`Película ${peli.nombre} eliminada del carrito`)
    }

    return carrito
}

//Agrego cupon de descuento

const agregarCupon = (cupon) => {
    const cuponBuscar = cupones.find(c => c.nombre == cupon && !c.apply)
    if (!cuponBuscar) {
        return "El cupon no es correcto"         //En caso de no encontrarse el cupon, sale de la función
    }

    cuponBuscar.apply = true

    carrito.forEach((p) => p.precio = p.precio * 0.50)   //Aplico el descuento a todas las películas almacenados en el carrito

    return carrito
}

//Cálculo del precio Total de la compra

const precioTotal = () => {
    const suma = carrito.reduce((suma, p) => suma + (p.precio * p.cantidad), 0)
    return `Total: ${suma}`
}


//Visualizaciones por consola

const inputPeli = prompt ("Ingrese el nombre la película que desea buscar").toUpperCase()
console.table(buscadorPeliculas(inputPeli))
console.table(agregarPeliACarrito(1, 2)) //Agrego a Thor para 2 personas
//console.table(eliminarPeliDelCarrito(1, 1)) //Elimino 1 
//console.table(eliminarPeliDelCarrito(8, 1)) //No existe esa peli en el carrito, me tira el msj de error
const cupon = prompt("Ingrese su cupon de descuento").toUpperCase()
console.table(agregarCupon(cupon))
console.table(precioTotal())

*/

//Entrega DOM

const peliculas = [
    { id: 1, nombre: "THOR: AMOR Y TRUENO", idioma: "subtitulado", img: "thor.webp", precio: 1040 },
    { id: 2, nombre: "MINIONS: NACE UN VILLANO", idioma: "español", img: "minions.jpg", precio: 1040 },
    { id: 3, nombre: "LIGHTYEAR", idioma: "español", img: "lightyear.webp", precio: 1040 },
    { id: 4, nombre: "JURASSIC WORLD: DOMINIO", idioma: "español", img: "jurassic.jpg", precio: 1040 },
    { id: 5, nombre: "TOP GUN: MAVERICK", idioma: "subtitulado", img: "topGun.jpg", precio: 1040 },
    { id: 6, nombre: "DOCTOR STRANGE EN EL MULTIVERSO DE LA LOCURA", idioma: "subtitulado", img: "doctorStrange.jpg", precio: 1040 },
    { id: 7, nombre: "SONIC LA PELICULA", idioma: "español", img: "sonic.jpg", precio: 1040 }
]

const titulo = document.getElementById("titulo").innerHTML  //Consulto el elemento
console.log(titulo)

document.getElementById("titulo").innerHTML = "<h2>Village Cines</h2>" //Reemplazo el contenido (asigno otro valor en este caso)
document.getElementById("titulo").innerHTML += "<h4>Películas</h4>" //Agrego otro elemento

const info = document.getElementById("info") //Accedo a mi otro elemento div

info.classList.add("row", "row-cols-1", "row-cols-md-3", "g-4") //Creo el atributo class y le agrego clases de Bootstrap
console.log(info)

peliculas.forEach(peli => {  //Hago un recorrido de mi array peliculas y accedo a la propiedad de cada objeto
    const fila = document.createElement('div')  //Creo un div
    fila.classList.add("col")
    fila.innerHTML = `
    <div class="card h-100">
        <img src="img/${peli.img}" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${peli.nombre}</h5>
        <p class="card-text">${peli.idioma}</p>
    </div>
    `
    info.appendChild(fila)
})

const navegacion = document.getElementById("lista")
const item = document.querySelector("#lista .nav-item") //Accedo al primer elemento que cumpla con lo que especifico dentro de los paréntesis. Utilizo los selectores CSS
navegacion.removeChild(item)  //Remueve el elemento hijo de navegacion

//Creo una tabla y le agrego las películas

const listaPeliculas = document.querySelectorAll("#tabla tbody")
console.log(listaPeliculas)

peliculas.map(pel => {
    const listaPeliculas = document.querySelector("#tabla tbody")
    const row = document.createElement('tr')
    row.innerHTML = `
    <td>${pel.id}</td>
    <td>${pel.nombre}</td>
    <td>${pel.precio}</td>
    `
    listaPeliculas.appendChild(row)
})

