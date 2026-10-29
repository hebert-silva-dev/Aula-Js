// const notas = [ 7 , 8.5 , 6];
// const aluno = {nome: "Hebert", idade: 21}
// const turma = [
//     {nome: "Hebert", idade: 21},
//     {nome: "Lucas", idade: 23},
//     {nome: "Ana", idade: 40},
//     {nome: "Bianca", idade: 20},
// ]

// console.log(notas[1]);
// console.log(aluno.nome);
// console.log(turma[2].nome);

// const frutas = ["Maçã", "Banana" , "Laranja"]
// console.log(frutas[0]);
// console.log(frutas.length);
// console.log(frutas[frutas.length -1]);
// console.log(frutas.at(-1));
// console.log(frutas[10]);

// frutas[1] = "Morango";
// console.log(frutas);

// const fila = ["Ana", "Bia"];
// fila.push("Caio");
// fila.unshift("Zeca");
// console.log(fila);

// const  atendido = fila.shift();      Pega o Primeiro.
// const saiu = fila.pop();             Pega o ultimo.
// console.log(fila);
// console.log(atendido, saiu);


// const letras = ["a","b","c","d","e"];
// letras.splice(1,2);                     //Seleciona a posição e o outro elemento tira a quantidade digitada
// console.log(letras);

// letras.splice(1, 0, "x", "y");          //Seleciona a posição e o outro elemento remove a quantidade digitada e acrescenta novos
// console.log(letras);                    //elementos.

// letras.splice(0, 1, "z");               //Seleciona a posição e o outro elemento tira a quantidade digitada ecoloca outro no lugar
// console.log(letras);

// const number = [1, 2, 3, 4, 5]
// console.log(number.slice(1, 3));           //Seleciona a posição e o outro elemento seleciona um dos elemntos e retorna o intervalo
// console.log(number.slice(-2));             //Seleciona a posição e o outro elemento seleciona um dos elemntos e retorna o intervalo apartir do ultimo
// console.log(number.slice());

// console.log(number.includes(3));           //Procura uma equivalencia do valor dentro do array e retorna um boleano
// console.log(number.includes(99));          //Procura uma equivalencia do valor dentro do array e retorna um boleano

// console.log(number.indexOf(2));               //Retorna todos os elementos
// console.log(number.indexOf(99));

// console.log(number.join(" - "));            //Seleciona e ordena um array e separa os numeros com o caracter: -
// console.log(number);

// const a = [1 , 2]
// const b = [3 , 4]

// console.log(a.concat(b));
// console.log(...a, ...b);

// console.log([0, ...a, 99, ...b]);

// const aluno = {nome: "Hebert", idade: "20"}
// aluno.cidade = "São Paulo";
// console.log(aluno);

// delete aluno.cidade;
// console.log(aluno);

//Filter, Map, Find e Reduce

// function dobro(n) {
//     return n * 2;
// }

// const dobroArrow = (n) => {
//     return n * 2;
// }

// const dobroCurto = n => n * 2;

const lucas = { name: "Lucas", lastName: "Garcez", age: 20 };
const maria = { name: "Maria", lastName: "Oliveira", age: 17 };
const joao = { name: "João", lastName: "Silva", age: 18 };
const ana = { name: "Ana", lastName: "Santos", age: 22 };

const people = [lucas, maria, joao, ana];

// //FILTER

// console.log("=== FILTER ===");

// const maiores = people.filter((value, index, array) => {
//     console.log("Index: ", index + 1);
//     console.log("Value: ", value.name);
//     console.log("---------------------");
//     return value.age >= 18;
// })

// console.log("Resultado FILTER: " , maiores);

//MAP

// console.log("====== MAP ======");

// const nomes = people.map((value, index, array) => {
//     console.log("Index: ", index + 1);
//     console.log("Value: ", value.name);
//     console.log("---------------------");
//     return value.name;
// })

// console.log("Resultado MAP: ", nomes);


//FIND

// console.log("====== FIND ======");

// const mariaEncontrada = people.find((value, index, array) => {
//     console.log("Index: ", index + 1);
//     console.log("Value: ", value.name);
//     return value.name === "Maria";
// })

// console.log("Resultado do FIND: ", mariaEncontrada);

// const pedro = people.find( p => p.name === "Pedro");
// if(pedro === undefined){
//     console.log("Pessoa não encontrada.");
// }

// console.log("===== REDUCE =====");

// array.reduce((acumulador, elementoAtual, indice, arrayOriginal) => {
    
// // }, valorInicial);

// const somaIdade = people.reduce((acc, value, index, array)=> {
//     console.log("Index: ", index + 1);
//     console.log("Value: ", value.name , value.age);
//     console.log("Acumulador antes: ", acc);
//     return acc + value.age;
// },0);

// console.log("Resultado Reduce: " , somaIdade);

// const nomesMaiores = people
// .filter( p => p.age >= 18)
// .map( p => p.name.toUpperCase());

// console.log(nomesMaiores);

// const somaMiores = people
// .filter( p => p.age >= 18)
// .reduce((acc , p) => acc + p.age, 0);

// console.log(somaMiores);

