const letra = "m";

const palavras = ["maca", "mamao", "melao", "melancia", "laranja"];

let quantidadePerdeu = 0;
for (let i = 0; i < palavras.length; i++) {
    if (palavras[i][0] !== letra) {
        quantidadePerdeu++;
    }
}

console.log(quantidadePerdeu);