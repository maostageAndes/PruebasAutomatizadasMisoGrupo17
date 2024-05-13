//ghost 3.42.8
export class AccionesSettings {

    cambiarNombreGhost(title_ghost) {
        cy.get('[href="#/settings/general/"]').click();
        cy.contains('Expand').first().click();
        cy.get('[type="text"]').first().clear()
        cy.get('[type="text"]').first().type(title_ghost +'{enter}',{ force: true });
        cy.contains('Save settings').click();
        cy.wait(5000);
        cy.get('a[href*="#/pages/"]').first().click();
    }

    verificarNombreGhost(title_ghost) {
        // cy.get('.gh-nav-menu-details-blog').should('contain',title_ghost)
        cy.get('[class="gh-nav-menu-details-blog"]').should('contain',title_ghost)
    }



}