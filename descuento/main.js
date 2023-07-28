const price = document.querySelector('.price');
const discount = document.querySelector('.discount');
const result = document.querySelector('.result');
const btn = document.querySelector('.buttonDiscount');
const priceCoupon = document.querySelector('.priceCoupon');
const coupon = document.querySelector('.discountCoupon');
const resultCoupon = document.querySelector('.resultCoupon');
const btnCoupon = document.querySelector('.buttonCoupon');
const couponsList = [{coupon: 'HAPPYYEAR', discount: 20},
                     {coupon: 'VALENTINE', discount: 14},
                     {coupon: 'PATRICK15', discount: 15},
                     {coupon: 'THANKSGIV', discount: 20},
                    ];

btn.addEventListener('click',calcularDescuento);
btnCoupon.addEventListener('click',calcularCoupon);

function calcularDescuento (){
    const priceValue = Number(price.value);
    const discountValue = Number(discount.value);

    if(!priceValue || !discountValue) {
        result.classList.remove('inactive');
        result.textContent = "Ingrese los valores correspondientes.";
    } else if (discountValue > 100){
        result.classList.remove('inactive');
        result.textContent = "El descuento debe de ser menor o igual que 100%.";
    } else {
        const calculo = (priceValue * (100 - discountValue))/100;
        result.classList.remove('inactive');
        result.textContent = "El precio total es: " + calculo;
    }
}

function calcularCoupon (){
    const priceCouponValue = Number(priceCoupon.value);
    const couponValue = coupon.value;
    let discountCoupon = 0;
    if(!priceCoupon || !couponValue) {
        resultCoupon.classList.remove('inactive');
        resultCoupon.textContent = "Ingrese los valores correspondientes.";
    } 

    function isCouponInArray (couponElement) {
        return couponElement.coupon == couponValue;
    }

    let couponResult = couponsList.find(isCouponInArray);

    if(couponResult){
        discountCoupon = couponResult.discount;
    } else {
        resultCoupon.classList.remove('inactive');
        resultCoupon.textContent = "Cupón inválido.";
    }

  /* if(couponsList[couponValue]){
     discountCoupon = couponsList[couponValue];
    }  */


   /* switch (couponValue) {
        case 'HAPPYYEAR':
            discountCoupon = 20;
            break;
        case 'VALENTINE':
            discountCoupon = 15;
            break;
        case 'PATRICK15':
            discountCoupon = 15;
            break;
        case 'THANKSGIV':
            discountCoupon = 20;
            break;
        default: 
            discountCoupon = 0;
            break;
    }
 */ 
    const calculo = (priceCouponValue * (100 - discountCoupon))/100;
    resultCoupon.classList.remove('inactive');
    resultCoupon.textContent = "El precio con " + discountCoupon + "% de descuento es: " + calculo;
}
