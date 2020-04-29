/// <reference types="cypress" />
export class LoginPage {
    navigatetoLogin() {
      cy.visit('https://www.saucedemo.com/')
    }
    validateUrl(){
        cy.url().should('contain','www.saucedemo.com')
        cy.location('hostname',{timeout: 60000}).should('include', 'saucedemo.com')
    }
    validateLoginPage(){
        cy.get('.login_logo').should('have.attr','class','login_logo')
        cy.get('.bot_column').should('have.attr','class','bot_column')
        cy.get('.login_credentials_wrap-inner').should('have.attr','class','login_credentials_wrap-inner')
    }
    insertStandard_user(){
        cy.get('[data-test=username]').type('standard_user')
    }
  
    insertLocked_out_user(){
        cy.get('[data-test=username]').type('locked_out_user')
    }
    insertProblem_user(){
        cy.get('[data-test=username]').type('problem_user')
    }
    insertPerformance_glitch_user(){
        cy.get('[data-test=username]').type('performance_glitch_user')
    }
    insertUsername(user){
        cy.get('[data-test=username]').type(user)
    }
    invalidPassword(pass){
        cy.get('[data-test=password]').type(pass)
    }
    insertPassword(){
        cy.get('[data-test=password]').type('secret_sauce')
    }
    pressLoginButton(){
        cy.get('.btn_action').click()
        cy.location('pathname',{timeout: 60000}).should('include', '/inventory.html')
    }
    pressLoginButtonNegativeTest(){
        cy.get('.btn_action').should('have.attr', 'value', 'LOGIN').click()
        cy.location('pathname',{timeout: 60000}).should('not.include', '/inventory.html')
    }
    validateUsersPlaceHolder(){
        cy.get('[data-test=username]').should('have.attr', 'placeholder', 'Username')
    }
    validatePasswordPlaceHolder(){
        cy.get('[data-test=password]').should('have.attr', 'placeholder', 'Password')
    }
    validateLoginButtonPlaceHolder(){
        cy.get('.btn_action').should('have.attr', 'value', 'LOGIN')
    }
    validateEnteredOnlyPassword(){
        cy.get('[data-test=error]').should('contain.text','Epic sadface: Username is required')
    }
    validateEnteredOnlyUserName(){
        cy.get('[data-test=error]').should('contain.text','Epic sadface: Password is required')
    }
    validatePasswordWrong(){
        cy.get('[data-test=error]').should('contain.text','Epic sadface: Username and password do not match any user in this service')
    }
    validateUserWrong(){
        cy.get('[data-test=error]').should('contain.text','Epic sadface: Username and password do not match any user in this service')
    }
    validateUserandPasswordWrong(){
        cy.get('[data-test=error]').should('contain.text','Epic sadface: Username and password do not match any user in this service')
    }
    validateEmptyUserPassword(){
        cy.get('[data-test=error]').should('contain.text','Epic sadface: Username is required')
    }
    validUsername(user){
        //const username=cy.get('[data-test=username]')
       /* if(username===('standard_user')||username===('locked_out_user')||username===('problem_user')||username===('performance_glitch_user')){
            console.log('valid User name entered')
        }else{
            console.log('invalid user')
        }*/
        //cy.get('[data-test=username]').should('standard_user','locked_out_user','problem_user','performance_glitch_user')
        cy.get('[data-test=username]').should('have.attr','value',user)
    }
    validateSignIn(){
        cy.url().should('contains','https://www.saucedemo.com/inventory.html')
    }
    validateSignInlocked_out_user(){
        cy.get('[data-test=username]').should('have.attr','value','locked_out_user')
        cy.get('[data-test=error]').should('contain.text','Epic sadface: Sorry, this user has been locked out.')
    }
  }