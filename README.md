# Sauce Demo Automation Test Suite

This project contains automated end-to-end tests for the Sauce Demo website using WebDriverIO. The tests are written in JavaScript and utilize the Mocha framework for test execution.

## Test Cases

### **Test Case 1: Locked Out User Test**  
**Marks: 20**  
1. Try to log in with the username `locked_out_user` and password `secret_sauce`.
2. Verify that the correct error message is displayed after the login attempt.

### **Test Case 2: Standard User Purchase Journey**  
**Marks: 50**  
1. Log in with the username `standard_user` and password `secret_sauce`.
2. reset the app state via the hamburger menu after logging in.
3. Add three items to the shopping cart.
4. Navigate to the final checkout page.
5. Verify that all product names are listed correctly on the checkout page.
6. Verify that the total price of the products is correct on the checkout page.
7. Complete the purchase journey by finishing the checkout process.
8. Verify that the success message for the order is displayed.
9. Reset the app state again.

### **Test Case 3: Performance Glitch User Test**  
**Marks: 30**  
1. Login with the username `performance_glitch_user` and password `secret_sauce`.
2. After logging in, reset the app state.
3. Filter the products by "Name (Z to A)".
4. Select the first product in the filtered list and add it to the cart.
5. Navigate to the final checkout page.
6. Verify that the product name is listed correctly on the checkout page.
7. Verify that the total price is correct on the checkout page.
8. Complete the purchase journey by finishing the checkout process.
9. Verify that the success message for the order is displayed.
10. Reset the app state again.

## Prerequisites

Before starting, make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- Java Development Kit (JDK) (for Allure Reports)

### Steps to Upgrade Node.js

1. **Install the Latest Node.js Version Using NVM**:
   ```bash
   nvm install <latest-version>
   nvm use <latest-version>

2. **Check Installed Versions: After upgrading, verify the Node.js and npm versions**:
   ```bash
   node -v
   npm -v
   
## Initialize a Node.js Project

1. **Navigate to your project directory and run**:
   ```bash
   npm init -y
   
## Install WebDriverIO and Allure Reporter

**Run the following command to install WebDriverIO and Allure Reporter along with the necessary services**:
 ```bash
npm install @wdio/cli @wdio/local-runner @wdio/mocha-framework @wdio/allure-reporter @wdio/spec-reporter @wdio/selenium-standalone-service







