Feature: ES12 Creación de Tag
@user2 @web
Scenario:  Como usuario quiero crear un nuevo Tag con el name Alerta y publicarlo
Given I navigate to page "<URL>"
  And I wait for 2 seconds
  When I login with email "<USERNAME>" and password "<PASSWORD>"
  And I wait for 2 seconds
  And I click on tags option
  And I click on new tag
  And I click on tag name
  And I enter text "Alerta"
  And I click on save tag
  And I click on tags option
  Then I see tag published "Alerta"