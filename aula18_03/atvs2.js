//1
let texto = "Aprendendo JavaScript é divertido e recompensador!";

// console.log(texto.toUpperCase());

let contemDivertido = texto.includes("divertido");
// console.log(contemDivertido);

let arrayDePalavras = texto.split(" ");
// console.log(arrayDePalavras);

let textoComHifens = arrayDePalavras.join("-");
// console.log(textoComHifens);

//2 
let num1 = 200.456;
let num2 = 150.789;

let num1Arredondado = Math.round(num1);
// console.log(num1Arredondado);

let valorMaximo = Math.max(num1, num2);
let valorMinimo = Math.min(num1, num2);
// console.log("Valor máximo:", valorMaximo);
// console.log("Valor mínimo:", valorMinimo);

let raizQuadradaNum2 = Math.sqrt(num2);
// console.log("Raiz quadrada de num2:", raizQuadradaNum2);

let num1NotacaoCientifica = num1.toExponential();
// console.log("Notação científica de num1:", num1NotacaoCientifica);

//3
let nulo = null;
// console.log(nulo == undefined);
// console.log(nulo === undefined);

let indefinido;
// console.log(isNaN(indefinido));

let numStr2 = "123abc";
let resultadoConversao = Number(numStr2);
// console.log(isNaN(resultadoConversao));

//4
let numeros = [10, 20, 30, 40, 50];

numeros.push(60);
// console.log(numeros);

let valorRemovido = numeros.pop();
// console.log(valorRemovido);
// console.log(numeros);

numeros.splice(2, 1);
// console.log(numeros);

numeros.sort((a, b) => b - a);
// console.log(numeros);

//5
let pessoa = {
  nome: "João",
  idade: 30,
  profissao: "Desenvolvedor",
  endereco: {
      rua: "Rua Exemplo",
      cidade: "São Paulo",
      estado: "SP"
  },
  apresentacao: function() {
      return `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e sou ${this.profissao}.`;
  }
};

// console.log(pessoa.endereco.cidade);

pessoa.profissao = "Gerente de Projetos";
// console.log(pessoa);

pessoa.telefone = "1234-5678";
// console.log(pessoa);
// console.log(pessoa.apresentacao());

//6
function soma(a, b) {
  return a + b;
}

function ehPar(numero) {
  return numero % 2 === 0;
}

function dobraValores(array) {
  return array.map(valor => valor * 2);
}

function contaCaracteres(string) {
  return string.length;
}

function fatorial(n) {
  if (n === 0 || n === 1) {
      return 1;
  }
  return n * fatorial(n - 1);
}
// console.log(soma(2, 3));
// console.log(ehPar(4));
// console.log(dobraValores([1, 2, 3]));
// console.log(contaCaracteres("Olá, mundo!"));
// console.log(fatorial(5));

//7
let proximoAniversario = new Date('2025-04-10');
let dataAtual = new Date();

let diferencaEmMs = proximoAniversario - dataAtual;
let diferencaEmDias = Math.ceil(diferencaEmMs / (1000 * 60 * 60 * 24));
// console.log(diferencaEmDias);

let ano = dataAtual.getFullYear();
let mes = String(dataAtual.getMonth() + 1).padStart(2, '0');
let dia = String(dataAtual.getDate()).padStart(2, '0');
// console.log(`${ano}-${mes}-${dia}`);

dataAtual.setDate(dataAtual.getDate() + 30);
// console.log(dataAtual);

//8
