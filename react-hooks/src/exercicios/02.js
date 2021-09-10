import * as React from 'react'

export default function Exercicio02() {
  // 💣 exclua essa declaração de variável e substitua por uma chamada a React.useState()
  // const name = ''

  // O valor inicial da variável de estado "name" será lido
  // do cookie, caso exista. Se não existir, será uma string
  // vazia.

  // O estado inicial de uma variável de estado é
  // ajustado toda vez que acontece uma atualização
  /*
  const [name, setName] = React.useState(
    window.localStorage.getItem('react-name') || ''
  )
  */

  // Usando um "lazy initializer"
  // É executado apenas uma vez, na fase de inicialização
  // (mount) do componente.
  // Para isso, no useState(), em vez de passarmos um valor,
  // PASSAMOS UMA FUNÇÃO que retorna um valor
  const [name, setName] = React.useState(
    () => getNameCookie() || ''
  )

  // Variável de estado para contar a quantidade
  // de atualizações de estado (e consequentes 
  // chamadas a useEffect)
  const [count, setCount] = React.useState(0)

  function getNameCookie() {
    console.log("Getting cookie!")
    return localStorage.getItem("react-name")
  }

  function handleChange(event) {
    // 🐨 Atualize o nome aqui usando event.target.value
    setName(event.target.value)
  }

  // Esta função (useEffect()) será chamada após 
  // qualquer atualização do componente

  // Armazenar o valor da variável de estado "name"
  // em um cookie (localStorage)

  /*
    O hook useEffect() aceita dois parâmetros:
    1) Uma função que será executada como efeito colateral
       de uma atualização de estado
    2) Um vetor de dependências, no qual devem ser
       especificadas as variáveis de estado cuja
       atualização será monitorada para a a execução da
       função do primeiro parâmetro
  */
  React.useEffect(() => {
    window.localStorage.setItem('react-name', name)
    // Incrementa a contagem de chamadas a useEffect()
    setCount(count + 1)
  }, [name])

  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input onChange={handleChange} id="name" />
      </form>
      {name ? <strong>Hello {name}</strong> : 'Please type your name'}
      <div>
        Chamadas a useEffect(): {count}
      </div>
    </div>
  )
}