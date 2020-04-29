/// <reference types="cypress" />
export class CheckoutPage {
validateCheckoutPageElments(){
    cy.url().should('contain','www.saucedemo.com/checkout-step-one.html')
    cy.location('pathname',{timeout: 60000}).should('include', '/checkout-step-one.html')
    cy.get('.app_logo').should('have.attr','class','app_logo')
    cy.get('.subheader').should('contain.text','Checkout: Your Information')
    cy.get('.social_twitter').should('contain.text','Twitter')
    cy.get('.social_facebook').should('contain.text','Facebook')
    cy.get('.social_linkedin').should('contain.text','LinkedIn')
    cy.get('.footer_robot').should('have.attr','class','footer_robot')
    cy.get('.footer_copy').should('contain.text','© 2019 Sauce Labs. All Rights Reserved.  Terms of Service | Privacy Policy')
}
addtoCart(){
    cy.get('#item_5_title_link .inventory_item_name')
        .should('have.text','Sauce Labs Fleece Jacket')
        .click();
    cy.get('.inventory_details_price')
        .should('have.text','$49.99');
    cy.get('.btn_primary.btn_inventory')
        .click();
    cy.get('.btn_secondary.btn_inventory')
        .should('have.text','REMOVE')
    cy.get('.fa-layers-counter.shopping_cart_badge')
        .should('have.text','1')
}
gotoCart(){
    cy.get('.inventory_details_name')
    .then(($elem) => {
        cy.get('.shopping_cart_link.fa-layers.fa-fw')
            .click();
        cy.get('.inventory_item_name')
            .then(($elem2) => {
                expect($elem.text()).to.eq($elem2.text())
            })
    })
}
addtoCartProblemUser(){
    cy.get('#item_3_title_link .inventory_item_name')
        .should('have.text','Test.allTheThings() T-Shirt (Red)')
        .click();
    cy.get('.inventory_details_price')
        .should('have.text','$29.99');
    cy.get('.btn_primary.btn_inventory')
        .click();
    cy.get('.btn_secondary.btn_inventory')
        .should('have.text','REMOVE')
    cy.get('.fa-layers-counter.shopping_cart_badge')
        .should('have.text','1')
}
clickCheckOut(){
    cy.get('.btn_action.checkout_button') 
    .click();  
}
fillUpInformationCheckoutPage(){
    cy.get('.cart_cancel_link').should('contain.text','CANCEL')
    .click()
    cy.get('.btn_action').should('contain.text','CHECKOUT').click()
    cy.get('#first-name').should('have.attr','placeholder','First Name')
    .type("test name");
    cy.get('#last-name').should('have.attr','placeholder','Last Name')
    .type("test last name");
    cy.get('#postal-code').should('have.attr','placeholder','Zip/Postal Code')
    .type("55555");
    cy.get('.btn_primary.cart_button')
    .click();
}
checkoutOverviewPage(){
cy.get('.summary_quantity')
    .should('have.text','1');
cy.get('.summary_value_label')
    .eq(0)
    .should('be.exist');
cy.get('.summary_value_label')
    .eq(1)
    .should('be.exist');
cy.get('.inventory_item_price')
    .then(($elm) => {
        cy.get('.summary_subtotal_label')
            .then(($elm2) => {
                expect($elm.text().replace( /^\D+/g, '')).to.eq($elm2.text().replace( /^\D+/g, ''));
            })
    })
}
checkoutOverviewPageProblemUser(){
    cy.get('.summary_quantity')
        .should('have.text','1');
    cy.get('.summary_value_label')
        .eq(0)
        .should('be.exist');
    cy.get('.summary_value_label')
        .eq(1)
        .should('be.exist');
    cy.get('.inventory_item_price').should('be.exist');
    cy.get('.summary_subtotal_label').should('be.exist');
    }

completeOrderandVerify(){
    cy.get('.btn_action.cart_button')
        .click();
    cy.get('.complete-header')
        .should('have.text','THANK YOU FOR YOUR ORDER');
    cy.get('.fa-layers-counter.shopping_cart_badge')
        .should('not.exist');
}
completeOrderandVerifyProblemUser(){
    cy.get('.btn_action.cart_button')
        .click();
    cy.get('.complete-header')
        .should('have.text','THANK YOU FOR YOUR ORDER');
    cy.get('.fa-layers-counter.shopping_cart_badge')
        .should('exist');
}
}