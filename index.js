const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/manager');
const Intern = require('./lib/intern')
const Engineer = require('./lib/engineer')
const Employee = require('./lib/employee');

const questions =['What is team member name','Select team member role','Enter team member id','Enter email address','Enter the manger office number','Enter the name of the school','Enter github username']
init();
function writeToFile(data){


}

function init()
{
    inquirer
    .prompt([
      {
        type: 'input',
        message: questions[0],
        name: 'name',
        validate :(value) => {if(value) return true; else return 'Please enter team member name to continue' }
      },
      {
        type: 'list',
        message: questions[1],
        name: 'role',
        choices:['Manager','Engineer','intern'],
        validate :(value) => {if(value) return true; else return `Please select team member's role to continue` }
      },
      {
        type: 'input',
        message: questions[3],
        name: 'id',
        validate :(value) => {if(value) return true; else return 'Please enter team member ID' }
      }, {
        type: 'input',
        message: questions[4],
        name: 'id',
        validate :(value) => {if(value) return true; else return 'Please enter team member Email' }
      },

          ])
    .then(function(response){
       let messageVar = '';
       let validateText ='';
if( response.role == 'Manager'){
messageVar = questions[4];
validateText ='office number'

}
else if(response.role=='Engineer'){

    messageVar = questions[6];
    validateText ='Github username'
}
else{
    messageVar = questions[5];
    validateText ='School name'
}
    inquirer
    .prompt([
      {
        type: 'input',
        message: messageVar,
        name: 'id',
        validate :(value) => {if(value) return true; else return `Please enter team member's ${validateText}` }
      }
    ])


    })
}