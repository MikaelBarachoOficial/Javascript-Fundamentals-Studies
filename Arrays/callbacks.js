const nomes = ["Evaldo", "Mari", "Camis"];

// Função callback tradicional
nomes.forEach(function (nome, indice) {
    console.log(nome)
    console.log(indice)
})

//Arrow Function
console.log('--------------')

nomes.forEach((nome, indice) => {
    console.log(nome)
    console.log(indice)
})

//Função callback externa
console.log('--------------')

nomes.forEach(imprimeNomes)

function imprimeNomes(nome, indice) {
    console.log(nome)
    console.log(indice)
}