

Feature: ES05 Duplicar pagina
@user2 @web
Scenario: Como usuario quiero duplicar una pagina que acabo de crear

  Given I navigate to page "<URL>"
  And I wait for 2 seconds
  When I login with email "<USERNAME>" and password "<PASSWORD>"
  #When I enter email "<USERNAME>"
  #And I wait for 2 seconds
  #And I enter password "<PASSWORD>"
  #And I wait for 2 seconds
  #And I click next
  And I wait for 2 seconds
  And I click on pages option
  And I click on new page
  And I enter text "ES05 Ghost page duplicate"
  And I click on body
  And I enter text "contenido inicial ES05"
  And I click on publish
  And I click on continue final review
  And I click on confirm publish
  And I wait for 2 seconds
  And I click on back to dashboard
  And I click on pages option
  And I right click on page "ES05 Ghost page duplicate"
  And I select option duplicate on "ES05 Ghost page duplicate"
  And I wait for 2 seconds
  Then I see published "ES05 Ghost page duplicate (Copy)"