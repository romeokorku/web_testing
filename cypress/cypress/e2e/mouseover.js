describe('My Locators', () => {
    it('Test mousehover', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        //verify the mouseover and display
        cy.get(".mouse-hover-content").invoke('show')
        cy.contains("Top").click()
        cy.url().should('include','top')

        //just click forcibly wihtout mouseover.
        cy.contains("Top").click({force:true})
        cy.url().should('include','top')
        



    })
})