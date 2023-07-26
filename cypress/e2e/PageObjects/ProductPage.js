
/// <reference types="cypress"/>


const elements =
{
    button:
    {
        addToCart: 'input[id="add-to-cart-button"]',
        proceedToBuy: 'input[value="Proceed to checkout"]',
        cart: 'a[id="nav-cart"]',
        close: 'a[id="attach-close_sideSheet-link"]',
        wishList: 'span[id="wishListMainButton"]',
        viewWishList: 'span[id="huc-view-your-list-button"]'
    },

    title:
    {
        mobileExpectedTitle: 'span#productTitle[class="a-size-large product-title-word-break"]',
        mobileActualTitle: 'span[class="a-truncate sc-grid-item-product-title a-size-base-plus"]>:first-child',
        productTitle: 'span[id="productTitle"]'
    },
    product:
    {
        selectProduct: 'a[class="a-link-normal s-underline-text s-underline-link-text s-link-style a-text-normal"]',
        
    },

    priceOfAllProduct:
    {
        productPrice: 'span[class="a-size-medium a-color-base sc-price sc-white-space-nowrap sc-product-price a-text-bold"]',
        totalPrice: 'span[class="a-size-medium a-color-base sc-price sc-white-space-nowrap"]'
    }


}
export default class ProductPage {

    clickUserSelectProduct() {
        return cy.get(elements.product.selectProduct).eq(2).invoke('removeAttr', 'target').click();

    }
    clickAnotherProduct()
    {
        return cy.get(elements.product.selectProduct).eq(3).invoke('removeAttr', 'target').click();
    }

    clickOneMoreProduct()
    {
        return cy.get(elements.product.selectProduct).eq(4).invoke('removeAttr', 'target').click();
    }

    getExpectedTitle() {
        return cy.get(elements.title.mobileExpectedTitle); 
    }

    addToCart() {
        return cy.get(elements.button.addToCart).click();
    }

    closeButton()
    {
        cy.get(elements.button.close).first().click();
    }

    goToCart() {
       //cy.wait(5000);//comment to be added
        return cy.get(elements.button.cart).click();
      }

    getActualTitle() {
       // cy.wait(3000);
        return cy.get(elements.title.mobileActualTitle).invoke('text');
       
    }

    getProductPrice()
    {
        return cy.get(elements.priceOfAllProduct.productPrice);
    }

    getTotalPrice()
    {
        return cy.get(elements.priceOfAllProduct.totalPrice).eq(1);
    }

    clickWishList()
    {
        return cy.get(elements.button.wishList).click();
    }

    getProductTitle()
    {
        return cy.get(elements.title.productTitle);
    }

    clickViewWishList()
    {
        return cy.get(elements.button.viewWishList).click();
    }
}