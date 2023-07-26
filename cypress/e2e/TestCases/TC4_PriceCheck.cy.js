import { searchText } from "../../support/constants";
import HomePage from "../PageObjects/HomePage";
import ListPage from "../PageObjects/ListPage";


const homepage = new HomePage();
const listpage = new ListPage();


describe("Price Check", () => {
    beforeEach(() => {
        cy.visitAmazon();
    });
    it("Verify the price", () => {

        homepage.search("mobile");
        listpage.clickPriceFilter();
        listpage.getSortedPriceList().each((mobileElement) => {
            cy.wrap(mobileElement).invoke('text').then((text) => {
                const numberString = text.replace(/,/g, '');
                const priceNumber = parseInt(numberString);
                expect(priceNumber).to.be.above(9999);
                expect(priceNumber).to.be.below(20001);
            })
        })
    })
})