const Employee = require("./Employee");

class Engineer extends Employee{
    constructor(name, id, email, github){
        super(name, id, "engineer", email)
        this.github = github
    }
}

module.exports = Engineer;