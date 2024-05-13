

Feature: ES08 Eliminar post
@user2 @web
Scenario: Como usuario quiero borrar un post de mi lista de posts
Given I navigate to page "<URL>"
  And I wait for 2 seconds
  When I login with email "<USERNAME>" and password "<PASSWORD>"
  And I wait for 2 seconds
  And I click on posts option
  And I click on new post
  And I enter text "ES08 Ghost post borrar"
  And I click on body
  And I enter text "contenido ES08"
  And I click on publish
  And I click on continue final review
  And I click on confirm publish
  And I wait for 2 seconds
  And I click on back to dashboard
  And I click on posts option
  And I right click on post "ES08 Ghost post borrar"
  And I delete page "ES03 Ghost page borrar"
  Then I see unpublished "ES03 Ghost page borrar"