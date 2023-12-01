describe('My Second Test Suite', () => {
    it('My Second Test Case', () => {
      cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
      cy.get(".search-keyword").type('ca');
      cy.wait(2000)      
      
      //Parent child chaining
      cy.get('.products').as('productlocator')  
      //How to dynamically move(iterate) within a container and select and item and click.
      //$el=first element, index=0, $list=total list
  
      cy.get("@productlocator").find(".product").each(($el, index, $list) => {
        const textVeg=$el.find("h4.product-name").text()
          if (textVeg.includes('Cashews')) 
        {  
          cy.wrap($el).find('button').click()
        } 
      })
      cy.get('.cart-icon').click()
      cy.contains('PROCEED TO CHECKOUT').click()
      cy.contains('Place Order').click()

     
      
    
    })
  })
  