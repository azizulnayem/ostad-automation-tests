class CheckoutPage {
 get firstNameField() { return $('//input[@placeholder="First Name"]'); }
 get lastNameField() { return $('//input[@placeholder="Last Name"]'); }
 get postalCodeField() { return $('//input[@placeholder="Zip/Postal Code"]'); }
 get Continue() { return $('//input[@id="continue"]'); }
 get items() { return $$('div.inventory_item_name'); }
 get finishButton() { return $('.cart_button'); }
 get successMessage() { return $('//h2[@class="complete-header"]'); }

 async fillShippingInformation(firstName, lastName, postalCode) {
    await this.firstNameField.setValue(firstName);
    await browser.pause(2000);
    await this.lastNameField.setValue(lastName);
    await browser.pause(2000);
    await this.postalCodeField.setValue(postalCode);
    await browser.pause(2000);
    
}


async getItems() {
    return await this.items.map(item => item.getText());
    await browser.pause(2000);
}
async clickContinueButton () {
    await this.Continue.click();
    await browser.pause(2000);
}


async completePurchase() {
    await this.finishButton.click();
    await browser.pause(2000);
}

async verifySuccessMessage() {
    return await this.successMessage.getText();
    await browser.pause(2000);
}


}
module.exports = new CheckoutPage();
   