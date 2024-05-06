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
  cy.get('[id="tag-name"]').type("Alerta 2");
  cy.wait(500);
  cy.get('[data-test-task-button-state="idle"]').click()
  cy.wait(500);
  cy.get('[class="active ember-view"]').click();
  cy.contains('Alerta 2').click();
  cy.get('[id="tag-name"]').clear().type("Alerta 2 Editado");
  cy.wait(500);
  cy.get('[data-test-task-button-state="idle"]').click();
  cy.get('[class="active ember-view"]').click();
  //Then
  cy.get('[id^=ember]').find('.gh-tag-list-name').should('contain', "Alerta 2 Editado");

});
});