const nomes = ["Maria", "Ana", "Clara", "Maria", "Maria", "João", "João", "João"]

//const set = new Set(nomes)
const nomesAtualizados = [...new Set(nomes)]

console.log(nomesAtualizados)