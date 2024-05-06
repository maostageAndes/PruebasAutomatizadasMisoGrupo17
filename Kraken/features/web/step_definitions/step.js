const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');


When('I enter email {kraken-string}', async function (email) {
    let element = await this.driver.$('#identification');
    return await element.setValue(email);
});

When('I enter password {kraken-string}', async function (password) {
    let element = await this.driver.$('#password');
    return await element.setValue(password);
});
When('I click next', async function() {
    let element = await this.driver.$('#ember5');
    return await element.click();
});
//ES06 Creacion de Post - INICIO
When('I click on new post', async function() {
    let element = await this.driver.$('#ember20');
    return await element.click();
});
When('I click on body', async function() {
    let element = await this.driver.$('[data-koenig-dnd-droppable="true"]');
    return await element.click();
})
When('I click on publish', async function() {
    let element = await this.driver.$('.gh-btn.gh-btn-editor.darkgrey.gh-publish-trigger');
    return await element.click();
})
When('I click on continue final review', async function() {
    let element = await this.driver.$('.gh-publish-cta');
    return await element.click();
})
When('I click on confirm publish', async function() {
    let element = await this.driver.$('[data-test-button="confirm-publish"]');
    return await element.click();
})
When('I click on back to dashboard', async function() {
    let element = await this.driver.$('.ember-view.gh-back-to-editor');
    return await element.click();
})
When('I click on posts option', async function() {
    let element = await this.driver.$('[data-test-nav="posts"]');
    return await element.click();
})
Then('I see published {kraken-string}', async function (title) {

// Obtener todos los elementos h3 con la clase gh-content-entry-title
let elements = await this.driver.$$("h3.gh-content-entry-title");

// Filtrar los elementos que tengan el texto "Mi primer post"
let filteredElements = await Promise.all(elements.map(async (element) => {
    let textElement = await element.getText();
    if (textElement === title) {
        return element;
    }
}));
// Quitar elementos que puedan ser nulos (es decir, no coinciden con el texto)
filteredElements = filteredElements.filter(element => element !== null);

  let postCreated = filteredElements.length > 0;
  assert(postCreated,`Expected text "{title}" not found in page`);
})
//ES01 Creacion de Page - INICIO
When('I click on pages option', async function() {
    let element = await this.driver.$('[data-test-nav="pages"]');
    return await element.click();
})
When('I click on new page', async function() {
    let element = await this.driver.$('.ember-view.gh-btn.gh-btn-primary.view-actions-top-row');
    return await element.click();
})
//ES3 Eliminacion de pagina - INICIO
When('I click on page {kraken-string}', async function(titlePost) {
    let elements = await this.driver.$$("h3.gh-content-entry-title");
    let filteredElements = await Promise.all(elements.map(async (element) => {
    let textElement = await element.getText();
    if (textElement === titlePost) {
        return element;
    }
}));
// Quitar elementos que puedan ser nulos (es decir, no coinciden con el texto)
filteredElements = filteredElements.filter(element => element !== null);
    return await filteredElements[0].click();
});
When('I click right on page {kraken-string}', async function(titlePost) {
    let elements = await this.driver.$$("h3.gh-content-entry-title");
    let filteredElements = await Promise.all(elements.map(async (element) => {
    let textElement = await element.getText();
    if (textElement === titlePost) {
        return element;
    }
}));
// Quitar elementos que puedan ser nulos (es decir, no coinciden con el texto)
filteredElements = filteredElements.filter(element => element !== null);
   
   

    // Despachar el evento de clic derecho en el elemento filtrado
    //filteredElements[0].dispatchEvent(rightClickEvent);

        await this.driver.executeScript('arguments[0].dispatchEvent(new MouseEvent("contextmenu"))', filteredElements[0]);

});
//ES3 Eliminacion de pagina . FIN
//ES07 Edicion de Post - INICIO
When('I edit title {kraken-string}', async function(newTitlePost) {
    let element = await this.driver.$('.gh-editor-title.ember-text-area.gh-input.ember-view');
    return await element.setValue(newTitlePost);
});



