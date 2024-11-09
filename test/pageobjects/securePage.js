class SecurePage {
    get addToCartButtons() { return $$('.inventory_item button'); }
    get cartIcon() { return $('.shopping_cart_link'); }
    get checkoutButton() { return $('#checkout'); }
    get finishButton() { return $('#finish'); }
    get successMessage() { return $('.complete-header'); }
    get itemNames() { return $$('.inventory_item_name'); }
    get itemPrices() { return $$('.inventory_item_price'); }

    async addItemsToCart(count = 3) {
        for (let i = 0; i < count; i++) {
            await this.addToCartButtons[i].click();
        }
    }

    async goToCart() {
        await this.cartIcon.click();
    }

    async proceedToCheckout() {
        await this.checkoutButton.click();
        await $('#first-name').setValue('John');
        await $('#last-name').setValue('Doe');
        await $('#postal-code').setValue('12345');
        await $('#continue').click();
    }

    async finishCheckout() {
        await this.finishButton.click();
    }

    async verifySuccessMessage() {
        return await this.successMessage.getText();
    }

    async getTotalPrice() {
        let total = 0;
        for (const priceElement of await this.itemPrices) {
            const priceText = await priceElement.getText();
            total += parseFloat(priceText.replace('$', ''));
        }
        return total;
    }
}

module.exports = new SecurePage();
