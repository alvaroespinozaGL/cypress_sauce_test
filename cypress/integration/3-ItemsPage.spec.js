/// <reference types="cypress" />

import { LoginPage } from "../POM/LoginPage-POM"
import { InventoryPage } from "../POM/inventory-POM"
import { ItemsPage } from "../POM/Items-POM"

const loginPage = new LoginPage()
const inventory = new InventoryPage()
const item = new ItemsPage()

describe('TEST STANDARD USER ON ITEMS PAGE 1', () => {
    beforeEach(() => {
        loginPage.navigatetoLogin()
        loginPage.insertStandard_user()
        loginPage.insertPassword()
        loginPage.pressLoginButton()
        inventory.openItemPage1()
    })
    /*
    it('Signin to Item Page product 1', () => {
        loginPage.navigatetoLogin()
        loginPage.insertStandard_user()
        loginPage.insertPassword()
        loginPage.pressLoginButton()
        inventory.openItemPage1()
    })*/
   it('Validate Item Page product 1', () => {
        item.validateItemsPage()
   })
   it('Click add to cart Item Page product 1', () => {
        item.ClickAddtoCartButton()
   })
   it('Click remove to cart Item Page product 1', () => {
        item.ClickRemovetoCartButton()
   })
   it('Click Back button Item Page product 1', () => {
        item.clickBackButton()
   })
})
describe('TEST STANDARD USER ON ITEMS PAGE 2', () => {
    beforeEach(() => {
        loginPage.navigatetoLogin()
        loginPage.insertStandard_user()
        loginPage.insertPassword()
        loginPage.pressLoginButton()
        inventory.openItemPage2()
    })
   it('Validate Item Page product 2', () => {
        item.validateItemsPage()
   })
   it('Click add to cart Item Page product 2', () => {
        item.ClickAddtoCartButton()
    })
    it('Click remove to cart Item Page product 2', () => {
        item.ClickRemovetoCartButton()
    })
    it('Click Back button Item Page product 2', () => {
        item.clickBackButton()
    })
})
describe('TEST STANDARD USER ON ITEMS PAGE 3', () => {
    beforeEach(() => {
        loginPage.navigatetoLogin()
        loginPage.insertStandard_user()
        loginPage.insertPassword()
        loginPage.pressLoginButton()
        inventory.openItemPage3()
    })
   it('Validate Item Page product 3', () => {
        item.validateItemsPage()
   })
   it('Click add to cart Item Page product 3', () => {
        item.ClickAddtoCartButton()
    })
    it('Click remove to cart Item Page product 3', () => {
        item.ClickRemovetoCartButton()
    })
    it('Click Back button Item Page product 3', () => {
        item.clickBackButton()
    })
})
describe('TEST STANDARD USER ON ITEMS PAGE 4', () => {
    beforeEach(() => {
        loginPage.navigatetoLogin()
        loginPage.insertStandard_user()
        loginPage.insertPassword()
        loginPage.pressLoginButton()
        inventory.openItemPage4()
    })
   it('Validate Item Page product 4', () => {
        item.validateItemsPage()
   })
   it('Click add to cart Item Page product 4', () => {
        item.ClickAddtoCartButton()
    })
    it('Click remove to cart Item Page product 4', () => {
        item.ClickRemovetoCartButton()
    })
    it('Click Back button Item Page product 4', () => {
        item.clickBackButton()
    })
})
describe('TEST STANDARD USER ON ITEMS PAGE 5', () => {
    beforeEach(() => {
        loginPage.navigatetoLogin()
        loginPage.insertStandard_user()
        loginPage.insertPassword()
        loginPage.pressLoginButton()
        inventory.openItemPage5()
    })
   it('Validate Item Page product 5', () => {
        item.validateItemsPage()
   })
   it('Click add to cart Item Page product 5', () => {
        item.ClickAddtoCartButton()
    })
    it('Click remove to cart Item Page product 5', () => {
        item.ClickRemovetoCartButton()
    })
    it('Click Back button Item Page product 5', () => {
        item.clickBackButton()
    })
})
describe('TEST STANDARD USER ON ITEMS PAGE 6', () => {
    beforeEach(() => {
        loginPage.navigatetoLogin()
        loginPage.insertStandard_user()
        loginPage.insertPassword()
        loginPage.pressLoginButton()
        inventory.openItemPage6()
    })
   it('Validate Item Page product 6', () => {
        item.validateItemsPage()
   })
   it('Click add to cart Item Page product 6', () => {
        item.ClickAddtoCartButton()
    })
    it('Click remove to cart Item Page product 6', () => {
        item.ClickRemovetoCartButton()
    })
    it('Click Back button Item Page product 6', () => {
        item.clickBackButton()
    })
})
//************* */
describe('TEST Performance Glitch User ON ITEMS PAGE 1', () => {
    beforeEach(() => {
        loginPage.navigatetoLogin()
        loginPage.insertPerformance_glitch_user()
        loginPage.insertPassword()
        loginPage.pressLoginButton()
        inventory.openItemPage1()
    })
    /*
    it('Signin to Item Page product 1', () => {
        loginPage.navigatetoLogin()
        loginPage.insertStandard_user()
        loginPage.insertPassword()
        loginPage.pressLoginButton()
        inventory.openItemPage1()
    })*/
   it('Validate Item Page product 1', () => {
        item.validateItemsPage()
   })
   it('Click add to cart Item Page product 1', () => {
        item.ClickAddtoCartButton()
   })
   it('Click remove to cart Item Page product 1', () => {
        item.ClickRemovetoCartButton()
   })
   it('Click Back button Item Page product 1', () => {
        item.clickBackButton()
   })
})
describe('TEST Performance Glitch User ON ITEMS PAGE 2', () => {
    beforeEach(() => {
        loginPage.navigatetoLogin()
        loginPage.insertPerformance_glitch_user()
        loginPage.insertPassword()
        loginPage.pressLoginButton()
        inventory.openItemPage2()
    })
   it('Validate Item Page product 2', () => {
        item.validateItemsPage()
   })
   it('Click add to cart Item Page product 2', () => {
        item.ClickAddtoCartButton()
    })
    it('Click remove to cart Item Page product 2', () => {
        item.ClickRemovetoCartButton()
    })
    it('Click Back button Item Page product 2', () => {
        item.clickBackButton()
    })
})
describe('TEST Performance Glitch User ON ITEMS PAGE 3', () => {
    beforeEach(() => {
        loginPage.navigatetoLogin()
        loginPage.insertPerformance_glitch_user()
        loginPage.insertPassword()
        loginPage.pressLoginButton()
        inventory.openItemPage3()
    })
   it('Validate Item Page product 3', () => {
        item.validateItemsPage()
   })
   it('Click add to cart Item Page product 3', () => {
        item.ClickAddtoCartButton()
    })
    it('Click remove to cart Item Page product 3', () => {
        item.ClickRemovetoCartButton()
    })
    it('Click Back button Item Page product 3', () => {
        item.clickBackButton()
    })
})
describe('TEST Performance Glitch User ON ITEMS PAGE 4', () => {
    beforeEach(() => {
        loginPage.navigatetoLogin()
        loginPage.insertPerformance_glitch_user()
        loginPage.insertPassword()
        loginPage.pressLoginButton()
        inventory.openItemPage4()
    })
   it('Validate Item Page product 4', () => {
        item.validateItemsPage()
   })
   it('Click add to cart Item Page product 4', () => {
        item.ClickAddtoCartButton()
    })
    it('Click remove to cart Item Page product 4', () => {
        item.ClickRemovetoCartButton()
    })
    it('Click Back button Item Page product 4', () => {
        item.clickBackButton()
    })
})
describe('TEST Performance Glitch User ON ITEMS PAGE 5', () => {
    beforeEach(() => {
        loginPage.navigatetoLogin()
        loginPage.insertPerformance_glitch_user()
        loginPage.insertPassword()
        loginPage.pressLoginButton()
        inventory.openItemPage5()
    })
   it('Validate Item Page product 5', () => {
        item.validateItemsPage()
   })
   it('Click add to cart Item Page product 5', () => {
        item.ClickAddtoCartButton()
    })
    it('Click remove to cart Item Page product 5', () => {
        item.ClickRemovetoCartButton()
    })
    it('Click Back button Item Page product 5', () => {
        item.clickBackButton()
    })
})
describe('TEST Performance Glitch User ON ITEMS PAGE 6', () => {
    beforeEach(() => {
        loginPage.navigatetoLogin()
        loginPage.insertPerformance_glitch_user()
        loginPage.insertPassword()
        loginPage.pressLoginButton()
        inventory.openItemPage6()
    })
   it('Validate Item Page product 6', () => {
        item.validateItemsPage()
   })
   it('Click add to cart Item Page product 6', () => {
        item.ClickAddtoCartButton()
    })
    it('Click remove to cart Item Page product 6', () => {
        item.ClickRemovetoCartButton()
    })
    it('Click Back button Item Page product 6', () => {
        item.clickBackButton()
    })
})

/************* */

describe('TEST PROBLEM USER ON ITEMS PAGE 1', () => {
    beforeEach(() => {
        loginPage.navigatetoLogin()
        loginPage.insertProblem_user()
        loginPage.insertPassword()
        loginPage.pressLoginButton()
        inventory.openItemPage1()
    })
    /*it('Signin to Item Page product 1', () => {
        loginPage.navigatetoLogin()
        loginPage.insertProblem_user()
        loginPage.insertPassword()
        loginPage.pressLoginButton()
        inventory.openItemPage1()
   })*/

   it('Validate Item Page product 1', () => {
        item.validateItemsPage()
   })
   it('Blocked add to cart Item Page product 1', () => {
        item.blockedAddtoCartButton()
   })
   it('Click Back button Item Page product 1', () => {
        item.clickBackButton()
   })
})
describe('TEST PROBLEM USER ON ITEMS PAGE 2', () => {
    beforeEach(() => {
        loginPage.navigatetoLogin()
        loginPage.insertProblem_user()
        loginPage.insertPassword()
        loginPage.pressLoginButton()
        inventory.openItemPage2()
    })
   it('Validate Item Page product 2', () => {
        item.validateItemsPage()
   })
   it('Blocked add to cart Item Page product 2', () => {
        item.blockedAddtoCartButton()
    })
    it('Click Back button Item Page product 2', () => {
        item.clickBackButton()
    })
})
describe('TEST PROBLEM USER ON ITEMS PAGE 3', () => {
    beforeEach(() => {
        loginPage.navigatetoLogin()
        loginPage.insertProblem_user()
        loginPage.insertPassword()
        loginPage.pressLoginButton()
        inventory.openItemPage3()
    })
   it('Validate Item Page product 3', () => {
        item.validateItemsPage()
   })
   it('Blocked add to cart Item Page product 3', () => {
        item.blockedAddtoCartButton
    })
    it('Click Back button Item Page product 3', () => {
        item.clickBackButton()
    })
})
describe('TEST PROBLEM USER ON ITEMS PAGE 4', () => {
    beforeEach(() => {
        loginPage.navigatetoLogin()
        loginPage.insertProblem_user()
        loginPage.insertPassword()
        loginPage.pressLoginButton()
        inventory.openItemPage4()
    })
    it('Error Page Not Found', () => {
        item.pageNotFound()
        item.clickBackButton()
   })
})
describe('TEST PROBLEM USER ON ITEMS PAGE 5', () => {
    beforeEach(() => {
        loginPage.navigatetoLogin()
        loginPage.insertProblem_user()
        loginPage.insertPassword()
        loginPage.pressLoginButton()
        inventory.openItemPage5()
    })
   it('Validate Item Page product 5', () => {
        item.validateItemsPage()
   })
   it('Blocked add to cart Item Page product 5', () => {
        item.blockedAddtoCartButton()
    })
    it('Click Back button Item Page product 5', () => {
        item.clickBackButton()
    })
})
describe('TEST PROBLEM USER ON ITEMS PAGE 6', () => {
    beforeEach(() => {
        loginPage.navigatetoLogin()
        loginPage.insertProblem_user()
        loginPage.insertPassword()
        loginPage.pressLoginButton()
        inventory.openItemPage6()
    })
    it('Validate Item Page product 6', () => {
        item.validateItemsPage()
   })
   it('Click add to cart Item Page product 6', () => {
        item.ClickAddtoCartButtonProblemUser()
    })
    it('Blocked remove to cart Item Page product 6', () => {
        item.blockedRemovetoCartButton()
    })
    it('Click Back button Item Page product 6', () => {
        item.clickBackButton()
    })
})