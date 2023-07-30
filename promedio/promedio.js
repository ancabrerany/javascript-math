function calcularPromedio(lista){
   /*  let result = 0;
    for(let item of listaNumeros){
        result+= item;
    } */

    const result = lista.reduce((valorAcumulado, valorActual) => valorAcumulado + valorActual);

    return (result/lista.length);
}
//[1, 2, 3, 4]

function esImpar (lista){
    return lista.length % 2;
}

function calcularMediana (lista) {
    const listaEsImpar = esImpar(lista);

    if(listaEsImpar){
        
    } else {

    }
}