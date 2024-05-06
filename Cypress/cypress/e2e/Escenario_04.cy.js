import { LoginPage } from "./Page_Object/login_page";
import { AccionesPagina } from "./Page_Object/admin_home";

const loginPage = new LoginPage();
const creaPagina = new AccionesPagina();


  it("Escenario_04_pruebas", function () {
    //Given
    loginPage.baseUrl();
    //When
    loginPage.enterUsername();
    loginPage.enterPassword();
    loginPage.clickLogin();
    creaPagina.crearPagina('ES04 Ghost page add Feature','contenido ES04');
    creaPagina.publicarPagina();
    cy.get('a[href*="#/pages/"]').click();
    cy.contains('ES04 Ghost page add Feature').rightclick()
    cy.get('.mr2 > span').contains('Feature').click();
    

        
    //Then
    cy.get('[id^=ember] > .gh-content-entry-title')
        .should('contain','ES04 Ghost page add Feature')
    cy.get('[id^=ember] > .gh-content-entry-title .gh-featured-post')
        .should('be.visible')
     
    
  });