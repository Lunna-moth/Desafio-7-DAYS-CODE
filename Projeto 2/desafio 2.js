const nome = prompt("qual seu nome? ");
const idade = prompt("qual sua idade? ");
const linguagem = prompt("qual sua linguagemd e programação favorita? ");

alert(`ola ${nome} voce tem ${idade} anos de idade e esta aprendendo ${linguagem}`);

const gdl = prompt(`voce gosatd e estudar ${linguagem}?`);

if (gdl == "S") {
    alert(`Otimo, continue estudando e tera sucesso`);
} 
else if(gdl = "N"){
    alert(`Que pena, voce pode tentar estudar outra linguagem`);
}
else{
    alert(`Resposta invalida tente novamente`);
}
