/// <reference types="cypress"/>

const elements = {
    listPrice:
    {
    price: 'span[data-a-size="xl"] :not(div[data-a-expander-name="qna_question_expander"] *) [class="a-price-whole"]'
    },

    product:
    {
        bestSellerProduct: 'div[class="p13n-sc-uncoverable-faceout"]'
    },

    button:
    {
        bookFlightTicket: 'a[id="a-autoid-1-announce"]'
    }
    
}

export default class ListPage {
    
    clickPriceFilter() {
        return cy.contains('₹10,000 - ₹20,000').click().wait(2000);
    }

    getSortedPriceList() {
        return cy.get(elements.listPrice.price);
    }

    clickBestSellerProduct()
    {
        return cy.get(elements.product.bestSellerProduct).eq(1).click();
    }

    clickFlightBooking()
    {
        return cy.get(elements.button.bookFlightTicket).click();
    }
}