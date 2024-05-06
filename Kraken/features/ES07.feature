Feature: ES07 Edición de Post

@user2 @web
Scenario: Como usuario quiero editar el titulo de un Post que he creado con el titulo "ES07 Ghost Post edit" y publicarla
  Given I navigate to page "https://proyectomiso.site/ghost/"
  And I wait for 30 seconds
  When I enter email "<USERNAME>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD>"
  And I wait for 2 seconds
  And I click next
  And I wait for 7 seconds
  And I click on new post
  And I enter text "ES07 Ghost Post edit"
  And I click on body
  And I enter text "contenido inicial ES07"
  And I click on publish 
  And I click on continue final review
  And I click on confirm publish
  And I wait for 25 seconds
  And I click on back to dashboard
  And I click on posts option
  And I click on page "ES07 Ghost Post edit"
  And I edit title "ES07 Ghost Post edit new"
  Then I see post published "ES07 Ghost Post edit new"