const LoginPage2 = require('../pageobjects/loginPage2');
const SecurePage = require('../pageobjects/securePage');

describe('Standard User Purchase Test', () => {
    it('should complete a purchase successfully', async () => {
        await LoginPage2.open('');
        await LoginPage2.login('standard_user', 'secret_sauce');
        await LoginPage2.resetAppState();

        await SecurePage.addItemsToCart();
        await SecurePage.goToCart();
        await SecurePage.proceedToCheckout();
        await SecurePage.finishCheckout();

        expect(await SecurePage.verifySuccessMessage()).toBe('Thank you for your order!');
        await LoginPage2.resetAppState();
    });
});
