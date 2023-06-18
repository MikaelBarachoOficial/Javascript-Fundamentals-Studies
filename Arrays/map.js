const notas = [10, 9.5, 8, 7, 6]

// Assim como o forEach, o map também usa 2 parâmetros: item e índice.
const notasAtualizadas = notas.map((item, indice) => {
    return item + 1 >= 10 ? 10 : item + 1
})

console.log(notas)
console.log(notasAtualizadas)