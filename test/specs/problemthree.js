const LoginPage3 = require('../pageobjects/loginPage3'); 
const SecurePage2 = require('../pageobjects/securePage2'); 

describe('Performance Glitch User Purchase Test', () => {
    it('should complete a purchase successfully with performance glitch user', async () => {
        await LoginPage3.open('');
        await LoginPage3.login('performance_glitch_user', 'secret_sauce');
        await LoginPage3.resetAppState();

        await $('#header_container .product_sort_container').selectByVisibleText('Name (Z to A)');

        await SecurePage2.addItemsToCart(1); 

        await SecurePage2.goToCart();
        await SecurePage2.proceedToCheckout();
        await SecurePage2.finishCheckout();

        expect(await SecurePage2.verifySuccessMessage()).toBe('Thank you for your order!');
        await LoginPage3.resetAppState();
    });
});
