import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps"
/// <reference types="Cypress" />
import HomePage from '../../../.pageObjects/HomePage'
import ProductPage from '../../..pageObjects/ProductPage'

const homePage=new HomePage()
const productPage=new ProductPage()
let name
Given('I opened ecommerce page', function () {
    cy.visit(Cypress.env('qa').url + "/angularpractice/")
    homePage.getShopTab().click()
})

When('I add items to cart', function () {
    
    this.data.productName.forEach(function (element) {
        cy.addProductToCart(element)
    });
    productsPage.getCheckOut_Button().click()
})

And('validate the cart value', function () {
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
})

Then('select the country, submit it and verify', function () {
    cy.get('#country').type('Indi')
    cy.get('.suggestions > ul > li > a').click()
    cy.get('.checkbox > label').click({ force: true })
    cy.get("input[type='submit']").click()
    cy.get('.alert').then(function (element) {
        const acutalText = element.text()
        expect(acutalText.includes('Success!')).to.be.true

    })
})
