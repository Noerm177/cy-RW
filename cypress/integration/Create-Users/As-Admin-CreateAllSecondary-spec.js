describe('Verify that admin can create all the secondary users', () =>{
    
    beforeEach(() => {
        cy.login('sfasupport@igt.com', 'DullSpongyIde@15')
        cy.wait(1000)
    })

    afterEach(()=> {
        cy.LogOUT()
    })

    it('Create CH Secondary', () => {
        cy.contains('Create User').click()
        cy.get(':nth-child(3) > :nth-child(3) > .card > .card-body > .row > .col-2').click() //Click on chain head
        cy.get('.card-footer > .row > .ml-2 > .rw-button').click({force:true})
        cy.CreateUser('automation test', 'LastName', 755000, 'noerm177+CHsub@gmail.com')

        cy.get('#select_70').click()
        cy.get('#select_option_74').click() //Roles
        cy.get('.card-footer > .row > [variant="contained"] > .rw-button').click()
        cy.wait(1000)
        //Delete retailer
        cy.DeleteUser('noerm177+CHsub@gmail.com')
        cy.log('CH secondary was create')
        cy.LogOUT()      
    })

    it('Create Subordinate Secondary', () => {
        cy.contains('Create User').click()
        cy.get(':nth-child(3) > :nth-child(3) > .card > .card-body > .row > .col-2').click() //Click on chain head
        cy.get('.card-footer > .row > .ml-2 > .rw-button').click({force:true})
        cy.CreateUser('automation test', 'LastName', 755002, 'noerm177+CHsub@gmail.com')

        cy.get('#select_70').click()
        cy.get('#select_option_74').click() //Roles
        cy.get('.card-footer > .row > [variant="contained"] > .rw-button').click()
        cy.wait(1000)
        //Delete retailer
        cy.DeleteUser('noerm177+CHsub@gmail.com')
        cy.log('CH secondary was create')
        cy.LogOUT()  
    });

    it('Create Independent Secondary', () => {
        cy.contains('Create User').click()
        cy.get(':nth-child(3) > :nth-child(1) > .card > .card-body > .row > .col-2').click() //Click on chain head
        cy.get('.card-footer > .row > .ml-2 > .rw-button').click({
            force: true
        }) //next button
        cy.CreateUser('automation test', 'LastName', 752000, 'noerm177+IndS@gmail.com')

        cy.get('#select_70').click()
        cy.get('#select_option_74').click() //Roles
        cy.get('.card-footer > .row > [variant="contained"] > .rw-button').click()
        cy.wait(1000)
        //Delete retailer
        cy.DeleteUser('noerm177+IndS@gmail.com')
        cy.log('Independent was create')
        cy.LogOUT()
    });
})