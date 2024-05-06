import { LoginPage } from "./Page_Object/login_page";

const loginPage = new LoginPage();
 
describe('Escenario_08', () => {

it ("Login", function (){
  //Given
  loginPage.baseUrl();
  //When
  loginPage.enterUsername();
  loginPage.enterPassword();
  loginPage.clickLogin();
  cy.wait(100);
  cy.get('a[href*="#/posts/"]').click();
  cy.contains("New post").click();
  cy.get('[id^=ember]').find('textarea').type("ES08 Ghost Post");
  cy.wait(500);
  cy.get("p").type("contenido ES08");
  cy.wait(800);
  cy.contains('Publish').click();
  cy.wait(500);
  cy.contains('Post');
  cy.contains('Continue, final review').click();
  cy.contains('Publish & send, right now').click();
  cy.wait(20000);
  cy.contains('Back to dashboard').click();
  cy.contains('Post').click();
  cy.get('[id^=ember]').find('.gh-content-entry-title').should('contain',"ES08 Ghost Post");

  //Borrado
  cy.contains('ES08 Ghost Post').rightclick();
  cy.contains('Delete').click();
  cy.wait(1000);
  cy.get('[data-test-task-button-state="idle"]').click();
  cy.contains('Posts').click();

  //Then
  cy.wait(5000);
  cy.get('[id^=ember]').find('.gh-content-entry-title').should('not.contain',"ES08 Ghost Post");
});
});