const LoginPage = require('../classes/login.page');
const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');
//const { Builder, By, Key, until } = require('selenium-webdriver');


When('I enter email {kraken-string}', async function (email) {
    let loginPage = new LoginPage(this.driver);
    await loginPage.enterEmail(email);
});

When('I enter password {kraken-string}', async function (password) {
    let loginPage = new LoginPage(this.driver);
    await loginPage.enterPassword(password);
});
When('I click next', async function() {
    let loginPage = new LoginPage(this.driver);
    await loginPage.clickNext();
});
When('I login with email {kraken-string} and password {kraken-string}', async function(email,password) {
    let loginPage = new LoginPage(this.driver);
    await loginPage.enterEmail(email);
    await loginPage.enterPassword(password);
    await loginPage.clickNext();
});