import { LoginPage } from "./Page_Object/login_page";

const loginPage = new LoginPage();
 
describe('Escenario _13', () => {

it ("Login", function (){
  //Given
  loginPage.baseUrl();

  //When
  loginPage.enterUsername();
  loginPage.enterPassword();
  loginPage.clickLogin();
  cy.wait(100);
  cy.get('a[href*="#/tags/"]').click();
  cy.contains("New tag").click();
  cy.get('[id="tag-name"]').type("Alerta 3");
  cy.wait(500);
  cy.get('[data-test-task-button-state="idle"]').click()
  cy.wait(500);
  cy.get('[class="active ember-view"]').click();
  
  cy.contains('Alerta 3').click();
  cy.contains('Delete tag').click();
  cy.wait(1000);
  cy.get('[data-test-button="confirm"]').click();
  cy.wait(1000);
  cy.contains('Tags').click();
  Cypress.on('uncaught:exception', (err, runnable) => {
    
    return false;
  });
  
  //Then
  cy.wait(5000);
  cy.get('[id^=ember]').find('.gh-tag-list-name').should('not.contain',"Alerta3");

});
});