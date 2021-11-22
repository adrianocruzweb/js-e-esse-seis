function fn(){
  log('Criando um exemplo de HOISTING de uma função')

  function log(val){
    console.log(val);
  }
}

fn()

/* function fn(){
  function log(val){
    console.log(val);
  }

  log('Criando um exemplo de HOISTING de uma função')
}

fn() */


/*
Observação importante que mesmo que o javascript consiga entregar uma respostacoma função sendo declarada depois da sua chamada
é sempre uma boa praticar declara-la antes.
*/