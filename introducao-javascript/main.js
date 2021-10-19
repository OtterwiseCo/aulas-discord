const axios = require("axios");

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
// console.log(numerosMultiplicados);

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
// console.log(todosEstaoAtivos);

// JOIN

const nomes = "joao pedro cleberson fernando";

// console.log(nomes.split(" ").join(","));
// joao, pedro, Ingrid, Cleberson, Julio, Fernando

// SORT
const sorted = [11, 2, 22, 1].sort((a, b) => a - b);

// console.log(sorted);

// REDUCE

const arrayReduzido = [1, 2, 3, 4].reduce((valorAnterior, valorAtual) => {
  const soma = valorAnterior + valorAtual;
  return soma;
}, 0);

const estudante = {
  nome: "joao",
  notas: [5, 8.5, 6.8],
};

const media = estudante.notas.reduce((acc, nota, index) => {
  const arrayLength = estudante.notas.length - 1;
  if (index === arrayLength)
    return ((acc + nota) / estudante.notas.length).toFixed(2);
  return acc + nota;
}, 0);

const somaDeNotas = (valores) =>
  valores.reduce((acc, valor) => {
    return acc + valor;
  }, 0);

const mediaDeNotas = (soma, total) => (soma / total).toFixed(2);

const somaDeNotasDoJoao = somaDeNotas(estudante.notas);

const mediaDoJoao = mediaDeNotas(somaDeNotasDoJoao, estudante.notas.length);

// console.log(mediaDoJoao);

// PROMISES

const API_URL = "https://jsonplaceholder.typicode.com/";

const dataFetch = () => {
  const data = axios
    .get(API_URL + "posts")
    .then((data) => console.log(data))
    .catch((erro) => console.log(erro))
    .finally((data) => console.log("consumi da api"));
};

const dataFetch2 = async () => {
  try {
    const data = await axios.get(API_URL + "posts");
    console.log(data);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("consumi da api");
  }
};

// HTTP

// GET - POST - PUT - PATCH - DELETE

console.log(dataFetch2);

// EXERCICIO

//Calcular média de uma lista de alunos. Eles vão ter 3 notas com o mesmo peso e é necessário calcular
//a média e inserir uma nova key no objetivo se ele foi aprovado. Levando em consideração que a média é 7

const estudantes = [
  {
    nome: "joao",
    notas: [7, 8.5, 6.8],
  },
  {
    nome: "Gabriel",
    notas: [5, 2, 9],
  },
  {
    nome: "Mari",
    notas: [1, 10, 4.8],
  },
  {
    nome: "Matheusinho",
    notas: [1, 3, 6.9],
  },
];

const novoArrayDeEstudantes = estudantes.reduce((acc, estudante) => {
  const media = estudante.notas.reduce((acc, nota, index) => {
    const arrayLength = estudante.notas.length - 1;
    if (index === arrayLength)
      return ((acc + nota) / estudante.notas.length).toFixed(2);
    return acc + nota;
  }, 0);

  if (media >= 7) {
    return [
      ...acc,
      {
        ...estudante,
        aprovado: true,
      },
    ];
  }
  return [
    ...acc,
    {
      ...estudante,
      aprovado: false,
    },
  ];
}, []);

const foiAprovado = (nota) => nota >= 7;

const novoArrayDeEstudantes2 = estudantes.map((estudante) => {
  const somaDeNotasDoEstudante = somaDeNotas(estudante.notas);
  const media = mediaDeNotas(somaDeNotasDoEstudante, estudante.notas.length);
  return { ...estudante, aprovado: foiAprovado(media) };
});

console.log(novoArrayDeEstudantes);
