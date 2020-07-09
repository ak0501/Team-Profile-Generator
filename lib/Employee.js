// jshint esversion:6
// all managers / engineers/interns are employees but not the other way around

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return `Name: ${this.name}`;
    }
    getId() {
        return `ID: ${this.id}`;
    }
    getEmail() {
        return `Email: ${this.email}`;
    }

}

module.exports = Employee;