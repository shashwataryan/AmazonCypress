import { searchText } from "../../support/constants";
import HomePage from "../PageObjects/HomePage";
import ProductPage from "../PageObjects/ProductPage";


const homepage = new HomePage();
const productpage = new ProductPage();

describe("Cart", () => {
    beforeEach(() => {
        cy.visitAmazon();
    });
    it("Verify the actual product added to the cart", () => {
        homepage.search("mobile");
        productpage.clickUserSelectProduct();
        productpage.getExpectedTitle().invoke('text').then((Text) => {
            productpage.addToCart();
            cy.wait(10000);
            productpage.closeButton();
            productpage.goToCart();
            productpage.getActualTitle().then(Text1 => {
                expect(Text).to.include(Text1);
            })
        });
    })
})
