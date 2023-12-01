
describe('My Second Test Suite', function() {
    before(function() {
        // root-level hook
        // runs once before all tests
        cy.fixture('example').then(function(data)
        {
this.data=data                                                  //bcos we cant access the fucntion data outside the block, we introduce the this formula to call the data class.
        })
      })

it('First Test for before hook', function() {
    cy.visit('https://rahulshettyacademy.com/angularpractice/');

cy.get('form input[name="name"]:nth-child(2)').type(this.data.name);
cy.get('select').select(this.data.gender)

//how to validate minimum of 2 lenght in a field and validate if a button is disabled.
cy.get(':nth-child(4) > .ng-pristine').should('have.value',this.data.name) // to check if what ever u type in nam e field reflect at the button field.

//minimum length validation.
cy.get(':nth-child(1) > .form-control').should('have.attr','minlength','2')

//validate required attritbute is text. its in the properties of the element when u inspect.
cy.get(':nth-child(1) > .form-control').should('have.attr','type','text')
//radio button is diasbled
cy.get('#inlineRadio3').should('be.disabled')
//click blackberry on the shop page using custom commands. write the command in the support folder to accept that.
cy.get(':nth-child(2) > .nav-link').click()
//cy.pause()  //use for debugging

this.data.productName                            //fixture file tp optimize the element assigned


this.data.productName.forEach(function(element){
    cy.selectProduct(element)                      
 })






    })
})