import { LoginPage } from "./Page_Object/login_page";
import { AccionesPagina } from "./Page_Object/admin_home";

const loginPage = new LoginPage();
const creaPagina = new AccionesPagina();


  it("Escenario_01_pruebas", function () {
    //Given
    loginPage.baseUrl();
    //When
    loginPage.enterUsername();
    loginPage.enterPassword();
    loginPage.clickLogin();
    cy.get('[data-test-nav="settings"]').click();
    cy.get('[class="flex items-center justify-start rounded gap-4"] ').first().click();
    cy.get('[placeholder="Site title"]').first().clear().type('ES15 Proyecto Miso grupo 17{enter}');
    cy.contains('Save').click();
    cy.wait(5000);
    cy.get('[data-testid="exit-settings"]').click();    

    //Then
    cy.get('.gh-nav-menu-details-sitetitle').should('contain','ES15 Proyecto Miso grupo 17')
    

    
  });


  