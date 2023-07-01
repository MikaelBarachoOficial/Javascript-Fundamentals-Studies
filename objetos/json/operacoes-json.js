const dados = require('./cliente.json')

console.log(dados)
console.log(`Seu tipo é: ${typeof dados}`)

const dadosEmString = JSON.stringify(dados)

console.log(dadosEmString)
console.log(typeof dadosEmString)

const dadosEmObjeto = JSON.parse(dadosEmString)

console.log(dadosEmObjeto)
console.log(typeof dadosEmObjeto)