const carros = ['Fusca', 'Chevette', 'Opala', '147', 'Polara', 'Brasília', 'Corcel']

// Determinar se Polara existe no vetor

function temPolara(vetor) {
  for(let i = 0; i < vetor.length; i++) {
    if(vetor[i] === 'Polara') return true
  }
  return false
}

function temBelina(vetor) {
  for(let i = 0; i < vetor.length; i++) {
    if(vetor[i] === 'Belina') return true
  }
  return false
}

console.log('Tem Polara?', temPolara(carros))
console.log('Tem Belina?', temBelina(carros))

console.log('Inclui Opala?', carros.includes('Opala'))
console.log('Inclui Variant?', carros.includes('Variant'))