let number = prompt("Введіть тризначне число:");
let did = number.split("").map(Number);

let allDid = did.every((digit, index, array) => digit === array[0]);

let sumeDid = did.some((digit, index, array) => array.indexOf(digit) !== index);

console.log("Чи всі цифри однакові?", allDid);
console.log("Чи є серед цифр цифри однакові?", sumeDid);
