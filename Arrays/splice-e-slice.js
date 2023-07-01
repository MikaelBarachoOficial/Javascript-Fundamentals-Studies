const nomes = ["João", "Ana", "Caio", "Lara", "Marjorie", "Leo"]
console.log(nomes)

// nomes.splice(1, 2)
// nomes.push('Rodrigo')
// console.log(nomes)

nomes.splice(1, 2, 'Rodrigo', 'Poliana Abrarikovisk', 'novato', 'novata', 'luna', 'mikaela Abraristskova', 'lumena', 'bufallo')
console.log(nomes)
console.log(nomes[3])

console.log('Dividindo a turma:')

const metadeDaSala = parseInt(nomes.length / 2)
console.log('Metade: ' + metadeDaSala)

const sala1 = nomes.slice(0, metadeDaSala)
const sala2 = nomes.slice(metadeDaSala)

console.log(sala1)
console.log(sala2)