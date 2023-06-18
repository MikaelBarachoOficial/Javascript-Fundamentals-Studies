const numerosPares = [2, 4, 6]
const numerosImpares = [1, 3, 5]

// "..." === Spread Operator
numeros = [...numerosPares, ...numerosImpares]
 
console.log(numeros)

// -------------------
const [num1, num2, ...outrosNumeros] = [1, 2, 3, 4, 5, 6,  7, 8, 9, 0]

console.log(num1)
console.log(num2)
console.log(outrosNumeros)

// -------------------
const pessoa = {
    nome: 'Julia',
    idade: 25
}

const pessoaComTelefone = {
    ...pessoa,
    telefone: 8125546554
}

console.log(pessoa)
console.log(pessoaComTelefone)

var nome = pessoa.nome
console.log(nome)              
//ou
var { nome } = pessoa
console.log(nome)

var {idade} = pessoa
console.log(idade)

var { telefone } = pessoaComTelefone
console.log(telefone)
 
// ---------------------

function imprimeDados ({nome, idade}) {
    //const {nome, idade} = dados
    console.log(nome, idade)
}

imprimeDados(pessoaComTelefone)