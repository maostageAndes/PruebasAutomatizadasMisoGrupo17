import { LoginPage } from "./Page_Object/login_page";

const loginPage = new LoginPage();
 
describe('Escenario_11', () => {

it ("Login", function (){
  loginPage.baseUrl();
  loginPage.enterUsername();
  loginPage.enterPassword();
  loginPage.clickLogin();
  cy.wait(100);
  cy.get('a[href*="#/posts/"]').click();
  cy.contains("New post").click();
  cy.get('[id^=ember]').find('textarea').type("ES11 Ghost Post");
  cy.wait(500);
  cy.get("p").type("contenido ES11");
  cy.wait(800);
  cy.contains('Publish').click();
  cy.wait(500);
  cy.contains('Post');
  cy.contains('Continue, final review').click();
  cy.contains('Publish & send, right now').click();
  cy.wait(20000);
  cy.contains('Back to dashboard').click();
  cy.contains('Post').click();
  cy.contains('ES09 Ghost Post (Copy)').rightclick();
  cy.contains('Change access').click();
  cy.wait(200);
  cy.get("select").select(1).invoke("val").should("eq", "lowestprice")
  cy.obtener ('[data-test-select="post-visibility"]').seleccionar ([ "Members only"]);
  cy.get('.modal-content').click();
  cy.contains('Save').click();
  cy.contains('ES11 Ghost Post').click();
});
});