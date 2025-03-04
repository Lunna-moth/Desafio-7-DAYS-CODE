// Gerar um número aleatório entre 0 e 10
const numeroSecreto = Math.floor(Math.random() * 11);
let tentativas = 3;

while (tentativas > 0) {
    const chute = parseInt(prompt(`Você tem ${tentativas} tentativa(s). Qual seu palpite?`));
    
    if (chute === numeroSecreto) {
        alert("Parabéns! Você acertou o número.");
        break;
    } else {
        tentativas--;
        if (tentativas > 0) {
            alert("Errado! Tente novamente.");
        } else {
            alert(`Você perdeu! O número secreto era ${numeroSecreto}.`);
        }
    }
}
