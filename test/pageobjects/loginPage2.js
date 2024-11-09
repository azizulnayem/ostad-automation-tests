class LoginPage2 {
    get usernameField() { return $('#user-name'); }
    get passwordField() { return $('#password'); }
    get loginButton() { return $('#login-button'); }
    get menuButton() { return $('#react-burger-menu-btn'); }
    get resetAppButton() { return $('#reset_sidebar_link'); }
    get logoutLink() { return $('#logout_sidebar_link'); }

    async open(path = '') {
        await browser.url(`https://www.saucedemo.com/${path}`);
    }

    async login(username, password) {
        await this.usernameField.setValue(username);
        await this.passwordField.setValue(password);
        await this.loginButton.click();
    }

    async resetAppState() {
        await this.menuButton.click();
        await this.resetAppButton.click();
    }

    async logout() {
        await this.menuButton.click();
        await this.logoutLink.click();
    }
}

module.exports = new LoginPage2();
