const inquirer = require('inquirer')
const fs = require("fs")
const Manager = require("./Manager.js")
const Engineer = require("./Engineer.js")
const Intern = require("./Intern.js")
const Employee = require("./Employee.js")
const employeeArray = []

const managerQuestion = [{
    name: "name",
    message: "What is the team manager's name?",
    type: "input",

}, {
    name: "id",
    message: "What is the team manager's id?",
    type: "input",

}, {
    name: "email",
    message: "What is the team manager's email?",
    type: "input",

}, {
    name: "office_number",
    message: "What is the team manager's office number?",
    type: "input",

}, {
    name: "roleChoice",
    message: "Which type of team member wold you like to add?",
    type: "list",
    choices: ['Engineer', 'Intern', 'Manager', 'Finish building my team']

}]

const engineerQuestion = [{
    name: "name",
    message: "What is the team engineer's name?",
    type: "input",

}, {
    name: "id",
    message: "What is the team engineer's id?",
    type: "input",

}, {
    name: "email",
    message: "What is the team engineer's email?",
    type: "input",

}, {
    name: "github",
    message: "What is the team engineer's GitHub username?",
    type: "input",

}, {
    name: "roleChoice",
    message: "Which type of team member wold you like to add?",
    type: "list",
    choices: ['Engineer', 'Intern', 'Manager', 'Finish building my team']

}]

const internQuestion = [{
    name: "name",
    message: "What is the team intern's name?",
    type: "input",

}, {
    name: "id",
    message: "What is the team intern's id?",
    type: "input",

}, {
    name: "email",
    message: "What is the team intern's email?",
    type: "input",

}, {
    name: "school",
    message: "What is the team intern's school name?",
    type: "input",

}, {
    name: "roleChoice",
    message: "Which type of team member wold you like to add?",
    type: "list",
    choices: ['Engineer', 'Intern', 'Manager', 'Finish building my team']

}]

// const employeeQuestion = [{
//     name: "name",
//     message: "What is the team employee's name?",
//     type: "input",

// }, {
//     name: "id",
//     message: "What is the team employee's id?",
//     type: "input",

// }, {
//     name: "email",
//     message: "What is the team employee's email?",
//     type: "input",
// }, {
//     name: "roleChoice",
//     message: "Which type of team member wold you like to add?",
//     type: "list",
//     choices: ['Employee', 'Engineer', 'Intern', 'Manager', 'Finish building my team']

// }]

function generateHTML() {
    var htmlBeginner = `
    <!DOCTYPE html>
<html>
<head>
<title>Team Generator</title>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
<link rel="stylesheet" href="https://www.w3schools.com/lib/w3-theme-black.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.3.0/css/font-awesome.min.css">
</head>
<body>

<!-- Header -->
<header class="w3-container w3-theme w3-padding" id="myHeader">
  <div class="w3-center">
  <h4>Team Generator</h4>
  <h1>Your Team</h1>
    <div class="w3-padding-32">
    </div>
  </div>
</header>
    `
    for (let i = 0; i < employeeArray.length; i++) {
        const element = employeeArray[i];

        if (element.getRole() === "Manager") {
            htmlBeginner +=
            `
            <div class="w3-row-padding w3-center w3-margin-top">
            <div class="w3-fifth">
  <div class="w3-card w3-container" style="min-height:460px">
  <h3>Manager</h3><br>
  <i class="fa fa-user-plus w3-margin-bottom w3-text-theme" style="font-size:120px"></i>
  <div>
  <div>name: ${element.name}</div>
  <div>id: ${element.id}</div>
  <div>Email: <a href ="mailto:${element.email}">${element.email}</a></div>
    <div>office number: ${element.office_number}</div>
   </div>
  </div>
</div>
</div>
</div>
    `
        } else if (element.getRole() === "Engineer") {
            htmlBeginner +=
            `
            <div class="w3-row-padding w3-center w3-margin-top">
            <div class="w3-fifth">
  <div class="w3-card w3-container" style="min-height:460px">
  <h3>Engineer</h3><br>
  <i class="fa fa-wrench w3-margin-bottom w3-text-theme" style="font-size:120px"></i>
  <div>
  <div>name: ${element.name}</div>
  <div>id: ${element.id}</div>
  <div><a href ="mailto:${element.email}">${element.email}</a></div>
    <div>Github: <a href ="https://github.com/${element.github}">${element.github}</a></div>
   </div>
  </div>
</div>
    `
        } else if (element.getRole() === "Employee") {
            htmlBeginner +=
            `
            <div class="w3-row-padding w3-center w3-margin-top">
    <div class="w3-row-padding w3-center w3-margin-top">
<div class="w3-fifth">
  <div class="w3-card w3-container" style="min-height:460px">
  <h3>Employee</h3><br>
  <i class="fa fa-user w3-margin-bottom w3-text-theme" style="font-size:120px"></i>
 <div>
  <div>name: ${element.name}</div>
  <div>id: ${element.id}</div>
  <div><a href ="mailto:${element.email}">${element.email}</a></div>
 </div>
  </div>
</div>
    `
        } else if (element.getRole() === "Intern") {
            htmlBeginner +=
            `
            <div class="w3-row-padding w3-center w3-margin-top">
            <div class="w3-fifth">
  <div class="w3-card w3-container" style="min-height:460px">
  <h3>Intern</h3><br>
  <i class="fa fa-child w3-margin-bottom w3-text-theme" style="font-size:120px"></i>
  <div>
  <div>name: ${element.name}</div>
  <div>id: ${element.id}</div>
  <div>email: <a href ="mailto:${element.email}">${element.email}</a></div>
    <div>school: ${element.school}</div>
   </div>
  </div>
</div>
     `
        }

    }
    htmlBeginner +=
    `
    </div>
</div>
<br>

<!-- Footer -->
<footer class="w3-container w3-theme-dark w3-padding-16">
    <h3>Footer</h3>
    <div style="position:relative;bottom:55px;" class="w3-tooltip w3-right">
      <span class="w3-text w3-theme-light w3-padding">Go To Top</span>    
      <a class="w3-text-white" href="#myHeader"><span class="w3-xlarge">
      <i class="fa fa-chevron-circle-up"></i></span></a>
    </div>
</footer>
    `
    return htmlBeginner
}

function userChoice(nextRole) {
    switch (nextRole) {
        case ("Employee"):
            employee()
            break;
        case ("Engineer"):
            engineer()
            break;
        case ("Intern"):
            intern()
            break;
        case ("Manager"):
            manager()
            break;
        default:
            var makeHTML = generateHTML()
            fs.writeFile("Sample.html", makeHTML, error =>{
                console.log(error)
            });
            break;
    }
}

function manager() {
    inquirer.prompt(managerQuestion).then(function (data) {
        var newManager = new Manager(data.name, data.id, data.email, data.office_number)
        employeeArray.push(newManager)
        userChoice(data.roleChoice)
    })
}

function engineer() {
    inquirer.prompt(engineerQuestion).then(function (data) {
        var newEngineer = new Engineer(data.name, data.id, data.email, data.github)
        employeeArray.push(newEngineer)
        userChoice(data.roleChoice)
    })
}

function intern() {
    inquirer.prompt(internQuestion).then(function (data) {
        var newIntern = new Intern(data.name, data.id, data.email, data.school)
        employeeArray.push(newIntern)
        userChoice(data.roleChoice)
    })
}

function employee() {
    inquirer.prompt(employeeQuestion).then(function (data) {
        var newEmployee = new Employee(data.name, data.id, data.email)
        employeeArray.push(newEmployee)
        userChoice(data.roleChoice)
    })
}


manager();
// module.exports = generateHTML, userChoice, manager, engineer, intern, employee;
// var makeHTML = generateHTML(data)
// writeToFile("Sample.html", makeHTML);