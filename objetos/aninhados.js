const pessoa = {
    nome: "Joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["115555550", "1144444440"], 
}

pessoa.enderecos = [
    {
        rua: "R. Joseph Climber",
        numero: 1337,
        apartamento: true,
        complemento: "ap 934",
    }
]

pessoa.enderecos.push({
    rua: "R. Joseph Ladder",
    numero: 404,
    apartamento: false,
})

console.log(pessoa.enderecos)

const apenasApartamentos = pessoa.enderecos.filter(endereco => endereco.apartamento === true)

console.log(apenasApartamentos) 