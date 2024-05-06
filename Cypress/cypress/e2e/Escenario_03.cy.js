import { LoginPage } from "./Page_Object/login_page";
import { AccionesPagina } from "./Page_Object/admin_home";

const loginPage = new LoginPage();
const creaPagina = new AccionesPagina();


  it("Escenario_03_pruebas", function () {
    //Given
    loginPage.baseUrl();
    //When
    loginPage.enterUsername();
    loginPage.enterPassword();
    loginPage.clickLogin();
    creaPagina.crearPagina('ES03 Ghost page borrar','contenido inicial ES03');
    creaPagina.publicarPagina();
    cy.get('a[href*="#/pages/"]').click();
    cy.contains('ES03 Ghost page borrar').rightclick()
    cy.get('.red').click();
    cy.get('[id^=ember] .gh-btn-red').click();

        
    //Then
    creaPagina.verificarNoExistePagina('ES03 Ghost page borrar');  
    
  });