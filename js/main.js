'use strict';

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}

function writeThis (word, rep) {
    for(let i = 0; i < rep; i++){
        console.log(i+1, word);
    }
}



const myWordList =  [
    {
      text: 'Pencil',
      total: 6
    },
    {
      text: 'Thermo',
      total: 2
    },
    {
      text: 'TV',
      total: 8
    },
    {
      text: 'Phone',
      total: 4
    }
];

function writeMyArray (){
    for(let i = 0; i < myWordList.length; i++){
        writeThis (myWordList[i].text, getRandomNumber(10));
    }
}

writeMyArray();


