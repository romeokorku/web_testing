describe('My Locators', () => {
    it('Test checkbox', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('#checkBoxOption1').check();
        //assertion to validate check.
        cy.get('#checkBoxOption1').should('be.checked');
        //check if the the value cheked is option 1
        cy.get('#checkBoxOption1').should('have.value', 'option1');
        //Uncheck a box
        cy.get('#checkBoxOption1').uncheck();
        //Assertion on Uncheck a box
        cy.get('#checkBoxOption1').should('not.be.checked');
        //select multiple check box. First select common property for all the 3 elements
        cy.wait(4000);
        cy.get('[type="checkbox"]').check();
      



    });
});
