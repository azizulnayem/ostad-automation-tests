const LoginPage  = require("../pages/loginPage/LoginPage.js");

describe('Login Page', () => {
    beforeEach(async () => {
        await LoginPage.open();
    });
    it('verify the error message', async () => {
        await LoginPage.login('locked_out_user', 'secret_sauce'); 

    
       
})
})