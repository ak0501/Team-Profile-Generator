// jshint esversion:6
const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }
    // name: 'default',
    // id: 'default',
    // email: 'email',
    // github: 'github',
    getgithub() {
            return `Github: ${this.github}`;
        }
        getRole() {
            return `Engineer`;
        }

}



module.exports = Engineer;