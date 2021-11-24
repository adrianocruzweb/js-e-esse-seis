let user = {
  name: 'Adriano Cruz'
}

console.log(`Exibindo nome do objeto user após declarado: ${user.name}`)

//alterando a propriedade de um objeto
user.name = 'Outro nome'
console.log(`\nExibindo nome do objeto user após primeira alteração: ${user.name}`)

//outra forma de alterar uma propriedade de um objeto
user['name'] = 'Outro nome 01'
console.log(`\nExibindo nome do objeto user após segunda alteração: ${user.name}`)

//alterando por uma indicação de uma variavel com o nome da propriedade
const prop = 'name'
user[prop] = 'Outro nome 03'
console.log(`\nExibindo nome do objeto user após terceira forma de alteração: ${user.name}`)

//quando eu preciso pegar o valor de um objeto passando uma propriedade dinamicamente
function getProp(prop){
  return user[prop]
}
//Criando uma propriedade
user.lastName = 'Cabrini da Silva'
console.log(`\nExibindo lastname do objeto user após a criação da propriedade: ${user.lastName}`)

//deletando um propriedade
console.log(`\nExibindo user por completo antes de deletar uma propriedade:`)
console.log(user)
delete user.name
console.log(`\nExibindo user por completo depois de deletar uma propriedade:`)
console.log(user)

const userMain = {
  name:'Adriano',
  lastName:'Cruz de Oliveira'
}

//Recuperando as Chaves do objeto
console.log(`\nRecuperando as Chaves do objeto - ${Object.keys(userMain)}`)

//Recuperando os valores do objeto
console.log(`\nRecuperando os valores do objeto - ${Object.values(userMain)}` )

//Retorna um array de conteudos do objeto [nome_prop,valor_prop]
console.log(`\nLista de propriedades e valores - ${Object.entries(userMain)}` )

//Mergear propriedades de objetos
console.log('\nFazendo merge de uma propriedade no objeto existente (Inicio)')
Object.assign(userMain,{fullName:'Adriano Cruz de Oliveira'})
console.log('\nFazendo merge de uma propriedade no objeto existente (Fim)')

console.log(`\n Retorna um novo objeto  mergeando dois ou mais objetos ${Object.assign({},userMain,{age:33})}`)

//Previne todas as alteração
const newObj = {foo:'bar'}
Object.freeze(newObj)

newObj.foo = 'changes'
delete newObj.foo
newObj.bar = 'foo'

console.log(`\nVariavel newObj após a alteração`, newObj)

//Permite alteração apenas em propriedades existentes
const person = {name:'Adriano'}
Object.seal(person)

console.log(`\nVariavel person antes da alteração`, person)

person.name = 'Sarah'
delete person.name
person.age = 33


console.log(`\nVariavel person após a alteração`, person)

