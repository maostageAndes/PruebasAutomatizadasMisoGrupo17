Feature: ES15 Cambio de site title


@user2 @web
Scenario: Como usuario quiero cambiar el site title por  ES15 Proyecto Miso grupo 17
Given I navigate to page "<URL>"
  And I wait for 2 seconds
  When I login with email "<USERNAME>" and password "<PASSWORD>"
  And I wait for 2 seconds
  And I click on settings
  And I wait for 2 seconds
  And I click on edit title
  And I change title with "ES15 Proyecto Miso grupo 17" 
  Then I see changed "ES15 Proyecto Miso grupo 17"

  