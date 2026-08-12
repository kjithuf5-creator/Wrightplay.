export class buying {
  constructor(page) {
    this.page = page;
    this.clickbuybtn = "/html/body/div[1]/section[2]/article/div[1]/div[2]/button[1]/span";
    this.addaddress = "/html/body/div[1]/div[4]/div[1]/a/button/span";
    this.home = '.signup_formCard__RscGS';
    this.name = '#Name';
    this.houseno = "input[id='House/Office Info']";
    this.street = "input[id='Street Info']";
    this.landmark = '#Landmark';
    this.country = "//select[@id='Country']";
    this.state = '#State';
    this.city = '#City';
    this.pincode = '#Pincode';
    this.phno = "input[id='Phone Number']";
    this.addadress = '#btnDisabled';
  }

  async productbuy() {
    await this.page.locator(this.clickbuybtn).click();
    await this.page.locator(this.addaddress).click();
    await this.page.locator(this.home).click();
    await this.page.locator(this.name).fill('Test User');
    await this.page.locator(this.houseno).fill('123');
    await this.page.locator(this.street).fill('Test Street');
    await this.page.locator(this.landmark).fill('Near Station');
    await this.page.locator(this.country).selectOption({ label: 'India' });
    await this.page.locator(this.state).fill('Karnataka');
    await this.page.locator(this.city).fill('Bengaluru');
    await this.page.locator(this.pincode).fill('560001');
    await this.page.locator(this.phno).fill('9876543210');
    await this.page.locator(this.addadress).click();
  }
}
