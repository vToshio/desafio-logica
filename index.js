//  Define a importação da biblioteca prompt-sync
//e função de prompt para obter o input do usuário.
'use strict';
const prompt = require('prompt-sync')({sigint: true});
var history = []


// Função que define o nível do Herói
function defineLevel(xp) {
    let level;

    if (xp<=1000) {
        level = 'Ferro'
    } else if (xp>1000 && xp<=2000) {
        level = 'Bronze';
    } else if (xp>2000 && xp<=5000) {
        level = 'Prata';
    } else if (xp>5000 && xp<=7000) {
        level = 'Ouro';
    } else if (xp>7000 && xp<=8000) {
        level = 'Platina';
    } else if (xp>8000 && xp<=9000) {
        level = 'Ascendente';
    } else if (xp>9000 && xp<=10000) {
        level = 'Imortal';
    } else {
        level = 'Radiante';
    }

    return level;
}

// Execução da parte principal do programa
while (true) {
    let nome = prompt('Insira o nome do herói: ');
    let xp = parseInt(prompt(`Insira a quantidade de XP do ${nome}: `));
    let nivel = defineLevel(xp);

    console.log(`O Herói de nome ${nome} está no nível de ${nivel}\n`);

    history.push([nome, xp, nivel]);

    if (parseInt(prompt('Deseja continuar as operações? (1=Sim, 2=Não): ')) == 2)
        break;
}

console.log('\nHistórico de Heróis:')
history.forEach((item) => {
    console.log(`Herói ${item[0]} - ${item[1]}XP - Nível ${item[2]}`)
})