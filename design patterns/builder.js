class Hamburguer {
    constructor(pao,carne,queijo,molho,salada){
        this.pao = pao
        this.carne = carne
        this.queijo = queijo
        this.molho = molho
        this.salada = salada
    }
    getBurguer(){
        console.log(`tem ${this.pao}, ${this.carne}`)
    }
}

// const burguer = new Hamburguer('trigo','costela','mussarela','molho especial','toamte')
// burguer.getBurguer()

class HamburguerBuilder {
    constructor() {
        this.pao = 'trigo';
        this.carne = 'costela';
        this.queijo = 'mussarela';
        this.molho = 'molho especial';
        this.salada = false
    }
    setPao(pao) {
        this.pao = pao
        return this
    }
    setCarne(carne) {
        this.carne = carne
        return this
    }
    setQueijo(queijo) {
        this.queijo = queijo
        return this
    }
    setMolho(molho) {
        this.molho = molho
        return this
    }
    setSalada(salada) {
        this.salada = salada
        return this
    }
    getBurguer() {
        console.log(`tem: ${this.pao}, ${this.carne}`)
    }
    build() {
        return new Hamburguer(this.pao,this.carne,this.queijo,this.molho,this.salada)
    }
}

const burguer = new HamburguerBuilder()
burguer.setSalada('alface').setCarne('patinho').build()
burguer.getBurguer()