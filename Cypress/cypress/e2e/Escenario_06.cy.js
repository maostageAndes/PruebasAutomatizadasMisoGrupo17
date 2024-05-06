import { LoginPage } from "./Page_Object/login_page";

const loginPage = new LoginPage();
 
describe('Escenario 06', () => {

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
  cy.get('[id^=ember]').find('textarea').type("ES01 Ghost Post");
  cy.wait(500);
  cy.get("p").type("contenido ES01");
  cy.wait(800);
  cy.contains('Publish').click();
  cy.wait(500);
  cy.contains('Post');
  cy.contains('Continue, final review').click();
  cy.contains('Publish & send, right now').click();
  cy.wait(20000);
  cy.contains('Back to dashboard').click();
  cy.contains('Post').click();
  cy.get('[id^=ember]').find('.gh-content-entry-title').should('contain',"ES01 Ghost Post");
});
});
  
