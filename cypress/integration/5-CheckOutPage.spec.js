/// <reference types="cypress" />

import { CheckoutPage } from "../POM/CheckOut-POM";
import { LoginPage } from "../POM/LoginPage-POM";
import { InventoryPage } from "../POM/inventory-POM";
import { ItemsPage } from "../POM/Items-POM";
import { CartPage } from "../POM/Cart-POM";

const checkout=new CheckoutPage()
const loginPage=new LoginPage()
const inventory=new InventoryPage()
const item=new ItemsPage()
const cart=new CartPage()

describe('TEST STANDARD USER ON CHECKOUT PAGE', () => {
    it('Signin to Checkout Page', () => {
        loginPage.navigatetoLogin()
        loginPage.insertStandard_user()
        loginPage.insertPassword()
        loginPage.pressLoginButton()
   })
   
   it("add to the cart", function(){
    checkout.addtoCart()
   })

 it("go to cart and checkout the item", function(){
    checkout.gotoCart()
    checkout.clickCheckOut()
 })

 it("Validate Elements in the page", function(){
  checkout.validateCheckoutPageElments()
 })

 it("give information in the checkout page", function(){
   checkout.fillUpInformationCheckoutPage()
 })

 it("verify the checkout overview page", function(){
    checkout.checkoutOverviewPage()
 })

 it("complete the order and verify", function(){
     checkout.completeOrderandVerify()
 })
})
describe('TEST Performance Glitch User ON CHECKOUT PAGE', () => {
    it('Signin to Checkout Page', () => {
        loginPage.navigatetoLogin()
        loginPage.insertPerformance_glitch_user()
        loginPage.insertPassword()
        loginPage.pressLoginButton()
   })
   
   it("add to the cart", function(){
    checkout.addtoCart()
   })

 it("go to cart and checkout the item", function(){
    checkout.gotoCart()
    checkout.clickCheckOut()
 })
 it("Validate Elements in the page", function(){
  checkout.validateCheckoutPageElments()
 })
 it("give information in the checkout page", function(){
   checkout.fillUpInformationCheckoutPage()
 })

 it("verify the checkout overview page", function(){
    checkout.checkoutOverviewPage()
 })

 it("complete the order and verify", function(){
     checkout.completeOrderandVerify()
 })
})

describe('TEST PROBLEM USER ON CHECKOUT PAGE', () => {
    it('Signin to Checkout Page', () => {
        loginPage.navigatetoLogin()
        loginPage.insertProblem_user()
        loginPage.insertPassword()
        loginPage.pressLoginButton()
   })

   it("add to the cart", function(){
    checkout.addtoCartProblemUser()
   })

 it("go to cart and checkout the item", function(){
    checkout.gotoCart()
    checkout.clickCheckOut()
 })

 it("Validate Elements in the page", function(){
  checkout.validateCheckoutPageElments()
 })

 it("give information in the checkout page", function(){
   checkout.fillUpInformationCheckoutPage()
 })

 it("verify the checkout overview page", function(){
    checkout.checkoutOverviewPageProblemUser()
 })

 it("complete the order and verify", function(){
     checkout.completeOrderandVerifyProblemUser()
 })
})

