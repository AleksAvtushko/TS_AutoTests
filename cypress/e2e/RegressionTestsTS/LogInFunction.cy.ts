import { CommonData } from "../../fixtures/common";

describe("Test log in functions", () => {
    beforeEach(() => {
        cy.fixture("appConsts").then((data) => {
            cy.visit(data.URL);
        });
    });

    it("check: Sign in pop-up should be opened after click on LogIn button", () => {
        cy.get('[class="sc-bRBYWo eOipuu"]').click();
        cy.get('[class="MuiDialogContent-root dialog-content sc-gldTML gzoRBC"]').should("exist");
    });

    it("check: Sign in pop-up should be closed after click on close button", () => {
        cy.get('[class="sc-bRBYWo eOipuu"]').click();
        cy.get('[class="MuiDialogContent-root dialog-content sc-gldTML gzoRBC"]').should("be.visible");
        cy.get('[class="MuiButtonBase-root MuiIconButton-root sc-iIHSe jRuRaZ close-button"]').click();
        cy.get('[class="MuiDialogContent-root dialog-content sc-gldTML gzoRBC"]').should("not.exist");
    });

    it("check: incorrect password data", () => {
        cy.get('[class="sc-bRBYWo eOipuu"]').click();
        cy.get('[class="sc-VigVT sc-bmyXtO haGtID"]').type("ilya.stupen+1@imbuesystems.com");
        cy.get('[class="sc-VigVT sc-bmyXtO duXQWC"]').type(CommonData.incorectPassword);
        cy.get('[class="sc-LKuAh sc-iBEsjs frrQCc"]').click();
        cy.get('[class="sc-cpmKsF dFrijd message"]').should("be.visible");
    });

    it("check: incorrect email data", () => {
        cy.get('[class="sc-bRBYWo eOipuu"]').click();
        cy.get('[class="sc-VigVT sc-bmyXtO haGtID"]').type(CommonData.incorectEmail);
        cy.get('[class="sc-VigVT sc-bmyXtO duXQWC"]').type("IlyaStupen_99");
        cy.get('[class="sc-LKuAh sc-iBEsjs frrQCc"]').click();
        cy.get('[class="sc-cpmKsF dFrijd message"]').should("be.visible");
    });

    it("check: logIn with correct email and password data", () => {
        cy.get('[class="sc-bRBYWo eOipuu"]').click().wait(5000);
        cy.get('[class="sc-VigVT sc-bmyXtO haGtID"]').type(CommonData.correctEmail);
        cy.get('[class="sc-VigVT sc-bmyXtO duXQWC"]').type(CommonData.correctPassword);
        cy.get('[class="sc-LKuAh sc-iBEsjs frrQCc"]').click();
        cy.url({ timeout: 7000 }).should("equal", CommonData.urlLoginIntoSite);
    });
});
