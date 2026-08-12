import {test, expect} from '@playwright/test';

test("login with vald  credentails", async({page})=>
{
await page.goto("https://www.shoppersstack.com/");
await page.locator(".navbar_Loginbutton__O9-64").click();
await expect(page).toHaveURL("https://www.shoppersstack.com/user-signin");

await page.locator("#Email").fill("saipreethi1212@gmail.com");
await page.locator("#Password").fill("Preethi@1");
await page.locator(".MuiButton-label").first().click();

await page.locator('img[src="/static/media/women.57aea5609ab8df98ead0.webp"]').click(); 

await page.waitForTimeout(3000); 

await page.locator(".featuredProducts_cardFooter__B8KN4").filter({hasText:"john jacobs pink cat eye UV protect..."}).locator(".MuiButtonBase-root").click() ; 

await page.waitForTimeout(3000); 





})