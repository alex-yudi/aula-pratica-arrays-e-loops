const palavra = "abelha";

const palpite = "a";

let contadorAcertos = 0;

for (let i = 0; i < palavra.length; i++) {
    if (palpite === palavra[i]) {
        contadorAcertos++;
    }
}
console.log(contadorAcertos)