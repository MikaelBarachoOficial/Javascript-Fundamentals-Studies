var alunos = ["João", "Juliana", "Ana", "Caio"]
const medias = [10, 8, 7.5, 9]

var alunosEMedias = [alunos, medias]

console.log(alunosEMedias)
console.log(alunosEMedias[0][2])
console.log(alunosEMedias[1][2])

const alunoconcat = alunos.concat(medias)
alunosEMedias = [[alunos, medias], alunoconcat]

console.log(alunosEMedias)
console.log(alunosEMedias[0][0][2])
console.log(alunosEMedias[0][1][2])