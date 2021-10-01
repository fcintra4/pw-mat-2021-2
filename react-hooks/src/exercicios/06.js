// useEffect: HTTP requests
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'
// 🐨 you'll want the following additional things from '../pokemon':
// fetchPokemon: the function we call to get the pokemon info
// PokemonInfoFallback: the thing we show while we're loading the pokemon info
// PokemonDataView: the stuff we use to display the pokemon info
import {PokemonForm, fetchPokemon, PokemonInfoFallback, PokemonDataView} from '../pokemon'

function PokemonInfo({pokemonName}) {
  // 🐨 Have state for the pokemon (null)
  // [pokemon, setPokemon] = React.useState(null)
  //const [error, setError] = React.useState(null)

  /*
    Valores possíveis para status:
    - 'idle' (ocioso): ainda não foi feita requisição ao servidor remoto
    - 'pending' (pendente): a requisição foi feita e aguardamos a resposta
    - 'resolved' (resolvido): a requisição retornou com informações sobre um pokémon
    - 'rejected' (rejeitado): a requisição retornou erro
  */
  //const [status, setStatus] = React.useState('idle')

  // Juntando as variáveis de estado em um único objeto
  const [state, setState] = React.useState({
    pokemon: null,
    error: null,
    status: 'idle'
  })
  // Constantes avulsas somente-leitura
  const {pokemon, error, status} = state

  // 🐨 use React.useEffect where the callback should be called whenever the
  // pokemon name changes.
  // 💰 DON'T FORGET THE DEPENDENCIES ARRAY!
  // 💰 if the pokemonName is falsy (an empty string) then don't bother making the request (exit early).
  // 🐨 before calling `fetchPokemon`, clear the current pokemon state by setting it to null
  // 💰 Use the `fetchPokemon` function to fetch a pokemon by its name:
  //   fetchPokemon('Pikachu').then(
  //     pokemonData => { /* update all the state here */},
  //   )
  // 🐨 return the following things based on the `pokemon` state and `pokemonName` prop:
  //   1. no pokemonName: 'Submit a pokemon'
  //   2. pokemonName but no pokemon: <PokemonInfoFallback name={pokemonName} />
  //   3. pokemon: <PokemonDataView pokemon={pokemon} />

  React.useEffect(() => {

    // Nome do pokemon está vazio, sai da função sem fazer nada
    if(! pokemonName) return

    // Limpar os dados do pokemon
    //setPokemon(null)

    // Limpar o erro
    //setError(null)
    setState({...state, pokemon: null, error: null})

    // Chama a função fetchPokemon, passando o nome do pokemon.
    // Isso irá chamar a API no servidor remoto, que, se tudo der
    // certo, enviará os dados do pokemon informado.
    // Esse acesso a API remota pode demorar algum tempo. Quando o
    // servidor remoto finalmente responde (com dados ou com erro),
    // é executada a função dentro do then(). Essa função recebe os
    // dados enviados pela API e os coloca dentro da variável de estado
    // "pokemon".

    // then() é executado quando a API retorna dados (requisição deu certo)
    // catch() é executado quando a API retorna erro (requisição deu errado)

    //setStatus('pending') // Iniciando a requisição
    setState({...state, status: 'pending'})

    fetchPokemon(pokemonName)
      .then(pokemonData => {
        //setPokemon(pokemonData)
        //setStatus('resolved')
        setState({...state, pokemon: pokemonData, status: 'resolved'})
      })
      .catch(error => {
        //setError(error)
        //setStatus('rejected')
        setState({...state, error: error, status: 'rejected'})
      })

  }, [pokemonName])

  switch(status) {
    case 'idle':
      return 'Submit a pokémon'

    case 'pending':
      return <PokemonInfoFallback name={pokemonName} />

    case 'resolved':
      return <PokemonDataView pokemon={pokemon} />

    case 'rejected':
      return (
        <div role="alert" style={{color: 'red'}}>
          ERROR: {error.message}
        </div>
      )
  }

  /*
  // Retornou erro
  if(error) return (
    <div role="alert" style={{color: 'red'}}>
      ERROR: {error.message}
    </div>
  )
  // Não foi informado o nome do pokemon
  else if(! pokemonName) return 'Submit a pokemon'
  // A variável de estado "pokemon" está vazia; a chamada à API falhou
  // e então mostramos uma informação genérica (fallback)
  else if(! pokemon) return <PokemonInfoFallback name={pokemonName} />
  // A chamada à API deu certo: temos um pokemon para exibir
  else return <PokemonDataView pokemon={pokemon} />
  */
}

export default function Exercicio06() {
  const [pokemonName, setPokemonName] = React.useState('')

  function handleSubmit(newPokemonName) {
    setPokemonName(newPokemonName)
  }

  return (
    <div className="pokemon-info-app">
      <PokemonForm pokemonName={pokemonName} onSubmit={handleSubmit} />
      <hr />
      <div className="pokemon-info">
        <PokemonInfo pokemonName={pokemonName} />
      </div>
    </div>
  )
}