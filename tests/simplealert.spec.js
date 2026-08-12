import{test,expect} from "@playwright/test"
test("simple alert", async ({ page })=>{

    await page.goto("https://testautomationpractice.blogspot.com/");
    

  

     page.on("dialog", async dialog=>{


    })
    await page.locator("#alertBtn");
   })