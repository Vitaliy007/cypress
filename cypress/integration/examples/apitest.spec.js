/// <reference types="Cypress" />

context("Test API", () => {
  beforeEach("DELETE before request", () => {
    cy.request({
      method: "DELETE",
      url: "http://localhost:3000/posts/2",
      failOnStatusCode: false
    }).then(x => {
      expect(x.body).to.be.empty;
    });
  });
  it("Test Get func JSON", () => {
    cy.request("http://localhost:3000/posts/1")
      .its("body")
      .should("have.property", "id");
  });
  it.only("Test POST func JSON", () => {
    cy.request({
      method: "POST",
      url: "http://localhost:3000/posts",
      body: {
        id: 2,
        title: "TestPost",
        author: "VitaliyF"
      }
    }).then(res => {
      expect(res.body).has.property("title", "TestPost");
    });
  });
});
