import{test,expect} from "@playwright/test";

test("user to be registered", async ({ page })=>{

    await page.goto("https://www.shoppersstack.com/");
    await page.locator("#loginBtn").click();
    await page.goto("https://www.shoppersstack.com/user-signin");
    await page.locator("#vertical-tab-0").click();
    await page.locator("#Email").fill("k.jithuf5@gmail.com");
    await page.locator("#Password").fill("Jithuf5@123");
    await page.locator("#Login").click();
    await page.locator("nav #men").click();
    await page.locator(`a[href="/sub-category/men-shirt"]`).click();

    await page.locator('img[src="https://m.media-amazon.com/images/I/61sjykm4xqL._SY741_.jpg"]').filter(".featuredProducts_cardBody__l4gLE").click();
    await page.locator(".ProductDisplay_addToCart__Kkxef").click();
    await page.locator("#cart").click();
    await page.locator(".active").click();
    }) 