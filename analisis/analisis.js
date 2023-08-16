console.log(salarios);

function encontrarPersona(personaEnBusqueda){
    return salarios.find(persona => persona.name == personaEnBusqueda);
   
   /* const persona = salarios.find((persona) => {
        return persona.name == personaEnBusqueda;
    })

    return persona;
*/
}

function analisisPorPersona(nombrePersona){
    const trabajos = encontrarPersona(nombrePersona).trabajos;

    const salarios = trabajos.map(function (elemento){
        return elemento.salario;
    });

    const medianaSalarios = mathProject.calcularMediana(salarios);
    return medianaSalarios;
}

function proyeccionPorPersona(nombrePersona){
    const trabajos = encontrarPersona(nombrePersona).trabajos;

    let porcentajesCrecimiento = [];

    for(let i = 1; i < trabajos.length ; i++){
        const salarioActual = trabajos[i].salario;
        const salarioAnterior = trabajos[i-1].salario;

        const crecimiento = salarioActual - salarioAnterior;
        const porcentajeCrecimiento = crecimiento / salarioAnterior;
        porcentajesCrecimiento.push(porcentajeCrecimiento);

    }
    const medianaPorcentajeCreciemiento = mathProject.calcularMediana(porcentajesCrecimiento);
   
    const ultimoSalario = trabajos[trabajos.length - 1].salario;
    const aumento = ultimoSalario * medianaPorcentajeCreciemiento;
    const nuevoSalario = ultimoSalario +aumento;
   // console.log({porcentajesCrecimiento, medianaPorcentajeCreciemiento});
    return nuevoSalario;
}

//Anális empresial
const empresas = {};

    for(persona of salarios){
        for(trabajo of persona.trabajos){
            if (!empresas[trabajo.empresa]){
                empresas[trabajo.empresa] = {};
            }
            
            if(!empresas[trabajo.empresa][trabajo.year]){
                empresas[trabajo.empresa ][trabajo.year] = [];
            }

            empresas[trabajo.empresa][trabajo.year].push(trabajo.salario);
        }

    };
console.log(empresas);

function medianaEmpresasYear (nombreEmpresa, year){
    let salarios = [];

    if(!empresas[nombreEmpresa]){
        console.warn('La empresa no exite');
    } else if (!empresas[nombreEmpresa][year]){
        console.warn('Año no exite');
    }else {
       return mathProject.calcularMediana(empresas[nombreEmpresa][year])
    }

}

function proyeccionPorEmpresa(nombre){
    if(!empresas[nombre]){
        console.warn('La empresa no exite');
    } else {
        const empresaYears = Object.keys(empresas[nombre]);
        const listaMediana = empresaYears.map((year) => {
            return medianaEmpresasYear(nombre, year);
        });
        console.log(listaMediana);
    

    let porcentajesCrecimiento = [];

    for(let i = 1; i < listaMediana.length ; i++){
        const salarioActual = listaMediana[i];
        const salarioAnterior = listaMediana[i-1];

        const crecimiento = salarioActual - salarioAnterior;
        const porcentajeCrecimiento = crecimiento / salarioAnterior;
        porcentajesCrecimiento.push(porcentajeCrecimiento);

    }
    const medianaPorcentajeCreciemiento = mathProject.calcularMediana(porcentajesCrecimiento);
   
    const ultimoMediana = listaMediana[listaMediana.length - 1];
    const aumento = ultimoMediana * medianaPorcentajeCreciemiento;
    const nuevaMediana = ultimoMediana + aumento;
   // console.log({porcentajesCrecimiento, medianaPorcentajeCreciemiento});
    return nuevaMediana;
    }
}

//Análisis general
function medianaGeneral(){
    const listaMediana = salarios.map (persona => analisisPorPersona(persona.name));
    const mediana = mathProject.calcularMediana(listaMediana);

    console.log({listaMediana});
    return mediana;
}

function medianaTop10 (){
    const listaMediana = salarios.map (persona => analisisPorPersona(persona.name));
    listaMediana.sort(function(a, b){return b - a});

    const cantidad = listaMediana.length / 10;

    const top10 = listaMediana.slice(0,cantidad);
    const medianaTop10 = mathProject.calcularMediana(top10);

    //console.log({listaMediana,top10});
    return medianaTop10;
}