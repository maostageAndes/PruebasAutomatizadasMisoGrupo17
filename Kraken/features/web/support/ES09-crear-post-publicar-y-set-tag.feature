

Feature: ES10 Agregar Tag
@user2 @web
Scenario: Como usuario quiero agregar un Tag a un post que acabo de crear

Given I navigate to page "<URL>"
  And I wait for 2 seconds
  When I login with email "<USERNAME>" and password "<PASSWORD>"
  And I wait for 2 seconds
  And I click on posts option
  And I click on new post
  And I enter text "ES09 Ghost post"
  And I click on body
  And I enter text "contenido ES09"
  And I click on publish
  And I click on continue final review
  And I click on confirm publish
  And I wait for 2 seconds
  And I click on back to dashboard
  And I click on posts option
  And I right click on post "ES09 Ghost post"
  And I select option add tag on "ES09 Ghost post"
  Then I see tag added on "ES09 Ghost post"