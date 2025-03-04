let area = prompt("Voce pretende seguir no Back-end ou no Front-end");

if(area === "Front-en"){
    let tecnologia = prompt("Voce quer aprender React ou Vue");
alert(`Que legal, voce escolheu ${tecnologia} no seu front-end `);
}

else if(area === "Back-end"){
    let tecnologia = prompt("Voce quer aprender C# ou Java");
    alert(`Legal voce escolheu ${tecnologia}`);
}

else{
    alert('Opção invalida, escolha front ou back-end');
}

let carreira = prompt(`Voce quer se especializar na are escolhida  ou se tornar Full stack`);

if(carreira === "especializar"){
    alert("Otima escolha. Se aprofundar é otimo para carreria");
}

else if(carreira === "Full stack"){
    alert("Ser um full stack vai te abrir diversas portas");
}

else{
    ('Opção invalida, escolha especializar ou Full stack');
}

let tecnologia = [];
let continuar = "ok";

while(continuar === "ok"){
    let novatech = prompt("Qual tecnologia voce gostaria de aprender?");
    tecnologia.push(novatech);
    alert(`Insano! continue aprendendo sobre ${novatech}`);
    continuar = prompt("Tem mais alguma tecnologias que voce gostaria de aprender")
}

alert("Essas sao as tecnologias que voce deseja aprender: " +tecnologia.join(", "));