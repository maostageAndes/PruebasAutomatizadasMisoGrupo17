const TagPage = require('../classes/tag.page');
const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

When('I click on new tag', async function() {
    let tagPage = new TagPage(this.driver);
    await tagPage.clickNewTag();
});
When('I click on tag name', async function() {
    let tagPage = new TagPage(this.driver);
    await tagPage.clickOnTagName();
});
When('I click on save tag', async function() {
    let tagPage = new TagPage(this.driver);
    await tagPage.clickOnSaveTag();
});
When('I click on tags option', async function() {
    let tagPage = new TagPage(this.driver);
    await tagPage.clickTagsOption();
});

When('I click on tag {kraken-string}', async function(title) {
    let tagPage = new TagPage(this.driver);
    await tagPage.clickOnTag(title);
});
When('I edit tag title {kraken-string}', async function(title) {
    let tagPage = new TagPage(this.driver);
    await tagPage.editTitleOfTag(title);
});

When('I delete tag {kraken-string}', async function(titlePost) {
    let tagPage = new TagPage(this.driver);
    await tagPage.deleteTag(titlePost);
});

Then('I see tag published {kraken-string}', async function (title) {

    let elements = await this.driver.$$(".gh-tag-list-name");

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



Then('I see tag unpublished {kraken-string}', async function (title) {
    let elements = await this.driver.$$(".gh-tag-list-name");

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
    
    let postCreated = filteredElements.length === 0;
    assert(postCreated,'Expected text not found in tag');
});