/// <reference types="Cypress" />

describe("Testing ea app", () => {
    it("Login app", () => {
        cy.visit("http://eaapp.somee.com/");

        cy.contains("Login").click();
        cy.url().should('include', "Account/Login");
        cy.get('#UserName').type('admin');
        cy.get('#Password').type('password');
        cy.get('.btn').click();
        cy.contains("Employee List").click();
        cy.get('.table').find('tr').contains('Prashanth').parent().contains('Benefits').click();
        
    })
})