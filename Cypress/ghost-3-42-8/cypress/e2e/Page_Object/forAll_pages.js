//ghost 3.42.8
export class ForAllPages {

    
    screenShoot(file_name) {
        cy.screenshot(file_name,{overwrite: true})
    }



}