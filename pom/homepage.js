class homePage {
  constructor(page) {
    this.page = page;
    this.loginLink = '.ico-login';
    this.userEmail = '#Email';
    this.userPwd = '#Password';
    this.loginButton = "input[value='Log in']";
  }

  async gotoUrl() {
    await this.page.goto('https://demowebshop.tricentis.com/');
  }

  async userLogin(email, pwd) {
    await this.page.locator(this.loginLink).click();
    await this.page.locator(this.userEmail).fill(email);
    await this.page.locator(this.userPwd).fill(pwd);
    await this.page.locator(this.loginButton).click();
  }
}

module.exports = { homePage };