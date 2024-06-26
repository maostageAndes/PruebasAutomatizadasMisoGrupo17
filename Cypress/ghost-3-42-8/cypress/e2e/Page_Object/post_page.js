export class PostPage {

    navigateToPosts() {
      cy.wait(100);
      cy.get('[href="#/posts/"]').click({ multiple: true });
    }

    createNewPost(title_post, body_post) {
      cy.wait(100);
      cy.get('[class="ember-view gh-btn gh-btn-green"]').click({ multiple: true });
      //cy.get('[placeholder="Post Title"]').find('textarea').type(title_post);
      cy.get('[placeholder="Post Title"]').type(title_post);
      cy.wait(500);
      cy.get('[class="koenig-editor__editor __mobiledoc-editor __has-no-content"]').type(body_post);
      cy.wait(800);
      
      }
  
    publishPost() {
      cy.contains('Publish').click();
      cy.wait(500);
      cy.contains('Post');
      cy.get('[class="gh-btn gh-btn-blue gh-publishmenu-button gh-btn-icon ember-view"]').click();
      cy.wait(1000);
      
    }
  
    verifyPost(title_post) {
      //cy.contains('[class="blue link fw4 flex items-center ember-view"]').click();
      cy.contains('Post').click();
      cy.get('[id^=ember]')
        .find('[class="gh-content-entry-title"]')
        .should('contain',title_post);
      
    }

    selectPost(title_post) {
      cy.contains(title_post).click();
    }
  
    editPost(title_post_nuevo, content_post_nuevo ) {
      cy.get('[placeholder="Post Title"]').clear().type(title_post_nuevo);
      cy.wait(500);
      cy.get('[data-koenig-dnd-container="true"]').clear().type(content_post_nuevo);
      cy.wait(500);
    }

    updatePost() {
      cy.get('[class="gh-publishmenu ember-view"]').click();
      cy.get('[class="gh-btn gh-btn-blue gh-publishmenu-button gh-btn-icon ember-view"]').click();
      cy.wait(500);
    }

    verifyPostlist(title_post) {
      cy.get('[id^=ember]').find('.gh-content-entry-title').should('contain',title_post);
      
    }

    deletePost(title_post) {
      cy.contains(title_post).click();
      cy.get('[class="post-settings"]').click();
      //cy.scrollTo('[class="settings-menu-pane-in settings-menu settings-menu-pane"]');
      cy.get('.settings-menu-pane-in').scrollTo('bottom');
      cy.contains('Delete').click();
      cy.wait(1000);
      cy.get('[class="gh-btn gh-btn-red gh-btn-icon ember-view"]').click();

    }

    verifyPostNotPresent(title_post) {
      cy.wait(5000);
      cy.get('[id^=ember]')
        .find('.gh-content-entry-title')
        .should('not.contain', title_post);
    }

    addTagToPost(title_post, title_tag) {
      cy.get('[data-test-nav="posts"]').click();
      cy.contains(title_post).rightclick();
      cy.contains('Add a tag').click();
      cy.wait(200);
      cy.get('.ember-power-select-status-icon').click();
      cy.contains(title_tag).click();
      cy.get('.modal-content').click();
      cy.get('[data-test-task-button-state="idle"]').click();
  
    }
  
    verifyTagInPost(title_tag) {
      cy.wait(1000);
      cy.get('.settings-menu-toggle > span').click();
      cy.contains(title_tag).should('contain', title_tag);

    }

    duplicatePost(title_post) {
      cy.contains(title_post).rightclick();
      cy.contains('Duplicate').click();

    }

    changeAccessToPost(title_post, access) {
      cy.contains(title_post).rightclick();
      cy.contains('Change access').click();
      cy.wait(200);
      cy.get('[data-test-select="post-visibility"]').select(access);
      cy.get('.modal-content').click();
      cy.contains('Save').click();
    }
}