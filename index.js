const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const fs = require("fs");


// const questions = [
//     {
//         type: "input",
//         message: "What is you employee's name?",
//         name: "name"
//     },
//     {
//         type: "input",
//         message: "What is their employee id?",
//         name: "id"
//     },
//     {
//         message: "Please enter your email",
//         name: "email",
//         type: "input",
//         default: () => {},
//         validate: function (email) {

//             valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)

//             if (valid) {
//                 console.log("Great job");
//                 return true;
//             } else {
//                 console.log(".  Please enter a valid email")
//                 return false;
//             }
//         }
//     },


// ]

// const managerQuestion = {
//     type:"input",
//     message: "What is the employee's office number?",
//     name: "number"
// }



// const getName = () => {
//     inquirer.prompt([
//         {
//             type: "input",
//             message: "What is you employee's name?",
//             name: "name"
//         },
//     ])
// }

// const getId = () => {
//     inquirer.prompt([
//         {
//             type: "input",
//             message: "What is their employee id?",
//             name: "id"
//         },
//     ])
// }

// const getEmail = () => {
//     inquirer.prompt([
//         {
//             message: "Please enter your email",
//             name: "email",
//             type: "input",
//             default: () => {},
//             validate: function (email) {
    
//                 valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
    
//                 if (valid) {
//                     console.log("Great job");
//                     return true;
//                 } else {
//                     console.log(".  Please enter a valid email")
//                     return false;
//                 }
//             }
//         },
//     ])
// }

let empArray = [];

// const getGithub = () => {
//     inquirer.prompt([
//         {
//             type:"input",
//             message: "What is the employee's github?",
//             name:"github"
//         },
//     ])
// }

// const getNumber = () => {
//     inquirer.prompt([
//         {
//             type:"input",
//             message: "What is the employee's office number?",
//             name: "number"
//         },
//     ])
// }

// const getSchool = () => {
//     inquirer.prompt([
//         {
//             type:"input",
//             message: "Where does this employee go to school?",
//             name: "school"
//         },
//     ])
// }

const addManager = () =>{
    inquirer.prompt([
        {
            type: "input",
            message: "What is you employee's name?",
            name: "name"
        },
        {
            type: "input",
            message: "What is their employee id?",
            name: "id"
        },
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
        {
            type:"input",
            message: "What is the employee's office number?",
            name: "number"
        },
    
    ]).then(data => {
        let {name, id, email, number} = data
        let manager = new Manager(name, id, email, number)

        empArray.push(manager);
        console.log(manager);
        init();
    })

    
};

const addEngineer = () => {
    inquirer.prompt([
        {
            type: "input",
            message: "What is you employee's name?",
            name: "name"
        },
        {
            type: "input",
            message: "What is their employee id?",
            name: "id"
        },
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
        {
            type:"input",
            message: "What is the employee's github?",
            name:"github"
        },

    ]).then(data => {
        const {name, id, email, github} = data
        const engineer = new Engineer(name, id, email, github)
        empArray.push(engineer)
        init()
    })
};

const addIntern = () => {
    inquirer.prompt([
        {
            type: "input",
            message: "What is you employee's name?",
            name: "name"
        },
        {
            type: "input",
            message: "What is their employee id?",
            name: "id"
        },
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
        {
            type:"input",
            message: "Where does this employee go to school?",
            name: "school"
        },

    ]).then( data => {
        const {name, id, email, school} = data;
        const intern = new Intern(name, id, email, school);
        empArray.push(intern)
        init();
    })

};

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
        return empArray
    })

};

const init = () =>{
    inquirer.prompt(
        {
            type: "list",
            message: "Would you like to add another employee",
            choices: ["Yes", "No"],
            name: "initialChoice"
        }
    ).then( resp  => {
        switch(resp.initialChoice){
            case "Yes":
                getRole();
                break;

            case "No":
                break;
        }
    })
};



init();
// getRole(console.log(empArray));
// addManager();
// console.log(empArray)