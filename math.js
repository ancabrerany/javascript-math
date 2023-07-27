
console.group('Square');
const ladoCuadrado = 5;
const perimetroCuadrado = ladoCuadrado * 4;
const areaCuadrado = ladoCuadrado * ladoCuadrado;

console.log({ladoCuadrado, perimetroCuadrado, areaCuadrado});

function calculateSquare (side ) {
    return {
        perimeter: side * 4,
        area: side * 2,
    }
}

console.groupEnd('Square');

console.group('Triangle');

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const ladoTrianguloBase = 4;
const alturaTriangulo = 5.5;
const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + ladoTrianguloBase;
const areaTriangulo = (ladoTrianguloBase * alturaTriangulo)/2;

function calculateTriangle (side1, side2, base, height) {
    return {
        perimeter: side1 + side2 + base,
        area: (base * height)/2,
    }
}

function calculateHeightScaleneTriangle (side1, side2, side3){
    const semiperimeter = (side1 + side2 + side3)/2;
    return ((2/side1) * Math.sqrt(semiperimeter * (semiperimeter - side1 )  * (semiperimeter - side2 ) * (semiperimeter - side3 )));
}

function calculateHeightTriangle (side, base) {
    if (side == base){
        console.warn('This is not a isosceles triangle')
    } else {
        // h = squareroot ( side1 **2 - (b**2)/4)
        return Math.sqrt( Math.pow(side, 2) - (Math.pow(base, 2) / 4));        
    }
}

console.log({ladoTriangulo1, ladoTriangulo2, ladoTrianguloBase, 
            perimetroTriangulo, areaTriangulo});

console.groupEnd('Triangle');

console.group('Circle');

     const radioCircle = 3;
     const diameterCircle = radioCircle * 2 ;

     const circumferenceCircle = diameterCircle * Math.PI; 
     const areaCircle = (radioCircle ** 2 ) * Math.PI; 

     console.log({radioCircle, diameterCircle,  circumferenceCircle, areaCircle})  ;
     
     function calculateTCircle (radio) {
        const diameter = radio * 2;
        const radioPow = Math.pow(radio, 2);
        return {
            circumference: diameter * Math.PI,
            area: radioPow * Math.PI,
        }
    }
console.groupEnd('Circle');