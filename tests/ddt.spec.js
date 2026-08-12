import { test, expect } from "@playwright/test";

let items = ['gift card', 'books', 'computer', 'monitor'];

for (let item of items) {
  test(`search for products ${item}`, async ({ page }) => {
    await page.goto("https://demowebshop.tricentis.com/");
    await page.locator("#small-searchterms").fill(item);
    await page.getByRole("button",{name: "Search"}).click();
    let element =page.locator(".item-box"). filter({hasText:item}).first();
    await expect(element).toBeVisible();
  })
}
