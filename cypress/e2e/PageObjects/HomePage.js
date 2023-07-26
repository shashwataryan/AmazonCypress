/// <reference types="cypress"/>

const elements = {

    button:
    {
        prime: 'a[id="nav-link-amazonprime"]',
        loginToJoinPrime: 'span[id="a-autoid-0"]',
        joinPrime: 'input[id="signup-button-native-id"]',
        upiOption: 'div[aria-label="Other UPI Apps"]',
        verifyButton: 'span[id="pp-geCT79-103"]',
        accountHover:'a[id="nav-link-accountList"]',
        yourAccounts: 'div[id="nav-al-your-account"] span[class="nav-text"]'
    },

    searchFeature:
    {
    searchBox: 'input[id="twotabsearchtextbox"]',
    searchList: 'div[class="s-suggestion s-suggestion-ellipsis-direction"]'
    },

    input:
    {
    upiIdInput: 'input[id="pp-geCT79-102"]',
    },

    messageVerify:
    {
    upiVerify: 'div[id="pp-geCT79-105"] div[class="a-alert-content"]'
    }
}

export default class HomePage {

    search(product) {
        return cy.get(elements.searchFeature.searchBox).type(product+'{enter}');
    }
    
    searchList(product)
    {
        return cy.get(elements.searchFeature.searchBox).type(product);
    }

    clickAmazonPrimeMenu()
    {
       return  cy.get(elements.button.prime).click();
    }

    clickLoginToJoinPrime()
    {
        return cy.get(elements.button.loginToJoinPrime).click();
    }

    clickJoinPrime()
    {
        return cy.get(elements.button.joinPrime).eq(0).click();
    }

    clickUpiOption()
    {
        return cy.get(elements.button.upiOption).click();
    }

    inputUpiId(upi)
    {
        return cy.get(elements.input.upiIdInput).type(upi);
    }

    clickVerifyButton()
    {
        return cy.get(elements.button.verifyButton).click();
    }
    
    getUpi()
    {
       return cy.get(elements.messageVerify.upiVerify);
    }

    getSocialMediaSites() {
        return cy.contains('Connect with Us').siblings('ul').find('li a');
    }

    getSearchList()
    {
     return cy.get(elements.searchFeature.searchList);
    }

    clickBestSellerMenu()
    {
      return cy.contains('Best Sellers').click();

    }

    hoverOverAccountList()
    {
       return cy.get(elements.button.accountHover).trigger('mouseover');
    }

    clickWishListFromHomepage()
    {
        return cy.contains('Your Wish List').click();
    }

    clickYourAccounts()
    {
        return cy.get(elements.button.yourAccounts).eq(0).click();
    }
}
