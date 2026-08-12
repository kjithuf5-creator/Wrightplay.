//main test file
import { test,expect} from "@playwright/test";

import { homePage } from "./homepage";

import { addtocart } from "./addtocart"
 
test("login", async ({ page }) => {
  
  
  const loginPage = new homePage(page);
  await loginPage.gotoUrl();
  await loginPage.userLogin('k.jithuf5@gmail.com', 'Jithuf5@123');

  const  addtobook = new addtocart(page);
  await addtobook.addtocart("Health Book");
  await page.waitForTimeout(5000);
});