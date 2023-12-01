// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add("selectProduct", (productName) => {
cy.get('h4.card-title').each(($el, index, $list) => {
        
if($el.text().includes('productName'))  //u are not hardcoding blackberry. the parameter is blackberry
    
{
cy.wrap(':nth-child(4) > .card > .card-footer > .btn').eq(index).click()   // bcos blackerry is 4th product, the index number is 3.         
}
   
})
})
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })