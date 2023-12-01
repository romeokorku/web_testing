describe('Check elements', () => {
    it('Visible and invisible element', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
    //radio button
    cy.get('[value="radio2"]').check().should('be.checked')

    })
})