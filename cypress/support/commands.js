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
    cy.wait(1000)
    cy.get('.login-form > :nth-child(1) > .ng-pristine').type(email)
    cy.get('.login-form > :nth-child(2) > .ng-pristine').type(password)
    cy.get('.login-form > :nth-child(3) > .login__button > .rw-button').click()
})

Cypress.Commands.add('CreateUser', (FirstN, SecondN, RetailerID, Email, ConfirmE) => {
    cy.contains('First Name').type(FirstN)
    cy.contains('Last Name').type(SecondN)
    cy.get('#create-account-form--retailerId').type(RetailerID)
    cy.get('#create-account-form--emailAddress').type(Email)
    cy.get('#create-account-form--confirmEmail').type(ConfirmE)
    cy.get('.rw-button.rw-button--contained').first().click()
    //review info
    cy.get('.modal-footer > [variant="contained"] > .rw-button').should('be.visible').click()
    cy.get('.modal-content').should('include.text', 'Success!')
    // cy.get('.rw-button rw-button--contained').click()
    cy.get('.modal-footer > rw-button > .rw-button').click()
})

Cypress.Commands.add('CreateAdmin', (FirstN, SecondN, Email) => {
    cy.contains('First Name').type(FirstN)
    cy.contains('Last Name').type(SecondN)
    cy.get('#create-account-form--emailAddress').type(Email)
    cy.get('#create-account-form--confirmEmail').type(Email)
    cy.get('.rw-button.rw-button--contained').first().click()//submit
    //review info
    cy.get('#select_70').click()
    cy.get('#select_option_74').click() //Roles
    cy.get('.card-footer > .row > [variant="contained"] > .rw-button').click()

    cy.get('.modal-footer > [variant="contained"] > .rw-button').click() // Review info
    cy.get('.modal-header').should('include.text', 'Success!')
    // cy.get('.rw-button rw-button--contained').click()
    cy.get('.modal-footer > rw-button > .rw-button').click()
})

//Cypress.Commands.add()
Cypress.Commands.add('DeleteUser', (email) => {
    cy.get('#email-filter').type(email)
    cy.get('.filter-buttons-width > .row > .mr-2 > .rw-button').click() //search button  
    cy.wait(1000)
    cy.get('a.break-word').eq(0).click() // Select user from list
    cy.get('[ng-if="$ctrl.canUpdateData && $ctrl.canEditAccountDetails"] > a').click({
        force: true
    }) // click on delete
    cy.get('.modal-header').should('include.text', 'Are you sure you want to delete this user?')
    cy.get('.modal-footer > [variant="contained"] > .rw-button').click() // Confirm
    cy.wait(1000)
})
//cy.get('#email-filter')


Cypress.Commands.add('LogOUT', () => {
    cy.get('[ng-if="$ctrl.topmenu.dropdown && $ctrl.session.loggedIn"] > .dropdown-container > .dropdown-toggle > button-label > .app-icon-button > rw-icon > .rw-icon').
    click()
    cy.get('[ng-if="$ctrl.topmenu.logout"] > a').click()
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
