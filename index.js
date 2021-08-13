const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/manager');
const Intern = require('./lib/intern')
const Engineer = require('./lib/engineer')
const Employee = require('./lib/employee');

const questions =["What is team manager's name?","What is team manager's id?","What is team manager's email?",
"What is team manager's office number?","Which type  of team member you like to add?","What is your engineer's name?",
"What is your engineer's id?","What is your engineer's email?","What is your engineer's Github username?",
"What is intern's name?","What is intern's id?","What is intern's email?","What is intern's school?"]
init();
const teamMemebers =[];
function writeToFile(data){


}

function init()
{
  console.log('Please build your team');
    inquirer
    .prompt([
      {
        type: 'input',
        message: questions[0],
        name: 'managerName',
        validate :(value) => {if(value) return true; else return `Please enter team manager's name to continue` }
      },
      {
        type: 'input',
        message: questions[1],
        name: 'managerId',       
        validate :(value) => {if(value) return true; else return `Please enter team manager's id to continue` }
      },
      {
        type: 'input',
        message: questions[2],
        name: 'managerEmail',
        validate :(value) => {if(value) return true; else return `Please enter team manager's email to continue` }
      }, {
        type: 'input',
        message: questions[3],
        name: 'managerOfficeNumber',
        validate :(value) => {if(value) return true; else return `Please enter team manager's office number to continue` }
      },
       {
        type: 'list',
        message: questions[4],
        name: 'moreTeamMemebers',
        choices :['Intern','Engineer',"I don't want to add any more team members"],
        validate :(value) => {if(value) return true; else return `Please enter  to continue` }
      }

          ])
    .then(function(response){
       let messageVar = '';
       let validateText ='';
if( response.moreTeamMemebers == 'Intern'){
 
addIntern(response);
}
else if(response.moreTeamMemebers=='Engineer'){
addEngineer(response);
  
}
else{
 generateHTML();
}
    })
}

function generateHTML(){
`<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <meta name="Description" content="Enter your description here" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">`
  

}
function addIntern(respone)
{

  inquirer
  .prompt([
    {
      type: 'input',
      message: questions[9],
      name: 'internName',
      validate :(value) => {if(value) return true; else return `Please enter intern's name to continue?`}
    },
   { type: 'input',
    message: questions[10],
    name: 'internId',
    validate :(value) => {if(value) return true; else return `Please enter intern's id to continue?`}
  },
  { type: 'input',
  message: questions[11],
  name: 'internemail',
  validate :(value) => {if(value) return true; else return `Please enter intern's email to continue?`}
},
{ type: 'input',
message: questions[12],
name: 'internSchool',
validate :(value) => {if(value) return true; else return `Please enter intern's school to continue?`}
},
{
  type: 'list',
  message: questions[4],
  name: 'moreTeamMemebers',
  choices :['Intern','Engineer',"I don't want to add any more team members" ],
  validate :(value) => {if(value) return true; else return `Please select to continue` }
}
 ])
 .then(function(response){
if(response.moreTeamMemebers == 'Intern')
{
  addIntern(response)
}
else if(response.moreTeamMemebers == 'Engineer'){
  addEngineer(response);
}
 })
}
function addEngineer(response){
  inquirer
  .prompt([
    {
      type: 'input',
      message: questions[5],
      name: 'engineerName',
      validate :(value) => {if(value) return true; else return `Please enter engineer's name to continue?`}
    },
   { type: 'input',
    message: questions[6],
    name: 'engineerId',
    validate :(value) => {if(value) return true; else return `Please enter engineer's id to continue?`}
  },
  { type: 'input',
  message: questions[7],
  name: 'engineerEmail',
  validate :(value) => {if(value) return true; else return `Please enter engineer's email to continue?`}
},
{ type: 'input',
message: questions[8],
name: 'iengineerGithub',
validate :(value) => {if(value) return true; else return `Please enter engineer's github to continue?`}
},
{
  type: 'list',
  message: questions[4],
  name: 'moreTeamMemebers',
  choices :['Intern','Engineer',"I don't want to add any more team members" ],
  validate :(value) => {if(value) return true; else return `Please select to continue` }
}
 ])
 .then(function(response){
  if(response.moreTeamMemebers == 'Intern')
  {
    addIntern(response)
  }
  else if(response.moreTeamMemebers == 'Engineer'){
    addEngineer(response);
  }
   })
  }