const PagePage = require('../classes/page.page');
const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

When('I click on new page', async function() {
    let pagePage = new PagePage(this.driver);
    await pagePage.clickNewPage();
});


When('I click on pages option', async function() {
    let pagePage = new PagePage(this.driver);
    await pagePage.clickOnPagesOption();
})
When('I edit title {kraken-string}', async function(newTitlePost) {
    let pagePage = new PagePage(this.driver);
    await pagePage.editTitleOfPage(newTitlePost);
});
When('I click on page {kraken-string}', async function(titlePost) {
    let pagePage = new PagePage(this.driver);
    await pagePage.clickOnPage(titlePost);
});
When('I right click on page {kraken-string}', async function(titlePost) {
    let pagePage = new PagePage(this.driver);
    await pagePage.rightClick(titlePost);
});

When('I delete page {kraken-string}', async function(titlePost) {
    let pagePage = new PagePage(this.driver);
    await pagePage.deletePage(titlePost);
});

When('I select option feature on {kraken-string}', async function(titlePost) {
    let pagePage = new PagePage(this.driver);
    await pagePage.selectOptionFeature(titlePost);
});

When('I select option duplicate on {kraken-string}', async function(titlePost) {
    let pagePage = new PagePage(this.driver);
    await pagePage.selectOptionDuplicate(titlePost);
});

Then('I see unpublished {kraken-string}', async function (title) {
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
    
    let postCreated = filteredElements.length === 0;
    assert(postCreated,'Expected text found in page');
});
Then('I see featured {kraken-string}', async function (title) {
    let pagePage = new PagePage(this.driver);
    await pagePage.seeFeatured(title);
    
});