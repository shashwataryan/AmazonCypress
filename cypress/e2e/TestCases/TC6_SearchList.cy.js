import { searchText } from "../../support/constants";
import HomePage from "../PageObjects/HomePage";

const homepage=new HomePage();

describe("Search list", () => {
    beforeEach(() => {
        cy.visitAmazon();
    });
    it("Print search list", () => {
        homepage.searchList("mobile");
        cy.wait(3000);
        homepage.getSearchList().each((text)=>{
        cy.wrap(text).invoke('text').then((text1)=>{

        cy.log(text1);
        });
            
        })
    })
})