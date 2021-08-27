const nums = [7, 8, 0, 2, 5, 4, 8, 2, 1]

// Encontre o valor do primeiro elemento maior que 0
// e menor que 5

function encontrarValor(vetor) {
  for(let i = 0; i < vetor.length; i++) {
    if(vetor[i] > 0 && vetor[i] < 5) return vetor[i]
  }
}

console.log(encontrarValor(nums))

console.log(nums.find(x => x > 0 && x < 5))

// Retorna o primeiro número negativo do vetor
console.log(nums.find(i => i < 0))  // undefined