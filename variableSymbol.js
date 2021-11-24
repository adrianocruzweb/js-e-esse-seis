const symbolOne = Symbol()
const symbolTwo = Symbol()

//Symbol são unicos
console.log(`symbolOne é igual a symbolTwo: ${symbolOne===symbolTwo}`)


//previnindo conflitos entre nomes de variaveis
const nameSymbolOne = Symbol('name');
const nameSymbolTwo = Symbol('name');

const user = {
  [nameSymbolOne]:'Adriano',
  [nameSymbolTwo]:'Sarah',
  lastName:'Cruz'
}

console.log(user)


//ele não exibe em foreach
for (const key in user) {
  if (user.hasOwnProperty(key)) {
    console.log(`\nValor da chave ${key}: ${user[key]}`)
  }
}

//ele não é acessivel pelo object.keys
console.log(`\nEle não é acessivel pelo object:keys ${Object.keys(user)}`);

//ele não é acessivel pelo object.values
console.log(`\nEle não é acessivel pelo object:values ${Object.values(user)}`);

//Um key de symbols só é acesivel por getOwnPropertySymbols
console.log(`\nEle é acessivel pelo object:getOwnPropertySymbols`, Object.getOwnPropertySymbols(user));

//Um key de symbols só é acesivel por ownKeys
console.log(`\nEle é acessivel pelo object:ownKeys `, Reflect.ownKeys(user));

//criar ENUM
const directions = {
  UP: Symbol('UP'),
  DOWN: Symbol('DOWN'),
  LEFT: Symbol('LEFT'),
  RIGHT: Symbol('RIGHT')
}

console.log(directions);