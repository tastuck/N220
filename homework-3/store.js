const price = 40.99; //price wont change

const salesTax = 0.07; //wont change

const discountRate = 0.10; //wont change

const discountThreshold = 50;//wont change

let totalAfterTax; //will be assigned after its calculated

let isEligibleForDiscount; //will be assigned 

let discountTotalAfterTax; //will be assigned


//calculate
totalAfterTax = price * (1 + salesTax);

if(isEligibleForDiscount) {
    discountTotalAfterTax = totalAfterTax * (1 - discountRate);
} else {
    discountTotalAfterTax = totalAfterTax; //discount not applied
}

console.log('total after tax: $${totalAfterTax.toFixed(2)}');
console.log('discount eligible ${isEligibleForDiscount}');
console.log('discount total after tax $${discountedTotalAfterTax.toFixed(2)}');

