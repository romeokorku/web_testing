// we have static drop(fixed) down and dynamic drop(changes based on your input). 

//static drop down. Tag name will be select
describe('My Locators', () => {
    it('Test Static dropdown', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('select').select('option2').should('have.value','option2')
        cy.get('select').select('option1').should('have.value','option1')

        //dynamic drop down. 
       cy.get('#autocomplete').type('ind')    
       cy.get(".ui-menu-item div").each(($el, index, $list) => {
        
        if($el.text()==='India')
        
        {
         cy.wrap($el).click()            
        }
    })
    //perform assertion to check whether operation is succcessful.
    cy.get('#autocomplete').should('have.value','India')

})
})

