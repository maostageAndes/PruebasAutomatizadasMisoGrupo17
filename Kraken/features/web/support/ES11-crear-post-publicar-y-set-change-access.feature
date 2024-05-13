

Feature: ES11 Cambiar acceso
@user2 @web
Scenario: Como usuario quiero change access a un post de mi lista de post

Given I navigate to page "<URL>"
  And I wait for 2 seconds
  When I login with email "<USERNAME>" and password "<PASSWORD>"
  And I wait for 2 seconds
  And I click on posts option
  And I click on new post
  And I enter text "ES11 Ghost post"
  And I click on body
  And I enter text "contenido ES11"
  And I click on publish
  And I click on continue final review
  And I click on confirm publish
  And I wait for 2 seconds
  And I click on back to dashboard
  And I click on posts option
  And I right click on post "ES11 Ghost post"
  And I select option change access on "ES11 Ghost post"
  And I right click on post "ES11 Ghost post"
  Then I see changed access on "ES11 Ghost post"