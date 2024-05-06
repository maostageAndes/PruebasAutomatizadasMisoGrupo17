
import { LoginPage } from "./Page_Object/login_page";

const loginPage = new LoginPage();
 
describe('Escenario_10', () => {

it ("Login", function (){
  //Then
  loginPage.baseUrl();
  //when
  loginPage.enterUsername();
  loginPage.enterPassword();
  loginPage.clickLogin();
  cy.wait(100);
  cy.get('a[href*="#/posts/"]').click();
  cy.contains("New post").click();
  cy.get('[id^=ember]').find('textarea').type("ES10 Ghost Post");
  cy.wait(500);
  cy.get("p").type("contenido ES10");
  cy.wait(800);
  cy.contains('Publish').click();
  cy.wait(500);
  cy.contains('Post');
  cy.contains('Continue, final review').click();
  cy.contains('Publish & send, right now').click();
  cy.wait(20000);
  cy.contains('Back to dashboard').click();
  cy.contains('Post').click();
  cy.contains('ES10 Ghost Post').rightclick();
  cy.contains('Duplicate').click();

  //Then
    cy.get('[id^=ember]')
    .find('.gh-content-entry-title')
    .should('contain',"ES10 Ghost Post (Copy)");
});
});