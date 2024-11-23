class LoginPage{
    get inputUsername () {
        return $('//input[@placeholder="Username"]');
    }
    get inputPassword () {
        return $('//input[@placeholder="Password"]');
    }
    get btnSubmit () {
        return $('//input[@type="submit"]')
    }
    get errorMessage(){
        return $('//h3[@data-test="error"]') 
    }

    async open() {
        await browser.url('https://www.saucedemo.com/v1/');
    }

    async login(username, password) {
        await this.inputUsername.setValue(username);
        await browser.pause(2000);
        await this.inputPassword.setValue(password);
        await browser.pause(2000);
        await this.btnSubmit.click();
        await browser.pause(2000);
    }

    async getErrorMessage() {
        return await this.errorMessage.getText();
    }
}

module.exports = new LoginPage();

