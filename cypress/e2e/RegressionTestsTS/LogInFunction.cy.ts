import { LoginData } from "../../fixtures/common";

describe("Test log in functions", () => {
    beforeEach(() => {
        cy.fixture("appConsts").then((data) => {
            cy.visit(data.URL);
        });
    });

    it("check: incorrect password data", () => {
        cy.get('[class="sc-bRBYWo eOipuu"]').click();
        cy.get('[class="sc-VigVT sc-bmyXtO haGtID"]').type("ilya.stupen+1@imbuesystems.com");
        cy.get('[class="sc-VigVT sc-bmyXtO duXQWC"]').type(LoginData.incorectPassword);
        cy.get('[class="sc-LKuAh sc-iBEsjs frrQCc"]').click();
        cy.get('[class="sc-cpmKsF dFrijd message"]').should("be.visible");
    });

    it("check: incorrect email data", () => {
        cy.get('[class="sc-bRBYWo eOipuu"]').click();
        cy.get('[class="sc-VigVT sc-bmyXtO haGtID"]').type(LoginData.incorectEmail);
        cy.get('[class="sc-VigVT sc-bmyXtO duXQWC"]').type("IlyaStupen_99");
        cy.get('[class="sc-LKuAh sc-iBEsjs frrQCc"]').click();
        cy.get('[class="sc-cpmKsF dFrijd message"]').should("be.visible");
    });

    it("check: logIn with correct email and password data", () => {
        cy.get('[class="sc-bRBYWo eOipuu"]').click().wait(5000);
        cy.get('[class="sc-VigVT sc-bmyXtO haGtID"]').type(LoginData.correctEmail);
        cy.get('[class="sc-VigVT sc-bmyXtO duXQWC"]').type(LoginData.correctPassword);
        cy.get('[class="sc-LKuAh sc-iBEsjs frrQCc"]').click();
        cy.url({ timeout: 7000 }).should("equal", LoginData.urlLoginIntoSite);
    });
});
