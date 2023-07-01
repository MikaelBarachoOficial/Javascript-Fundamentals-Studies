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
    },
    enderecos: [
        {
            rua: "R. Joseph Climber",
            numero: 1337,
            apartamento: true,
            complemento: "ap 934",
        }
    ]
}

for (let chave in pessoa) {
    const tipo = typeof pessoa[chave]

    if (tipo != 'object' && tipo != 'function') {
    console.log(`a chave é ${chave} e seu valor é ${pessoa[chave]}`) //pessoa.chave está errado. Dará undefined
    }
    
}