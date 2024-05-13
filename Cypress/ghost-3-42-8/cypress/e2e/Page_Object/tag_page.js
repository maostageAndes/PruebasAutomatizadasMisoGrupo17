//ghost 3.42.8
export class AccionesTag {

  crearTag(title_tag) {
    cy.wait(100);
    cy.get('a[href*="#/tags/"]').click();
    cy.contains("New tag").click();
    cy.get('[id="tag-name"]').type(title_tag);
    cy.wait(500);
    cy.contains('Save').click();
    cy.wait(500);
    cy.get('a[href*="#/tags/"]').first().click();
  }

  borrarTag(title_tag) {
    cy.contains(title_tag).click();
    cy.contains("Delete tag").click();
    cy.wait(1000);
    cy.get('[class="gh-btn gh-btn-red gh-btn-icon ember-view"]').first().click();
    cy.wait(1000);
    cy.contains("Tags").click();
    
  }

  verificarBorrarTag(title_tag) {
    cy.wait(5000);
    cy.get('[id^=ember]').find('.gh-tag-list-name').should('not.contain',title_tag);
  }

  editarTitleTag(title_tag,title_tag_editado) {
    cy.contains(title_tag).click();
    cy.get('#tag-name').first().clear().type(title_tag_editado,{ force: true });
    cy.wait(500);
    cy.contains('Save').click();
    cy.wait(500);
    cy.get('a[href*="#/tags/"]').first().click();
    
  }

  verificarTitleTag(title_tag) {
    cy.get('[id^=ember]').find('.gh-tag-list-name').should('contain', title_tag);

  }

  
}
