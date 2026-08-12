import { test, expect } from "@playwright/test";

test("login credentials", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");

  await page.locator("#user-name").fill("standard_user");
  await page.locator("#password").fill("secret_sauce");
  await page.locator("#login-button").click();

  await expect(page).toHaveURL(/inventory/);

  await page.locator("#item_3_img_link").click();
  await page.locator("#add-to-cart").click();
  await page.locator(".shopping_cart_link").click();

  await page.locator("#checkout").click();
  await page.locator("#first-name").fill("jithendra");
  await page.locator("#last-name").fill("kummagiri");
  await page.locator("#postal-code").fill("523281");
  await page.locator("#continue").click();

  await expect(page).toHaveURL(/checkout-step-two/);
}); 