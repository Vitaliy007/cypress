/// <reference types="Cypress" />

describe("Test LambdaTest WebsiteXHR", () => {
  beforeEach("Navigate to LabdaTest website", () => {
    cy.visit("https://accounts.lambdatest.com/login");
  });

  it("Perform Login and verify XHR", () => {
    // Start server
    cy.server();
    cy.route({
      method: "GET",
      url: "/api/user/organization/team"
    }).as("team");

    cy.route({
      method: "GET",
      url: "/api/user/organization/automation-test-summary"
    }).as("apicheck");

    cy.fixture("lamdaUser").as("lamdauser");
    cy.get("@lamdauser").then(lamdauser => {
      cy.get("[name='email']")
        .debug()
        .type(lamdauser.userName);
      cy.get("[name='password']")
        .debug()
        .type(lamdauser.Password);
    });
    cy.get("[type='submit']").click();

    cy.get("@team").then(xhr => {
      expect(xhr.status).to.eq(200);
      expect(xhr.response.body.data[0]).to.have.property("name", "Vitaliy");
      expect(xhr.response.body.data[0]).to.have.property("role", "Admin");
    });
    // Explicit
    cy.get("@apicheck").then(xhr => {
      expect(xhr.status).to.eq(200);
      expect(xhr.response.body).to.have.property("maxQueue", 10);
    });
    // Implicit
    cy.get("@apicheck")
      .its("response.body")
      .should("have.property", "maxQueue")
      .and("eql", 10);
  });

  it("Verify test cookies", () => {
    cy.fixture("lamdaUser").as("lamdauser");
    cy.get("@lamdauser").then(lamdauser => {
      cy.get("[name='email']")
        .debug()
        .type(lamdauser.userName);
      cy.get("[name='password']")
        .debug()
        .type(lamdauser.Password);
    });
    cy.get("[type='submit']").click();
    cy.getCookie("user_id").should("have.property", "value", "124048");
  });
});
