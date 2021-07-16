const Employee = require("../employee")

const employee = new Employee("Cam", "1", "cam@email.com")

describe("Get Name", () => {
    it("return employee", () => {

        expect(employee.getName()).toEqual("Cam")
    })
})

describe("Get ID", () => {
    it("return ID", () => {

        expect(employee.getId()).toEqual("1")
    })
})

describe("Get Email", () => {
    it("return email", () => {

        expect(employee.getEmail()).toEqual("cam@email.com")
    })
})