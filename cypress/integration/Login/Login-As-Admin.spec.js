describe('Verify An admin is able to login', () => {
    before(() => {
        cy.login('sfasupport@igt.com', 'DullSpongyIde@15')
    });

    after(() => {
        cy.get('[ng-if="$ctrl.topmenu.dropdown && $ctrl.session.loggedIn"] > .dropdown-container > .dropdown-toggle > button-label > .app-icon-button > rw-icon > .rw-icon').
        click()
        cy.get('[ng-if="$ctrl.topmenu.logout"] > a').click()
    });
    
    
    it('Verify Manage User screen was open', () => {
        cy.wait(2000)
        cy.get('.page-title.text-truncate.col').invoke('prop','innerText').should('eq', 'Manage Users')
        
        
    });
})