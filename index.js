const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/manager');
const Intern = require('./lib/intern')
const Engineer = require('./lib/engineer')
const Employee = require('./lib/employee');
const teamMemebers= [];
let htmlDiv='';
const questions =["What is team manager's name?","What is team manager's id?","What is team manager's email?",
"What is team manager's office number?","Which type  of team member you like to add?","What is your engineer's name?",
"What is your engineer's id?","What is your engineer's email?","What is your engineer's Github username?",
"What is intern's name?","What is intern's id?","What is intern's email?","What is intern's school?"]
init();


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
      
    let obj = {};
       const managerObj = new Manager(response.managerId,response.managerName,response.managerEmail,response.managerOfficeNumber);
      // obj.role = 'Manager'
       //obj.value=managerObj;
       obj={role: 'Manager',...managerObj}
       teamMemebers.push(obj)
     //  teamMemebers = {Role : 'Manager', value: managerObj}
     for(i=0;i< teamMemebers.length;i++){
      console.log(teamMemebers[i]) 
     }
      
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
  console.log("coming")
  
for(let i=0;i<teamMemebers.length;i++){
console.log(teamMemebers[i])
}
  

//console.log( "length" +  Object.keys(teamMemebers).length)


// for (const property in teamMemebers) {
//   console.log(`${property}: ${JSON.stringify(teamMemebers[property])}`);
//   for (const key in teamMemebers[property]) {
//     if (Object.hasOwnProperty.call( teamMemebers[property], key)) {
//       const element = teamMemebers[property][key];
//       console.log("element:" + JSON.stringify(element));
//       if( element == 'Manager')
//       {
//     htmlDiv += 
//       }
      
//     }
 //}
  var htmlText = `<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <meta name="Description" content="Enter your description here" />
 
  <link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/bootswatch/4.1.3/flatly/bootstrap.min.css"
/>
<link
  rel="stylesheet"
  href="https://use.fontawesome.com/releases/v5.3.1/css/all.css"
  integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU"
  crossorigin="anonymous"
/>
<div class="container">
<div class="row">
`

//}

`<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.min.js" integrity="sha384-cn7l7gDp0eyniUwwAZgrzD06kc/tftFf19TOAs2zVinnD/C7E91j9yyk5//jjpt/" crossorigin="anonymous"></script>
`
fs.writeFile('index.html',htmlText, (err) =>
err ? console.error(err) : console.log('you have successfully saved the info!')
);

}

function addIntern(response)
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
  name: 'internEmail',
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
   let obj ={};
   const internObj = new Intern(response.internId,response.internName,response.internEmail,response.internSchool);
  // obj.role = 'Intern'
   //obj.value=internObj;
   obj={role:'Intern',...internObj}
   teamMemebers.push(obj)
if(response.moreTeamMemebers == 'Intern')
{
  addIntern(response)
}
else if(response.moreTeamMemebers == 'Engineer'){
  addEngineer(response);
}
else{
  generateHTML();
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
name: 'engineerGithub',
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
  let obj = {};
   const engineerObj = new Engineer(response.engineerId,response.engineerName,response.engineerEmail,response.engineerGithub)
   //obj.role = 'Engineer'
     //  obj.value=engineerObj;
     obj = {role:'Engineer',...engineerObj}
       teamMemebers.push(obj)
     //  teamMemebers = {Role : 'Manager', value: managerObj}
     for(i=0;i< teamMemebers.length;i++){
      console.log(teamMemebers[i]) 
     }
  if(response.moreTeamMemebers == 'Intern')
  {
    addIntern(response)
  }
  else if(response.moreTeamMemebers == 'Engineer'){
    addEngineer(response);
  }
  
   else{
     generateHTML();
   }
  })
  }
  //{role: "engineer" valuee:{"name":"sas","id":"sa","email":"ass","officeNumber":"asas"}}
  // engineer :{{"name":"sas","id":"sa","email":"ass","officeNumber":"asas"}}