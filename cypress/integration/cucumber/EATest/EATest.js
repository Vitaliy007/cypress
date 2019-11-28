import { Given } from "cypress-cucumber-preprocessor/steps";

Given(`I visit EA site`, () => {
  cy.visit("http://eaapp.somee.com/");
});

Given(`I click login link`, () => {
  cy.contains("Login").click();
});

Given(
  `I login as a user with {string} and {string}`,
  (userName, userPassword) => {
    cy.get("#UserName").type(userName);
    cy.get("#Password").type(userPassword, {log:false});
    cy.get(".btn").click();
})

// Given (`I login as following`, datatable => {
//   datatable.hashes().forEach(row => {
//     cy.get("#UserName").type(row.userName);
//     cy.get("#Password").type(row.Password, {log:false});
//   });
//   cy.get(".btn").click();

// })
