

Feature: ES04 Agregar feature
@user2 @web
Scenario: Como usuario quiero agregar el estado de Feature a una pagina que acabo de crear
Given I navigate to page "<URL>"
  And I wait for 2 seconds
  When I login with email "<USERNAME>" and password "<PASSWORD>"
  And I wait for 2 seconds
  And I click on pages option
  And I click on new page
  And I enter text "ES04 Ghost page add Feature"
  And I click on body
  And I enter text "contenido ES04"
  And I click on publish
  And I click on continue final review
  And I click on confirm publish
  And I wait for 2 seconds
  And I click on back to dashboard
  And I click on pages option
  And I right click on page "ES04 Ghost page add Feature"
  And I select option feature on "ES04 Ghost page add Feature"
  Then I see featured "ES04 Ghost page add Feature"