// Structure that used by index.js to create the same parameters as Employee.js but adds github username.
const Employee =require("./Employee")
class Engineer extends Employee{
    constructor(name, id, email, github){
        super(name, id, email)
    this.github = github
    }
    getGitHub = () => {
        return this.github;
    }
    getRole = () => {
        return "Engineer";
    }
}
  
  module.exports = Engineer;