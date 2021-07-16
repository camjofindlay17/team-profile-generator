const Employee = require('./employee.js')


class Manager extends Employee {
    constructor(name, id, email, officeNumber) {        
        super(name, id, email) 
        this.officeNumber = officeNumber
    }

getOffNum() {
    return this.officeNumber
}

getRole(){
    return 'Manager'
}
}

module.exports = Manager