const alunos = ["Ana", "Marcos", "Maria", "Mauro"]
const medias = [7, 4.5, 8, 7.5]
const mediaMinima = 7

// Assim como o forEach, o filter também usa 2 parâmetros: item e índice.
const reprovados = alunos.filter((_, indice) => {
    // O filter sempre retornará verdadeiro ou falso, sem a necessidade de um operador ternário
    return medias[indice] < mediaMinima
})

console.log(`Alunos: ${alunos}`)
console.log(`REPROVADO: ${reprovados}`)