/// <reference types="cypress" />
export class InventoryPage {
  //interacting with list Elements
   /*cy.get('.inventory_item_name').should('contain.text','Sauce Labs ').first().click()
      cy.get('.inventory_details_back_button').click()
      cy.get('.inventory_item_name').should('contain.text','Sauce Labs ').last().click()
      cy.get('.inventory_details_back_button').click()
      cy.get('.inventory_item_name').should('contain.text','Sauce Labs ').eq(3).click()
      cy.get('.inventory_item_name').should('contain.text','Sauce Labs ')
      .each(function($el,index,$listOfElements){
        $el.click()
      })*/
  //
  
  navigatetoInventory() {
      cy.visit('https://www.saucedemo.com/inventory.html')
    }
    validateInventoryPage(){
        cy.url().should('contain','www.saucedemo.com/inventory')
        cy.location('pathname',{timeout: 60000}).should('include', '/inventory.html')
        cy.get('.app_logo').should('have.attr','class','app_logo')
        cy.get('.product_label').should('have.attr','class','product_label')
        cy.get('.peek').should('have.attr','class','peek')
        cy.get(':nth-child(1) > .inventory_item_label > .inventory_item_desc').should('have.attr','class','inventory_item_desc')
        cy.get(':nth-child(2) > .inventory_item_label > .inventory_item_desc').should('have.attr','class','inventory_item_desc')
        cy.get(':nth-child(3) > .inventory_item_label > .inventory_item_desc').should('have.attr','class','inventory_item_desc')
        cy.get(':nth-child(4) > .inventory_item_label > .inventory_item_desc').should('have.attr','class','inventory_item_desc')
        cy.get(':nth-child(5) > .inventory_item_label > .inventory_item_desc').should('have.attr','class','inventory_item_desc')
        cy.get(':nth-child(6) > .inventory_item_label > .inventory_item_desc').should('have.attr','class','inventory_item_desc')
        cy.get('.inventory_item_price').should('contain.text','$')
        cy.get('.social_twitter').should('contain.text','Twitter')
        cy.get('.social_facebook').should('contain.text','Facebook')
        cy.get('.social_linkedin').should('contain.text','LinkedIn')
        cy.get('.footer_robot').should('have.attr','class','footer_robot')
        cy.get('.footer_copy').should('contain.text','© 2019 Sauce Labs. All Rights Reserved.  Terms of Service | Privacy Policy')
    }
    filterAtoZ(){
      cy.get('.product_sort_container').select('Name (A to Z)').should('have.value','az')
    }
    filterZtoA(){
      cy.get('.product_sort_container').select('Name (Z to A)').should('have.value','za')
    }
    filterPriceLowtoHigh(){
      cy.get('.product_sort_container').select('Price (low to high)').should('have.value','lohi')
    }
    filterPriceHightoLow(){
      cy.get('.product_sort_container').select('Price (high to low)').should('have.value','hilo')
    }
    ClickElementsInventoryListLinkText(element){
      cy.get('.inventory_item_name').should('contain.text','Sauce Labs ').eq(element).click()
      cy.location('pathname',{timeout: 10000}).should('include', '/inventory-item.html')
    }
    ClickElementsInventoryListLinkImage(element){
      cy.get('.inventory_item_img').should('have.attr','class','inventory_item_img').eq(element).click()
      cy.location('pathname',{timeout: 10000}).should('include', '/inventory-item.html')
    }
    ClickBackButton(){
      cy.get('.inventory_details_back_button').click()
      cy.location('pathname',{timeout: 10000}).should('include', '/inventory.html')
    }
    ClickAddtoCartButton(){
      cy.get(':nth-child(1) > .pricebar > .btn_primary').should('contain.text','ADD TO CART').click()
      cy.get('.fa-layers-counter').should('contain.text','1')
      cy.get(':nth-child(2) > .pricebar > .btn_primary').should('contain.text','ADD TO CART').click()
      cy.get('.fa-layers-counter').should('contain.text','2')
      cy.get(':nth-child(3) > .pricebar > .btn_primary').should('contain.text','ADD TO CART').click()
      cy.get('.fa-layers-counter').should('contain.text','3')
      cy.get(':nth-child(4) > .pricebar > .btn_primary').should('contain.text','ADD TO CART').click()
      cy.get('.fa-layers-counter').should('contain.text','4')
      cy.get(':nth-child(5) > .pricebar > .btn_primary').should('contain.text','ADD TO CART').click()
      cy.get('.fa-layers-counter').should('contain.text','5')
      cy.get(':nth-child(6) > .pricebar > .btn_primary').should('contain.text','ADD TO CART').click()
      cy.get('.fa-layers-counter').should('contain.text','6')
    }
    ClickRemovetoCartButton(){
      cy.get(':nth-child(1) > .pricebar > .btn_secondary').should('contain.text','REMOVE').click()
      cy.get('.fa-layers-counter').should('contain.text','5')
      cy.get(':nth-child(2) > .pricebar > .btn_secondary').should('contain.text','REMOVE').click()
      cy.get('.fa-layers-counter').should('contain.text','4')
      cy.get(':nth-child(3) > .pricebar > .btn_secondary').should('contain.text','REMOVE').click()
      cy.get('.fa-layers-counter').should('contain.text','3')
      cy.get(':nth-child(4) > .pricebar > .btn_secondary').should('contain.text','REMOVE').click()
      cy.get('.fa-layers-counter').should('contain.text','2')
      cy.get(':nth-child(5) > .pricebar > .btn_secondary').should('contain.text','REMOVE').click()
      cy.get('.fa-layers-counter').should('contain.text','1')
      cy.get(':nth-child(6) > .pricebar > .btn_secondary').should('contain.text','REMOVE').click()
      cy.get('.fa-layers-counter').should('not.have.attr','class','fa-layers-counter')
    }
    IsAnImage(){
      cy.get('#item_0_img_link > .inventory_item_img').should('have.attr','src').and('include','jpg')
      cy.get('#item_1_img_link > .inventory_item_img').should('have.attr','src').and('include','jpg')
      cy.get('#item_2_img_link > .inventory_item_img').should('have.attr','src').and('include','jpg')
      cy.get('#item_3_img_link > .inventory_item_img').should('have.attr','src').and('include','jpg')
      cy.get('#item_4_img_link > .inventory_item_img').should('have.attr','src').and('include','jpg')
      cy.get('#item_5_img_link > .inventory_item_img').should('have.attr','src').and('include','jpg')
    }
    IsNOTanImage(){
      cy.get('#item_0_img_link > .inventory_item_img').should('have.attr','src').and('include','WithGarbageOnItToBreakTheUrl')
      cy.get('#item_1_img_link > .inventory_item_img').should('have.attr','src').and('include','WithGarbageOnItToBreakTheUrl')
      cy.get('#item_2_img_link > .inventory_item_img').should('have.attr','src').and('include','WithGarbageOnItToBreakTheUrl')
      cy.get('#item_3_img_link > .inventory_item_img').should('have.attr','src').and('include','WithGarbageOnItToBreakTheUrl')
      cy.get('#item_4_img_link > .inventory_item_img').should('have.attr','src').and('include','WithGarbageOnItToBreakTheUrl')
      cy.get('#item_5_img_link > .inventory_item_img').should('have.attr','src').and('include','WithGarbageOnItToBreakTheUrl')
    }
    ClickAddtoCartButtonProbleUser(){
      cy.get(':nth-child(1) > .pricebar > .btn_primary').should('contain.text','ADD TO CART').click()
      cy.get('.fa-layers-counter').should('contain.text','1')
      cy.get(':nth-child(2) > .pricebar > .btn_primary').should('contain.text','ADD TO CART').click()
      cy.get('.fa-layers-counter').should('contain.text','2')
      cy.get(':nth-child(5) > .pricebar > .btn_primary').should('contain.text','ADD TO CART').click()
      cy.get('.fa-layers-counter').should('contain.text','3')
    }
    notClickAddtoCartButtonProblemUser(){
      cy.get(':nth-child(3) > .pricebar > .btn_primary').should('contain.text','ADD TO CART').click({ force: true })
      cy.log('cy.click() failed because this element has an error to click')
      cy.get('.fa-layers-counter').should('not.have.attr','class','fa-layers-counter')
      cy.get(':nth-child(4) > .pricebar > .btn_primary').should('contain.text','ADD TO CART').click({ force: true })
      cy.log('cy.click() failed because this element has an error to click')
      cy.get('.fa-layers-counter').should('not.have.attr','class','fa-layers-counter')
      cy.get(':nth-child(6) > .pricebar > .btn_primary').should('contain.text','ADD TO CART').click({ force: true })
      cy.log('cy.click() failed because this element has an error to click')
      cy.get('.fa-layers-counter').should('not.have.attr','class','fa-layers-counter')
    }
    NotClickRemovetoCartButtonProbleUser(){
      cy.get(':nth-child(1) > .pricebar > .btn_secondary').should('contain.text','REMOVE').click({ force: true })
      cy.log('cy.click() failed because this element has an error to click')
      cy.get('.fa-layers-counter').should('contain.text','3')
      cy.get(':nth-child(2) > .pricebar > .btn_secondary').should('contain.text','REMOVE').click({ force: true })
      cy.log('cy.click() failed because this element has an error to click')
      cy.get('.fa-layers-counter').should('contain.text','3')
      cy.get(':nth-child(5) > .pricebar > .btn_secondary').should('contain.text','REMOVE').click({ force: true })
      cy.log('cy.click() failed because this element has an error to click')
      cy.get('.fa-layers-counter').should('contain.text','3')
    }
    IsLinkedtotheCorrectItem(){
      cy.get('#item_0_img_link > .inventory_item_img').click()
      cy.url().should('contain', 'https://www.saucedemo.com/inventory-item.html?id=0')
      cy.get('.inventory_details_back_button').click()
      cy.get('#item_1_img_link > .inventory_item_img').click()
      cy.url().should('contain', 'https://www.saucedemo.com/inventory-item.html?id=1')
      cy.get('.inventory_details_back_button').click()
      cy.get('#item_2_img_link > .inventory_item_img').click()
      cy.url().should('contain', 'https://www.saucedemo.com/inventory-item.html?id=2')
      cy.get('.inventory_details_back_button').click()
      cy.get('#item_3_img_link > .inventory_item_img').click()
      cy.url().should('contain', 'https://www.saucedemo.com/inventory-item.html?id=3')
      cy.get('.inventory_details_back_button').click()
      cy.get('#item_4_img_link > .inventory_item_img').click()  
      cy.url().should('contain', 'https://www.saucedemo.com/inventory-item.html?id=4')
      cy.get('.inventory_details_back_button').click()
      cy.get('#item_5_img_link > .inventory_item_img').click() 
      cy.url().should('contain', 'https://www.saucedemo.com/inventory-item.html?id=5')
      cy.get('.inventory_details_back_button').click()
    }
    IsNotLinkedtotheCorrectItem(){
      cy.get('#item_0_img_link > .inventory_item_img').click()
      cy.url().should('contain', 'https://www.saucedemo.com/inventory-item.html?id=1')
      cy.get('.inventory_details_back_button').click()
      cy.get('#item_1_img_link > .inventory_item_img').click()
      cy.url().should('contain', 'https://www.saucedemo.com/inventory-item.html?id=2')
      cy.get('.inventory_details_back_button').click()
      cy.get('#item_2_img_link > .inventory_item_img').click()
      cy.url().should('contain', 'https://www.saucedemo.com/inventory-item.html?id=3')
      cy.get('.inventory_details_back_button').click()
      cy.get('#item_3_img_link > .inventory_item_img').click()
      cy.url().should('contain', 'https://www.saucedemo.com/inventory-item.html?id=4')
      cy.get('.inventory_details_back_button').click()
      cy.get('#item_4_img_link > .inventory_item_img').click()  
      cy.url().should('contain', 'https://www.saucedemo.com/inventory-item.html?id=5')
      cy.get('.inventory_details_back_button').click()
      cy.get('#item_5_img_link > .inventory_item_img').click() 
      cy.url().should('contain', 'https://www.saucedemo.com/inventory-item.html?id=6')
      cy.get('.inventory_details_back_button').click()
    }
    clickAllAddtoCartButton(){
      cy.get('.pricebar > .btn_primary').click({ multiple: true })
    }
    openItemPage1(){
      cy.get('.inventory_item_name').should('contain.text','Sauce Labs ').eq(0).click()
      cy.location('pathname',{timeout: 10000}).should('include', '/inventory-item.html')
    }
    openItemPage2(){
      cy.get('.inventory_item_name').should('contain.text','Sauce Labs ').eq(1).click()
      cy.location('pathname',{timeout: 10000}).should('include', '/inventory-item.html')
    }
    openItemPage3(){
      cy.get('.inventory_item_name').should('contain.text','Sauce Labs ').eq(2).click()
      cy.location('pathname',{timeout: 10000}).should('include', '/inventory-item.html')
    }
    openItemPage4(){
      cy.get('.inventory_item_name').should('contain.text','Sauce Labs ').eq(3).click()
      cy.location('pathname',{timeout: 10000}).should('include', '/inventory-item.html')
    }
    openItemPage5(){
      cy.get('.inventory_item_name').should('contain.text','Sauce Labs ').eq(4).click()
      cy.location('pathname',{timeout: 10000}).should('include', '/inventory-item.html')
    }
    openItemPage6(){
      cy.get('.inventory_item_name').should('contain.text','Sauce Labs ').eq(5).click()
      cy.location('pathname',{timeout: 10000}).should('include', '/inventory-item.html')
    }
    openCartPage(){
      cy.get('path').click({ force: true })
      cy.location('pathname',{timeout: 10000}).should('include', '/cart.html')
    }
    testSideBar(){
      cy.get('.bm-burger-button > button').click()

      cy.get('#inventory_sidebar_link').click()
      .location('pathname',{timeout: 10000}).should('include', '/inventory.html')

      cy.get('.bm-burger-button > button').click()

      cy.get('#about_sidebar_link').should('contain.text','About')

      cy.get('#reset_sidebar_link').should('contain.text','Reset App State')

      cy.get('#logout_sidebar_link').click()
      .location('pathname',{timeout: 10000}).should('include', '/index.html')
    }
}
