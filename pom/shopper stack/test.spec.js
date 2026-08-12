import { test } from '@playwright/test';
import fs from 'fs';

import { loginuser } from './login';
import { addcart } from './addcart';
import { buying } from './buying';

const jsonpath = 'pom/shopper stack/json.js';

let logindata = JSON.parse(fs.readFileSync(jsonpath,'utf-8'))


for (const { email, pwd } of logindata) {
  test(`logindata ${email},${pwd}`, async ({ page }) => {
    const loginpage = new loginuser(page);
    await loginpage.gotourl();
    await loginpage.logindata(email, pwd);

    const product = new addcart(page);
    await product.addtocart();

    const address = new buying(page);
    await address.productbuy();
  });
}