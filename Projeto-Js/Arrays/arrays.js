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