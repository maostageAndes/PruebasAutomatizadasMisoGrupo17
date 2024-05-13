

Feature: ES10 Duplicar post
@user2 @web
Scenario: Como usuario quiero duplicar un post que acabo de crear

Given I navigate to page "<URL>"
  And I wait for 2 seconds
  When I login with email "<USERNAME>" and password "<PASSWORD>"
  And I wait for 2 seconds
  And I click on posts option
  And I click on new post
  And I enter text "ES10 Ghost post duplicate"
  And I click on body
  And I enter text "contenido inicial ES10"
  And I click on publish
  And I click on continue final review
  And I click on confirm publish
  And I wait for 2 seconds
  And I click on back to dashboard
  And I click on posts option
  And I right click on post "ES10 Ghost post duplicate"
  And I select option duplicate on "ES10 Ghost post duplicate"
  Then I see published "ES10 Ghost post duplicate (Copy)"