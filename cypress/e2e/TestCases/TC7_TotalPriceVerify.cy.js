import HomePage from "../PageObjects/HomePage";
import ProductPage from "../PageObjects/ProductPage";

const homePage=new HomePage();
const productpage = new ProductPage();

describe("Total Price Check", () => {
    beforeEach(() => {
        cy.visitAmazon();
    });
    before(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
          // Modify the behavior here
          return false; // This will prevent the test from failing
        });
      });
    it("Verify the total prices of product in the cart",()=>
    {
       var sumDecimalNumber=0.0;
       var decimalNumber=0.0;
       var totalPrice;

       homePage.search("Shoes for men");
       productpage.clickUserSelectProduct();
       productpage.addToCart();
       cy.go('back');
       cy.go('back');
       productpage.clickAnotherProduct();
       productpage.addToCart();
       cy.go('back');
       cy.go('back');
       productpage.clickOneMoreProduct();
       productpage.addToCart();
       productpage.goToCart();
       productpage.getProductPrice().each((text)=>
       {
        cy.wrap(text).invoke('text').then((text2)=>{
        decimalNumber=parseFloat(text2.replace(",",""));
        sumDecimalNumber=sumDecimalNumber+decimalNumber;
       })
    })
        productpage.getTotalPrice().invoke('text').then((text1)=>
        {
          totalPrice=parseFloat(text1.replace(",",""));
          expect(sumDecimalNumber).to.equal(totalPrice);
        })
    })
})