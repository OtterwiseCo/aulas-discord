// Variáveis

// var name = "joao";

let name = "joao";

// const name = "joao";

// console.log(name);

//Tipos

// String
const nome = "joao pedro";

// Number
const inteiro = 1;
const float = 1.5;

// Booleanos

const verdadeiro = true;
const falso = false;

let minhaVariavel;
// undefined

let minhaVariavel2 = null; // {};

// console.log(undefined == null);

// Object

const profile = {
  name: {
    first_name: "joao pedro",
    last_name: "bretanha",
  },
  username: "jpbretanha",
  avatar: "https://...",
};

// console.log(profile.name);

// console.log(typeof minhaVariavel2);

// Operadores lógicos e aritméticos

// AND

let teste = true && false;

// OR

teste = true || false;

// GT (greater), LT (lower than)

teste = 1 < 2; // true

teste = 2 < 1; // false

// comparação

teste = "joao" == "joao"; // true
teste = "joao" == "pedro"; // false

// console.log({ nome: "joao" } === { nome: "joao" });
// console.log(
//   JSON.stringify({ nome: "joao" }) === JSON.stringify({ nome: "joao" }),
// );

// Funções

var numero = 1;

const soma = (numero1, numero2) => {
  return numero1 + numero2;
};

// console.log(soma(1, 2));

// Arrays

const array = [1, 2, "cachorro", true];

// console.log(Array.isArray(array));

const addToArray = array.concat(4);

const removedFromArray = array.slice(0, array.length - 1);

const concatArray = [...array];

// console.log(concatArray);

// Estruturas condicionais

const testeComparacao = 1 > 2;

// if (testeComparacao) {
//   console.log("deu bom");
// } else if (2 < 3) {
//   console.log("2 < 3");
// } else {
//   console.log("caso genérico");
// }

// const status = "carregando"; // carregando - erro - sucesso

// if (status == "carregando") {
//   console.log("carregando");
// } else if (status == "erro") {
//   console.log("erro");
// } else {
//   console.log("sucesso");
// }

// switch (status) {
//   case "carregando":
//     console.log("carregando");
//     break;
//   case "erro":
//     console.log("erro");
//     break;
//   default:
//     console.log("sucesso");
//     break;
// }

// if (status == "carregando") {
//   console.log("carregando");
// } else if (status == "erro") {
//   console.log("erro");
// } else {
//   console.log("sucesso");
// }

// if (status == "carregando") {
//   return console.log("carregando");
// }

// if (status == "erro") {
//   return console.log("erro");
// }

// return console.log("sucesso");

// status == "carregando" ? console.log("carregando") : console.log("erro");

// Estruturas de repetição

let numeros = [1, 2, 3, 4];
Object.prototype.ObjectCustom = () => {};
Array.prototype.ArrayCustom = () => {};

let ordemExecutada = [];

for (let index = 0; index < numeros.length; index++) {
  // console.log(numeros[index]);
  // ordemExecutada.push(index);
}

// for (const key in numeros) {
//   console.log(key);
// }

for (const iterator of numeros) {
  // console.log(iterator);
}

let somatorio = 0;
// numeros.forEach((item, index) => (numeros[index] = item * 2));

// console.log(numeros);

// Métodos de array

// MAP

const numerosMultiplicados = numeros.map((item) => item * 2);
console.log(numerosMultiplicados);

// FILTER E FIND

const pessoas = [
  {
    nome: "joao",
    ativo: true,
  },
  {
    nome: "cleberson",
    ativo: true,
  },
  {
    nome: "Ingrid",
    ativo: false,
  },
];

const pessoasAtivas = pessoas.filter((pessoa) => pessoa.ativo);
// console.log(pessoasAtivas);

const joao = pessoas.find((pessoa) => pessoa.nome == "joao");
// console.log(joao);

// INCLUDES

const contem = pessoas.includes({
  nome: "joao",
  ativo: true,
});

// console.log(contem);

const alguemAtivo = pessoas.find((pessoa) => pessoa.ativo);

// SOME

const ativo = pessoas.some((pessoa) => pessoa.ativo);
// console.log(ativo);

// EVERY

const todosEstaoAtivos = pessoas.every((pessoa) => pessoa.ativo);
console.log(todosEstaoAtivos);

//

const nomes = "joao pedro cleberson fernando";

console.log(nomes.split(" ").join(","));
// joao, pedro, Ingrid, Cleberson, Julio, Fernando
