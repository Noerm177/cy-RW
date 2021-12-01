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
   Cypress.Commands.add('login', (email, password) => {
       cy.clearCookies()

       cy.visit('/')
       cy.get('body').type('{ctrl+shift+r}')
       cy.get('.login-form > :nth-child(1) > .ng-pristine').type(email)
       cy.get('.login-form > :nth-child(2) > .ng-pristine').type(password)
       cy.get('.login-form > :nth-child(3) > .login__button > .rw-button').click()
 })
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
