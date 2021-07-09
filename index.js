const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const fs = require("fs");







const getName = () => {
    inquirer.prompt([
        {
            type: "input",
            message: "What is you employee's name?",
            name: "name"
        },
    ])
}

const getId = () => {
    inquirer.prompt([
        {
            type: "input",
            message: "What is their employee id?",
            name: "id"
        },
    ])
}

const getEmail = () => {
    inquirer.prompt([
        {
            message: "Please enter your email",
            name: "email",
            type: "input",
            default: () => {},
            validate: function (email) {
    
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
    
                if (valid) {
                    console.log("Great job");
                    return true;
                } else {
                    console.log(".  Please enter a valid email")
                    return false;
                }
            }
        },
    ])
}

const getGithub = () => {
    inquirer.prompt([
        {
            type:"input",
            message: "What is the employee's github?",
            name:"github"
        },
    ])
}

const getNumber = () => {
    inquirer.prompt([
        {
            type:"input",
            message: "What is the employee's office number?",
            name: "number"
        },
    ])
}

const getSchool = () => {
    inquirer.prompt([
        {
            type:"input",
            message: "Where does this employee go to school?",
            name: "school"
        },
    ])
}

const addManager = () =>{
    getName()
    
}

const addEngineer = () => {

}

const addIntern = () => {

}

const getRole = () => {
    inquirer.prompt([
        {
            type: "list",
            message: "What position does this emplyee have?",
            choices: ["Manager", "Engineer", "Intern"],
            name: "employeeToAdd"
        }
    ]).then( ({employeeToAdd})  => {
        switch(employeeToAdd){
            case "Manager":
                addManager();
                break;

            case "Engineer":
                addEngineer();
                break;
            
            case "Intern":
                addIntern();
                break;

            default:
                break;
        }
    })

}
getRole();
