const notas = [7, 7, 8, 9]

const novasNotas = [...notas] // "..." === Spread Operator

novasNotas.push(10)

console.log(`notas originais: ${notas}`)
console.log(`novas notas: ${novasNotas}`)