describe('Pop ups', () => {
    it('check alerts and confirm', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
    //alert
    cy.get('#alertbtn').click()
    //cypress do ont have inbuilt command for the pop up assertion , so u need an in built command.windows:alert
    cy.on('window:alert',(str)=>
    {
        expect(str).to.equal('Hello , share this practice page and share your knowledge')
    })

    cy.get('#confirmbtn').click()
    cy.on('window:confirm',(str)=>
    {
        expect(str).to.equal('Hello , Are you sure you want to confirm?')
    })

    })
})