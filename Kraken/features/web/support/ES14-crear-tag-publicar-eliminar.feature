Feature: ES14 Eliminar Tag
@user2 @web
Scenario:  Scenario: Como usuario quiero borrar un tag  de mi lista de tags
Given I navigate to page "<URL>"
  And I wait for 2 seconds
  When I login with email "<USERNAME>" and password "<PASSWORD>"
  And I wait for 2 seconds
  And I click on tags option
  And I click on new tag
  And I click on tag name
  And I enter text "Alerta 3"
  And I click on save tag
  And I click on tags option
  And I click on tag "Alerta 3"
  And I delete tag "Alerta 3"
  Then I see tag unpublished "Alerta 3"