const pessoa = {
    nome: "Joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["1155555550", "1144444440"],
    saldo: 3000,
    efetuaPagamento: function (valorDaCompra) {
        if (valorDaCompra > this.saldo){
            console.log("saldo insuficiente")
        } else {
            this.saldo -= valorDaCompra
            console.log(`Compra efetuada. Novo saldo: ${this.saldo}`)
        }
    }
}

pessoa.efetuaPagamento(200)

pessoa.efetuaPagamento(2850)