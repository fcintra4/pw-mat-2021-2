let usuario = 'Orkutilson'
let senha = 'SaudadesDoOrkut'
let nomeCompleto = 'Orkutilson Faleiros Bittar da Silva'
let idade = 19

// Criação de objeto cujo valor das propriedades vêm de
// variáveis previamente existentes
let infoUsuario = {
  //usuario: usuario,
  usuario,  // Propriedade abreviada (usuario: usuario)
  nome: nomeCompleto,
  senha, //senha: senha
  idade  //idade: idade
}

console.log(infoUsuario)

// Propriedades abreviadas são úteis em depuração para exibir
// o nome da variável junto com o seu valor
console.log({idade, senha})