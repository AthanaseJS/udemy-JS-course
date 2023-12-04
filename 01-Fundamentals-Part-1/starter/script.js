const age = 19
const isOldEnough = (age >= 18)

if(isOldEnough) {
    console.log('Sara can start driving license !')
} else {
    const yearsLeft = isOldEnough - age
    console.log("Sara can't drive a car ! Wait another ${yearsLeft} years")
}

const birthYear = 1991
let century
if(birthYear<=2000) {
    century = 20
} else {
    century = 21
}
console.log(century)

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`)
} else {
  console.log(`John's BMI (${BMIJohn}) is higher than Marks's (${BMIMark})!`)
}

const inputYear = '1991'
// type conversion
console.log(String(23) + Number(inputYear)+23)

// type coercion
console.log( ' I am ' + 23 +' years old!')
console.log('23'-'10'+3)
let n= '1'+ 1
n = n - 1
console.log(n)

// 5 falsy values: 0, '', undefined, null, NaN
console.log(Boolean(0))        // False
console.log(Boolean(NaN))      // False
console.log(Boolean('Jain'))   // True

const money = 0
if(money) {
  console.log(`Don't spend it all !')`)
} else {
  console.log(`You should get a job!`)
}

const favourite = prompt("What is your favourite number ?")
console.log(favourite)
console.log(typeof favourite)

if (favourite == 23) {
  console.log('Cool! 23 is an amazing number')}
else if (favourite == 7) {
  console.log('7 is cool too !')}
else if (favourite == 13 ) {
  console.log('13 is strange number !')}
else {
  console.log ('Number is not 23, 7, 13!')
}

const hasDriverLicense = true 
const hasGoodVision = true
const isTired = true
if(hasDriverLicense && hasGoodVision && !isTired) {
  console.log('Sopo can drive!')
} else {
   console.log(`Sopo can't drive !`)
}

