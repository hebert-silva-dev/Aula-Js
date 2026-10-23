// //Arrays
// const frutas = ["Maçã", "Laranja" ,"Pera"];
// alert(frutas[0]);
// alert(frutas[2]);
// alert(frutas.length);

// frutas.push("Uva");

// const pessoa = [
//     {nome: "Hebert", idade: 21}
// ]

// pessoa.cidade = "São Paulo";

// alert(pessoa.cidade);

//while
// let i = 1;

// while (i <= 5) {
//     alert("O valor de i é: " + i + ".");
//     i++
// }
// let senha;

// do {
//     senha = prompt("Digite a senha: ")
// } while (senha !== "1234");

//For
// for(let i = 1; i <= 10; i++){
//     alert(`7 X ${i} = ${ 7 * i}`);
// }
// let i = 10
// // while (i > 0) {
// //     alert(`Conte ${i}`);
// //     i--
// // }

// for(i; i >= 1; i--){
//     alert(`Conte ${i}`);
// }

// let soma = 0;

// for(let i = 1; i <= 5; i++){
//     soma += i;
// }

// alert(soma);

//for...of
// const frutas = ["Maçã", "Laranja" ,"Pera"];
// for(const fruta of frutas){
//     alert("Fruta: " + fruta + ".");
// }

//for...in
// const pessoa = {nome: "Hebert", idade: 25, cidade: "São Paulo" };

// for(const chave in pessoa){
//     alert(`${chave} : ${pessoa[chave]}.`);
// }

for (let line = 1; line <= 3; line++) {
    let texto = "";
    for (let colum = 1; colum <= line; colum++) {
        texto += " * ";
        if(line > 1){
            console.log();
        }
    }
    console.log(texto);
}