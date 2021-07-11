const Manager = require("../lib/Manager")


describe("Manager", () => {
    decribe("getNumber", () =>{
        const number = 1234
        const empNumber = new Manager(number)

        expect(empNumber).toequal(number)

    })
})