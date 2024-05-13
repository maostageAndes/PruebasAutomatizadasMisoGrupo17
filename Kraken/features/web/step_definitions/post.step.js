const PostPage = require('../classes/post.page');
const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

When('I click on new post', async function() {
    let postPage = new PostPage(this.driver);
    await postPage.clickNewPost();
});

When('I click on body', async function() {
    let postPage = new PostPage(this.driver);
    await postPage.clickBodyPost();
});
When('I click on publish', async function() {
    let postPage = new PostPage(this.driver);
    await postPage.clickPublishPost();
});
When('I click on continue final review', async function() {
    let postPage = new PostPage(this.driver);
    await postPage.clickContinueFinalReviewPost();
});
When('I click on confirm publish', async function() {
    let postPage = new PostPage(this.driver);
    await postPage.clickConfirmPublishPost();
});
When('I click on back to dashboard', async function() {
    let postPage = new PostPage(this.driver);
    await postPage.clickBackDashboardFromPost();
});
When('I click on posts option', async function() {
    let postPage = new PostPage(this.driver);
    await postPage.clickPostsOption();
});
When('I click on post {kraken-string}', async function(titlePost) {
    let postPage = new PostPage(this.driver);
    await postPage.clickOnPost(titlePost);
});
When('I edit title of post {kraken-string}', async function(newTitlePost) {
    let postPage = new PostPage(this.driver);
    await postPage.editTitleOfPost(newTitlePost);
});

When('I right click on post {kraken-string}', async function(titlePost) {
    let postPage = new PostPage(this.driver);
    await postPage.rightClick(titlePost);
});

When('I delete post {kraken-string}', async function(titlePost) {
    let postPage = new PostPage(this.driver);
    await postPage.deletePost(titlePost);
});
When('I select option add tag on {kraken-string}', async function(title) {
    let postPage = new PostPage(this.driver);
    await postPage.addTagToPost(title);
});
When('I select option change access on {kraken-string}', async function(title) {
    let postPage = new PostPage(this.driver);
    await postPage.changeAccessOnPost(title);
});

Then('I see published {kraken-string}', async function (title) {

    //await new Promise(r => setTimeout(r, 5000));
    let elements = await this.driver.$$(".gh-content-entry-title");

    console.log("Total de elementos :", elements.length);
    // Filtrar los elementos que tengan el texto "Mi primer post"
    let filteredElements = [];
    for (const element of elements) {
        let textElement = await element.getText();
        if (textElement.includes(title)) {
            filteredElements.push(element);
        }
    }
    console.log("Total de elementos encontrados:", filteredElements.length);
     // Imprimir el total de elementos del arreglo
    console.log("Total de elementos encontrados:", filteredElements.length);
    
    let postCreated = filteredElements.length > 0;
    assert(postCreated,'Expected text not found in page');
});

Then('I see tag added on {kraken-string}', async function (title) {

    //let elements = await this.driver.$$(".gh-content-entry-title");
    let elements = await this.driver.$$(".ember-view.permalink.gh-list-data.gh-post-list-title");
    console.log("Total de elementos :", elements.length);
    console.log("Elemento :", elements[0]);

    // Filtrar los elementos que tengan el texto "Mi primer post"
    let filteredElements = [];
    for (const element of elements) {
        let subElement = await element.$(".gh-content-entry-title");
        let textElement = await subElement.getText();
        if (textElement.includes(title)) {
            filteredElements.push(element);
        }
    }
    let text = await filteredElements[0].getText();
    //console.log("Elemento 2:", filteredElements[0].getText());
    let tagAdded = text.includes("News");
    assert(tagAdded,'Expected tag added to this page');
});

Then('I see changed access on {kraken-string}', async function (title) {
    //await new Promise(r => setTimeout(r, 5000));
    let elements = await this.driver.$$('.mr2');
    await elements[3].click();
    // Obtener el div con la clase modal-body
    //let element = await this.page.$('[value="members"]');
    //let element = await this.driver.$('[data-test-select="post-visibility"]');
    let selectElement = await this.driver.$('[data-test-select="post-visibility"]');
    // Obtener el valor seleccionado del elemento select
    let selectedValue = await selectElement.getProperty('value');
    let valueSelected = selectedValue.includes("members");
    assert(valueSelected,'Expected tag added to this page');

})