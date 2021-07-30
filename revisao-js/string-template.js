// Em JS, strings comuns podem ser escritas entre aspas simples
// ou aspas duplas
let nome = 'Feicibúquisson'
let idade = 17
let cidade = "Franca/SP"

// Exibindo informações com concatenação de strings
console.log('Meu nome é ' + nome + ', tenho ' + idade + " anos e moro em " + cidade + ".")

// Usando string template - strings delimitadas por ` (acentos grave ou "crases")
console.log(`Meu nome é ${nome}, tenho ${idade} anos e moro em ${cidade}.`)

console.log(`Meu nome é ${nome.toUpperCase()}, tenho ${idade} anos e moro em ${cidade}.`)

console.log(`Daqui a 5 anos minha idade será ${idade + 5} anos.`)