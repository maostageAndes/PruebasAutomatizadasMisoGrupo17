const assert = require('assert');
class PagePage{
    
    constructor(page) {
        this.page = page;
    }

    async clickNewPage(){
        //let element = await this.page.$('[title="New page"]');
        let element = await this.page.$('.ember-view.gh-btn.gh-btn-primary.view-actions-top-row');
        await element.click();
    }
    async clickBodyPage(){
        let element = await this.page.$('[data-koenig-dnd-droppable="true"]');
        return await element.click();
    }
    async clickOnPagesOption(){
        let element = await this.page.$('[data-test-nav="pages"]');
        return await element.click();
    }
    async editTitleOfPage(newTitlePost){
        let element = await this.page.$('.gh-editor-title.ember-text-area.gh-input.ember-view');
        await element.setValue(newTitlePost);   
        element = await this.page.$('[data-test-button="publish-save"]');
        await element.click();
        element = await this.page.$('[data-test-link="pages"]');
        return await element.click();
        
    }
    async clickOnPage(titlePost){
        //let elements = await this.driver.$$("h3.gh-content-entry-title");
        let elements = await this.page.$$(".gh-content-entry-title");
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
    async deletePage(titlePost){
        let elements = await this.page.$$('.mr2');
        //element = await this.page.$('button=Delete');
        await elements[5].click();
        //await new Promise(r => setTimeout(r, 3000));
        //await this.page.abc.press('Tab'); 
        //element = await this.page.$('span=Delete');
        //await element.click();
        // Obtener el div con la clase modal-footer
        const modalFooter = await this.page.$('.modal-footer');

        // Buscar botones dentro del div modal-footer
        const buttons = await modalFooter.$$('button');
        console.log("Total de elementos :", buttons.length);
        await buttons[1].click();
        // Iterar sobre los botones y hacer clic en el que necesitas
        /*for (const button of buttons) {
            const buttonText = await button.evaluate(node => node.innerText);
            if (buttonText === 'Delete') {
                await button.click();
                break; // Una vez que se hace clic en el botón "Delete", salir del bucle
            }
        }*/
        
    }
    async selectOptionFeature(titlePost){
        let elements = await this.page.$$('.mr2');
        await elements[1].click();
    }
    async selectOptionDuplicate(titlePost){
        let elements = await this.page.$$('.mr2');
        await elements[4].click();
    }
    
    async seeFeatured(title){
        //let elements = await this.driver.$$('svg.gh-featured-post');
        let elements = await this.page.$$('h3.gh-content-entry-title');

        // Filtrar los elementos para obtener solo aquellos que contienen un elemento svg como descendiente directo y que sean visibles
        let h3sWithVisibleSvg = await Promise.all(elements.map(async (element) => {
            // Verificar si el elemento svg del h3 no tiene errores (esto implica que está visible)
            const svgElement = await element.$('svg');
            if (svgElement.error === undefined) {
                return element;
            }
            else return null;
            
        }));
        h3sWithVisibleSvg = h3sWithVisibleSvg.filter(element => element !== null);


        console.log("Total de elementos :", elements.length);
        console.log("Total de elementos con svg:", h3sWithVisibleSvg.length);
        
        // Filtrar los elementos que tengan el texto "Mi primer post"
        let filteredElements = [];
        let i=1;
        for (const element of h3sWithVisibleSvg) {
            let textElement = await element.getText();
            console.log("textElement ",i,": ", textElement);
            if (textElement.includes(title)) {
                filteredElements.push(element);
            }
            i++
        }
        console.log("Total de elementos encontrados:", filteredElements.length);
        let postCreated = filteredElements.length > 0;
        assert(postCreated,'Expected text not found in page');
    }
    


}module.exports = PagePage;