/// <reference types="Cypress" />
describe('Mousehover', () => {
    it('Mousehover', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get("div.mouse-hover-content").invoke('show')
        cy.contains('Top').click()
        // forcefully clicking on hidden elements
        // cy.contains('Top').click({force:true})
        cy.url().should('include','top')
    })
})