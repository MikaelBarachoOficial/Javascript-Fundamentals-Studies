const notas = [7, 4, 9]

console.log(notas)

notas.push(10, 5)

console.log(notas)

var media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length


console.log(notas[3])
console.log(media)

notas.pop()

media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length

console.log(notas)
console.log(media)

notas.pop()
media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length
console.log(notas)
console.log(media)
