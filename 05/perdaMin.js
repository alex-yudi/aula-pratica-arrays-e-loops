const precos = [30, 10, 54, 76, 1, 4, 35]

let prejuizo = 9999999999999999999;

for (let i = 0; i < precos.length; i++) {
    for (let j = (i + 1); j < precos.length; j++) {
        if (precos[j] < precos[i]) {
            const precoCompra = precos[i];
            const precoVenda = precos[j];
            if ((precoCompra - precoVenda) < prejuizo) {
                prejuizo = precoCompra - precoVenda;
            }
        }
    }
}
console.log(prejuizo)