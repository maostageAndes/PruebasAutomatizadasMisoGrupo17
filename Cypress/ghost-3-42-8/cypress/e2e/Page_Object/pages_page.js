//ghost 3.42.8
export class AccionesPagina {

  crearPagina(title_pagina, body_pagina) {
    cy.get('a[href*="#/pages/"]').click();
    cy.contains("New page").click();
    cy.get('[placeholder="Page Title"]').type(title_pagina +"{enter}");
    cy.wait(5000);
    cy.get('.koenig-editor__editor').type(body_pagina);
  }

  publicarPagina() {
    cy.contains('Publish').click();
    cy.get('[class="gh-btn gh-btn-blue gh-publishmenu-button gh-btn-icon ember-view"]').click();
    cy.wait(3000);
    cy.get('a[href*="#/pages/"]').click();
    cy.wait(3000);
    
  }

  verificarPagina(title_pagina) {
    cy.get('a[href*="#/pages/"]').click({ multiple: true });
    cy.get("[id^=ember]")
      .find(".gh-content-entry-title")
      .should("contain", title_pagina);
  }

  verificarNoExistePagina(title_pagina) {
    cy.wait(5000);
    cy.get('a[href*="#/pages/"]').click({ multiple: true });
    cy.get("[id^=ember]")
      .find(".gh-content-entry-title")
      .should("not.contain", title_pagina);
  }

  editarPagina(title_pagina, title_pagina_nuevo) {
    cy.get('a[href*="#/pages/"]').first().click();
    cy.contains(title_pagina).click();
    cy.get('[placeholder="Page Title"]').clear().type(title_pagina_nuevo +"{enter}");
    cy.contains("Update").click();
    cy.get('[class="gh-btn gh-btn-blue gh-publishmenu-button gh-btn-icon ember-view"]').click();
    
  }

  borrarPagina(title_pagina) {
    cy.get('a[href*="#/pages/"]').first().click();
    cy.contains(title_pagina).click();
    cy.get('[title="Settings"]').click();
    cy.contains('Delete').click();
    cy.get('[class="gh-btn gh-btn-red gh-btn-icon ember-view"]').first().click();
  }

  featurePagina(title_pagina) {
    cy.get('a[data-test-nav="pages"]').click();
    cy.contains(title_pagina).rightclick();
    cy.get(".mr2 > span").contains("Feature").click();
  }

  confirmarFeaturePagina(title_pagina) {
    cy.get("[id^=ember] > .gh-content-entry-title").should("contain",title_pagina);
    cy.get("[id^=ember] > .gh-content-entry-title .gh-featured-post").should("be.visible");
  }

  duplicarPagina(title_pagina) {
    cy.get('a[data-test-nav="pages"]').click();
    cy.contains(title_pagina).rightclick()
    cy.get('.mr2 > span').contains('Duplicate').click();
  }

    


}
