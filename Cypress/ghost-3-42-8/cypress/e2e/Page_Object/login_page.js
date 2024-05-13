//ghost 3.42.8
export class LoginPage{

    access_url = 'https://ghost-3-42-8.onrender.com/ghost/'
    username_textbox = '[placeholder="Email Address"]'
    password_textbox = '[placeholder="Password"]'
    login_button = '[class="login gh-btn gh-btn-blue gh-btn-block gh-btn-icon ember-view"]'
    username = "m.castror2@uniandes.edu.co"
    password =  "Miso2024#$"

    baseUrl(){
        cy.visit(this.access_url);
    }
    
    enterUsername(){
        cy.get(this.username_textbox).type(this.username);
    }

    enterPassword(){
        cy.get(this.password_textbox).type(this.password);
    }

    clickLogin(){
        cy.get(this.login_button).click();
        cy.wait(5000);
    }

}