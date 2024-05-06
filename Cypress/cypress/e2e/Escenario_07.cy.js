import { LoginPage } from "./Page_Object/login_page";

const loginPage = new LoginPage();
 
describe('Escenario_07', () => {

it ("Login", function (){
  //Given
  loginPage.baseUrl();
  //when
  loginPage.enterUsername();
  loginPage.enterPassword();
  loginPage.clickLogin();
  cy.wait(100);
  cy.get('a[href*="#/posts/"]').click();
  cy.contains("New post").click();
  cy.get('[id^=ember]').find('textarea').type("ES07 Ghost Post");
  cy.wait(500);
  cy.get("p").type("contenido ES07");
  cy.wait(800);
  cy.contains('Publish').click();
  cy.wait(500);
  cy.contains('Posts');
  cy.contains('Continue, final review').click();
  cy.contains('Publish & send, right now').click();
  cy.wait(20000);
  cy.contains('Back to dashboard').click();
  cy.contains('Posts').click();
  cy.get('[id^=ember]').find('.gh-content-entry-title').should('contain',"ES07 Ghost Post");


  // Editar
  cy.contains('ES07 Ghost Post').click(); // no es con el botón editar.
  cy.get('[id^=ember]').find('textarea').clear().type("ES07 Ghost Post Editado");
  cy.wait(500);
  cy.get("p").clear().type("contenido ES07 Editado");
  cy.wait(800);
  cy.contains('Update').click();
  cy.wait(500);
  cy.contains('Posts').click();
  
  //Then
  
  cy.get('[id^=ember]').find('.gh-content-entry-title').should('contain',"ES07 Ghost Post Editado");

});
});