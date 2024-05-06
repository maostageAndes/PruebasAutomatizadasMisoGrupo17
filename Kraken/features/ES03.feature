Feature: ES03 Eliminacion de Pagina


@user2 @web
Scenario: Como usuario quiero borrar una pagina de mi lista de paginas
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
  And I enter text "ES03 Ghost Page borrar"
  And I click on body
  And I enter text "contenido ES03"
  And I click on publish
  And I click on continue final review
  And I click on confirm publish
  And I wait for 10 seconds
  And I click on back to dashboard
  And I click on pages option
  And I click right on page "ES03 Ghost Page borrar"
  #And I click on delete option
  #And I click on confirm delete
  #Then I see not published "ES03 Ghost Page borrar"