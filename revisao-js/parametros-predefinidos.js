/*
  Calcula a área de uma geométrica
*/

// tipo passa a ser um parâmetro opcional.
// Uma função pode ter qualquer número de parâmetros opcionais,
// mas eles devem vir sempre POR ÚLTIMO
function areaForma(base, altura, tipo = 'R') {
  let area

  switch(tipo.toUpperCase()) {
    case 'R':   // retângulo
      area = base * altura
      break
    case 'T':   // triângulo
      area = base * altura / 2
      break
    case 'E':   // elipse
      area = (base / 2) * (altura / 2) * Math.PI
      break
    default:  // forma não reconhecida
      area = null
  }
  return area
}

console.log(`A área de um terreno com 16m x 27m é ${areaForma(16, 27, 'R')}m².`)
console.log(`A área de um triângulo de 4,75cm de altura por 2,5cm de base é ${areaForma(2.5, 4.75, 'T')}cm².`)
console.log(`A área de um círculo de 2,8m de diâmetro é ${areaForma(2.8, 2.8, 'E')}m².`)

// Quando quisermos calcular a área de um retângulo, podemos omitir o
// terceiro parâmetro
console.log(`Retângulo 15x11: ${areaForma(15, 11)}`)
console.log(`Quadrado 7.5x7.5: ${areaForma(7.5, 7.5)}`)
console.log(`Triângulo 8x6: ${areaForma(8, 6, 't')}`)