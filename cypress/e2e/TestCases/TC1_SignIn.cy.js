
import { email, password } from '../../support/constants';
import SignIn from '../PageObjects/SignIn';


const signin = new SignIn();

describe("Sign In", () => {
    beforeEach(() => {
        cy.visitAmazon();
    });
    it("Login to an account and verify it", () => {
        signin.clickSignInButton();
        signin.emailInput(email);
        signin.clickContinue();
        signin.passwordInput(password);
        signin.clickFinalSignIn();
        signin.welcomeMessage().should('contain',
            `Hello, Shashwat`);

    })
})