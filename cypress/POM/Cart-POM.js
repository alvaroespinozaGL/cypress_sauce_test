/// <reference types="cypress" />
export class CartPage {
validatecartPage(){
    cy.url().should('contain','www.saucedemo.com/cart.html')
    cy.location('pathname',{timeout: 60000}).should('include', '/cart.html')
    cy.get('.app_logo').should('have.attr','class','app_logo')
    cy.get('.subheader').should('contain.text','Your Cart')
    cy.get('.cart_quantity_label').should('contain.text','QTY')
    cy.get('.cart_desc_label').should('contain.text','DESCRIPTION')
    cy.get('.btn_secondary').should('contain.text','Continue Shopping')
    cy.get('.btn_action').should('contain.text','CHECKOUT')
    cy.get('.social_twitter').should('contain.text','Twitter')
    cy.get('.social_facebook').should('contain.text','Facebook')
    cy.get('.social_linkedin').should('contain.text','LinkedIn')
    cy.get('.footer_robot').should('have.attr','class','footer_robot')
    cy.get('.footer_copy').should('contain.text','© 2019 Sauce Labs. All Rights Reserved.  Terms of Service | Privacy Policy')
}
ElementsExists(){
    cy.get("body").then($body => {
        if ($body.find(".item_pricebar > .btn_secondary").length > 0) {   //evaluates as true
            //cy.get('.item_pricebar > .btn_secondary').should('contain.text','REMOVE').click({ multiple: true })
            cy.get('.item_pricebar > .btn_secondary').should('contain.text','REMOVE')
            cy.get('.cart_quantity').should('contain.text','1')
            cy.get('.inventory_item_name').should('have.attr','class','inventory_item_name')
            cy.get('.cart_item_label > .inventory_item_desc').should('have.attr','class','inventory_item_desc')
            cy.get('.cart_item_label > .item_pricebar > .inventory_item_price').should('have.attr','class','inventory_item_price')
            cy.log('Elements exits')
        }else{
            cy.get('.item_pricebar > .btn_secondary').should('not.contain.text','REMOVE')
            cy.get('.cart_quantity').should('not.contain.text','1')
            cy.get('.inventory_item_name').should('not.have.attr','class','inventory_item_name')
            cy.get('.cart_item_label > .inventory_item_desc').should('not.have.attr','class','inventory_item_desc')
            cy.get('.cart_item_label > .item_pricebar > .inventory_item_price').should('not.have.attr','class','inventory_item_price')
            cy.log('Elements does not Exists')
        }
    });
}
clickAllRemoveButtons(){
    cy.get("body").then($body => {
        if ($body.find(".item_pricebar > .btn_secondary").length > 0) {   //evaluates as true
            cy.get('.item_pricebar > .btn_secondary').should('contain.text','REMOVE').click({ multiple: true })
        }else{
            cy.get('.item_pricebar > .btn_secondary').should('not.contain.text','REMOVE')
            cy.log('not able to click the button Elements does not Exists')
        }
    });
}
clickContinueShoping(){
    cy.get('.btn_secondary').click()
    cy.location('pathname',{timeout: 60000}).should('include', '/inventory.html')
}
clickCheckOutButton(){
    cy.get('.btn_action').should('contain.text','CHECKOUT').click()
    cy.location('pathname',{timeout: 60000}).should('include', '/checkout-step-one.html')
}
}