const GeneralPage = require('../classes/general.page');
const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

When('I click on settings', async function() {
    let generalPage = new GeneralPage(this.driver);
    await generalPage.clickOnSettings();
});
When('I click on edit title', async function() {
    let generalPage = new GeneralPage(this.driver);
    await generalPage.clickOnEditTitle();
});
When('I change title with {kraken-string}', async function (title) {
    let generalPage = new GeneralPage(this.driver);
    await generalPage.changeTitle(title);
});
Then('I see changed {kraken-string}', async function (title) {
    let generalPage = new GeneralPage(this.driver);
    await generalPage.seeChanged(title);
    
});
