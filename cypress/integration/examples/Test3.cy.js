/// <reference types="Cypress" />
describe('My first test suite', function () {
    it('My third test', function () {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1')
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
        cy.get("input[type = 'checkbox']").check(['option1', 'option3'])

        cy.get("input[value = 'radio1']").click().should('be.checked')

        // Static dropdown
        cy.get('select').select('option2').should('have.value', 'option2')

        // Dynamic dropdown
        cy.get('#autocomplete').type('dia')
        cy.get('.ui-menu-item div').each(($el, index, $list) => {
            if($el.text()=="India")
                cy.wrap($el).click()
        })
        cy.get('#autocomplete').should('have.value','India')
        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click()
    })
})