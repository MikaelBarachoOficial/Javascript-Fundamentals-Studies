const notas1 = [10 , 6.5, 8 ,7.5]
const notas2 = [9  , 6  , 6]
const notas3 = [8.5, 9.5, 8, 7]

const notasGerais = [notas1,notas2,notas3]

var media = 0
var notasQuantidade = 0

for (let i = 0; i < notasGerais.length; i++) {
    
    console.log(`Conjunto ${i + 1}`)

    for(let j = 0; j < notasGerais[i].length; j++) {
        console.log(notasGerais[i][j])

        media += notasGerais[i][j]
        notasQuantidade++
    }
}

console.log(`Quantidade de notas: ${notasQuantidade}`)

media = media / notasQuantidade
console.log(`A média de todas as notas é ${media}`)