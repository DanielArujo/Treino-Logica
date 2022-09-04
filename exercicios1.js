const arrayForTests = [6,5,7,14,6,10,2];

class Exercicio1{
}
let array = [5,43,5,67,7,8];

function mostrarArray(array){
    return console.log(array);
}

//Exercicio 2
function escreverVetor(limite){
    let vetor = [];
    for(let i = 0; i < limite; i++ ){
        vetor[i] = i
    }
    return console.log(vetor);
}


//Exercicio 3/4
function startToEnd(start, end){
    let array = [];

    for(i = 0; start <= end; i++){
        array[i] = start;
        start++;
    }

    console.log(array)
}

function endToStart(start, end){
    let array = [];
    
    for(i = 0; end >= start; i++){
        array[i] = end;
        end--;
    }

    console.log(array)
}




//Exercicio 5
function addElements(array){
    let elementNumber = array.length;
    let result = 0;

    for(let i = 0; i < elementNumber; i++){
        result += array[i]
            
    }

    console.log(result);
}



//Exercicio 6
function biggerNumber(array){
    let chosen = 0;
    let arraySize = array.length;

    for(let i = 0; i < arraySize; i++){
        if(array[i] > chosen ){
            chosen = array[i];
        }
    }

    return console.log(chosen)
}


function smallerNumber(array){
    let chosen = array[0];
    let arraySize = array.length;

    for(let i = 0; i < arraySize; i++){
        if(array[i] < chosen ){
            chosen = array[i];
        }
    }

    return console.log(chosen)
}




function secondBiggerNumber(array){
    let chosen = 0;
    let secondChosen = 0;

    let arraySize = array.length;

    for(let i = 0; i < arraySize; i++){
        
        if(array[i] > chosen){
            secondChosen = chosen;
            chosen = array[i];
        }
        if(array[i] < chosen && array[i] > secondChosen){
            secondChosen = array[i]
        }

    }

    return console.log(secondChosen)
}



//DESAFIO!!!
function decimalToBinarie(decimal){
    let number = 0;

    for(let i = 0; decimal != 0 && decimal != 1; i++){
        let resto = decimal % 2;
        decimal = Math.floor(decimal/2);

        if(resto == 1){
            number += "1"; 
        }else{
            number += "0";
        }
        
        if(decimal == 3 || decimal == 2){
            number += "1";
        }
        console.log(Number(number))
    }

}



function noRepeat(array){
    let numeber = 0;
    let correctArray = [];
    for(let i = 0; i < array.length; i++){

        
    }
}

