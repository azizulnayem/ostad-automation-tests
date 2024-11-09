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
   
#### Initialize a Node.js Project

1. **Navigate to your project directory and run**:
   ```bash
   npm init -y
   
## Install WebDriverIO and Allure Reporter
 
1. **Run the following command to install WebDriverIO and Allure Reporter along with the necessary services**:
 ```bash
npm install @wdio/cli @wdio/local-runner @wdio/mocha-framework @wdio/allure-reporter @wdio/spec-reporter @wdio/selenium-standalone-service

## Configure WebDriverIO

1. **Run the following command to configure WebDriverIO**:
 ```bash
npx wdio config

### During the configuration process, you'll be prompted with several questions. Here's an example of how to respond:
1. A project named "last-try" was detected at "C:\Users\DCL\OneDrive\Desktop\last try", correct?
Answer: yes
2. What type of testing would you like to do?
Answer: E2E Testing - of Web or Mobile Applications
3. Where is your automation backend located?
Answer: On my local machine
4. Which environment you would like to automate?
Answer: Web - web applications in the browser
5. With which browser should we start?
Answer: Choose your preferred browser (e.g., Chrome).
6. Which framework do you want to use?
Answer: Mocha (https://mochajs.org/)
7. Do you want to use Typescript to write tests?
Answer: no
8. Do you want WebDriverIO to autogenerate some test files?
Answer: yes
9. What should be the location of your spec files?
Answer: C:\Users\DCL\OneDrive\Desktop\last try\test\specs\**\*.js
10. Do you want to use page objects (https://martinfowler.com/bliki/PageObject.html)?
Answer: yes
11. Where are your page objects located?
Answer: C:\Users\DCL\OneDrive\Desktop\last try\test\pageobjects\**\*.js
12. Which reporter do you want to use?
Answer: Select Allure Reporter or your preferred option.
13. Do you want to add a plugin to your test setup?
Answer: yes
14. Would you like to include Visual Testing to your setup?
Answer: yes
15. Do you want to add a service to your test setup?
Answer: yes
16. Would you like me to run npm install?
Answer: yes

## Install Chromedriver Service
1. **To install the Chromedriver service, run**:
 ```bash
npm install wdio-chromedriver-service --save-dev

## Install Chromedriver Binary
1. **Install the chromedriver binary using**:
```bash
npm install chromedriver --save-dev

### Running Tests Individually
**To run specific test files, use the following commands**
```bash
1. npx wdio wdio.conf.js --spec ./test/specs/problemone.js
2. npx wdio wdio.conf.js --spec ./test/specs/problemtwo.js
3.npx wdio wdio.conf.js --spec ./test/specs/problemthree.js

## Running All Tests Sequentially
**To run all tests sequentially and generate the report, use**:
```bash
npx wdio run wdio.conf.js

## View Allure Report
**To view the Allure report after running the tests, use**:
1. ***Generate the Allure Report**:
```bash
allure generate allure-results --clean -o allure-report

2. **Open the Allure Report**:
```bash
allure open allure-report



