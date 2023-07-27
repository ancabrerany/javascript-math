const price = document.querySelector('.price');
const discount = document.querySelector('.discount');
const result = document.querySelector('.result');

function calcularDescuento (){
    const calculo = (Number(price.value) * (100 - Number(discount.value)))/100;
    result.classList.remove('inactive');
    result.textContent = "El precio total es: " + calculo;
}