import HomePage from "../PageObjects/HomePage";

const homepage = new HomePage();

describe("Social Sites", () => {
    beforeEach(() => {
        cy.visitAmazon();
    });
    it("Verify the social media sites of Amazon", () => {

        const socialMediaSitesArray = ['www.facebook.com', 'twitter.com', 'www.instagram.com'];
        homepage.getSocialMediaSites().each((socialMedia, index) => {
            if (index == 0)
                cy.wrap(socialMedia).should('have.attr', 'href').and('contain', socialMediaSitesArray[0]);
            if (index == 1)
                cy.wrap(socialMedia).should('have.attr', 'href').and('contain', socialMediaSitesArray[1]);
            if (index == 2)
                cy.wrap(socialMedia).should('have.attr', 'href').and('contain', socialMediaSitesArray[2]);
        });
    })
})