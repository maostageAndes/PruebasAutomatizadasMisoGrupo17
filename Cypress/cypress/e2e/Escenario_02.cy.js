import { LoginPage } from "./Page_Object/login_page";
import { AccionesPagina } from "./Page_Object/admin_home";

const loginPage = new LoginPage();
const creaPagina = new AccionesPagina();


  it("Escenario_02_pruebas", function () {
    //Given
    loginPage.baseUrl();
    //When
    loginPage.enterUsername();
    loginPage.enterPassword();
    loginPage.clickLogin();
    creaPagina.crearPagina('ES02 Ghost inicial','contenido inicial ES02');
    creaPagina.publicarPagina();
    cy.get('a[href*="#/pages/"]').click();
    cy.contains('ES02 Ghost inicial').click();
    cy.get("[id^=ember]").find("textarea").clear().type('ES02 Ghost Page edit Nuevo');
    cy.contains('Update').click();
    cy.get('a[href*="#/pages/"]').click();
    
    //Then
    creaPagina.verificarPagina('ES02 Ghost Page edit Nuevo');  
    
  });