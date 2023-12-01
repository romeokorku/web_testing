describe('Check elements', () => {
    it('Visible and invisible element', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
    cy.get('#displayed-text').should('be.visible');
    cy.get('#hide-textbox').click()
    cy.get('#displayed-text').should('not.be.visible');
    cy.get('#show-textbox').click()
    cy.get('#displayed-text').should('be.visible');

    })
  })
  