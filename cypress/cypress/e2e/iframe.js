//frame: html document/page embedded in another html page/document.
/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />
import 'cypress-iframe'

describe('Frames', () => {
    it('Test Frames', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        // Now go to the frame and inspect for the frame locator. u will see the tag iframe id
        cy.frameLoaded('#courses-iframe')

        //now tell cypress to switch tot eh frame mode so u can perform test in the frame.
        //assuming u want to click on mentorship element.
        cy.iframe().find("a[href='mentorship']").eq(0).click()
   





    })
})