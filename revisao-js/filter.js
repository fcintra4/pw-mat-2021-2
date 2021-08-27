const nums = [2, 5, 6, 9, 14, 19, 22, 27, 31, 34, 39]

// Crie um novo vetor contendo apenas os números pares do vetor nums

let pares = []

for(let i = 0; i < nums.length; i++) {
  if(nums[i] % 2 === 0) pares.push(nums[i])
}

// Usando filter():
let pares2 = nums.filter(n => n % 2 === 0)

console.log({nums})
console.log({pares})
console.log({pares2})

// Obs.: filter() pode produzir um novo vetor cujo tamanho varia desde 0
// (vetor vazio) até o tamanho do vetor original
