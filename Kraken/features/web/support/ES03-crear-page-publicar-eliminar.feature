

Feature: ES03 Eliminar Page
@user2 @web
Scenario: Como usuario quiero borrar una pagina de mi lista de paginas
Given I navigate to page "<URL>"
  And I wait for 2 seconds
  When I login with email "<USERNAME>" and password "<PASSWORD>"
  And I wait for 2 seconds
  And I click on pages option
  And I wait for 5 seconds
  And I click on new page
  And I enter text "ES03 Ghost page borrar"
  And I click on body
  And I enter text "contenido ES03"
  And I click on publish
  And I wait for 5 seconds
  And I click on continue final review
  And I click on confirm publish
  And I wait for 5 seconds
  And I click on back to dashboard
    And I wait for 2 seconds
  And I click on pages option
  And I right click on page "ES03 Ghost page borrar"
  And I delete page "ES03 Ghost page borrar"
  Then I see unpublished "ES03 Ghost page borrar"