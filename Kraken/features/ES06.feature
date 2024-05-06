Feature: ES06 Creación de Post
@user2 @web
Scenario: Como usuario quiero crear un post con titulo "ES06 Ghost Post create" y publicarla
  Given I navigate to page "https://proyectomiso.site/ghost/"
  And I wait for 30 seconds
  When I enter email "<USERNAME>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD>"
  And I wait for 2 seconds
  And I click next
  And I wait for 7 seconds
  And I click on new post
  And I enter text "ES06 Ghost Post create"
  And I click on body
  And I enter text "contenido inicial ES06"
  And I click on publish
  And I click on continue final review
  And I click on confirm publish
  And I wait for 25 seconds
  And I click on back to dashboard
  And I click on posts option
  Then I see published "ES06 Ghost Post create"