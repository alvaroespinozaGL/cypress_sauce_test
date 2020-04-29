/// <reference types="cypress" />
export class ItemsPage {
validateItemsPage(){
    cy.url().should('contain','www.saucedemo.com/inventory-item.html')
    cy.location('pathname',{timeout: 10000}).should('include', '/inventory-item.html')
    cy.get('.header_label').should('contain.text','Swag Labs')
    cy.get('.inventory_details_name').should('have.attr','class','inventory_details_name')
    cy.get('.inventory_details_desc').should('have.attr','class','inventory_details_desc')
    cy.get('.inventory_details_price').should('contain.text','$')
    cy.get('.inventory_details_img').should('have.attr','src').and('include','jpg')
    cy.log('the element is an image')
    cy.get('.inventory_details_back_button').should('contain.text','<- Back')
}
ClickAddtoCartButton(){
    cy.get('.btn_primary').should('contain.text','ADD TO CART').click()
    cy.get('.fa-layers-counter').should('contain.text','1')
}
ClickAddtoCartButtonProblemUser(){
    cy.get('.btn_primary').should('contain.text','ADD TO CART').click()
    cy.get('.fa-layers-counter').should('not.have.attr','class','fa-layers-counter')
}
ClickRemovetoCartButton(){
    cy.get('.btn_secondary').should('contain.text','REMOVE').click()
    cy.get('.fa-layers-counter').should('not.have.attr','class','fa-layers-counter')
}
clickBackButton(){
    cy.get('.inventory_details_back_button').should('contain.text','<- Back').click()
    cy.location('pathname',{timeout: 10000}).should('include', '/inventory.html')
}
blockedAddtoCartButton(){
    cy.get('.btn_primary').should('contain.text','ADD TO CART').click({ force: true })
    cy.log('cy.click() failed because this element has an error to click')
    cy.get('.fa-layers-counter').should('not.have.attr','class','fa-layers-counter')
}
blockedRemovetoCartButton(){
    cy.get('.btn_secondary').should('contain.text','REMOVE').click({ force: true })
    cy.log('cy.click() failed because this element has an error to click')
    cy.get('.fa-layers-counter').should('not.have.attr','class','fa-layers-counter')
}
pageNotFound(){
    cy.url().should('contain', 'https://www.saucedemo.com/inventory-item.html?id=6')
}
}