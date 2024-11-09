class LoginPage1 {
    get usernameField() { return $('#user-name'); }
    get passwordField() { return $('#password'); }
    get loginButton() { return $('#login-button'); }
    get errorMessage() { return $('.error-message-container'); }

    async open(path = '') {
        await browser.url(`https://www.saucedemo.com/${path}`);
    }

    async login(username, password) {
        await this.usernameField.setValue(username);
        await this.passwordField.setValue(password);
        await this.loginButton.click();
    }

    async getErrorMessage() {
        return await this.errorMessage.getText();
    }
}

module.exports = new LoginPage1();
