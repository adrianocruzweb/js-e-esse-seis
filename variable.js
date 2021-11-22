const name = 'Adriano';

//não podemos alterar o valor
//name = 'Sarah';

const user = {
  name: 'Adriano'
}

//se eu criar um objeto ele permite eu alterar a propriedade
user.name = 'Sarah'

//não poso fazer o objeto apontar para outro endereço
/* user = {
  name: 'Guilherme'
} */

const persons = ['Adriano','Antenor','Bruno']

//podemos adicionar novos itens
persons.push('João')

//podemos remover um item
persons.shift()

persons[1] = 'John'


console.log(persons)