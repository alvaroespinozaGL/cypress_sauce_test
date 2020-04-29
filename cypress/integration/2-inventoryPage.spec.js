/// <reference types="cypress" />

import {InventoryPage} from "../POM/inventory-POM"
import {LoginPage} from "../POM/LoginPage-POM"
//Global variables
const loginPage = new LoginPage()
const inventory = new InventoryPage()
const numElements=[0,1,2,3,4,5]

describe('INVENTORY Stardard User TEST', () => {
    beforeEach(() => {
        loginPage.navigatetoLogin()
         loginPage.insertStandard_user()
         loginPage.insertPassword()
         loginPage.pressLoginButton()
      })
    /*it('Login Standard User to Inventory Page ', () => {
        loginPage.navigatetoLogin()
        loginPage.insertStandard_user()
        loginPage.insertPassword()
        loginPage.pressLoginButton()
   })*/
    it('Access to Inventory Page is correct', () => {
        inventory.validateInventoryPage()
    })
    it('Selecting Filter should work ', () => {
        inventory.filterZtoA()
        inventory.filterAtoZ()
        inventory.filterPriceHightoLow()
        inventory.filterPriceLowtoHigh()
    })
    numElements.forEach(element => {
    it(`Clicking Inventory List Link TEXT: ${element}`, () => {
        inventory.ClickElementsInventoryListLinkText(element)
        inventory.ClickBackButton()
        })
    it(`Clicking Inventory List Link IMAGE: ${element}`, () => {
            inventory.ClickElementsInventoryListLinkImage(element)
            inventory.ClickBackButton()
    })
    })
    it('validate if it is an Image', () => {
        inventory.IsAnImage()
    })
    it('Clicking Add to Cart Button', () => {
        inventory.ClickAddtoCartButton()
    })
    it('Clicking Remove to Cart Button', () => {
        inventory.ClickRemovetoCartButton()
    })
    it('Validate if it goes to the correct item after clicking',()=>{
        inventory.IsLinkedtotheCorrectItem()
    })
    it('Validate SideBar',()=>{
        inventory.testSideBar()
    })
})
describe('INVENTORY Performance Glitch User TEST', () => {
    beforeEach(() => {
        loginPage.navigatetoLogin()
         loginPage.insertPerformance_glitch_user()
         loginPage.insertPassword()
         loginPage.pressLoginButton()
      })
    /*it('Login Performance Glitch User to Inventory Page', () => {
         loginPage.navigatetoLogin()
         loginPage.insertPerformance_glitch_user()
         loginPage.insertPassword()
         loginPage.pressLoginButton()
    })*/
    it('Access to Inventory Page is correct', () => {
        inventory.validateInventoryPage()
    })
    it('Selecting Filter should work ', () => {
        inventory.filterZtoA()
        inventory.filterAtoZ()
        inventory.filterPriceHightoLow()
        inventory.filterPriceLowtoHigh()
    })
    numElements.forEach(element => {
    it(`Clicking Inventory List Link TEXT: ${element}`, () => {
        inventory.ClickElementsInventoryListLinkText(element)
        inventory.ClickBackButton()
        })
    it(`Clicking Inventory List Link IMAGE: ${element}`, () => {
            inventory.ClickElementsInventoryListLinkImage(element)
            inventory.ClickBackButton()
    })
    })
    it('validate if it is an Image', () => {
        inventory.IsAnImage()
    })
    it('Validate if it goes to the correct item after clicking',()=>{
        inventory.IsLinkedtotheCorrectItem()
    })
    it('Clicking Add to Cart Button', () => {
        inventory.ClickAddtoCartButton()
    })
    it('Clicking Remove to Cart Button', () => {
        inventory.ClickRemovetoCartButton()
    })
    it('Validate if it goes to the correct item after clicking',()=>{
        inventory.IsLinkedtotheCorrectItem()
    })
})
describe('INVENTORY Problem User TEST', () => {
    beforeEach(() => {
        loginPage.navigatetoLogin()
         loginPage.insertProblem_user()
         loginPage.insertPassword()
         loginPage.pressLoginButton()
    })
    /*it('Login Problem User to Inventory Page', () => {
        loginPage.navigatetoLogin()
        loginPage.insertProblem_user()
        loginPage.insertPassword()
        loginPage.pressLoginButton()
   })*/
    it('Access to Inventory Page is correct', () => {
        inventory.validateInventoryPage()
    })
    it('Selecting Filter should work ', () => {
        inventory.filterZtoA()
        inventory.filterAtoZ()
        inventory.filterPriceHightoLow()
        inventory.filterPriceLowtoHigh()
    })
    numElements.forEach(element => {
    it(`Clicking Inventory List Link TEXT: ${element}`, () => {
        inventory.ClickElementsInventoryListLinkText(element)
        inventory.ClickBackButton()
        })
    it(`Clicking Inventory List Link IMAGE: ${element}`, () => {
            inventory.ClickElementsInventoryListLinkImage(element)
            inventory.ClickBackButton()
    })
    })
    it('It does not load the Image', () => {
        inventory.IsNOTanImage()
    })
    it('Clicking Add to Cart Button with Problem User', () => {
        inventory.ClickAddtoCartButtonProbleUser()
    })

    it('NOT clicking Add to Cart Button', () => {
        inventory.notClickAddtoCartButtonProblemUser()
    })
    it('NOT clicking Remove to Cart Button', () => {
        inventory.NotClickRemovetoCartButtonProbleUser()
    })
    it('NOt going to the correct item after clicking',()=>{
        inventory.IsNotLinkedtotheCorrectItem()
    })
})
