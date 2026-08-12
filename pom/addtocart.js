class addtocart {
    constructor(page) {
        this.page = page;
        this.booklink = "Books";
        this.healthbook = "Health Book";
        this.addtocartButton = "#add-to-cart-button-22";
        this.shoppingcart = "Shopping cart";
    }

    async addtocart() {
        await this.page.getByRole("link", { name: this.booklink }).first().click();
        await this.page.getByRole("link", { name: this.healthbook }).first().click();
        await this.page.locator(this.addtocartButton).click();
        await this.page.getByRole("link", { name: this.shoppingcart ,exact: true }).click();
    }
}

export { addtocart };