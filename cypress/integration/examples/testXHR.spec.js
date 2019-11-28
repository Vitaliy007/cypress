/// <reference types="Cypress" />

describe("Test LambdaTest WebsiteXHR", () => {
  before("Navigate to LabdaTest website", () => {
    cy.visit("https://accounts.lambdatest.com/login");
  });

  it("Perform Login and verify XHR", () => {

    // Start server
    cy.server();
    cy.route({
        method: 'GET',
        url: '/api/user/organization/team'
    }).as('team');

    cy.fixture("lamdaUser").as("lamdauser");
    cy.get("@lamdauser").then(lamdauser => {
      cy.get("[name='email']").debug().type(lamdauser.userName);
      cy.get("[name='password']").debug().type(lamdauser.Password);
    });
    cy.get("[type='submit']").click();

    cy.get("@team").then((xhr) => {
        expect(xhr.status).to.eq(200);
        expect(xhr.response.body.data[0]).to.have.property("name", "Vitaliy");
    })
  });
});
