describe('Verify that admin can create all the secondary users', () => {

    beforeEach(() => {
        cy.login('sfasupport@igt.com', 'DullSpongyIde@15')
        cy.wait(2000)
    })

    afterEach(() => {
        cy.wait(3000)
        cy.get('body').then($out => {
            if ($out.text().includes('Reports')) {
                cy.get('[ng-if="$ctrl.topmenu.dropdown && $ctrl.session.loggedIn"] > .dropdown-container > .dropdown-toggle > button-label > .app-icon-button > rw-icon > .rw-icon').click({force:true})
                cy.get('[ng-if="$ctrl.topmenu.logout"] > a').click({force:true})
            }
        })
        cy.log('After each has run')
    })

    it('Create CH Secondary', () => {
        cy.contains('Create User').click()
        cy.get(':nth-child(3) > :nth-child(3) > .card > .card-body > .row > .col-2').click() //Click on chain head
        cy.get('.card-footer > .row > .ml-2 > .rw-button').click({
            force: true
        })
        cy.CreateUser('automation test', 'LastName', 127202, 'noerm177+CH@gmail.com')
        cy.wait(1000)
        cy.get('body').then(($error) => { // Error message
            if ($error.text().includes('Error')) {
                cy.get('.modal-footer > rw-button > .rw-button').click()
            }

        })
        //Delete retailer
        cy.DeleteUser('noerm177+CH@gmail.com')
        cy.log('CH secondary was create')
        cy.LogOUT()
    })

    it('Create Subordinate Secondary', () => {
        cy.contains('Create User').click()
        cy.get(':nth-child(3) > :nth-child(2) > .card > .card-body > .row > .col-2').click() //Click on chain head
        cy.get('.card-footer > .row > .ml-2 > .rw-button').click({
            force: true
        })
        cy.CreateUser('automation test', 'LastName', 101155, 'noerm177+Sub@gmail.com')

        cy.wait(1000)
        cy.get('body').then(($error) => { // Error message
            if ($error.text().includes('Error')) {
                cy.get('.modal-footer > rw-button > .rw-button').click()
            }

        })
        //Delete retailer
        cy.DeleteUser('noerm177+Sub@gmail.com')
        cy.log('CH secondary was create')
        cy.LogOUT()
    });

    it('Create Independent Secondary', () => {
        cy.contains('Create User').click()
        cy.get(':nth-child(3) > :nth-child(1) > .card > .card-body > .row > .col-2').click() //Click on chain head
        cy.get('.card-footer > .row > .ml-2 > .rw-button').click({
            force: true
        }) //next button
        cy.CreateUser('automation test', 'LastName', 100627, 'noerm177+IndS@gmail.com')

        cy.wait(1000)
        cy.get('body').then(($error) => { // Error message
            if ($error.text().includes('Error')) {
                cy.get('.modal-footer > rw-button > .rw-button').click()
            }
        })
        //Delete retailer
        cy.DeleteUser('noerm177+IndS@gmail.com')
        cy.log('Independent was create')
        cy.LogOUT()
    });
})