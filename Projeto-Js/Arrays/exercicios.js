// const fila = [];

// fila.push("Ana", "Bia", "Caio");
// console.log(fila);

// const atendido = fila.shift();
// console.log(fila);

// fila.unshift("Duda");
// console.log(fila);

// const list = ["A", "b", "C"]

// function remover(lista, valor) {
//     const pos = lista.indexOf(valor); 
//     if (pos === -1) {
//         return false;
//     }

//     lista.splice(pos, 1);
//     return true;
// }

// console.log(remover(list, "b"));
// console.log(list);
// console.log(remover(list, "z"));

// const aluno = {nome: "Hebert", idade: 21};
// console.log(aluno);

// aluno.idade = 22;                                                   //Altera a idade
// aluno.curso = "ADS";                                                //Acrecenta o Curso como chave e um valor a ela
// delete aluno.idade;                                                 //Remove atributo idade do objeto

// console.log(aluno);

// console.log(Object.keys(aluno));                                    //Retorna apenas as chaves do obj aluno

// const alunosTurma = [
//     {nome: "Hebert", nota: 9},
//     {nome: "Aline", nota: 3},
//     {nome: "Bia", nota: 6},
//     {nome: "Ana", nota: 8},
// ];

// function mediaTurma(alunos) {
//     let media = 0;
//     for(const aluno of alunos){
//         media += aluno.nota;
//     }
//     return media / alunos.length;
// }

// function melhorAluno(alunos){
//     let maiorNota = alunos[0];
//     for(const aluno of alunos){
//         if(aluno.nota > maiorNota.nota) { 
//             maiorNota = aluno;
//         }
//     }
//     return maiorNota;
// }

// console.log(mediaTurma(alunosTurma).toFixed(2));
// console.log(melhorAluno(alunosTurma));

// MAP

// const nums = [1, 2, 3, 4, 5];

// // const dobroNums = nums.map(value => {
// //     return value * 2;
// // });
// const dobroNums = nums.map(n => n * 2);

// console.log(dobroNums);

// const nomes = ["ana", "bruno", "carla"];

// const maiusculas = nomes.map(n => n.toUpperCase());

// console.log(nomes);
// console.log(maiusculas);

// const precos = [100, 200, 50];

// const comAlmento = precos.map(preco => preco + preco * 0.1);

// console.log(precos);
// console.log(comAlmento);

// const alunos = [
//   { nome: "Ana", nota: 8 },
//   { nome: "Bruno", nota: 5 },
//   { nome: "Carla", nota: 9 },
// ];

// // const nomes = alunos.map(nome => nome.nome);
// // console.log(nomes);

// const aluno = alunos.map(nota => nota.nome + ": " + nota.nota + ".");

// console.log(aluno);


// const produtos = [
//   { nome: "Mouse", preco: 100 },
//   { nome: "Teclado", preco: 40 },
// ];

// const atualizado = produtos.map(pdt => pdt.precoFinal = pdt.preco - pdt.preco * 0.1);

// console.log(produtos);

// const fila = ["Ana", "Bia", "Caio"];

// const listaNum = fila.map((nm, n) => `${n + 1}. ${nm}`);
// console.log(listaNum);

// const itens = [
//     { nome: "Caneta", qtd: 3, preco: 2 },
//     { nome: "Lápis", qtd: 0, preco: 1 },
//     { nome: "Caderno", qtd: 2, preco: 15 },
// ];

// const listFilter = itens.filter(item => item.qtd > 0)
//     .map(item => {
//         return {
//             nome: item.nome,
//             subTotal: item.preco * item.qtd
//         }
//     })

// console.log(listFilter);


// const nums = [1, 2, 3, 4, 5, 6, 7, 8];

// const pares = nums.filter(n => n % 2 === 0);

// console.log(pares);


// const pessoas = [
//   { nome: "Ana", idade: 20, ativo: true },
//   { nome: "Bia", idade: 17, ativo: true },
//   { nome: "Caio", idade: 25, ativo: false },
//   { nome: "Duda", idade: 30, ativo: true },
// ];

// const funcionario = pessoas.filter(i => i.idade >= 18 && i.ativo === true);

// console.log(funcionario.map(p => p.nome));

// const titulos = ["Star Wars", "Matrix", "Parasita", "Avatar"];
// const termo = "ar";
// const filtro = titulos.filter(t => t.toLowerCase().includes(termo.toLowerCase()));

// console.log(filtro);


// const tarefas = [
//   { id: 1, texto: "Estudar" },
//   { id: 2, texto: "Treinar" },
//   { id: 3, texto: "Dormir" },
// ];

// let id = 2;

// const tarefasAtualizadas = tarefas.filter(t => t.id !== id);
// // const tarefasAtualizadas = tarefas.map(t => delete t.id === id );
// console.log(tarefasAtualizadas);

// FIND

// const nums = [4, 8, 12, 15, 3];

// const numerosAtualizados = nums.find(n => n > 10);

// console.log(numerosAtualizados);

const pessoas = [
  { nome: "Ana", idade: 20 },
  { nome: "Bruno", idade: 17 },
  { nome: "Carla", idade: 30 },
]

const encontrar = pessoas.find(nome => nome.nome === "Bruno");
console.log(encontrar);