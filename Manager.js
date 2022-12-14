// Structure that used by index.js to create the same parameters as Employee.js but adds office number.
const Employee =require("./Employee")
class Manager extends Employee{
    constructor(name, id, email, office_number){
        super(name, id, email)
    this.office_number = office_number
    }
    getOfficeNumber = () => {
        return this.office_number;
    }
    getRole = () => {
        return "Manager";
    }
}
  
  module.exports = Manager;