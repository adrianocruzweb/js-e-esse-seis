var teste = 'example';
//o var naõ respeita escopo
(( )=>{
  console.log(`Valor dentro da função "${teste}"`)

  if(true){
    var teste = 'example'
    console.log(`Valor dentro do id "${teste}"`)
  }

  console.log(`Valor após a execução do if "${teste}"`)
})();