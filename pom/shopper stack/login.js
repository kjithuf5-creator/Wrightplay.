export class loginuser {
  constructor(page) {
    this.page = page;
    this.loginbutton = '#loginBtn';
    this.useremail = '#Email';
    this.userpassword = '#Password';
    this.clickloginbtn = "button[id='Login']";
  }

  async gotourl() {
    await this.page.goto('https://www.shoppersstack.com/');
  }

  async logindata(email, pwd) {
    await this.page.locator(this.loginbutton).click();
    await this.page.locator(this.useremail).fill(email);
    await this.page.locator(this.userpassword).fill(pwd);
    await this.page.locator(this.clickloginbtn).click();
  }
}