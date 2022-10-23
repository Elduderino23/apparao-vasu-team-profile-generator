class Manager{
    constructor(name, id, email, office_number){
    this.name = name,
    this.id = id,
    this.email = email
    this.office_number = office_number
    }
    getName = () => {
        return this.name;
    }
    getID = () => {
        return this.id;
    }
    getEmail = () => {
        return this.email;
    }
    getOfficeNumber = () => {
        return this.office_number;
    }
    getRole = () => {
        return "Manager";
    }
}
  
  module.exports = Manager;