Feature: ES01 Creación de Pagina


@user2 @web
Scenario: Como usuario quiero crear una pagina con titulo ES01 Ghost Page create y publicarla
Given I navigate to page "<URL>"
  And I wait for 2 seconds
  When I login with email "<USERNAME>" and password "<PASSWORD>"
  And I wait for 5 seconds
  And I click on pages option
  And I click on new page
  And I enter text "ES01 Ghost Page create"
  And I click on body
  And I enter text "contenido inicial ES01"
  And I click on publish
  And I wait for 5 seconds
  And I click on continue final review
  And I click on confirm publish
  And I wait for 2 seconds
  And I click on back to dashboard
  And I click on pages option
  And I wait for 2 seconds
  Then I see published "ES01 Ghost Page create"

  