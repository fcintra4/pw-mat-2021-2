let nota = 8.6
let situacao

/*
if(nota >= 6) {
  situacao = 'APROVADO'
}
else {
  situacao = 'REPROVADO'
}
*/

// Operador ternário
// condição ? resultado se verdadeiro : resultado se falso
situacao = nota >= 6 ? 'APROVADO' : 'REPROVADO'

console.log(`Nota ${nota}, situação ${situacao}`)

let user = 'guest', msg

msg = user === 'admin' ? 'Pode logar' : 'Proibido logar'

console.log(msg)