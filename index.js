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
straterHtml();


function straterHtml()
{
  return new Promise(function(resolve, reject) {
  let htmlCode = `<!DOCTYPE html>
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
</head>
<body>
<nav class="navbar bg-info bg-dark mb-5">
<span class="mb-0 h1 w-100 text-center">My Team</span>
</nav>
<div class="container">
<div class="row">
`

fs.writeFile('index.html',htmlCode, function (err) {
if(err){
return reject(err)
}
else{
  init();
  return resolve();

}
});
  });
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
      
    
       const managerObj = new Manager(response.managerName,response.managerId,response.managerEmail,response.managerOfficeNumber);
       generateHTML(managerObj);
     
      
if( response.moreTeamMemebers == 'Intern'){
 addIntern(response);
}
else if(response.moreTeamMemebers=='Engineer'){

addEngineer(response);
  
}
else{
  finisherCodeHTML();
}
    })
}

function generateHTML(teamMemObj){
  return new Promise(function(resolve, reject) {
 
  
  const name = teamMemObj.getName();
  const role = teamMemObj.getRole();
  const id = teamMemObj.getId();
  const email = teamMemObj.getEmail();
  let htmlCode = "";
if(role == 'Intern')
{
  const school = teamMemObj.getSchool();
  htmlCode =`<div class="col-6">
       <div class="card mx-auto mb-3  w-50">
<h5 class="card-header  bg-primary bg-dark  text-center">${name}<br /><br />Intern</h5>
<div class="border text-center mr-2">
 <ul>
          <li class="list-group-item  card-class">ID:${id}</li>
             
          <li class="list-group-item  card-class">
          <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=${email}"
                                          target="_blank">Email:${email}</a></li>
       <li class="list-group-item  card-class">School:${school}</li>
      </ul></div></div>
      </div>`
}
else if(role == 'Engineer'){
  const githubName = teamMemObj.getGithub();
  htmlCode =`<div class="col-6 ">
        <div class="card mx-auto mb-3  w-50">
        <h5 class="card-header bg-primary bg-dark text-center">${name}<br /><br />Engineer</h5>
        <div class="border text-center mr-2"><ul>
            <li class="list-group-item  card-class">ID: ${id}</li>
            <li class="list-group-item  card-class">
            <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=${email}"
                                            target="_blank">Email:${email}</a></li>
            <li class="list-group-item  card-class">
            <a href= 'https://github.com/${githubName}'>GitHub Name:${githubName}</a></li>
        </ul>
        </div>
        </div></div>`
}
else if (role == 'Manager'){
  const officeNumber = teamMemObj.getOfficeNumber();
  htmlCode =`<div class="col-6">
        <div class="card mx-auto mb-3  w-50">
        <h5 class="card-header bg-primary bg-dark text-center">${name}<br /><br />Manager</h5>
        <div class="border text-center mr-2"> <ul>
            <li class="list-group-item card-class">ID: ${id}</li>
          
            <li class="list-group-item  card-class">
            <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=${email}"
                                            target="_blank">Email:${email}</a></li>
            <li class="list-group-item card-class">Office Phone: ${officeNumber}</li>
        </ul></div>
        </div></div>`
 }


  



`<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.min.js" integrity="sha384-cn7l7gDp0eyniUwwAZgrzD06kc/tftFf19TOAs2zVinnD/C7E91j9yyk5//jjpt/" crossorigin="anonymous"></script>
`
fs.appendFile('index.html',htmlCode, function (err) {
if (err) {
  return reject(err);
};
return resolve();
});
  });
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
   const internObj = new Intern(response.internName,response.internId,response.internEmail,response.internSchool);
  // obj.role = 'Intern'
   //obj.value=internObj;
  // obj={role:'Intern',...internObj}
 
   generateHTML(internObj)
if(response.moreTeamMemebers == 'Intern')
{
  addIntern(response)
}
else if(response.moreTeamMemebers == 'Engineer'){
  addEngineer(response);
}
else{
  finisherCodeHTML();
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
 
   const engineerObj = new Engineer(response.engineerName,response.engineerId,response.engineerEmail,response.engineerGithub)
   //obj.role = 'Engineer'
     //  obj.value=engineerObj;
    // obj = {role:'Engineer',...engineerObj}
       
       generateHTML(engineerObj)    //  teamMemebers = {Role : 'Manager', value: managerObj}
   
  if(response.moreTeamMemebers == 'Intern')
  {
    addIntern(response)
  }
  else if(response.moreTeamMemebers == 'Engineer'){
    addEngineer(response);
  }
  
   else{
    finisherCodeHTML();
   }
  })
  }
  //{role: "engineer" valuee:{"name":"sas","id":"sa","email":"ass","officeNumber":"asas"}}
  // engineer :{{"name":"sas","id":"sa","email":"ass","officeNumber":"asas"}}

  function finisherCodeHTML()
  {
    let htmlCode =`</div></div>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.3/dist/umd/popper.min.js" integrity="sha384-eMNCOe7tC1doHpGoWe/6oMVemdAVTMs2xqW4mwXrXsW0L84Iytr2wi5v2QjrP/xp" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.min.js" integrity="sha384-cn7l7gDp0eyniUwwAZgrzD06kc/tftFf19TOAs2zVinnD/C7E91j9yyk5//jjpt/" crossorigin="anonymous"></script> 
  </body></html>`

    fs.appendFile('index.html',htmlCode,(err) =>
    err ? console.error(err) : console.log('you have successfully saved the Team memebers profile!')
    );
  }