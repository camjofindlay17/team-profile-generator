const Engineer = require("../engineer")

const engineer = new Engineer("Cam", "1", "cam@email.com", "gitHub")

describe("constructor", () => {
    it("return constructor arguments from employee", () => {
        expect(engineer.getName()).toEqual("Cam")
        expect(engineer.getId()).toEqual("1")
        expect(engineer.getEmail()).toEqual("cam@email.com")
    })
})


describe("Get GitHub", () => {
    it("return gitHub", () => {
        expect(engineer.getGithub()).toEqual("gitHub")
    })
})

describe("Get Role", () => {
    it("return role", () => {
        expect(engineer.getRole()).toEqual("Engineer")
    })
})