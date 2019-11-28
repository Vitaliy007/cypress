/// <reference types="Cypress" />

describe("Testing ea app", () => {

    beforeEach("Call block", () => {
        cy.visit("http://www.executeautomation.com/site");
    })

    it("Testing ea assert hook", () => {
        
        //cy.get("[aria-label='jump to slide 2']", {timeout: 60000}).should('have.class', 'ls-nav-active');

        cy.get("[aria-label='jump to slide 2']", {timeout: 60000}).should(($x) => {
            expect($x).to.have.class('ls-nav-active');
        })
    })

    it("Testing ea assert hook", () => {
        
        //cy.get("[aria-label='jump to slide 2']", {timeout: 60000}).should('have.class', 'ls-nav-active');

        cy.get("[aria-label='jump to slide 3']", {timeout: 60000}).should(($x) => {
            expect($x).to.have.class('ls-nav-active');
        })
    })

})