const Employee = require("./employee");

class Engineer extends Employee{
    constructor(id,name,email,githubName){
        super(id,name,email)
        this.githubName = githubName;
    }
    getGithub(){
        return this.githubName;
        
    }
    getRole()
    {
        return 'Engineer'
    }
}

module.exports = Engineer;