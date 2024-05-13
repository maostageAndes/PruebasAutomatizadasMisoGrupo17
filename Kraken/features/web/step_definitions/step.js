const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');



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



