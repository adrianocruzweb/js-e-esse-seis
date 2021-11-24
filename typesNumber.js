const myNumber = 12.9211

//Transforma numero em string
const numberAsSting = myNumber.toString()
console.log(`Número transformado em String ${numberAsSting}`)

//Retornao numero com uma quanbtidade de casas decimais
const fixedTwoDecimals = myNumber.toFixed(2)
console.log(`\nNúmero com duas casas decimais: ${fixedTwoDecimals}`)

//Transforma uma String em Float
console.log(`\nString em Float : ${parseFloat('12.12')}`)

//Transforma uma String em Int
console.log(`\nString em Int : ${parseInt('12.15')}`)