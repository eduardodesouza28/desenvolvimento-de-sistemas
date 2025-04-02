//1
const array1 = [1, 2, 3, 4, 5];
const mapx3 = array1.map(x => x * 3);
// console.log(map1);

//2
const mapString = array1.map(x => x.toString());
// console.log(mapString);

//3
const arrayString = ["maçã", "banana", "laranja"]
const mapString2 = arrayString.map(x => x.toUpperCase());
// console.log(mapString2);

//4
const persons = [{ nome: "Alice", idade: 25 }, { nome: "Bob", idade: 30 }, { nome: "Charlie", idade: 35 }];
const mapNome = persons.map(x => x.nome);
// console.log(mapNome);

//5
const mapSquare = array1.map(x => x ** 2);
// console.log(mapSquare);

//6
const meuArray = [1, 2, 3];
let minhaString = "Olá";
meuArray[0] = 4;
// console.log(meuArray);
minhaString[0] = "o"
// console.log(minhaString);
//isso acontece por que uma string é imutável, ou seja, não pode ser alterada, apenas reatribuída enquanto um array pode ser alterado.

//8
let ola = "Olá";
let referencia = { ola: "Olá" };
// console.log(ola);
// console.log(referencia.ola);

//9
const unidemensional = [1, 2, 3];
const bidemensional = [[1, 2], [3, 4]];
// console.log(unidemensional);
// console.log(bidemensional);

//desafio 1
const products =  [{ nome: "Produto 1", preco: 100 }, { nome: "Produto 2", preco: 200 }, { nome: "Produto 3", preco: 300 }]
const mapPreco = products.map(x => x.preco * 0.9);
// console.log(mapPreco);


