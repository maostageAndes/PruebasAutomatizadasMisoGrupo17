class PostPage{
    
    constructor(page) {
        this.page = page;
    }

    async clickNewPost(){
        let element = await this.page.$('[title="New post"]');
        await element.click();
    }

    async clickBodyPost(){
        let element = await this.page.$('[data-koenig-dnd-droppable="true"]');
        return await element.click();
    }
    async clickPublishPost(){
        let element = await this.page.$('.gh-btn.gh-btn-editor.darkgrey.gh-publish-trigger');
        return await element.click();
    }
    async clickContinueFinalReviewPost(){
        let element = await this.page.$('.gh-publish-cta');
        return await element.click();
    }
    async clickConfirmPublishPost(){
        let element = await this.page.$('[data-test-button="confirm-publish"]');
        return await element.click();
    }
    async clickBackDashboardFromPost(){
        let element = await this.page.$('.ember-view.gh-back-to-editor');
        return await element.click();
    }
    async clickPostsOption(){
        let element = await this.page.$('[data-test-nav="posts"]');
        return await element.click();
    }
    async clickOnPost(titlePost){
        //let elements = await this.driver.$$("h3.gh-content-entry-title");
        let elements = await this.page.$$(".gh-content-entry-title");
        console.log("Total de elementos encontrados:", elements.length);

        let filteredElements = await Promise.all(elements.map(async (element) => {
        let textElement = await element.getText();
            if (textElement === titlePost) {
                return element;
            }
        }));
        // Quitar elementos que puedan ser nulos (es decir, no coinciden con el texto)
        //filteredElements = filteredElements.filter(element => element !== null);
        return await filteredElements[0].click();
    }
    async editTitleOfPost(newTitlePost){
        let element = await this.page.$('.gh-editor-title.ember-text-area.gh-input.ember-view');
        await element.setValue(newTitlePost);   
        element = await this.page.$('[data-test-button="publish-save"]');
        await element.click();
        element = await this.page.$('[data-test-link="posts"]');
        return await element.click();
        
    }
    async rightClick(titlePost){
        let elements = await this.page.$$(".gh-content-entry-title");
        let filteredElements = await Promise.all(elements.map(async (element) => {
        let textElement = await element.getText();
            if (textElement === titlePost) {
                return element;
            }
        }));
        await filteredElements[0].click({ button: 'right' });
    }
    async deletePost(titlePost){
        let elements = await this.page.$$('.mr2');
        await elements[5].click();
        // Obtener el div con la clase modal-footer
        const modalFooter = await this.page.$('.modal-footer');

        // Buscar botones dentro del div modal-footer
        const buttons = await modalFooter.$$('button');
        console.log("Total de elementos :", buttons.length);
        await buttons[1].click();
        
    }
    async addTagToPost(title){
        let elements = await this.page.$$('.mr2');
        await elements[2].click();
        // Obtener el div con la clase modal-body
        const modalBody = await this.page.$('.modal-body.mb9');
        let select = await modalBody.$('.ember-power-select-trigger-multiple-input');
        await select.setValue("News");   
        //await new Promise(r => setTimeout(r, 3000));
        let options = await this.page.$('.ember-power-select-option');
        
        await options.click();
        //console.log("Contenido del select :", options);
        //let opciones = await select.$$(".ember-power-select-options"); 
        //await opciones[0].click();

        // Obtener el div con la clase modal-footer
        const modalFooter = await this.page.$('.modal-footer');

        // Buscar botones dentro del div modal-footer
        const buttons = await modalFooter.$$('button');
        console.log("Total de elementos :", buttons.length);
        await buttons[1].click();
        
    }
    
    async changeAccessOnPost(title){
        let elements = await this.page.$$('.mr2');
        await elements[3].click();
        // Obtener el div con la clase modal-body
        let element = await this.page.$('[value="members"]');
        await element.click();
        //await new Promise(r => setTimeout(r, 5000));

        // Obtener el div con la clase modal-footer
        const modalFooter = await this.page.$('.modal-footer');

        // Buscar botones dentro del div modal-footer
        const buttons = await modalFooter.$$('button');
        console.log("Total de elementos :", buttons.length);
        await buttons[1].click();
    }

}
module.exports = PostPage;