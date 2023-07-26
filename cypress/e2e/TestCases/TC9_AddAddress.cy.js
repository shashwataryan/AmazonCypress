import Address from "../PageObjects/Address";
import HomePage from "../PageObjects/HomePage";
import SignIn from "../PageObjects/SignIn";

const signin= new SignIn();
const homepage=new HomePage();
const address=new Address();

describe("WishList", () => {
    beforeEach(() => {
        cy.visitAmazon();
    });
    it("Add delivery address",()=>
    {
    signin.clickSignInButton();
    cy.signInCustom();
    homepage.hoverOverAccountList();
    cy.wait(3000);
    homepage.clickYourAccounts();
    address.clickYourAddress();
    address.clickAddAddress();
    address.selectCountryFromDropDownList("Iceland");
    address.selectCountryFromDropDownList("Hong Kong");
 address.enterFullName();
    address.enterMobileNumner();
    address.enterPinCode();
    address.enterAddress();
    address.clickAddAddressButton();
    address.verifyAddressSaved().invoke('text').should('contain','Address saved');
    })
});