import HomePage from "../PageObjects/HomePage";
import ListPage from "../PageObjects/ListPage";
import ProductPage from "../PageObjects/ProductPage";
import SignIn from "../PageObjects/SignIn";
import WishList from "../PageObjects/WishList";

const homepage=new HomePage();
const listpage=new ListPage();
const productpage=new ProductPage();
const wishlist= new WishList();
const signin= new SignIn();

describe("WishList", () => {
    beforeEach(() => {
        cy.visitAmazon();
    });
    before(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
          // Modify the behavior here
          return false; // This will prevent the test from failing
        });
      });
    it("Verify the product added to the wishlist",()=>
    {
        
        homepage.clickBestSellerMenu();
    
        listpage.clickBestSellerProduct();
        productpage.getProductTitle().invoke('text').then((text)=>
        {
        productpage.clickWishList();
        cy.signInCustom();
        cy.wait(5000);
        productpage.clickWishList();
        productpage.clickViewWishList();
        wishlist.getWishListProductTitle().invoke('text').then((text1)=>
        {
            expect(text1.trim()).to.equal(text.trim());
        })
        
    });
});


it("Verify the product deleted from the wishlist",()=>
{
    
    signin.clickSignInButton();
    cy.signInCustom();
    homepage.hoverOverAccountList();
    homepage.clickWishListFromHomepage();
    
    wishlist.getWishListProductTitle().invoke('text').then((text)=>
    {
        wishlist.deleteProductFromWishList();
        cy.wait(3000);
        wishlist.deletedProductFromWishList().invoke('text').then((text1)=>
        {
            expect(text1.trim()).to.equal(text.trim());
        
        wishlist.confirmProductDeletion().invoke('text').should('contain','Deleted');
    });
    });

});
});
