(( )=>{
  let teste = "valor função"// const tem o mesmo comportamento
  console.log(`Valor dentro da função "${teste}"`)

  if(true){
    let teste = 'valor if'
    console.log(`Valor dentro do id "${teste}"`)
  }

  console.log(`Valor após a execução do if "${teste}"`)
})();