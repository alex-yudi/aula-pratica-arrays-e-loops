const precos = [30, 10, 54, 76, 1, 4, 35]

let prejuizo = precos[0];

for (let i = 0; i < precos.length; i++) {
    for (let j = (i + 1); j < precos.length; j++) {
        if (precos[j] < precos[i]) {
            if ((precos[i] - precos[j]) < prejuizo) {
                prejuizo = precos[i] - precos[j];
            }
        }
    }
}
console.log(prejuizo)