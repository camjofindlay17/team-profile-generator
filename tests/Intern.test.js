const Intern = require("../intern")

const intern = new Intern("Cam", "1", "cam@email.com", "School")

describe("constructor", () => {
    it("return constructor arguments from employee", () => {
        expect(intern.getName()).toEqual("Cam")
        expect(intern.getId()).toEqual("1")
        expect(intern.getEmail()).toEqual("cam@email.com")
    })
})


describe("Get School", () => {
    it("return school", () => {
        expect(intern.getSchool()).toEqual("School")
    })
})

describe("Get Role", () => {
    it("return role", () => {
        expect(intern.getRole()).toEqual("Intern")
    })
})