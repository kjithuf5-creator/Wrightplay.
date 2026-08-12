export class addcart {
  constructor(page) {
    this.page = page;
    this.clickmen = 'a#men';
    this.gotoshirts = "xpath=/html/body/div[1]/div[2]/div/nav/ul/li[1]/div/aside/div[1]/ul[1]/li[3]/a";
    this.clickblueshirt = "xpath=/html/body/div[1]/div[4]/div/div/div[3]/div[1]/img";
    this.addcart = "xpath=/html/body/div[1]/section[2]/article/div/div[2]/div[6]/button[2]";
    this.cartsymbol = "xpath=/html/body/div[1]/section[1]/article/div[3]/a/svg";
  }

  async addtocart() {
    await this.page.locator(this.clickmen).click();
    await this.page.locator(this.gotoshirts).click();
    await this.page.locator(this.clickblueshirt).click();
    await this.page.locator(this.addcart).click();
    await this.page.locator(this.cartsymbol).click();
  }
}