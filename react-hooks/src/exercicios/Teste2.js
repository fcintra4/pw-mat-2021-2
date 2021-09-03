import React from 'react'

export default function Teste2() {

  const [msg, setMsg] = React.useState('')

  const buttonClick = event => {
    setMsg('Este é segundo componente de teste.')
  }

  return (
    <>
      <button onClick={buttonClick}>Clique aqui</button>
      <div>{msg}</div>
    </>
  )

}