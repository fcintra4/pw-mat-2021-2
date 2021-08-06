// Função com:
// 1) Possui um único argumento
// 2) Possui uma única linha de código no corpo
// 2) A única linha de código tem return
function quadrado(x) {
  return x * x
}

// Arrow function equivalente
// - Desaparece a palavra function
// - Não são necessários os parênteses em torno do argumento
// - Depois do argumento vem =>
// - Não são necessárias as chaves e nem a palavra return
const quadrado2 = x => x * x

console.log('Quadrado: ', quadrado(6))
console.log('Quadrado2: ', quadrado2(6))

// Função tradicional com dois parâmetros
function imc(peso, altura) {
  return peso / (altura ** 2)
}

// Arrow function equivalente
// - Voltam os parênteses em torno dos parâmetros
const imc2 = (peso, altura) => peso / (altura ** 2)

console.log('IMC:', imc(62, 1.66))
console.log('IMC2:', imc2(62, 1.66))

// Função tradicional sem parâmetros
function horaAtual() {
  return new Date()
}

// Arrow function equivalente
// - Quando não há parâmetros, os parênteses ficam vazios
const horaAtual2 = () => new Date()

console.log('Hora atual: ', horaAtual())
console.log('Hora atual 2: ', horaAtual2())

// Função tradicional com várias linhas no corpo
function fatorial(n) {
  let fat = 1
  for(let i = n; i > 1; i--) fat *= i
  return fat
}

// Arrow function equivalente
// - Retornam as chaves
const fatorial2 = n => {
  let fat = 1
  for(let i = n; i > 1; i--) fat *= i
  return fat  
}

console.log('Fatorial:', fatorial(5))
console.log('Fatorial2:', fatorial2(5))