const Employee = require("../lib/Employee");

describe("Employee", () =>{
    describe("getName", () => {
        it("Should return the name in the employee object", () => {
            const name = "bob";
            const employee = new Employee(name);
            expect(employee).toEqual(name);
        })
    })
    describe("getId", () => {
        it("should return the id value", () => {
            const id = 1234
            const empId = new Employee(id)
            expect(empId).toEqual(id)
        })
    })
    describe("getEmail", () => {
        const email = "bob@gmail.com"
        const empEmail = new Employee(email)
        expect(empEmail).toEqual(email)
    })
    describe("getRole", () => {
        const role = "Employee"
        const empRole = new Employee("Employee")
        expect(empRole).toEqual(role)
    })
});
