const LoginPage = require('..//pages/loginPage/LoginPage');
const HamburgerMenu = require('..//pages/HamburgerMenu');
const productselectedpage = require('..//pages/productselectedpage');
const CartPage = require('..//pages/CartPage');
const CheckoutPage = require('..//pages/CheckoutPage');

describe('succesfully product Purchase-2', () => {

    beforeEach(async () => {
        await browser.url('https://www.saucedemo.com/');
        await LoginPage.login('performance_glitch_user', 'secret_sauce');
    
  
});
it('should complete the purchase journey', async () => {
    await HamburgerMenu.resetAppState();
    await browser.pause(2000);
    await productselectedpage.filterByNameZToA();
    await browser.pause(3000);
    await productselectedpage.addFirstProductToCart()
    await browser.pause(2000);
     await CartPage.goToCart();
     await CartPage.proceedToCheckout();
     const items = await CheckoutPage.getItems();
     console.log('Items:', items);
     await CheckoutPage.fillShippingInformation('Az', 'Nayem', '6386');

     await CheckoutPage.clickContinueButton();
     await CheckoutPage.completePurchase();
     const successMessage = await CheckoutPage.verifySuccessMessage();
     expect(successMessage).toBe('Thank you for your order!');

     await HamburgerMenu.resetAppState();
     await HamburgerMenu.logout();
     const loginButton = await $('.btn_action');
     expect(await loginButton.isDisplayed()).toBe(true); 



    
    
});


});
    
