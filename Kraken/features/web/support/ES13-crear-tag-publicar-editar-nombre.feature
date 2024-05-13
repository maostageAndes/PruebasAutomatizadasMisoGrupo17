Feature: ES13 Edición de Tag
@user2 @web
Scenario:  Scenario: Como usuario quiero editar el name de un tag que he creado con el nuevo name Alerta2 Editado y publicarla
Given I navigate to page "<URL>"
  And I wait for 2 seconds
  When I login with email "<USERNAME>" and password "<PASSWORD>"
  And I wait for 2 seconds
  And I click on tags option
  And I click on new tag
  And I click on tag name
  And I enter text "Alerta 2"
  And I click on save tag
  And I click on tags option
  And I click on tag "Alerta 2"
  And I edit tag title "Alerta 2 Editado"
  And I click on save tag
  And I click on tags option
  Then I see tag published "Alerta 2 Editado"