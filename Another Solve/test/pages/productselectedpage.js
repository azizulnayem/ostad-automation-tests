class productselectedpage{
    get productFilter() { return $('//select[@class="product_sort_container"]'); }
    get firstProduct() { return $('//button[@id="add-to-cart-test.allthethings()-t-shirt-(red)"]'); }
    

    async  filterByNameZToA() {
      await browser.pause(3000);
        await this.productFilter.click();
        await browser.pause(3000);


      }
    
    async addFirstProductToCart() {
    this.firstProduct.waitForDisplayed();
    this.firstProduct.click();
       
    }

}
module.exports = new productselectedpage();