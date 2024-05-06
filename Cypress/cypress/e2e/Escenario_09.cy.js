import { LoginPage } from "./Page_Object/login_page";

const loginPage = new LoginPage();
 
describe('Escenario_09', () => {

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
  cy.get('[id^=ember]').find('textarea').type("ES09 Ghost Post");
  cy.wait(500);
  cy.get("p").type("contenido ES09");
  cy.wait(800);
  cy.contains('Publish').click();
  cy.wait(500);
  cy.contains('Posts');
  cy.contains('Continue, final review').click();
  cy.contains('Publish & send, right now').click();
  cy.wait(20000);
  cy.contains('Back to dashboard').click();
  cy.contains('Posts').click();

  // Añadir  tag
  cy.contains('ES09 Ghost Post').rightclick();
  cy.contains('Add a tag').click();
  cy.wait(200);
  cy.get('.ember-power-select-status-icon').click();
  cy.get('[aria-current="true"]').click();
  cy.get('.modal-content').click();
  cy.get('[data-test-task-button-state="idle"]').click();
  cy.contains('ES09 Ghost Post').click();
  cy.wait(1000);
  cy.get('.settings-menu-toggle > span').click ();

   //Then
  cy.contains('New').should('contain',"News");
 
                    

});
});
