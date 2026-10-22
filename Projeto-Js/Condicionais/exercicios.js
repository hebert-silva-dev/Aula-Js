// const cor = String(prompt("Digite a cor do semafro (Verde , Amarelo ou Vermelho): "));

// switch (cor) {
//     case "Verde":
//         alert("Siga!");
//         break;
//     case "Amarelo":
//         alert("Atenção!");
//         break;
//     case "Vermelho":
//         alert("Parar!");
//         break;

//     default:
//         alert("Cor inválida!");
//         break;
// }

// const nota = Number(prompt("Digite sua nota (0 à 100): "))

// if (Number.isNaN(nota) || nota < 0 || nota > 100) {
//     alert("Valor inválido.");
// }else if (nota < 60) {
//     alert("Reprovado.");
// }else if (nota < 80) {
//     alert("Recuperação!");
// }else{
//     alert("Aprovado.");
// }

// const user = prompt("Digite seu usuario: ");
// const passeword = prompt("Digite a senha: ");

// const login = user === "admin" || user === "gerente" && passeword === 1234 ? alert("Login feito com Sucesso") : alert("Login Inválido");

//----------------------------------------------------------------------------------------------
// Classificador de Número
// Peça um número e diga se é positivo, negativo ou zero.
// **Exemplo:** `5` → `O número é positivo.` · `0` → `O número é zero.` · `abc` → `Valor inválido.`

// const num = Number(prompt("Digite um número: "));

// if (Number.isNaN(num)) {
//     alert("Isso não é um número.");
//     }
// }else if (num < 0) {
//     alert("Número negativo.");
// }else if (num > 0) {
//     alert("Número positivo.");
// }else{
//     alert("Número igual a 0.");
// }


// const idade = Number(prompt("Digite sua idade: "));
// if (Number.isNaN(idade) || idade < 0) {
//     alert("Idade inválido.");
// } else {
//     idade >= 18 ? alert("Maior de idade") : alert("Menor de idade");
// }

// const num = Number(prompt("Digite um numero para saber se é Impar ou par: "));

// if(Number.isNaN(num)){
//     alert("Isso não é um número");
// }else{
//     num % 2 === 0 ? alert("Par") : alert("impar");
// }

// Peça peso e altura, calcule o IMC e classifique: <18.5 abaixo do peso, 18.5–24.9 normal, 25–29.9 sobrepeso, >=30 obesidade. Valide entradas inválidas.

// **Exemplo:** peso `70` e altura `1.75` → `Seu IMC é: 22.86` e `Classificação: Peso normal`

// const alt = Number(prompt("Digite sua altura (m): "));
// const peso = Number(prompt("Digite seu peso (Kg): "));

// if (Number.isNaN(alt) || Number.isNaN(peso) || alt <= 0 || peso <= 0) {
//     alert("Valor inserido inválido.");
// }else{
//     const imc = peso / (alt * alt);
//     if (imc < 18.5) {
//         alert(`Classificação: Abaixo do peso.`)
//     }else if (imc < 24.4) {
//         alert(`Classificação: Normal`)
//     }else if (imc < 29.9) {
//         alert(`Classificação: Sobrepeso.`)
//     }else{
//         alert(`Classificação: Obesidade.`)
//     }
// }

// Se o valor da compra for maior que R$ 100, aplicar 10% de desconto.

// **Exemplo:** `150` → `Valor final com desconto: R$ 135` · `80` → `Valor final: R$ 80`

// const valor = Number(prompt("Digite o valor da sua compra: "));

// if (Number.isNaN(valor) || valor < 0) {
//     alert("Valor inserido inválido.");
// } else if (valor < 100) {
//     alert(`Valor final: R$ ${valor}`);
// } else {
//     const resultado = valor - (10 * (valor / 100))
//     alert(`Valor final com desconto: R$ ${resultado}`);
// }

const n1 = Number(prompt("Digite o Primeiro valor: "));
const n2 = Number(prompt("Digite o Segundo valor: "));
const n3 = Number(prompt("Digite o Terceiro valor: "));

if (Number.isNaN(n1) || Number.isNaN(n2) || Number.isNaN(n3)) {
    alert("Valor inválido.");
}else {
    let valorFinal = n1;
    if(n2 > valorFinal){
        valorFinal = n2;
    }
    if (n3 > valorFinal) {
        valorFinal = n3;
    }
    alert(`Valor final ${valorFinal}.`);

    // if ( n1 > n2 && n1 > n3) {
    //     alert(`Valor final ${n1}.`);
    // }else if (n2 > n1 && n2 > n3) {
    //     alert(`Valor final ${n2}.`);
    // }else{
    //     alert(`Valor final ${n3}.`);
    // }
}