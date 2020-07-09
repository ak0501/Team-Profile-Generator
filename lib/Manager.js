// jshint esversion:6

const Employee = require('./Employee');
class Manager extends Employee {
    constructor(name, id, email, office) {
        super(name, id, email);
        this.office = office;
    }

    getRole() {
        return `Team Manager`;
    }
    getOffice() {
        return `office: ${this.office}`;
    }

}

module.exports = Manager;