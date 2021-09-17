import * as React from 'react'
// eslint-disable-next-line no-unused-vars
import VanillaTilt from 'vanilla-tilt'

function Tilt({children}) {
  // 🐨 create a ref here with React.useRef()
  
  // O hook useRef() cria uma REFerência para um elemento
  // da página HTML. É uma alternativa, exclusiva do React,
  // que substitui dar um id para um componente e depois
  // usar document.getElementById() para localizá-lo
  const divRoot = React.useRef()

  // 🐨 add a `React.useEffect` callback here and use VanillaTilt to make your
  // div look fancy.
  // 💰 like this:
  // const tiltNode = tiltRef.current
  // VanillaTilt.init(tiltNode, {
  //   max: 25,
  //   speed: 400,
  //   glare: true,
  //   'max-glare': 0.5,
  // })
  //
  // 💰 Don't forget to return a cleanup function. VanillaTilt.init will add an
  // object to your DOM node to cleanup:
  // `return () => tiltNode.vanillaTilt.destroy()`
  //
  // 💰 Don't forget to specify your effect's dependencies array! In our case
  // we know that the tilt node will never change, so make it `[]`. Ask me about
  // this for a more in depth explanation.

  React.useEffect(() => {
    // Capturar o elemento usando a REFerência
    // É como se estivéssemos usando um getElementById()
    const tiltNode = divRoot.current
    ///const tiltNode = document.getElementById('div-root')

    // Associando a biblioteca VanillaTilt à div capturada
    VanillaTilt.init(tiltNode, {
      max: 25,
      speed: 400,
      glare: true,
      'max-glare': 0.5,
    })

    // A biblioteca VanillaTilt cria uma div a mais no componente.
    // Podemos destruí-la, retornando uma função que faça isso no
    // final do useEffect(). Essa função será chamada na fase "unmount"
    // (finalização) do componente
    return () => tiltNode.vanillaTilt.destroy()

  }, []) // -> Quando as dependências de um useEffect() 
  // são um vetor vazio, este useEffect() será executadao
  // apenas na primeira atualização do componente, uma única
  // vez

  // 🐨 add the `ref` prop to the `tilt-root` div here:
  return (
    <div className="tilt-root" ref={divRoot}>
      <div className="tilt-child">{children}</div>
    </div>
  )

  /*return (
    <div className="tilt-root" id="div-root">
      <div className="tilt-child">{children}</div>
    </div>
  )*/

}

export default function Exercicio05() {
  return (
    <>
      <Tilt>
        <div className="totally-centered">vanilla-tilt.js</div>
      </Tilt>
      <hr />
      <Tilt>
        <div className="totally-centered">vanilla-tilt.js</div>
      </Tilt>
    </>    
  )
}