export class AccionesTag {

  crearTag(title_tag) {
    cy.wait(100);
    cy.get('a[href*="#/tags/"]').click();
    cy.contains("New tag").click();
    cy.get('[id="tag-name"]').type(title_tag);
    cy.wait(500);
    cy.get('[data-test-task-button-state="idle"]').click();
    cy.wait(500);
    cy.get('[class="active ember-view"]').click();
  }

  borrarTag(title_tag) {
    cy.contains(title_tag).click();
    cy.contains("Delete tag").click();
    cy.wait(1000);
    cy.get('[data-test-button="confirm"]').click();
    cy.wait(1000);
    cy.contains("Tags").click();
    // Cypress.on("uncaught:exception", (err, runnable) => {
    //   return false;
    // });
  }

  verificarBorrarTag(title_tag) {
    cy.wait(5000);
    cy.get('[id^=ember]').find('.gh-tag-list-name').should('not.contain',title_tag);
  }

  editarTitleTag(title_tag,title_tag_editado) {
    cy.contains(title_tag).click();
    cy.get('[id="tag-name"]').clear().type(title_tag_editado);
    cy.wait(500);
    cy.get('[data-test-task-button-state="idle"]').click();
    cy.get('[class="active ember-view"]').click();
  }

  verificarTitleTag(title_tag) {
    cy.get('[id^=ember]').find('.gh-tag-list-name').should('contain', title_tag);

  }

  
}
