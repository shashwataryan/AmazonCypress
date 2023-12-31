/// <reference types="cypress"/>


const elements =
{
       button:
       {
              signInHover: '#nav-link-accountList-nav-line-1',
              signInButton: 'span[class="nav-line-2 "]',
              continueButton: 'span[id="continue"]',
              finalSignIn: 'span[id="auth-signin-button"]'
       },

       inputField:
       {
              email: 'input[name="email"]',
              password: 'input[name="password"]'
       },
      
       messageBox:
       {
              Message: 'span[id="nav-link-accountList-nav-line-1"]'
       }
}

export default class SignIn {
       clickSignInButton() {
              return cy.get(elements.button.signInButton).click();
       }
       emailInput(email) {
              return cy.get(elements.inputField.email).type(email);
       }
       clickContinue() {
              return cy.get(elements.button.continueButton).click();
       }
       passwordInput(password) {
              return cy.get(elements.inputField.password).type(password);
       }
       clickFinalSignIn() {
             return cy.get(elements.button.finalSignIn).click();
             
       }
       welcomeMessage()
       {
              return cy.get(elements.messageBox.Message);
       }
}
