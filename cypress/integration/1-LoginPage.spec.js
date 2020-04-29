/// <reference types="cypress" />

import {LoginPage} from "../POM/LoginPage-POM"
//Global variables
const loginPage = new LoginPage()
const names = ['standard_user', 'problem_user','performance_glitch_user']
const invalidData=['admin','12345','#@$#%$^%&^*&*&','AE$#%$$%45621']

//Login Page positive test
describe('LOGIN PAGE POSITIVE TEST', () => {
    
    beforeEach(() => {
      loginPage.navigatetoLogin()
    })
  
    it('Access to Login Page is correct', () => {
      loginPage.validateLoginPage()  
      loginPage.validateUrl()
    })
    
    names.forEach(name => {
      it(`entering valid User Id & Password using user: ${name}`, () => {
         loginPage.validateUsersPlaceHolder() 
         loginPage.insertUsername(name)
         loginPage.validUsername(name)
         loginPage.validatePasswordPlaceHolder()
         loginPage.insertPassword()
         loginPage.validateLoginButtonPlaceHolder()
         loginPage.pressLoginButton()
         loginPage.validateSignIn()
      })
    })
})

  describe('LOGIN PAGE NEGATIVE TEST', () => {
    beforeEach(() => {
        loginPage.navigatetoLogin()
      })
    it(`entering User Id Locked_out_user & Password`, () => {
        loginPage.validateUsersPlaceHolder()   
        loginPage.insertLocked_out_user()
        loginPage.validatePasswordPlaceHolder()
        loginPage.insertPassword()
        loginPage.validateLoginButtonPlaceHolder()
        loginPage.pressLoginButtonNegativeTest()
        loginPage.validateSignInlocked_out_user()
     })
    invalidData.forEach(invalidDat => {
      it('entering Invalid User ID & Password ', () => {
        loginPage.validateUsersPlaceHolder() 
        loginPage.insertUsername(invalidDat)
        loginPage.validatePasswordPlaceHolder()
        loginPage.invalidPassword(invalidDat)
        loginPage.validateLoginButtonPlaceHolder()
        loginPage.pressLoginButtonNegativeTest()
        loginPage.validateUserandPasswordWrong()
      })
    })
    
    names.forEach(name => {
      it(`entering valid User Id  ${name}`, () => {
        loginPage.validateUsersPlaceHolder()  
        loginPage.insertUsername(name)
         loginPage.validUsername(name)
         loginPage.validateLoginButtonPlaceHolder()
         loginPage.pressLoginButtonNegativeTest()
        loginPage.validateEnteredOnlyUserName()
      })
    })

    it(`entering User Id Locked_out_user`, () => {
      loginPage.validateUsersPlaceHolder()   
      loginPage.insertLocked_out_user()
      loginPage.validateLoginButtonPlaceHolder()
        loginPage.pressLoginButtonNegativeTest()
        loginPage.validateEnteredOnlyUserName()
     })
    
    invalidData.forEach(invalidDat => {
      it(`entering invalid User Id  ${invalidDat}`, () => {
        loginPage.validateUsersPlaceHolder()  
        loginPage.insertUsername(invalidDat)
        loginPage.validateLoginButtonPlaceHolder()
         loginPage.pressLoginButtonNegativeTest()
         loginPage.validateEnteredOnlyUserName()
      })
    })

    it('entering valid password', () => {
      loginPage.validatePasswordPlaceHolder()
      loginPage.insertPassword()
      loginPage.validateLoginButtonPlaceHolder()
      loginPage.pressLoginButtonNegativeTest()
      loginPage.validateEnteredOnlyPassword()
    })
   
    invalidData.forEach(invalidpass => {
      it('entering Invalid Password ', () => {
        loginPage.validatePasswordPlaceHolder()
        loginPage.invalidPassword(invalidpass)
        loginPage.validateLoginButtonPlaceHolder()
        loginPage.pressLoginButtonNegativeTest()
        loginPage.validateEnteredOnlyPassword()
      })
    })

    it('User ID and Password Empty & Login Button is pressed', () => {
      loginPage.validateLoginButtonPlaceHolder()
      loginPage.pressLoginButtonNegativeTest()
      loginPage.validateEmptyUserPassword()
    })
})