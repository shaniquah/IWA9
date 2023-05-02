const salary = 4000;
const lodging = 'apartment'
const size = 'large'


// Only change the syntax below (not the values or key names)

const expenses = {
    food: 51.7501,
    transport:  10.2,
    rent: {
        none: 0,
        'small_room': 200,
        'large_room': 300,
        'small_apartment': 400,
        'large_apartment': 800,
        'small_house': 1200,
        'large_house': 2400,
    },
}
  
const tax = {
    734: '3%',
    234: '20%',
    913: '12%',
    415: '38%',
    502: '42%',
}


// You can change below however you want

const taxAsDecimal = parseInt(tax[913]) / 100;
const startingAfterTax = salary * 1 - (salary * taxAsDecimal);
const type = `${size}_${lodging}`; 
const balance = startingAfterTax - ((expenses.transport) + (expenses.food) + (expenses.rent[type]));
console.log(balance.toFixed(2));

/*
 * BUG FIXES:
 * 
 * Grouped all expenses under same object
 * Nested rent object as a property under main 'element' object
 * rewrote 'tax.913' as 'tax[913]' using proper object literal format
 * Coerced tax[913] to number
 * 
 */