class FerramentaPagamentoAntiga {
    processoPagamento(quantia){
        console.log("pago " + quantia)
    }
}
class NovaVersaoAPIPagamento {
    pagar(detalhamentoPagamento){
        console.log("pago no novo sistema " + detalhamentoPagamento.valor)
    }
}
class AdptadorPagamento {
    constructor(NovaVersaoAPIPagamento){
        this.NovaVersaoAPIPagamento = NovaVersaoAPIPagamento
    }

    processoPagamento(quantia){
        this.NovaVersaoAPIPagamento.pagar({valor: quantia})
    }
}

// const pagamento = new FerramentaPagamentoAntiga()
// pagamento.processoPagamento(100)

const novoPagamento = new NovaVersaoAPIPagamento()
const adptador = new AdptadorPagamento(novoPagamento)
adptador.processoPagamento(100)
