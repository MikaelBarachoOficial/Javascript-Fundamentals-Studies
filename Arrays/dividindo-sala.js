const alunos =['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'Andre', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata', 'Daisy', 'Camilo']

console.log(alunos)

var metade = alunos.length / 2

const sala1 = alunos.slice(0, metade)
const sala2 = alunos.slice(metade)

console.log(sala1)
console.log(sala2)