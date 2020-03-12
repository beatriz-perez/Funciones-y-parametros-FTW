'use strict';

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}
let rn = getRandomNumber(10);

function writeThis (word, rep) {
    for(let i = 0; i < rep; i++){
        console.log(i+1, word);
    }
}
// A todas el mismo número
writeThis('Patata', rn);
writeThis('Aguacate', rn);
writeThis('Pizza', rn);

// a cada una un número distinto
writeThis('Patata', getRandomNumber(10));
writeThis('Aguacate', getRandomNumber(10));
writeThis('Pizza', getRandomNumber(10));
