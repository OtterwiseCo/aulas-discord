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

console.log(concatArray);
