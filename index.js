const inquirer = require('inquirer')
const fs = require('fs')
const Manager = require('./manager.js')
const Engineer = require('./engineer.js')
const Intern = require('./intern.js')

const questions = {
    menu: {
          type: 'list',
          message: 'Please select an employee to add',
          choices: ['Add Intern', 'Add Engineer', 'Exit'],
          name: 'menu',
    },
    manager: {
        questions: [
          {
              type: 'input',
              message: 'Please enter your name',
              name: 'manName'
          },
          {
              type: 'input',
              message: 'Please enter your employee ID',
              name: 'manId'
          },
          {
              type: 'input',
              message: 'Please enter your email',
              name: 'manEmail'
          },
          {
              type: 'input',
              message: 'Please enter your office number',
              name: 'manOffice'
          },
        ]
    },
    intern: {
        questions: [
          {
            type: 'input',
            message: 'Please enter the intern name',
            name: 'intName'
          },
          {
            type: 'input',
            message: 'Please enter the intern ID',
            name: 'intId'
          },
          {
            type: 'input',
            message: 'Please enter the intern email',
            name: 'intEmail'
          },
          {
            type: 'input',
            message: 'Please enter the intern school',
            name: 'intSchool',
          },
        ]
    },
    engineer: {
        questions: [
          {
            type: 'input',
            message: 'Please enter employee name',
            name: 'empName'
          },
          {
            type: 'input',
            message: 'Please enter the employee ID',
            name: 'empId'
          },
          {
            type: 'input',
            message: 'Please enter the employee email',
            name: 'empEmail'
          },
          {
            type: 'input',
            message: 'Please enter employee GitHub username',
            name: 'empGithub',
          },
        ]
    },
}

let manRes
const engData = []
const intData = []

const writeHTML = () => {
    const head = `
    <!DOCTYPE html>
    <html>

    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
        <title>Tech Team</title>
    </head>

    <body style="background-color: whitesmoke">
        <nav class="navbar navbar-light" style="background-color: rgb(203,172,167)" >
            <span class="navbar-brand mb-0 h1">The Tech Team</span>
        </nav>
        <div class="container">
            <div class="row" >
    `

    let body = `
    <div class="col-4" style="margin-top: 25px">
        <div class="card">
          <div class="card-header" style="background-color: bisque;">
            <div style="font-size: 25px">${manRes.getName()}</div>
            <div style="font-size: 20px">${manRes.getRole()}</div>
          </div>
          <div class="card-body">
            <p class="card-text">ID: ${manRes.getId()}</p>
            <p class="card-text">Email: ${manRes.getEmail()}</p>
            <p class="card-text">Office: ${manRes.getOffNum()}</p>
          </div>
        </div>
    </div>
    `

    if (intData) {
        intData.forEach(data => {
            const intCard = `
            <div class="col-4" style="margin-top: 25px">
              <div class="card">
                <div class="card-header" style="background-color: bisque;">
                    <div style="font-size: 25px">${data.getName()}</div>
                    <div style="font-size: 20px">${data.getRole()}</div>
                </div>
                <div class="card-body">
                  <p class="card-text">ID: ${data.getId()}</p>
                  <p class="card-text">Email: ${data.getEmail()}</p>
                  <p class="card-text">School: ${data.getSchool()}</p>
                </div>
              </div>
            </div>
            `
        body += intCard
        })
    }

    if (engData) {
        engData.forEach(data => {
            const engCard = `
            <div class="col-4" style="margin-top: 25px">
                <div class="card">
                  <div class="card-header" style="background-color: bisque;">
                      <div style="font-size: 25px">${data.getName()}</div>
                      <div style="font-size: 20px">${data.getRole()}</div>
                  </div>
                  <div class="card-body">
                    <p class="card-text">ID: ${data.getId()}</p>
                    <p class="card-text">Email: ${data.getEmail()}</p>
                    <p class="card-text">Github: <a href="github.com/${data.getGithub()}">${data.getGithub()}</a> </p>
                  </div>
                </div>
            </div>
            `
        body += engCard
        })
    }

    const end = `
                </div>
            </div>
        </body>
    </html>
    `

    const html = head + body + end

    fs.writeFile('index.html', html, err => {
        if (err) {
            console.log(err)
        } else {
            console.log("HTML created")
        }
    })

}

const createCard = () => {
    const askQs = input => {
        if (input["menu"] === 'Add Intern') {
            inquirer.prompt(questions.intern.questions)
            .then(data => {
                intData.push(
                    new Intern(
                        data["intName"],
                        data["intId"],
                        data["intEmail"],
                        data["intSchool"]
                    )
                )
                createCard()
            })
        }
        if (input["menu"] === 'Add Engineer') {
            inquirer.prompt(questions.engineer.questions)
            .then(data => {
                engData.push(
                    new Engineer(
                        data["empName"],
                        data["empId"],
                        data["empEmail"],
                        data["empGithub"]
                    )
                )
                createCard()
            })
        }
        if (input["menu"] === 'Exit') {
            console.log('Thank you for your input!')
            writeHTML()
        }
    }

    inquirer.prompt(questions.menu)
    .then((data) => askQs(data))
}

function start() {
    inquirer.prompt(questions.manager.questions)
    .then(data => {
        manRes = new Manager(
            data["manName"],
            data["manId"],
            data["manEmail"],
            data["manOffice"]
        )
        createCard()
    })
}


start()