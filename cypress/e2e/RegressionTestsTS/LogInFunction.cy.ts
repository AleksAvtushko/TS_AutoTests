describe("Test log in ", () => {
    beforeEach(() => {
        cy.fixture("appConsts").then((data) => {
            cy.visit(data.URL);
        });
    });

    it("check: incorrect password", () => {
        cy.get('[class="sc-bRBYWo eOipuu"]').click();
        cy.get('[class="sc-VigVT sc-bmyXtO haGtID"]').type("ilya.stupen+1@imbuesystems.com");
        cy.get('[class="sc-VigVT sc-bmyXtO duXQWC"]').type("wrongPassword");
        cy.get('[class="sc-LKuAh sc-iBEsjs frrQCc"]').click();
        cy.get('[class="sc-cpmKsF dFrijd message"]').should("be.visible");
    });
});
