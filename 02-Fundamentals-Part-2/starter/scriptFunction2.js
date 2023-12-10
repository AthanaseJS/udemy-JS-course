function cutFruitPieces(fruit) {
    return fruit * 4
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples)
    const orangePieces = cutFruitPieces(oranges)

    console.log(apples, oranges)
    const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges !`
    return juice
}
console.log(fruitProcessor(4,2))

//Arrow function
const calcAge = function(birthYear) {
    return 2023 - birthYear
}

const yearsUntilRetirement = function(birthYear, firstName) {
    const age4 = calcAge(birthYear)
    const retirement = 65 - age4
    if (retirement>0)
        return `${firstName} retires in ${retirement} years !`
    else
      return `${firstName} all ready  retired!`
  }
  
  console.log(yearsUntilRetirement(1944, 'Nadia'))
  console.log(yearsUntilRetirement(1968, 'Athanase'))
  
  onst calcAverage = (score1, score2, score3) => (calc1+calc2+calc3)/calc3

const scoreDelphine = calcAverage ()
const scoreKoalas = calcAverage()