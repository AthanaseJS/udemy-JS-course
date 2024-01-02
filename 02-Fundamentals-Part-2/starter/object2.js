const jonas = {
    firstName: 'Jonas',
    lastName : 'Schedtman',
    birthYear: 1991,
    age: 2037-1991,
    job: 'teacher',
    friends: ['Michael','Peter'],
    hasDriverLicense: true,

    calcAge: function(year){
        //console.log(this)
        return 2024-year
    }
}

console.log(jonas.calcAge(jonas.birthYear))
console.log(jonas['calcAge'](jonas.birthYear))
console.log(this)

console.log(`${jonas.firstName} is a ${jonas.calcAge(jonas.birthYear)}-ears old ${jonas.job}, and he has ${jonas.hasDriverLicense?'a':'no'} driver's license` )