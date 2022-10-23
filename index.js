const inquirer = require('inquirer')
const fs = require("fs")







function init() {}


init();
inquirer.prompt([{
    name: "ManagerQuestionOne", 
    message: "What is the team manager's name?",
    type: "input",

}, {
    name: "ManagerQuestionTwo", 
    message: "What is the team manager's id?",
    type: "input",

}, {
    name: "ManagerQuestionThree", 
    message: "What is the team manager's email?",
    type: "input",

}, {
    name: "ManagerQuestionFour", 
    message: "What is the team manager's office number?",
    type: "input",    

}, {
    name: "RoleChoice", 
    message: "Which type of team member wold you like to add?",
    type: "list",
    choices: ['Employee', 'Engineer', 'Intern', 'Manager', 'Finish building my team']

}, {
    name: "EngineerQuestionOne", 
    message: "What is the team engineer's name?",
    type: "input",

}, {
    name: "EngineerQuestionTwo", 
    message: "What is the team engineer's id?",
    type: "input",

}, {
    name: "EngineerQuestionThree", 
    message: "What is the team engineer's email?",
    type: "input",

}, {
    name: "EngineerQuestionFour", 
    message: "What is the team engineer's GitHub username?",
    type: "input",    

}, {
    name: "RoleChoiceTwo", 
    message: "Which type of team member wold you like to add?",
    type: "list",
    choices: ['Employee', 'Engineer', 'Intern', 'Manager', 'Finish building my team']

}, {
    name: "InternQuestionOne", 
    message: "What is the team intern's name?",
    type: "input",

}, {
    name: "InternQuestionTwo", 
    message: "What is the team intern's id?",
    type: "input",

}, {
    name: "InternQuestionThree", 
    message: "What is the team intern's email?",
    type: "input",

}, {
    name: "InternQuestionFour", 
    message: "What is the team intern's school name?",
    type: "input",    

}, {
    name: "RoleChoiceThree", 
    message: "Which type of team member wold you like to add?",
    type: "list",
    choices: ['Employee', 'Engineer', 'Intern', 'Manager', 'Finish building my team']

}, {
    name: "EmployeeQuestionOne", 
    message: "What is the team employee's name?",
    type: "input",

}, {
    name: "EmployeeQuestionTwo", 
    message: "What is the team employee's id?",
    type: "input",

}, {
    name: "EmployeeQuestionThree", 
    message: "What is the team employee's email?",
    type: "input",
}, {
    name: "RoleChoiceFour", 
    message: "Which type of team member wold you like to add?",
    type: "list",
    choices: ['Employee', 'Engineer', 'Intern', 'Manager', 'Finish building my team']    
}]).then(function(data){
    var makeHTML = generateHTML(data)
    writeToFile("Sample.html", makeHTML);
    
})