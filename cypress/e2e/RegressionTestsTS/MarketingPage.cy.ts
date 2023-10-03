import { CommonData } from "../../fixtures/common";

describe("Test log in functions", () => {
    beforeEach(() => {
        cy.fixture("appConsts").then((data) => {
            cy.visit(data.URL);
        });
    });

    it("check: Toothapps Marketing page should be opened after click on toothapps logo", () => {
        cy.get('[class="sc-Rmtcm cybLNk"]').first().click();
        cy.get('[class="sc-fdniYm eAUMSS"]').click();
        cy.url({ timeout: 5000 }).should("equal", CommonData.urlMarketingPage);
        cy.get('[class="sc-Rmtcm cybLNk"]').eq(1).click();
        cy.get('[class="sc-jWBwVP heSxAt"]').click();
        cy.url().should("equal", CommonData.urlMarketingPage);
    });

    it.only("check: TOOTHAPPS® Master subscription agreement should be opened", () => {
        cy.get('[class="sc-krDsej iCOzhZ"]').eq(3).click();
        cy.window();
    });
});
