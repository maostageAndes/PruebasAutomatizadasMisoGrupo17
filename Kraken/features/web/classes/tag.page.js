class TagPage{
    
    constructor(page) {
        this.page = page;
    }

    async clickNewTag(){
        let element = await this.page.$('.ember-view.gh-btn.gh-btn-primary');
        await element.click();
    }
    async clickOnTagName(){
        let element = await this.page.$('[data-test-input="tag-name"]');
        await element.click();
    }
    async clickOnSaveTag(){
        let element = await this.page.$('[data-test-button="save"]');
        return await element.click();
    }
    async clickTagsOption(){
        let element = await this.page.$('[data-test-nav="tags"]');
        return await element.click();
    }
    async clickOnTag(title){
        //let elements = await this.driver.$$("h3.gh-content-entry-title");
        let elements = await this.page.$$(".gh-tag-list-name");
        let filteredElements = await Promise.all(elements.map(async (element) => {
        let textElement = await element.getText();
            if (textElement === title) {
                return element;
            }
        }));
        // Quitar elementos que puedan ser nulos (es decir, no coinciden con el texto)
        //filteredElements = filteredElements.filter(element => element !== null);
        return await filteredElements[0].click();
    }
    async editTitleOfTag(title){
        let element = await this.page.$('[data-test-input="tag-name"]');
        await element.click();
        return await element.setValue(title);   
    }
    async deleteTag(title){
        let element = await this.page.$('[data-test-button="delete-tag"]');
        await element.click();
        
        // Obtener el div con la clase modal-footer
        const modalFooter = await this.page.$('.modal-footer');

        // Buscar botones dentro del div modal-footer
        const buttons = await modalFooter.$$('button');
        console.log("Total de elementos :", buttons.length);
        await buttons[1].click();
        
    }
    


}
module.exports = TagPage;