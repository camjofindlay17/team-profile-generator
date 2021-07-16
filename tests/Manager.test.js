const Manager = require("../manager")

const manager = new Manager("Cam", "1", "cam@email.com", "1")

describe("constructor", () => {
    it("return constructor arguments from employee", () => {
        expect(manager.getName()).toEqual("Cam")
        expect(manager.getId()).toEqual("1")
        expect(manager.getEmail()).toEqual("cam@email.com")
    })
})


describe("Get Office Number", () => {
    it("return number", () => {
        expect(manager.getOffNum()).toEqual("1")
    })
})

describe("Get Role", () => {
    it("return role", () => {
        expect(manager.getRole()).toEqual("Manager")
    })
})