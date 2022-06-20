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

let entrada = prompt("Ingresar un personaje").toUpperCase();

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

alert ("¡Acertaste! Mi personaje preferido es " + entrada)