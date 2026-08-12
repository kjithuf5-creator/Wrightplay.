import { test, expect } from "@playwright/test";

test("login using valid credentials", async ({ page }) =>
    {
    await page.goto("https://demowebshop.tricentis.com/");
    await page.locator(".ico-login").click();
    await page.locator("#Email").fill("bharat1234@gmail.com");
    await page.locator("#Password").type("Bharat@123");
    await page.locator(".login-button").click();
    let message=await page.locator(".ico-logout");
    await expect(message).toHaveText("Log out")
    await page.locator(`a[href="/books"]`).first().click()
    await page.locator("#products-orderby").selectOption("Price: High to Low");
    await page.locator("#products-pagesize").selectOption("12");
    await page.locator("#products-viewmode").selectOption("List")
    await expect(page).toHaveURL("https://demowebshop.tricentis.com/books?orderby=11&pagesize=12&viewmode=list");
    
    
    await page.locator(`h2 a[href="/health"]`).first().click();
    await page .locator(`#add-to-cart-button-22`).click();
    let msg= await page.locator(".content");
    await expect(msg).toHaveText("The product has been added to your shopping cart");

    await page.locator(".cart-label").first().click();
    await page.locator("#CountryId").selectOption("India");
    await page.locator("#termsofservice").check();
    let Checked = await page.locator("#termsofservice");
    await expect(Checked).toBeChecked();
    await page.locator("#checkout").click();

    })