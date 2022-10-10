var inquirer = require('inquirer');
const cp = require('child_process');  // child process module for including links using execSync

function displayList()
{
    inquirer.prompt([
      {
    /* Pass your questions in here */
    type : 'list',
    // type: (String) Type of the prompt. Defaults: input - 
    // Possible values: input, number, confirm, list, rawlist, expand, checkbox, password, editor
    name : 'selection' ,
    // any name can be given, name variable keeps track of selected value and stores in selectio variable(as a key)
    choices : ['About' , 'skills', 'academics', 'project']
    // array for choices
      }
  ])
  .then(function(answer) {
    // Use user feedback for... whatever!!
   if(answer.selection == 'About')  // value i place of selection
   {
console.log(`                                  Welcome to my Resume
               I am a Front-End & Android Developer and a programming enthusiast.
                      I 🧡 to read fiction and play Guitar.`);   //inside a backtick
                      displayNext()
   }
   else if(answer.selection == 'skills')
   {
    console.log('HTML, CSS,JS, NPM, NODEJS, C++, JAVA, GIT, FLUTTER');
    displayNext()

   }
   else if(answer.selection == 'academics')//answer,selection contsins selected vallue key
   {
    cp.execSync('start chrome http://www.linkedin.com/in/shubham-mundhra')
    // redirecting to chrome and linkedin
     displayNext()
   }
   else if(answer.selection == 'project')
   {
    cp.execSync('start chrome https://drive.google.com/file/d/1DzgqO0qZk8jJhL9uyFwatzYYQvhkxg5U/view?usp=drivesdk');
    //ecexSyn to go to github for projects
     displayNext()
   }
  });
}

displayList()

//GoBack Options

function displayNext()
{
    inquirer.prompt([
      {
    /* Pass your questions in here */
    type : 'list',
    // type: (String) Type of the prompt. Defaults: input - 
    // Possible values: input, number, confirm, list, rawlist, expand, checkbox, password, editor
    name : 'selection' ,
    // any name can be given, name variable keeps track of selected value and stores in selectio variable(as a key)
    choices : ['Go Back','exit']
    // array for choices
      }
  ])
  .then(function(answer) {
    // Use user feedback for... whatever!!
   if(answer.selection == 'Go Back')  // value i place of selection
   {
       displayList();
   }
   else if(answer.selection == 'exit')
   {
       console.log("Resume Closed");
   }
  })
}