const radius = 5; //radius won't change, so its constant

let area; //will be assigned after calculating, so its let

let perimeter; //will be assigned after calculating, so its let

area = Math.PI * Math.pow(radius, 2)//area is pi x radius ^2, pi is denoted with math.pi. power is MATH.pow for r^2

perimeter = 2 * Math.pi * radius; //perimeter is 2 x pi x r

console.log('area of circle is: ${area.toFixed(2)}'); //rounds to second decimal place
console.log('perimeter of circle is: ${perimeter.toFixed(2)}'); //rounds to second decimal place