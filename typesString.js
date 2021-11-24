//retorna o tamanho de uma string
const textSize = 'Texto'.length
console.log(`Quantidade de letras: ${textSize}`)

//retorna um array quebrando a string por um delimitador
const arrayString = 'Texto'.split('x')
console.log(`\n Array com as possições separadas pelo delimitador : ${arrayString}`)

//Busca um valor e subtitui por outro
const replaceString = "Texto".replace('x','9');
console.log(`\n Retorna a variavel alterada pela substituição: ${replaceString}`)

//Retorna a fatia de um valor
const lastChar = 'Texto'.slice(-1);
console.log(`\n Última letra de uma string: ${lastChar}`)

const allWithoutLastChar = 'Texto'.slice(2);
console.log(`\n Retorna a string do inicio menos o ultimo caracter: ${allWithoutLastChar}`)

const secondToEnd = 'Texto'.slice(0,-1);
console.log(`\n Retorna do segundo caracter até o último: ${secondToEnd}`)

const twoCharsBeforeFirstPos = 'Texto'.slice(0,2);
console.log(`\n As duas primeiras letras são: ${twoCharsBeforeFirstPos}`)