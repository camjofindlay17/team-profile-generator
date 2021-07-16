const inquirer = require('inquirer')


const menu = () => {
    const menu = [
      {
        type: 'list',
        message: 'Please select an employee to add',
        choices: ['Add Intern', 'Add Engineer', 'Exit'],
        name: 'manAdd',
    }
    ]
  
    return inquirer.prompt(menu)
  }
  
  menu()

modules.export = 'menu'