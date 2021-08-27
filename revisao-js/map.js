const frutas = ['banana', 'maçã', 'pera', 'uva', 'melancia', 'morango', 'jabuticaba']

// A partir do vetor frutas, gere um novo vetor contendo os nomes das frutas
// em letras maiúsculas

let frutas2 = []

for(let i = 0; i < frutas.length; i++) {
  frutas2.push(frutas[i].toUpperCase())
}

console.log({frutas})
console.log({frutas2})

// map() => produz um novo vetor a partir do vetor original, aplicando uma
// transformação a cada um dos elementos
// Recebe como argumento uma função que tem por argumento cada elemento
// do vetor original

// A função anônima será chamada para cada elemento do vetor original,
// passando-o para maiúsculas e inserindo-o em frutas3
/*let frutas3 = frutas.map(function(elemento) {
  return elemento.toUpperCase()
})*/

let frutas3 = frutas.map(elemento => elemento.toUpperCase())

console.log({frutas3})

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const quadrados = nums.map(n => n ** 2)

console.log({nums})
console.log({quadrados})

const itensFrutas = frutas.map(f => '<li>' + f + '</li>')

console.log(itensFrutas)

// Obs.: map() sempre irá gerar um vetor de tamanho IGUAL ao vetor original