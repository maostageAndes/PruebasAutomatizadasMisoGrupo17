const assert = require('assert');
class GeneralPage{
    
    constructor(page) {
        this.page = page;
    }

    async clickOnSettings(){
        let element = await this.page.$('[data-test-nav="settings"]');
        await element.click();
    }
    async clickOnEditTitle(){
        let element = await this.page.$('.flex.items-center.justify-start.rounded.gap-4');
        await element.click();
    }
    async changeTitle(title){
        let element = await this.page.$('[placeholder="Site title"]');
        await element.setValue(title); 
        //await new Promise(r => setTimeout(r, 5000));
        let contenedor = await this.page.$('.flex.items-center.justify-start.rounded.gap-4');
        let elementos = await contenedor.$$('button');
        await elementos[1].click();
        //await new Promise(r => setTimeout(r, 5000));
    }
    async seeChanged(title){
        let contenedor = await this.page.$('[data-testid="title-and-description"]');
        let elements = await contenedor.$$('.flex.items-center.mt-1');
        let textElement = await elements[0].getText();
        console.log("elements.length :", elements.length);
        console.log("textElement :", textElement);
        let titleChanged = textElement.includes(title);
        assert(titleChanged,'Expected text title changed');
        
    }
}module.exports = GeneralPage;