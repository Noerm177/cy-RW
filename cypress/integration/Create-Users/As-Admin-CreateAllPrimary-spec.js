describe('Verify that Admin can create all primary users', () => {

    beforeEach(() => {
        cy.login('sfasupport@igt.com', 'DullSpongyIde@15')
        cy.wait(1000)
    });

    it('Create Primary Chain Head', () => {
        cy.contains('Create User').click()
        cy.get(':nth-child(2) > :nth-child(3) > .card > .card-body > .row > .col-2').click() //Click on chain head
        cy.get('.card-footer > .row > .ml-2 > .rw-button').click({
            force: true
        }) //next button
        //Fill out fields for CH
        cy.CreateUser('automation test', 'LastName', 755000, 'noerm177+chainHeadS@gmail.com')
        cy.wait(1000)
        //Delete retailer
        cy.DeleteUser('noerm177+chainHeadP@gmail.com')
        cy.log('Chain Head was create')
        cy.LogOUT()
    });

    it('Create Primary Subordinate', () => {
        cy.contains('Create User').click()
        cy.get(':nth-child(2) > :nth-child(2) > .card > .card-body > .row > .col-2').click() //Click on chain head
        cy.get('.card-footer > .row > .ml-2 > .rw-button').click({
            force: true
        }) //next button
        //Fill out fields for Subordinate 755002
        cy.CreateUser('automation test', 'LastName', 755002, 'noerm177+subordinateP@gmail.com')
        cy.wait(1000)
        //Delete retailer
        cy.DeleteUser('noerm177+subordinateP@gmail.com')
        cy.log('Chain Subordinate was create')
        cy.LogOUT()
    })

    it('Create Independent', () => {
        cy.contains('Create User').click()
        cy.get(':nth-child(2) > :nth-child(1) > .card > .card-body > .row > .col-2').click() //Click on chain head
        cy.get('.card-footer > .row > .ml-2 > .rw-button').click({
            force: true
        }) //next button
        cy.contains('Registration Pin').type(1234)
        cy.CreateUser('automation test', 'LastName', 752000, 'noerm177+independentP@gmail.com')
        cy.wait(1000)
        //Delete retailer
        cy.DeleteUser('noerm177+independentP@gmail.com')
        cy.log('Independent was create')
        cy.LogOUT()
    });

    it('Create Adminastrator', () => {
        cy.contains('Create User').click()
        cy.get(':nth-child(1) > :nth-child(1) > .card > .card-body > .row > .col-2').click() //Click on chain head
        cy.get('.card-footer > .row > .ml-2 > .rw-button').click({
            force: true
        }) //next button
        cy.CreateAdmin('automation test', 'LastName', 'noerm177+admin@gmail.com')
        cy.wait(1000)
        //Delete retailer
        cy.DeleteUser('noerm177+admin@gmail.com')
        cy.log('Admin was create')
        cy.LogOUT()
    });

})