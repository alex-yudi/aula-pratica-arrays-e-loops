const palavras = ["aeia", "manha", "ae"];

const primeiraLetra = "a";
const segundaLetra = "v";

let contadorPalavras = 0;
for (let i = 0; i < palavras.length; i++) {
    if (palavras[i][0] === primeiraLetra && palavras[i][1] === segundaLetra) {
        console.log(palavras[i]);
        contadorPalavras++;
    }
}
if (contadorPalavras === 0) {
    console.log("NENHUMA");
}
