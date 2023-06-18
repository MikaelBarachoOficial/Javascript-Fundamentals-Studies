var alunos = ["João", "Juliana", "Ana", "Caio"]
const medias = [10, 8, 7.5, 9]

var alunosEMedias = [alunos, medias]

//console.log(alunos + ' 1 ' + medias)

function exibeNomeENota (aluno) {
    if (alunosEMedias[0].includes(aluno)) {
        // const alunos = alunosEMedias[0]
        // const medias = alunosEMedias[1]

        const [alunos, medias] = alunosEMedias

        //console.log(alunos + ' 2 ' + medias)

        const indice = alunos.indexOf(aluno)

        console.log(`O índice no array é: ${indice}`)
        console.log(`O aluno é: ${alunos[indice]}`)
        console.log(`Sua nota é: ${medias[indice]}`)
    
    } else {
        console.log('aluno não encontrado!')
    }
}

//console.log(alunos + ' 3 ' + medias)

exibeNomeENota('Fulana')

alunos.forEach(aluno => {
    exibeNomeENota(aluno)
})
