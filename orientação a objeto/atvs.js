const veiculo  = {
    velocidade: 0,

    acelerar: function acelerar() {
        this.velocidade += 10
    },
    freiar: function freiar(){
        this.velocidade -= 5
    }
}
console.log(veiculo.velocidade)
veiculo.acelerar()
veiculo.acelerar()
veiculo.freiar()
console.log(veiculo.velocidade)