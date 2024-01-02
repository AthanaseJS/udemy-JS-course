const jonasArray = [
  'Jonas',
  'Schmedman',
  2037-1991,
  'teacher'
]

const jonas = {
    firstName: 'Jonas',
    lastName : 'Schedtman',
    age: 2037-1991,
    job: 'teacher',
    friends: ['Michael','Peter']
}

console.log(jonas)

const interestedIn = prompt('What do ypu want to know about Jonas? Choose between firstName, lastName, age, job, and friends')
console.log(interestedIn)
console.log(jonas[interestedIn])

if(jonas[interestedIn]) {
    console.log(jonas[interestedIn])
} else {
    console.log('Wrong request!')
}

jonas.location='Portugal'

console.log(jonas)

console.log(`${jonas.firstName} has ${jonas.friends.length+1} friends, and his best friends is called ${jonas.friends[0]}`)