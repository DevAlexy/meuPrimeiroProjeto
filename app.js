alert('Boas vindas!');
let numeroSecreto = 7;
console.log(numeroSecreto)
let chute
let tentativas = 1;

// enquanto o chute não for igual ao n.s.
while (chute != numeroSecreto) {
    chute = prompt('Escolha um número entre 1 e 10');
    // se o chute for igual ao número secreto
    if (chute == numeroSecreto) {
        break;
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
        // tentativas = tentativas +1;
        tentativas++;
    }

}

if (tentativas > 1) {
    alert(`Isso ai, você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas`);
}
else
    alert(`Isso ai, você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa`); 
