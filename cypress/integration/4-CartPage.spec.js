/// <reference types="cypress" />

import { CartPage } from "../POM/Cart-POM";
import { LoginPage } from "../POM/LoginPage-POM";
import { InventoryPage } from "../POM/inventory-POM";
import { ItemsPage } from "../POM/Items-POM";

const loginPage=new LoginPage()
const inventory=new InventoryPage()
const item=new ItemsPage()
const cart=new CartPage()

describe('TEST STANDARD USER ON CART PAGE', () => {
    it('Signin to CART Page', () => {
        loginPage.navigatetoLogin()
        loginPage.insertStandard_user()
        loginPage.insertPassword()
        loginPage.pressLoginButton()
        inventory.clickAllAddtoCartButton()
        inventory.openCartPage()
   })
   it('Validate web elements in CART Page', () => {
        cart.validatecartPage() 
   })
   it('Evaluate if the cart list elements are present CART Page', () => {
        cart.ElementsExists()
   })
   it('Click all Remove button if it is present in the CART Page', () => {
        cart.clickAllRemoveButtons()
   })
   it('Click to continue shopping button CART Page', () => {
        cart.clickContinueShoping()
        inventory.openCartPage()
   })  
   it('Click to Checkout button CART Page', () => {
        cart.clickCheckOutButton()
        inventory.openCartPage()
   })  
})

describe('TEST Performance Glitch User ON CART PAGE', () => {
    it('Signin to CART Page', () => {
        loginPage.navigatetoLogin()
        loginPage.insertPerformance_glitch_user()
        loginPage.insertPassword()
        loginPage.pressLoginButton()
        inventory.clickAllAddtoCartButton()
        inventory.openCartPage()
   })
   it('Validate web elements in CART Page', () => {
        cart.validatecartPage() 
   })
   it('Evaluate if the cart list elements are present CART Page', () => {
        cart.ElementsExists()
   })
   it('Click all Remove button if it is present in the CART Page', () => {
        cart.clickAllRemoveButtons()
   })
   it('Click to continue shopping button CART Page', () => {
        cart.clickContinueShoping()
        inventory.openCartPage()
   })  
   it('Click to Checkout button CART Page', () => {
        cart.clickCheckOutButton()
        inventory.openCartPage()
   })  
})

describe('TEST PROBLEM USER ON CART PAGE', () => {
    it('Signin to CART Page', () => {
        loginPage.navigatetoLogin()
        loginPage.insertProblem_user()
        loginPage.insertPassword()
        loginPage.pressLoginButton()
        inventory.clickAllAddtoCartButton()
        inventory.openCartPage()
   })
   it('Validate web elements in CART Page', () => {
        cart.validatecartPage() 
   })
   it('Evaluate if the cart list elements are present CART Page', () => {
        cart.ElementsExists()
   })
   it('Click all Remove button if it is present in the CART Page', () => {
        cart.clickAllRemoveButtons()
   })
   it('Click to continue shopping button CART Page', () => {
        cart.clickContinueShoping()
        inventory.openCartPage()
   })  
   it('Click to Checkout button CART Page', () => {
        cart.clickCheckOutButton()
        inventory.openCartPage()
   })  
})
