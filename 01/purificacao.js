const dadoCorrompido = "$Ailuropoda@ melanoleuca!";

let dadoPurificado = "";

for (let i = 0; i < dadoCorrompido.length; i++) {
    if (
        dadoCorrompido[i] !== "!" &&
        dadoCorrompido[i] !== "@" &&
        dadoCorrompido[i] !== "#" &&
        dadoCorrompido[i] !== "$" &&
        dadoCorrompido[i] !== "%" &&
        dadoCorrompido[i] !== "&" &&
        dadoCorrompido[i] !== "8" &&
        dadoCorrompido[i] !== "(" &&
        dadoCorrompido[i] !== ")" &&
        dadoCorrompido[i] !== "*"
    ) {
        dadoPurificado += dadoCorrompido[i];
    }
}

console.log(dadoPurificado);
