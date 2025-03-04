let frutas = [];
let laticinios = [];
let congelados = [];
let doces = [];
let outros = [];

let adicionarcomida = true;

while(adicionarcomida) {
    const deseja_adicionar = prompt(`Você deseja adicionar uma comida na sua lista de compras? (sim/não)`).toLowerCase();
    
    if(deseja_adicionar === "não"){
        adicionarcomida = false;
        break;
    }

    else if(deseja_adicionar === "sim"){
        alert("por favor responda com sim ou não");
        continue;
    }
    const comida = prompt("qual comida quer adicioanr?");
    const categoria = prompt("Em qual categoria essa comida se encaixa? (frutas, laticínios, congelados, doces, outros)").toLowerCase();

    switch(categoria){
        case "frutas":
            frutas.push(comida);
            break;

        case "laticinios":
            laticinios.push(comida);
            break;
        case "congelados":
            congelados.push(comida);
            break;
        case "doces":
            doces.push(comida);
            break;
        case "outros":
            outros.pusk(comida);
            break;
        default:
            alert("Categoria inválida! Tente novamente.");
    }
}

alert(`Lista de compras:
    Frutas: ${frutas.join(", ") || "Nenhum item"}
    Laticínios: ${laticinios.join(", ") || "Nenhum item"}
    Congelados: ${congelados.join(", ") || "Nenhum item"}
    Doces: ${doces.join(", ") || "Nenhum item"}
    Outros: ${outros.join(", ") || "Nenhum item"}`);