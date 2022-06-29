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

function Gato (nombre, edad, peso, raza) {
    this.nombre = nombre
    this.edad = edad
    this. peso = peso
    this.raza = raza
    this.comunicarse = () => console.log(`Meow, soy ${this.nombre}`)   //Método
}

const gato1 = new Gato ("Bob", 5, 4, "Gato común europeo") //Creo un objeto nuevo gato1
const gato2 = new Gato ("Fígaro", 6, 4, "Gato común europeo")

//Método: acción propia del objeto
// Llamo al objeto p/ejecutar su método

gato1.comunicarse()
gato2.comunicarse()

//CLASES: se utilizan para crear objetos de una forma más limpia (diferencio propiedades de métodos) USAR ESTA FORMA

class Producto {
    constructor (id, nombre, marca, precio, stock){
        this.id = id
        this.nombre = nombre
        this.marca = marca
        this.precio = precio
        this.stock = stock
    }
    //Ingresar 1.cantidadAumento   (Acá va el método)
    aumentarPrecio(porcentajeAumento = 1){   //El 1 es un valor por defecto para que no me salga undefined  (Valor por defecto de la función, valor neutro)
        this.precio *= porcentajeAumento   //this.precio = this.precio * porcentajeAumento   (esto es lo mismo, la primer forma simplifica código "Sintaxis Sugar")
    }

    disminuirStock(nuevoStock = 0){
        this.stock -= nuevoStock
    }

    aumentarStock(nuevoStock = 0){
        this.stock +=nuevoStock
    }
}

const producto1 = new Producto (1, "Yerba", "La yerbita", 100, 10)
console.log (producto1)
console.log (producto1.precio)
producto1.aumentarPrecio(1.10)
console.log (producto1.precio)
producto1.disminuirStock(5)
console.log (producto1.stock)