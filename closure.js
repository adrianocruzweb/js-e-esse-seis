//Função normal

/* function soma(a,b){
  return a+b
} */

console.log("simples função - ",soma(2,2))
console.log("simples função - ",soma(2,3))
console.log("simples função - ",soma(2,4))
console.log("simples função - ",soma(2,5))
console.log("simples função - ",soma(2,6))

//Com closure

function soma(a){
  return function(b){
    return a+b
  }
}


const soma2 = soma(2)

console.log("teste closure - ",soma2(2))
console.log("teste closure - ",soma2(3))
console.log("teste closure - ",soma2(4))