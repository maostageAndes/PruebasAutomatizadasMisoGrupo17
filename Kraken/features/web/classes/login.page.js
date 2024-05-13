// login.page.js
//const { Given, When, Then } = require('@cucumber/cucumber');
//const assert = require('assert');
//const { Builder, By, Key, until } = require('selenium-webdriver');

class LoginPage{
    
    constructor(page) {
        this.page = page;
    }

    async enterEmail(identification){
        //const driver = await new Builder().forBrowser('chrome').build();
        //await driver.type('input[name="identification"]', identification);
        let element = await this.page.$('#identification');
        await element.setValue(identification);
    }
    async enterPassword(password){
        let element = await this.page.$('#password');
        await element.setValue(password);
    }
    async clickNext(){
        let element = await this.page.$('[data-test-button="sign-in"]');
        await element.click();
    }
}
module.exports = LoginPage;