//cypress 
/// <reference types="Cypress" />
describe('My first test suite', function () {
    it('My second test', function () {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.search-keyword').type('ca')
        cy.wait(1500)
        cy.get('.product:visible').should('have.length',4)
        cy.get('.products').find('.product').each(($el, index, $list) => {
            const textVeg = $el.find('h4.product-name').text()
            if (textVeg.includes('Cashews')) {
                cy.wrap($el).find('button').click()
            }
        })
        cy.get("img[alt='Cart']").click()
        cy.get('button').contains("PROCEED TO CHECKOUT").click()
        cy.get('button').contains("Place Order").click()
    })
})