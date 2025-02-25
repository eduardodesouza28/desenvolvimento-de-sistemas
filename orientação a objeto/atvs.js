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
    tipo: 'sedan',
    ano: 2019,
    marca: 'fiat',
    cor: 'prata',
    velocidade: 10,
    passageiros: menino.nome
}

const porpBarco = {
    ano: 2024,
    marca: 'pantanaltica',
    cor: 'azul'
}

class Veiculo {
    constructor(propCarro) {
        this.tipo = propCarro.tipo
        this.ano = propCarro.ano
        this.marca = propCarro.marca
        this.cor = propCarro.cor
        this.velocidade = propCarro.velocidade
        this.passageiros = propCarro.passageiros
    }
    acelerar = function () {
        this.velocidade += 10
    }
    freiar = function () {
        this.velocidade -= 10
    }
}

class Barco extends Veiculo {
    constructor(propCarro) {
        super(propCarro),
        this.tipo = 'barco'
        this.nós = 0
    }
    acelerar = function () {
        this.nós += 5
    }
    freiar = function () {
        this.nós -= 5
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
console.log(barco)
carro.acelerar()

