const pessoa = {
    nome: "Joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["1155555550", "1144444440"],
}

const eu = Object.assign({}, pessoa)
// ou
// const eu = {...pessoa}

eu.nome = "Mikael"
eu.idade = 19

console.log(pessoa)
console.log(eu)