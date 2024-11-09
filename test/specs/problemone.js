const LoginPage1 = require('../pageobjects/loginPage1');

describe('Locked Out User Test', () => {
    it('should show an error message for locked out user', async () => {
        await LoginPage1.open('');
        await LoginPage1.login('locked_out_user', 'secret_sauce');
        expect(await LoginPage1.getErrorMessage()).toContain('Epic sadface: Sorry, this user has been locked out.');
    });
});
