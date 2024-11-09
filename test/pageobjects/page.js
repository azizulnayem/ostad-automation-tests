class Page {
    open(path) {
        return browser.url(`https://www.saucedemo.com/${path}`);
    }
}
module.exports = Page;
