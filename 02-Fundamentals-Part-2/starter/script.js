'use strict';
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :D');

let apples = 0;
const bannas = 2;

function fruitProcessor(apples, oranges) {
  return apples + oranges + bannas;
}

console.log(fruitProcessor(4, 0));


const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
}

console.log(calcAge2(1971));


const calcAge3 = birthYear => 2037 - birthYear;

const friends = ['Dylan', 'Michael', 'Bob'];
friends.push('John');
console.log(friends);
friends.unshift('Andrew');
console.log(friends);

friends.pop();
console.log(friends);
friends.shift();
console.log(friends);
console.log(friends.indexOf('Bob'));
console.log(friends.includes('Bob'));

*/
let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
}