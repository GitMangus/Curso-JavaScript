/*Tipos de datos:

String "hola" 'hola' "1234"
Number 1234
Boolean (T o F)
Null  (es un dato vacío)
Undefined (no tiene dato, no está definido qué es)

Tipos de variables:

var: variable cuyo valor, al ser modificado, elimina la variable y la vuelve a crear. NO ES ÓPTIMO
let: variable que vamos a usar. Puedo cambiar el valor de la variable pero no la puedo volver a cear. FORMA ÓPTIMA
const: tipo de variable cuyo dato se mantiene constante y no puede modificarse a lo largo del código. Su nombre va en MAYUS y siempre tiene un valor

Asignación:  let numero = 5         (toda asignación es verdadera)
Comparación: let numero == 5
*/

//Si pido que el usuario ingrese un número, necesito hacer un parseo sí o sí porque el prompt me da un string siempre.
//parseFloat: me da número con coma
//parseInt: me da sólo la parte entera del número

/*
let numero = parseFloat(prompt("Ingrese un numero"))

console.log(numero)
*/

//Comparación:  == (compara si tienen el mismo valor)    === (compara si tienen el mismo tipo y valor)  UTILIZAR ESTRICTAMENTE IGUAL

/*
let nota = parseInt (prompt("Ingrese una nota"))

if (nota >=1 && nota <=5) {
    console.log ("Desaprobado")
} else if (nota === 6 || nota === 7) {
    console.log ("Aprobado con Bien")
}else if (nota === 8 || nota === 9){
    console.log ("Aprobado con Muy Bien")
} else if (nota === 10){
    console.log ("Aprobado con Sobresaliente")
} else {
    console.log ("Numero no valido")
}
*/

//Ciclos: For, while, do...while

/*for (let i = 0; i <= 100; i++){
    console.log(i)
}
*/

/*
let repetir = true
let numero1, numero2

while(repetir){
    numero1 = parseFloat(prompt("Ingrese un numero"))
    numero2 = parseFloat(prompt("Ingrese otro numero"))

if(!(isNan(numero1) || isNaN(numero2))){
    repetir = false
}
}

console.log(numero1 + numero2)
*/

/*
let numero1, numero2, operacion

do{
    numero1 = parseFloat(prompt("Ingrese un numero"))
    numero2 = parseFloat(prompt("Ingrese otro numero"))
    operacion = prompt("Ingrese una operacion (+,-,/,*)")
} while((isNan(numero1) || isNaN(numero2)))

switch(operacion) {
    case "+":
        alert(numero1 + numero2)
        break
    case "-":
        alert(numero1 - numero2)
        break
    case "/":
        alert(numero1 / numero2)
        break
    case "*":
        alert(numero1 * numero2)
        break
    default:
        alert("Operacion no valida")
        break
}
*/
//for para datos matematicos,  while para pedir datos al usuario



//Primer entrega: Adivinar mi personaje preferido de la película "El viaje de Chihiro" utilizando el ciclo While

/*let entrada = prompt("Ingresar un personaje").toUpperCase();

while (entrada != "HAKU") {
    if (entrada == "CHIHIRO"){
        alert ("Chihiro no es mi personaje preferido.")
    } else if (entrada == "YUBABA") {
        alert ("Yubaba no es mi personaje preferido.")
    } else if (entrada == "KAMAJI") {
        alert ("Kamaji no es mi personaje preferido.")
    }else if (entrada == "LIN") {
        alert ("Lin no es mi personaje preferido.")
    } else if (entrada == "ZENIBA") {
        alert ("Zeniba no es mi personaje preferido.")
    } else {
        entrada = prompt("Ingresar otro personaje")
    }
}

alert ("¡Acertaste! Mi personaje preferido es " + entrada)*/

//SIMULADOR. Devolver el signo según la fecha ingresada (sin utilizar función)

/*Del 21 de marzo al 20 de abril	Aries
Del 21 de abril al 21 de mayo	Tauro
Del 22 de mayo al 21 de junio	Géminis
Del 22 de junio al 22 de julio	Cáncer
Del 23 de julio al 23 de agosto	Leo
Del 24 de agosto al 23 de septiembre	Virgo
Del 24 de septiembre al 23 octubre	Libra
Del 24 de octubre al 22 de noviembre	Escorpión
Del 23 de noviembre al 21 de diciembre	Sagitario
Del 22 de diciembre al 20 de enero	Capricornio
Del 21 de enero al 18 de febrero	Acuario
Del 19 de febrero al 20 de marzo	Piscis*/

/*
    let dia = parseInt(prompt("Para calcular su signo por favor ingrese su día de nacimiento"))
    let mes = parseInt(prompt("Ahora ingrese su mes de nacimiento"))

    if ((dia >= 21 && mes == 3) || (dia <= 20 && mes == 4)) {
        alert ('Aries');
    } else if ((dia >= 21 && mes == 4) || (dia <= 21 && mes == 5)) {
        alert ('Tauro');
    } else if ((dia >= 22 && mes == 5) || (dia <= 21 && mes == 6)) {
        alert ('Geminis');
    } else if ((dia >= 22 && mes == 6) || (dia <= 22 && mes == 7)) {
        alert ('Cancer');
    } else if ((dia >= 23 && mes == 7) || (dia <= 23 && mes == 8)) {
        alert ('Leo');
    } else if ((dia >= 24 && mes == 8) || (dia <= 23 && mes == 9)) {
        alert ('Virgo');
    } else if ((dia >= 24 && mes == 9) || (dia <= 23 && mes == 10)) {
        alert ('Libra');
    } else if ((dia >= 24 && mes == 10) || (dia <= 22 && mes == 11)) {
        alert ('Escorpio');
    } else if ((dia >= 23 && mes == 11) || (dia <= 21 && mes == 12)) {
        alert ('Sagitario');
    } else if ((dia >= 22 && mes == 12) || (dia <= 20 && mes == 1)) {
        alert ('Capricornio');
    } else if ((dia >= 21 && mes == 1) || (dia <= 18 && mes == 2)) {
        alert ('Acuario');
    } else if ((dia >= 19 && mes == 2) || (dia <= 20 && mes == 3)) {
        alert ('Piscis');
    } else {
       alert ('No pudimos resolver tu consulta. Intenta nuevamente')
    }*/

//SIMULADOR. Devolver el signo según la fecha ingresada (utilizando una función)
/*
let dia = parseInt(prompt("Para calcular su signo por favor ingrese su día de nacimiento:"))
let mes = parseInt(prompt("Ahora ingrese su mes de nacimiento"))
function calcularSigno(dia, mes) {

    switch (mes) {
        case 1:
            if (dia <= 20) {
                signo = "Su signo es Capricornio";
            } else {
                signo = "Su signo es Acuario";
            }
            break;
        case 2:
            if (dia <= 18) {
                signo = "Su signo es Acuario";
            } else {
                signo = "Su signo es Piscis";
            }
            break;
        case 3:
            if (dia <= 20) {
                signo = "Su signo es Piscis";
            } else {
                signo = "Su signo es Aries";
            }
            break;
        case 4:
            if (dia <= 20) {
                signo = "Su signo es Aries";
            } else {
                signo = "Su signo es Tauro";
            }
            break;
        case 5:
            if (dia <= 21) {
                signo = "Su signo es Tauro";
            } else {
                signo = "Su signo es Géminis";
            }
            break;
        case 6:
            if (dia <= 21) {
                signo = "Su signo es Géminis";
            } else {
                signo = "Su signo es Cáncer";
            }
            break;
        case 7:
            if (dia <= 22) {
                signo = "Su signo es Cáncer";
            } else {
                signo = "Su signo es Leo";
            }
            break;
        case 8:
            if (dia <= 23) {
                signo = "Su signo es Leo";
            } else {
                signo = "Su signo es Virgo";
            }
            break;
        case 9:
            if (dia <= 23) {
                signo = "Su signo es Virgo";
            } else {
                signo = "Su signo es Libra";
            }
            break;
        case 10:
            if (dia <= 23) {
                signo = "Su signo es Libra";
            } else {
                signo = "Su signo es Escorpio";
            }
            break;
        case 11:
            if (dia <= 22) {
                signo = "Su signo es Escorpio";
            } else {
                signo = "Su signo es Sagitario";
            }
            break;
        case 12:
            if (dia <= 21) {
                signo = "Su signo es Sagitario";
            } else {
                signo = "Su signo es Capricornio";
            }
            break;
        default:
            alert ("No pudimos realizar tu consulta")
    }
    alert(signo);
}

calcularSigno(dia, mes)
*/

//Objeto  (crearlos con const y no con let por temas de seguridad) : esto sería un objeto Literal o Real (no se creó mediante clase o función constructora)
/*
const gato = {
    nombre: "Mérida",
    edad: 4,
    peso: 3,
    raza: "Gato común europeo"
}

console.log(gato)  //Veo todas las propiedades del objeto gato
console.log(gato.raza)    //Utilizar el atributo . para visualizar una propiedad del objeto llamado
console.log(gato["raza"])  //Otra forma de visualizar una propiedad
console.log(gato.raza, gato.nombre)  //Para ver más de una propiedad
console.table(gato)   //Veo todas las propiedades del objeto gato en forma de tabla

gato.color = "blanco"   //Creo una nueva propiedad
console.log(gato)

//Funciones constructoras para crear objetos con las mismas propiedades pero distintos valores

function Gato(nombre, edad, peso, raza) {
    this.nombre = nombre
    this.edad = edad
    this.peso = peso
    this.raza = raza
    this.comunicarse = () => console.log(`Meow, soy ${this.nombre}`)   //Método
}

const gato1 = new Gato("Bob", 5, 4, "Gato común europeo") //Creo un objeto nuevo gato1
const gato2 = new Gato("Fígaro", 6, 4, "Gato común europeo")

//Método: acción propia del objeto
// Llamo al objeto p/ejecutar su método

gato1.comunicarse()
gato2.comunicarse()

//CLASES: se utilizan para crear objetos de una forma más limpia (diferencio propiedades de métodos) USAR ESTA FORMA

class Producto {
    constructor(id, nombre, marca, precio, stock) {
        this.id = id
        this.nombre = nombre
        this.marca = marca
        this.precio = precio
        this.stock = stock
    }
    //Ingresar 1.cantidadAumento   (Acá va el método)
    aumentarPrecio(porcentajeAumento = 1) {   //El 1 es un valor por defecto para que no me salga undefined  (Valor por defecto de la función, valor neutro)
        this.precio *= porcentajeAumento   //this.precio = this.precio * porcentajeAumento   (esto es lo mismo, la primer forma simplifica código "Sintaxis Sugar")
    }

    disminuirStock(nuevoStock = 0) {
        this.stock -= nuevoStock
    }

    aumentarStock(nuevoStock = 0) {
        this.stock += nuevoStock
    }
}

const producto1 = new Producto(1, "Yerba", "La yerbita", 100, 10)
console.log(producto1)
console.log(producto1.precio)
producto1.aumentarPrecio(1.10)
console.log(producto1.precio)
producto1.disminuirStock(5)
console.log(producto1.stock)
*/

/*
//ARRAY: tipo de dato utilizado para almacenar valores en forma de listas. El primer elemento tiene un índice 0 y el último n-1

const IVA = 1.21 //Con mayúscula porque es una variable que no se modifica nunca
const array = [] //Con minúscula porque es una variable que se modifica -- Array vacío, ej en un carrito de compras al inicio
const mochila = ["libros", "cartuchera", "cuadernillo", "billetera", "celular"]

console.log(mochila) //Accedo a los elementos del array y en la consola me muestra también su índice y longitud
console.log(mochila[3]) //Accedo a un elemento del array según su índice, "billetera"
console.log(mochila[10]) //Debería tirar error porque no existe el elemento en esa posición, sin embargo Js me tira undefined
mochila[2] = "botellita" //Reemplazo el valor del elemento en esa posición
console.log(mochila[2])
mochila[10] = "cuadernillo" //Puedo crear un espacio nuevo en la posición que yo quiera y se van a crear espacios vacíos entre el último elemento que coloqué al principio y el elemento que acabo de agregar
console.log(mochila) //Ahora la longitud de mi array aumentó a 11

//Para recorrer un array utilizo un ciclo for. Simplemente es para mostrar todos los elementos del mismo, uno por uno.

for (let i = 0; i < 11; i++) {
    console.log(mochila[i]) //i=0,1,...10
}

console.table(mochila) //Mejor visualizado con una tabla

//Recorro un array en su totalidad cuya longitud puede variar, ej en un carrito que no sé cuántos productos pueda llegar a meter

for (let i = 0; i < mochila.length; i++) {
    console.log(mochila[i])
}
*/

//Métodos de arrays
/*
const carrito = []

carrito.push("remera")   //.push agrega un elemento al final del arreglo
console.log(carrito)
carrito.unshift("buzo")  //.unshift agrega un elemento al comienzo del arreglo. Genera un gasto de recursos al hacer que todos los demás elementos existentes cambien su índice para "moverse" de lugar
console.log(carrito)
carrito.shift() // .shift elimina el primer elemento del array
console.log(carrito)
carrito.pop() //.pop elimina el último elemento del array
console.log(carrito)
carrito.push("remera")
carrito.push("buzo")
carrito.push("pantalón")          
console.log(carrito)   // ["remerea,"buzo","pantalón"]
carrito.splice(1,1)   //Elimina uno o más elementos de un array dada su posición. Me sirve cuando quiero eliminar algún elemento del medio y me ahorro tener que borrar de a uno con los métodos anteriores
console.log(carrito)  //Quiero eliminar solamente el elemento buzo que tiene índice 1. (primer número indica índice, segundo número indica la cant.de elementos a eliminar desde esa posición)
*/
//Buscador para que el usuario pueda borrar datos del array

//const carrito = ["remera", "buzo", "pantalón", "campera"]
/*
let productoEliminar = prompt("Ingrese el producto a eliminar").toLowerCase()

let indice = carrito.indexOf(productoEliminar)  //Devuelve el índice del elemento o -1 si no lo encuentra

if (indice >= 0) {
    carrito.splice(indice, 1) //Elimino según el índice del producto ingresado y elimino solamente ese producto
} else {
    alert("Producto no encontrado")
}

console.log(carrito)*/
//console.log(carrito.join("-"))


//Método concat combina dos arrays y los junta 
/*
const perros = ["Timoteo", "Pocha"]
const gatos = ["Mérida", "Bobby", "Duquesa", "Sansa", "Oliver", "Oscurita", "Clarita", "Sawa", "Kitty", "Kírara"]

const mascotas = perros.concat(gatos)  //A perros le agrego gatos, por eso aparecen los gatos al final
console.log(mascotas)

//Quiero consultar el array sin modificarlo: utilizo slice - se maneja con índice a consultar, índice final no incluído. Ahora quiero ver a Duquesa, Sansa y Oliver (recordar que hice un concat previamente)
console.log(mascotas.slice(4, 7))

//Para saber si un elemento está incluído o no en un arreglo utilizo includes(). Devuelve true o false
console.log(mascotas.includes("Mérida"))  //Devuelve true
console.log(mascotas.includes("Leia")) //Devuelve false

//Utilizar el método slice para hacer copias de arrays y luego reverse para invertir el orden de los elementos ya que reverse es un método destructivo (modifica los índices)
//const array1 = array2.slice(1,5)   De esta forma

class Alimento {
    constructor(id, nombre, marca, precio, stock) {
        this.id = id
        this.nombre = nombre
        this.marca = marca
        this.precio = precio
        this.stock = stock
    }

    aumentarPrecio(porcentaje) {       //Método
        this.precio *= porcentaje
    }
}

const alimento1 = new Alimento(1, "Fideos", "Matarazzo", 300, 10)
const alimento2 = new Alimento(2, "Arroz", "Ala", 200, 15)
const alimento3 = new Alimento(3, "Lentejas", "Lentejitas", 100, 20)

const alimentos = [alimento1, alimento2, alimento3]   //Tengo mis productos guardados en un array de alimentos

console.table(alimentos)    //Visualmente mis alimentos se ven ordenados en una tabla como en una base de datos

//Para recorrer un array de objetos se utiliza un for...of   (por cada producto del array hace un ciclo for)

/*for (let alimentoArray of alimentos) {
    console.log(alimentoArray)
}*/

/*
for (let alimentoArray of alimentos) {
    alimentoArray.aumentarPrecio(1.20)   //A cada elemento del array le aumento el precio un 20%
}

console.log(alimentos)
*/


//Entrega de ARRAYS

//Creo un objeto Persona con sus propiedades y un método
/*
class Persona {
    constructor (nombre, apellido, edad, sexo, tipoFamiliar){
    this.nombre= nombre
    this.apellido = apellido
    this.edad = edad
    this.sexo = sexo
    this.tipoFamiliar = tipoFamiliar
    }
    
    //Método saludar
    
    saludar = () => console.log (`Hola, soy el/la ${this.tipoFamiliar} de Flor`)
    }
    
    //Creo los objetos familiares con sus características
    
    const persona1 = new Persona ("Pepe", "Pérez", 60 , "masculino" , "padre")
    const persona2 = new Persona ("Pepa", "Pérez", 50 , "femenino" , "madre")
    const persona3 = new Persona ("Pepita", "Pérez", 20 , "femenino" , "hermana")
    const persona4 = new Persona ("Pepito", "Pérez", 15 , "masculino" , "hermano")
    
    //Veo todo en consola
    
    console.log(persona1)
    console.log(persona2)
    console.log(persona3)
    console.log(persona4)
    persona1.saludar()
    persona2.saludar()
    persona3.saludar()
    persona4.saludar()
    
    //Creo un array de objetos
    
    const familiares = [persona1, persona2, persona3, persona4]
                        //0         1         2         3   (índices)
    
    //Accedo a todos los elementos del array
    console.log (familiares)
    
    //Accedo al elemento en la segunda posición (índice 1)
    console.log(familiares[1])
    
    //Creo un ciclo para mostrar todos los familiares 
    
    for (let i = 0; i < familiares.length; i++) {
        console.log(familiares[i]) 
    }
    
    //Utilizo el método .push para agregar un familiar (objeto)
    
    familiares.push({nombre:"Lala", apellido:"Pérez", edad: 5, sexo: "femenino" , tipoFamiliar: "hermana"})
    
    //Muestro en consola una tabla con toda la info de los familiares
    console.table(familiares)
*/

//After de Pokemon
/*
const pikachu1 = new Pikachu("Pika pika", "Eléctrico", 22, 10)
const charmander1 = new Charmander("Fueguito", "Fuego", 20, 8)
const eevee1 = new Eevee("Cual", "Normal", 12, 7)

pikachu1.impactrueno(charmander1) //Fueguito tiene 10 de vida
charmander1.llamarada(pikachu1) //Pika pika tiene 14 de vida
pikachu1.impactrueno(charmander1) //Fueguito perdió
eevee1.tackle(pikachu1) //Pika pika tiene 7 de vida
pikachu1.impactrueno(eevee1) //Cual tiene 2 de vida
eevee1.tackle(pikachu1) //Pika pika perdió
*/

//Funciones de orden superior: no sé qué hacen internamente. Me importa qué piden y qué retornan (output y/o función)

/*function asignarOperacion (operacion) {  //No es lo más óptimo
    if (operacion == "+"){
        return (a,b) => a + b
    } else if (operacion == "-"){
        return (a,b) => a - b
    }
}

const suma = asignarOperacion ("+")
const resta = asignarOperacion ("-")

console.log(suma(5,10))
console.log(resta(5,10))


//Función como parámetro: me ahorro líneas de código y lo hago más simple
const suma = (a,b) => a + b

function mostrarSuma (resultado){
    console.log(resultado)
}

mostrarSuma(suma(5,10)) // Acá tengo una función dentro de los parámetros de la función mostrarSuma

function mostrarReceta(ingrediente1, ingrediente2, ingrediente3){
    console.log(`Se necesitan 250grs de ${ingrediente1}`)
    console.log(`Se necesitan 500grs de ${ingrediente2}`)
    console.log(`Se necesitan 150grs de ${ingrediente3}`)
    console.log(`Juntar todos los ingredientes en un recipiente y hornear por 50min`)
}

mostrarReceta(prompt("Ingrese el ingrediente 1"), prompt("Ingrese el ingrediente 2"), prompt("Ingrese el ingrediente 3"))*/
/*
class Animal {                 //Creo una clase
    constructor(id, nombre, especie, color, peso) {
        this.id = id
        this.nombre = nombre
        this.especie = especie
        this.color = color
        this.peso = peso
    }
}

const animal1 = new Animal(1, "Firulais", "perro", "marrón", 15)        //Creo varios objetos animales
const animal2 = new Animal(2, "Manuelita", "tortuga", "verde", 5)
const animal3 = new Animal(3, "Flipper", "delfín", "gris", 200)
const animal4 = new Animal(4, "Simba", "león", "marrón", 100)

const animales = [animal1, animal2, animal3, animal4]   //Guardo los objetos en un array

//Métodos de arrays

//forEach() es un reemplazo del for...of. Sirve para mostrar diversos valores, diversos cálculos. Es asincrónico y más óptimo.
animales.forEach(animal => {
    console.table(animal)
})

//Puedo consultar por el objeto y el índice al mismo tiempo de la siguiente manera: animales.forEach(animal, indice) => {console.log(indice)  console.log(animal)})

//find() dada una característica me devuelve el primer objeto que cumpla con la condición que yo le indico. (Itera y entrega lo primero donde haya una coincidencia) Find es internamente un while. Es un buscador que se utliza mucho en sitios web.

console.log(animales.find(animal => animal.nombre === "Manuelita"))
console.log(animales.find(animal => animal.peso > 20))
console.log(animales.find(animal => animal.peso >20 && animal.nombre === "Simba"))  //Con que una de las opciones sea V, me da falso. Tiene que cumplir las dos para que me retorne a Simba por el operador lógico &&
console.log(animales.find(animal => animal.peso >300 && animal.nombre === "Simba")) //Si no encuentra el objeto me devuelve undefined

//filter() devuelve todos los objetos que cumplan con la condición. Si ninguno cumple con la condición retorna un array vacío

console.log(animales.filter(animal => animal.peso > 20))

//some() si existe un objeto que cumple con la condición retorna True, si no existe retorna False

console.log(animales.some(animal => animal.color === "rojo"))

//Map() genera un nuevo array con las condiciones que yo agrego como parámetros. Modifico el array, retorno un nuevo array. No modifico el original.

const animalesPeso = animales.map(animal => animal = animal.peso) //Me devuelve un array con todos los pesos únicamente. CUIDADO! Estoy asignando un valor. Lo termino guardando en un nuevo array animalesPeso (en este caso)

console.log(animalesPeso)

//reduce(): simplificación de varios números a un solo valor, en una línea

console.log(animalesPeso.reduce((acumulador, siguiente) => acumulador + siguiente, 0))  //Suma, valor inicial de acumulador igual a 0
console.log(animalesPeso.reduce((acumulador, siguiente) => acumulador * siguiente, 1))  //Multiplicación, valor inicial de acumulador igual a 1

//sort() ordenar un array según un criterio. (Los nombres, por ej, se ordenan alfabéticamente. Los números pueden irdenarse de menor a mayor, etc). Es un método destructivo!! Modifico el array original.

const ordenamientoMenorAMayor = console.log(animalesPeso.sort((num1,num2) => num1 - num2))
const ordenamientoMayorAMenor = console.log(animalesPeso.sort((num1,num2) => num2 - num1))

//Objeto Math (para cálculos matemáticos)

console.log(Math.pow(5,3)) //Exponencia
console.log(Math.round(5.5)) //Redondeo al entero más cercano
*/



