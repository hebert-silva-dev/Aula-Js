// let i = 1;
// while (i <= 10) {
//     console.log(i);
//     i++
// }

// for(let tab = 1; tab <= 10; tab++){
//     console.log(`5 x ${tab} = ${5 * tab}`);
// }
// let soma = 0; 

// for (let i = 1; i <= 100; i++) {
//     soma += i;
// }

// console.log(soma);

// let nome;

// do{
//     nome = prompt("Digite um nome: ");
//     if(nome !== "sair"){
//         alert(`Você digitou ${nome}.`);
//     }
// }while(nome !== "sair")

// for (let i = 1; i <= 20; i++) {
//     if(i % 2 === 0){
//         console.log(i);
//     }
// }

// const palavra = prompt("Digite uma palavra: ");
// let invertida = "";

// for(let i = palavra.length; i >= 0; i--){
//     invertida += palavra[i];
// }

// if(palavra === invertida){
//     console.log(`${palavra} é um palíndromo!`);
// }else{
//     console.log(`${palavra} não é um palíndromo!`);
// // }

// let saldo = 0;
// let opcao;

// do {
//     opcao = Number(prompt("Digite uma das opções a seguir: \n1-Depositar, \n2-Sacar, \n3-Sair"));
//     if (Number.isNaN(opcao) || opcao > 3 || opcao <= 0) {
//         alert("O valor inserido é inválido.");
//     } else {
//         let depositar;
//         let sacar;
//         switch (opcao) {
//             case 1:
//                 depositar = Number(prompt("Digite o valor para depositar: "));
//                 if (Number.isNaN(depositar) || depositar <= 0) {
//                     alert("Valor digitado não pode ser depositado ao saldo da conta.");
//                 } else {
//                     saldo += depositar;
//                     alert(`Depósito realizado. Saldo: R$${saldo.toFixed(2)}`);
//                 }
//                 break;
//             case 2:
//                 sacar = Number(prompt("Digite o valor para sacar: "));
//                 if (Number.isNaN(sacar) || sacar > saldo) {
//                     alert("Valor digitado não pode ser sacado.");
//                 } else {
//                     saldo -= sacar;
//                     alert(`Saque realizado. Saldo: R$${saldo.toFixed(2)}`);
//                 }
//                 break;
//             default:
//                 alert("Programa encerrado.");
//                 break;
//         }
//     }

// } while (opcao !== 3);

for (let i = 1; i <= 10; i++) {
    console.log(`Tabuada do ${i}:\n`);
    for(let j = 1; j <= 10; j++){
        console.log(`${i} x ${j} = ${i * j}\n`);
    }
}