const cliente = {
    nome: 'André',
    idade: '32',
    cpf: '9230492193',
    email: 'andre@email.com'
}

console.log(`O cliente se chama ${cliente.nome} e tem ${cliente.idade} anos de idade! CPF: ${cliente['cpf']}`)

const chaves = ['nome', 'idade', 'cpf', 'email', 'altura']

for (let chave of chaves) {
    console.log(`A chave é ${chave} e o valor é ${cliente[chave]}`)
}