
const LoginPage=require('..//pages/loginPage/LoginPage');
const HamburgerMenu = require('..//pages/HamburgerMenu');
const CartPage = require('..//pages/CartPage');
const CheckoutPage = require('..//pages/CheckoutPage');
describe('succesfully product Purchase-1', () => {
    beforeEach(async () => {
        await browser.url('https://www.saucedemo.com/');

        await LoginPage.login('standard_user', 'secret_sauce');
    });

    it('should complete the purchase journey', async () => {
        await HamburgerMenu.resetAppState();
        await browser.pause(2000);
        await $('.//button[@id="add-to-cart-sauce-labs-bolt-t-shirt"]').click(); 
        await browser.pause(2000); 
        await $('.//button[@id="add-to-cart-sauce-labs-fleece-jacket"]').click();
        await browser.pause(2000);  
        await $('.//button[@id="add-to-cart-sauce-labs-bike-light"]').click(); 
        await browser.pause(2000);
        await CartPage.goToCart();
        await browser.pause(2000);
        await CartPage.proceedToCheckout();
        await browser.pause(2000);
        const items = await CheckoutPage.getItems();
        await browser.pause(2000);
        console.log('Items:', items);
        await browser.pause(2000);
        await CheckoutPage.fillShippingInformation('Az', 'Nayem', '6386');
        await browser.pause(2000);
        await CheckoutPage.clickContinueButton();
        await browser.pause(2000);
        await CheckoutPage.completePurchase();
        await browser.pause(2000);
        const successMessage = await CheckoutPage.verifySuccessMessage();
        expect(successMessage).toBe('Thank you for your order!');

        await HamburgerMenu.resetAppState();
        await HamburgerMenu.logout();
        const loginButton = await $('.btn_action');
        expect(await loginButton.isDisplayed()).toBe(true); 
    });
});
