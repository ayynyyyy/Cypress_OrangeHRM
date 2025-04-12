// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

//import cypress = require("cypress");

Cypress.Commands.add('login', (username, password) => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('input[name="username"]').type(username)
    cy.get('input[name="password"]').type(password)
    cy.get('button[type="submit"]').click()
  });

Cypress.Commands.add('Logout', () => {
    cy.get('.oxd-dropdown-menu').click()
    cy.get('.Logout').click()
})

Cypress.Commands.add('FormEmployee', (data) => {
        cy.get('input[name="firstName"]').type(data.FirstName)
        cy.get('input[name="middleName"]').type(data.MiddleName)
        cy.get('input[name="lastName"]').type(data.LastName)
        cy.get('.oxd-input-group input').last().clear().type(data.id)
})
      

