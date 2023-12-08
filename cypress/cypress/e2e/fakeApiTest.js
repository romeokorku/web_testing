describe('My First API Test Suite',()=>{

    it('My FirstTest Case',function(){

        cy.visit("https://rahulshettyacademy.com/angularAppdemo/")


        cy.intercept({
            method : 'GET',
            url :'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty' 
            
         }, 
         {
            statusCode: 200,
            body : [{
            "book_name": "RestAssured with Java",
            "isbn": "BSG",
            "aisle": "2302"}]
         }).as('bookretrievals')

         cy.get('.btn.btn-primary').click()
         cy.wait('@bookretrievals')
         cy.get('p').should('have.text','Oops only 1 Book available')

         // length of the response array = rows of the table  . API no of reponse should be equal UI table display response.
         
    })
})