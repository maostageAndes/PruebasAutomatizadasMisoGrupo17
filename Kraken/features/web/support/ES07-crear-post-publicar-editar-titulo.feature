

Feature: ES07 Edición de Post
@user2 @web
Scenario: Como usuario quiero editar el titulo de un Post que he creado con el titulo ES07 Ghost Post Edit y publicarla
Given I navigate to page "<URL>"
  And I wait for 2 seconds
  When I login with email "<USERNAME>" and password "<PASSWORD>"
  And I wait for 2 seconds
  And I click on posts option
  And I click on new post
  And I enter text "ES07 Ghost Post edit"
  And I click on body
  And I enter text "contenido inicial ES07"
  And I click on publish
  And I click on continue final review
  And I click on confirm publish
  And I wait for 2 seconds
  And I click on back to dashboard
  And I click on posts option
  And I click on post "ES07 Ghost Post edit"
  And I edit title of post "ES07 Ghost Post edit new"
  Then I see published "ES07 Ghost Post edit new"