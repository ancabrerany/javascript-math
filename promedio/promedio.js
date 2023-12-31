const textArea = document.querySelector('.price');
const promedioBtn = document.querySelector('.btnPromedio');
const mediaBtn = document.querySelector('.btnMedia');
const modaBtn = document.querySelector('.btnModa');
const span = document.querySelector('span');
const result = document.querySelector('.result');



promedioBtn.addEventListener('click',calcularPromedio);
mediaBtn.addEventListener('click',calcularMediana);
modaBtn.addEventListener('click',calcularModa);

function getData (){
    const text = textArea.value;
    const stringArray = text.split(',');
    const textArray = stringArray.map(function(item){
        return parseInt(item);
    });
    return textArray;
}

function calcularPromedio(){
    const lista = getData();
   /*  let result = 0;
    for(let item of listaNumeros){
        result+= item;
    } */

    const result = lista.reduce((valorAcumulado, valorActual) => 
                valorAcumulado + valorActual, 0);

    const promedio =  (result/lista.length);
    span.classList.remove("inactive");
    span.innerHTML = "Promedio : " + promedio ;

    return promedio;  
}

function esImpar(lista) {
    return lista.length % 2;
}

function calcularMediana() {
    const lista = getData();
    lista.sort(function(a, b){return a - b});
    const listaEsImpar = esImpar(lista);
    let mediana = 0;

    if(listaEsImpar){
        const positionMediana = Math.floor(lista.length/2);
        mediana = lista[positionMediana]
    } else {
        const positionMediana = (lista.length/2);
        mediana = (calcularPromedio([lista[positionMediana-1], lista[positionMediana]]));
    }

    span.classList.remove("inactive");
    span.innerHTML = "Mediana : " + mediana ;
    return mediana;
}

function calcularModa() {
    const lista = getData();
    const listCount = {};

    for(let i = 0; i < lista.length; i ++) {
        const element = lista[i];

        if(listCount[element]){
            listCount[element] += 1;
        } else {
            listCount[element] = 1;
        }
    }
    
    function sortArrayBidimensional (arrayUnsorted ,i) {
        function ordenarLista(valorAcumulado, nuevoValor){
            return  nuevoValor[i] - valorAcumulado[i] ;
        }
        const listSorted = arrayUnsorted.sort(ordenarLista);
        return listSorted;
    }

    const listArray = Object.entries(listCount);
    const listaOrdenada = sortArrayBidimensional(listArray, 1);
    const listaMaxNumber = listaOrdenada[0];
    const moda = listaMaxNumber[0];
    

    span.classList.remove("inactive");
    span.innerHTML = "Moda : " + moda ;

    return moda;
    //console.log({listCount, listArray, listaOrdenada, listaMaxNumber});

    //console.log('La moda es: ' + listaMaxNumber[0]);

    
}


function calcularMediaPonderada(){
    let noteArray = [10, 8, 7];
    let creditArray = [2, 5, 5];

     function sumElements (noteArray, creditArray){
        let result = 0 ;
        for(var i = 0 ; i < noteArray.length; i++){
            result+= (creditArray[i] * noteArray[i]);

        }
        return result;
        
     }

     function sumDenominator (creditArray){
        let result = 0 ;
        for(var i = 0 ; i < creditArray.length; i++){
            result+= creditArray[i];

        }
        return result;
     }

     const resultO = sumElements(creditArray, noteArray);
     const resultD = sumDenominator(creditArray);
     const result = resultO / resultD;
     return console.log(`resultado: ${result}`  );
}