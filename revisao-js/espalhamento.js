//let minimo = Math.min(15, 7, 23, 2, 30, 21, 14)
//let maximo = Math.max(15, 7, 23, 2, 30, 21, 14)

//console.log({minimo, maximo})

let nums = [15, 7, 23, 2, 30, 21, 14]

// Usando o operador de espalhamento para converter um
// vetor em uma série de valores "soltos"
let minimo = Math.min(...nums)
let maximo = Math.max(...nums)

console.log({minimo, maximo})

let carro = { marca: 'Fiat', modelo: '147', cor: 'branco', ano: '1981' }

//let carro2 = carro  // Não gera uma cópia objeto, apenas uma nova referência

// Gerando uma cópia real de um objeto usando espalhamento
let carro2 = {...carro}

carro2.cor = 'azul'
carro2.ano = 1982

console.log(carro)
console.log(carro2)

let soma1 = somaTudo(14, 35, 10, 19, 41, 11, 22, 13)
let soma2 = somaTudo(4, 12, 18, 9, 3)

// Caso especial da sintaxe de espalhamento: parâmetro de resto
// O nome de um parâmetro precedido por ... receberá todos os
// argumentos passados e se comportará como um vetor
function somaTudo(...nums) {
  let soma = 0
  for(let n of nums) soma += n
  return soma
}

console.log({soma1, soma2})

let calculo1 = calcular('+', 1, 2, 3, 4, 5)
let calculo2 = calcular('*', 1, 2, 3, 4, 5)

// Temos um argumento normal seguido por um argumento de resto
function calcular(oper, ...nums) {
  let res
  switch(oper) {
    case '+':
      res = 0
      for(let n of nums) res += n
      break
    case '*':
      res = 1
      for(let n of nums) res *= n
  }
  return res
}

console.log({calculo1, calculo2})

let maisNums = [-4, -2, -5, -7, ...nums]

console.log({maisNums})