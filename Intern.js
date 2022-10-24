// Structure that used by index.js to create the same parameters as Employee.js but adds school name.
const Employee =require("./Employee")
class Intern extends Employee{
    constructor(name, id, email, school){
        super(name, id, email)
    this.school = school
    }
    getSchool = () => {
        return this.school;
    }
    getRole = () => {
        return "Intern";
    }
}
  
  module.exports = Intern;