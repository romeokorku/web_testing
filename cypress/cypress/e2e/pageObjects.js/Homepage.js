class Homepage
{
    getEditBox()
    {
        return cy.get('form input[name="name"]:nth-child(2)')
    }
    getTwoWaydataBinding()
    {
        return cy.get(':nth-child(4) > .ng-pristine')
    }
    getGender()
    {
        return cy.get('select')
    }
    getEntrepreneur()
    {
        return cy.get('#inlineRadio3')
    }
    getShopTab()
    {
       return cy.get(':nth-child(2) > .nav-link') 
    }

}
export default Homepage;