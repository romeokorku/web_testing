describe('My First Test Suite', () => {
  it('My First Test Case', () => {
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
    cy.get(".search-keyword").type('ca');
    cy.wait(2000)
    cy.get(".product:visible").should('have.length',4);
    //Parent child chaining
    cy.get(".products").find(".product").should("have.length",4)
    cy.get(".products").find(".product").eq('1').contains("ADD TO CART").click();

    //How to dynamically move(iterate) within a container and select and item and click.
    //$el=first element, index=0, $list=total list

    cy.get(".products").find(".product").each(($el, index, $list) => {
      const textVeg=$el.find("h4.product-name").text()
        if (textVeg.includes('Cashews')) 
      {  
        cy.wrap($el).find('button').click()
      } 
    })
    cy.get('.brand').then(function(logoelement){
      cy.log(logoelement.text())      //Print element on test runner.
    })
    //To optimaze yur code so u dont have .products through out. just call it. so we use the as command and the alias name
    cy.get(".products").as("productlocator")
    cy.get("@productlocator").find(".product").should("have.length",4)
    cy.get("@productlocator").find(".product").eq('1').contains("ADD TO CART").click();

    //assert if logo text is corrrectly dispalyed
    cy.get('.brand').should("have.text","GREENKART")
    
  
  })
})
