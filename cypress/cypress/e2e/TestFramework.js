describe('My Second Test Suite', () => {
    before(() => {
        // root-level hook
        // runs once before all tests

      })
    it('First Test for before hook', () => {
        cy.visit('https://rahulshettyacademy.com/angularpractice/');
        cy.get('form input[name="name"]:nth-child(2)').type('Romeo');
        cy.get('select').select('Female').should('have.value','Female')




    })
})