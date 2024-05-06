import { LoginPage } from "./Page_Object/login_page";
import { AccionesPagina } from "./Page_Object/admin_home";

const loginPage = new LoginPage();
const creaPagina = new AccionesPagina();


  it("Escenario_05_pruebas", function () {
    //Given
    loginPage.baseUrl();
    //When
    loginPage.enterUsername();
    loginPage.enterPassword();
    loginPage.clickLogin();
    creaPagina.crearPagina('ES05 Ghost page duplicate','contenido inicial ES05');
    creaPagina.publicarPagina();
    cy.get('a[href*="#/pages/"]').click();
    cy.contains('ES05 Ghost page duplicate').rightclick()
    cy.get('.mr2 > span').contains('Duplicate').click();
            
    //Then
    creaPagina.verificarPagina('ES05 Ghost page duplicate (Copy)');  
    
  });