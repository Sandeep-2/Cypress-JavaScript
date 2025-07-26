/// <reference types="Cypress" />
import HomePage from "../pageObjects/HomePage"
import ProductsPage from "../pageObjects/ProductsPage"

describe("My Second Test Suite", function () {
    beforeEach(function () {
        // runs before test suite
        cy.fixture('example').then(function (data) {
            this.data = data
        })
    })

    it('My first testcase', function () {
        const homePage = new HomePage()
        cy.visit("https://rahulshettyacademy.com/angularpractice/")
        homePage.getEditBox().type(this.data.name)
        homePage.getGender().select(this.data.gender)
        homePage.getTwoWayDataBinding().should('have.value', this.data.name)
        homePage.getEditBox().should('have.attr', 'minlength', '2')
        homePage.getEntrepreneur().should('be.disabled')

    })

    it('My second testcase', function () {
        const homePage = new HomePage()
        const productsPage = new ProductsPage()

        Cypress.config("defaultCommandTimeout", 8000)

        cy.visit(Cypress.env('qa').url + "/angularpractice/")
        homePage.getShopTab().click()
        cy.get('h4.card-title').each(($el, index, $list) => {
            const product = $el.text()
            cy.log(product)
            if (product.includes("iphone X"))
                cy.get('button.btn.btn-info').eq(index).click()
        })

        //  cy.pause()
        this.data.productName.forEach(function (element) {
            cy.addProductToCart(element)
        });
        // cy.addProductToCart('Nokia Edge') //This method created in commands file

        productsPage.getCheckOut_Button().click()
        var sum = 0

        cy.get('tr td:nth-child(4) strong').each(($el, index, $list) => {


            const amount = $el.text()
            var res = amount.split(" ")
            res = res[1].trim()
            sum = Number(sum) + Number(res)

        }).then(function () {
            cy.log(sum)
        })
        cy.get('h3 strong').then(function (element) {
            const amount = element.text()
            var res = amount.split(" ")
            var total = res[1].trim()
            expect(Number(total)).to.equal(sum)

        })

        cy.contains('Checkout').click()
        cy.get('#country').type('Indi')
        cy.get('.suggestions > ul > li > a').click()
        cy.get('.checkbox > label').click({ force: true })
        cy.get("input[type='submit']").click()
        // cy.get('.alert').should('have.text','Success! Thank you! Your order will be delivered in next few weeks :-).')
        cy.get('.alert').then(function (element) {
            const acutalText = element.text()
            expect(acutalText.includes('Success!')).to.be.true

        })
    })

    after(function () {
        // runs after test suite
    })
})