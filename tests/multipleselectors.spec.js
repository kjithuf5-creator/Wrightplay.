import{test,expect} from "@playwright/test";

test("multiple selectors", async ({ page })=>{

    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.locator("#colors").selectOption(["red","blue","green"]);

    await page.waitForTimeout(5000);

    
    }) 