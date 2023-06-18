// FOR
const notas = [10, 6.5, 8, 7.5]

var somaDasNotas = 0

for (let i = 0; i < notas.length; i++) {
    somaDasNotas += notas[i]
}
media = somaDasNotas / notas.length

console.log(`for: ${media}`)

// FOR OF
var somaDasNotas2 = 0

for (let nota of notas) {
    somaDasNotas2 += nota
}
media2 = somaDasNotas2 / notas.length

console.log(`for of: ${media2}`)

// FOR EACH
var somaDasNotas3 = 0

notas.forEach((nota, indice) => {
    somaDasNotas3 += nota
    console.log(indice)
})
media3 = somaDasNotas3 / notas.length

console.log(`forEach: ${media3}`)
