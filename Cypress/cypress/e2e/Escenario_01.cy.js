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
    creaPagina.crearPagina('ES01 Ghost page','contenido ES01');
    creaPagina.publicarPagina();
    //Then
    creaPagina.verificarPagina('ES01 Ghost page');  
    
  });

  

