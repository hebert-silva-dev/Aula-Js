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

const alunosTurma = [
    {nome: "Hebert", nota: 9},
    {nome: "Aline", nota: 3},
    {nome: "Bia", nota: 6},
    {nome: "Ana", nota: 8},
];

function mediaTurma(alunos) {
    let media = 0;
    for(const aluno of alunos){
        media += aluno.nota;
    }
    return media / alunos.length;
}

function melhorAluno(alunos){
    let maiorNota = alunos[0];
    for(const aluno of alunos){
        if(aluno.nota > maiorNota.nota) { 
            maiorNota = aluno;
        }
    }
    return maiorNota;
}

console.log(mediaTurma(alunosTurma).toFixed(2));
console.log(melhorAluno(alunosTurma));