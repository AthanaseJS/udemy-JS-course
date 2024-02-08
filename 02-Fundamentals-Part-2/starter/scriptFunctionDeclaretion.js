"use strict";

let hasDriverLicense = false;
const passTest = true;
const currentYear = new Date().getFullYear();

if (passTest) hasDriverLicense = true;
if (hasDriverLicense) console.log("I can drive !");

function logger() {
  console.log("My name is Jones");
}
// calling /running / invoking function

logger();
logger();
logger();

function fruitProcessor(apples, orange) {
  console.log(apples, orange);
  const juice = `Juice with ${apples} apples and ${orange} oranges !`;
  return juice;
}

console.log(fruitProcessor(5, 3));

const appleJuice = console.log(fruitProcessor(5, 0));
console.log(appleJuice);

// Function declaration
function calcAge1(birthDay) {
  const age = currentYear - birthDay;
  return age;
}
const age1 = calcAge1(1968);
console.log(age1);

// Function expression
const calcAge2 = function (birthDay) {
  return currentYear - birthDay;
};
const age2 = calcAge2(2021);
console.log(age2);

// Arrow function
const calcAge3 = (birthYear) => currentYear - birthYear;
console.log(`Sopo birth in 1998 and now she is ${calcAge3("1998")} years old`);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age4 = currentYear - birthYear;
  const retirement = 65 - age4;
  return `${firstName} retires in ${retirement} years !`;
};

console.log(yearsUntilRetirement(1968, "Athanase"));
console.log(yearsUntilRetirement(1970, "Irma"));
