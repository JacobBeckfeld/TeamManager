const Engineer = require("../lib/Engineer");

describe("getGithub", () => {
    it("should return the input for github", () => {
        const github = "bob";
        const empGithub = new Engineer(github)
        expect(empGithub).toEqual(github)
    })
})