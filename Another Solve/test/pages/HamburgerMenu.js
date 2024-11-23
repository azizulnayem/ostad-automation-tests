class HamburgerMenu {
    
    get menuButton () {return $('//button[@id="react-burger-menu-btn"]');}
    get resetAppStateOption() { return $('//a[@id="reset_sidebar_link"]'); }
    get logoutOption() { return $('//a[@id="logout_sidebar_link"]'); }
    async openMenu() {
        await this.menuButton.click();
        await browser.pause(2000);
    }

    async resetAppState() {
        await this.openMenu();
        await browser.pause(2000);
        await this.resetAppStateOption.click();
        await browser.pause(2000);
    }

    async logout() {
        //await this.openMenu();
        await this.logoutOption.click();
        await browser.pause(2000);
    }
}

module.exports = new HamburgerMenu();

     







