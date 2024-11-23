class CartPage {

get cartIcon() { return $('//span[@class="shopping_cart_badge"]'); }
get checkoutButton() { return $('.//button[@id="checkout"]'); }
async goToCart() {
    await this.cartIcon.click();
}

async proceedToCheckout() {
    await this.checkoutButton.click();
}
}

module.exports = new CartPage();




    