class Pokemon {
    constructor(nombre, tipo, vidas) {
        this.nombre = nombre
        this.tipo = tipo
        this.vidas = vidas
        this.nivel = 1 //no se pasa como param, es el nivel inicial
    }

    recibirDaño(dañoRecibido) {
        this.vidas -= dañoRecibido
        if (this.vidas > 0) {
            console.log(`${this.nombre} sigue vivo con ${this.vidas} de vida y quiere seguir peleando`)
        } else {
            console.log(`${this.nombre} se fue a dormir con los Magikarp`)
        }
    }
}

//Relación "es un"
class Pikachu extends Pokemon {   //Extends me indica que la clase Pikachu es una extensión de Pokemon (Pikachu es un Pokemon pero un Pokemon no necessariamente es un Pikachu)
    constructor(nombre, tipo, vidas, dañoImpactrueno){
    super(nombre, tipo, vidas)    //con super llamo a mi constructor padre
        this.dañoImpactrueno = dañoImpactrueno
    }

    impactrueno(pokemonAtacado) {
        console.log(`${this.nombre} está lanzando impactrueno con un daño de ${this.dañoImpactrueno}`)
        pokemonAtacado.recibirDaño(this.dañoImpactrueno)   //Estoy ejecutando un método de la clase Pokemon dentro del método de la clase Pikachu
    }
}

class Charmander extends Pokemon {
    constructor(nombre, tipo, vidas, dañoLlamarada){
    super(nombre, tipo, vidas) 
        this.dañoLlamarada = dañoLlamarada
    }

    llamarada(pokemonAtacado) {
        console.log(`${this.nombre} está lanzando llamarada con un daño de ${this.dañoLlamarada}`)
        pokemonAtacado.recibirDaño(this.dañoLlamarada)   //Estoy ejecutando un método de la clase Pokemon dentro del método de la clase Pikachu
    }
}

class Eevee extends Pokemon {
    constructor(nombre, tipo, vidas, dañoTackle){
    super(nombre, tipo, vidas) 
        this.dañoTackle = dañoTackle
    }

    tackle(pokemonAtacado) {
        console.log(`${this.nombre} está lanzando tackle con un daño de ${this.dañoTackle}`)
        pokemonAtacado.recibirDaño(this.dañoTackle)   //Estoy ejecutando un método de la clase Pokemon dentro del método de la clase Pikachu
    }
}