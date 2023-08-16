const mathProject = {};

mathProject.calcularPromedio = function(lista){
   /*  let result = 0;
    for(let item of listaNumeros){
        result+= item;
    } */

    const result = lista.reduce((valorAcumulado, valorActual) => 
                valorAcumulado + valorActual, 0);

    return (result/lista.length);
}

mathProject.esImpar = function(lista){
    return lista.length % 2;
}

mathProject.calcularMediana = function(lista) {
    lista.sort(function(a, b){return a - b});

    const listaEsImpar = mathProject.esImpar(lista);

    if(listaEsImpar){
        const positionMediana = Math.floor(lista.length/2);
        return lista[positionMediana];
    } else {
        const positionMediana = (lista.length/2);
        return (mathProject.calcularPromedio([lista[positionMediana-1], lista[positionMediana]]));
    }
}

mathProject.calcularModa = function(lista) {
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
    return moda;
    //console.log({listCount, listArray, listaOrdenada, listaMaxNumber});

    //console.log('La moda es: ' + listaMaxNumber[0]);
}


mathProject.calcularMediaPonderada = function(){
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