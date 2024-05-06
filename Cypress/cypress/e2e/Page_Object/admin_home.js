export class AccionesPagina {


  crearPagina(title_pagina, body_pagina) {
    cy.get('a[href*="#/pages/"]').click();
    cy.contains("New page").click();
    cy.get("[id^=ember]").find("textarea").type(title_pagina +'{enter}');
    cy.get('p').type(body_pagina);
  }

  publicarPagina() {
    cy.get('.gh-editor-header > .gh-editor-publish-buttons > .darkgrey > span').click();
    cy.get('.gh-publish-cta > .gh-btn > span').click();
    cy.contains('Publish page, right now').click();
    cy.contains('Back to dashboard').click();
  }

  verificarPagina(title_pagina) {
    cy.get('a[href*="#/pages/"]').click({ multiple: true });
    cy.get('[id^=ember]')
    .find('.gh-content-entry-title')
    .should('contain',title_pagina)
  }

  verificarNoExistePagina(title_pagina) {
    cy.wait(5000);
    cy.get('a[href*="#/pages/"]').click({ multiple: true });
    cy.get('[id^=ember]')
    .find('.gh-content-entry-title')
    .should('not.contain',title_pagina)
  }



}
