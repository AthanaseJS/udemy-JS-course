/* Write your code below. Good luck! 🙂 */

const mark = {
    fullName :'Mark Miller',
    mass : 78,
    height : 1.69,
    BMI : 0,
    calcBMI: function(){
        this.BMI = this.mass/(this.height**2)
        return this.BMI
    }
}

const john = {
    fullName :'John Smith',
    mass : 92,
    height : 1.95,
    BMI : 0,
    calcBMI: function(){
        this.BMI = this.mass/(this.height**2)
        return this.BMI
    }
}
mark.calcBMI()
john.calcBMI()
console.log(`${mark.BMI>john.BMI ? mark.fullName : john.fullName}'s BMI (${mark.BMI>john.BMI? mark.BMI : john.BMI}) is hogher than ${mark.BMI>john.BMI?  john.fullName: mark.fullName}`)
