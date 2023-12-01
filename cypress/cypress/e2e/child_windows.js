// whn u inspect the elemnt and u see target=blank, then it means it will open in another window.Bocs cypress cannot perform in another tab, the work around is to remove the target=blank to perform the test in the same page.Use the invoke method to remove the attribute.

describe('Handle Child Windows', () => {
    it('Should handle child window', () => {
      cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
      cy.get('#opentab').invoke('removeAttr', 'target').click();  //this will not open new tab.
      //now inform cypress your new domain in the syntax below.Note: this tells cypress what ever u are doing is for the new domain. once u come out of the bracket, then u are going back to the old domain.
      cy.wait(4000)
      cy.origin('https://www.qaclickacademy.com/',()=>
      {     //any code u write within this block applies to the origin domain. outside the block applies to visit domain.
        cy.get('#navbarSupportedContent a[href="about.html"]').click();
        cy.get('.mt-50 h2').should('contain','Welcome to QAClick Academy ');

      })

    })
})
