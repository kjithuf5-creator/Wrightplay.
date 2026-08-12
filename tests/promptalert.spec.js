
import{test,expect} from "@playwright/test";
test("prompt alert", async ({ page })=>{
await page.goto("https://testautomationpractice.blogspot.com/");

    page.on("dialog", async dialog=>{
     await dialog.accept("jithendra");
        
     })
     await page.locator("#promptBtn").click();
    })    

    