describe ("Test EA app", () => {

    before("Login to the app", () => {
        cy.visit("/");
        cy.fixture("eauser").as("user");

        cy.get("@user").then((user) => {
            cy.login(user.UserName, user.UserPassword);
        })

    })
    
    it("Perform edit", () => {     

        cy.contains("Employee List").click();
        //cy.get('.table').find('tr').contains('Prashanth').parent().contains('Benefits').click();
        
        // cy.get('.table').find('tr').as('rows');
        // cy.get('@rows').then(($row) => {
        //     cy.wrap($row).click({multiple:true});
        // })
        // Verify the calue prop
        cy.wrap({name: 'Karthik'}).should('have.property', 'name').and('eq', 'Karthik'); 

        cy.get('.table').find('tr > td').then(($td) => {
            cy.wrap($td).contains("John").invoke('wrap').parent().contains('Benefits').click();
        })

    })
})