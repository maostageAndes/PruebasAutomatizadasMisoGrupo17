Feature: ES01 Creación de Pagina


@user2 @web
Scenario: Como usuario quiero crear una pagina con titulo "ES01 Ghost Page create" y publicarla
  Given I navigate to page "https://proyectomiso.site/ghost/"
  And I wait for 30 seconds
  When I enter email "<USERNAME>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD>"
  And I wait for 2 seconds
  And I click next
  And I wait for 7 seconds
  And I click on pages option
  And I click on new page
  And I enter text "ES01 Ghost Page create"
  And I click on body
  And I enter text "contenido inicial ES01"
  And I click on publish
  And I click on continue final review
  And I click on confirm publish
  And I wait for 25 seconds
  And I click on back to dashboard
  And I click on pages option
  Then I see published "ES01 Ghost Page create"

  