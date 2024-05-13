

Feature: ES02 Edición de Page
@user2 @web
Scenario: Como usuario quiero editar el titulo de una página que he creado con el nuevo titulo ES02 Ghost Page edit y publicarla
Given I navigate to page "<URL>"
  And I wait for 2 seconds
  When I login with email "<USERNAME>" and password "<PASSWORD>"
  And I wait for 5 seconds
  And I click on pages option
  And I click on new page
  And I enter text "ES02 Ghost Page edit"
  And I click on body
  And I enter text "contenido inicial ES02"
  And I click on publish
  And I wait for 5 seconds
  And I click on continue final review
  And I click on confirm publish
  And I wait for 2 seconds
  And I click on back to dashboard
  And I click on pages option
  And I wait for 5 seconds
  And I click on page "ES02 Ghost Page edit"
  And I wait for 5 seconds
  And I edit title "ES02 Ghost Page edit new"
  And I wait for 5 seconds
  Then I see published "ES02 Ghost Page edit new"