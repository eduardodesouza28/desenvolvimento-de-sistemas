class Pessoa {
    constructor(nome, dt_nsc) {
        this.nome = nome,
            this.dt_nsc = dt_nsc
    }

}

const menino = new Pessoa(
    'luiz',
    '01/01/2001'
)

const propCarro = {
    tipo: 'carro',
    ano: 2019,
    marca: 'fiat',
    cor: 'prata',
    velocidade: 0,
    passageiros: menino.nome
}

const porpBarco = {
    ano: 2024,
    marca: 'pantanaltica',
    cor: 'azul'
}

class Veiculo {
    #velocidade
    constructor(propCarro) {
        this.tipo = propCarro.tipo
        this.ano = propCarro.ano
        this.marca = propCarro.marca
        this.cor = propCarro.cor
        this.#velocidade = propCarro.velocidade
        this.passageiros = propCarro.passageiros
    }
    acelerar = function () {
        this.#velocidade += 10
    }
    freiar = function () {
        this.#velocidade -= 10
    }
    get_vl = function() {
        return(this.#velocidade)
    }
}

class Barco extends Veiculo {
    #noz
    constructor(propCarro) {
        super(propCarro),
        this.tipo = 'barco'
        this.#noz = 0
    }
    acelerar = function () {
        this.#noz += 5
    }
    freiar = function () {
        this.#noz -= 5
    }
    get_vl = function() {
        return(this.#noz)
    }
}

const carro = new Veiculo(
    propCarro
)
const barco = new Barco(
    porpBarco,

)

for (i = 0; i < 3; i++) {
    barco.acelerar()
}
barco.freiar()
console.log(carro)
carro.acelerar()
console.log(carro.get_vl())

