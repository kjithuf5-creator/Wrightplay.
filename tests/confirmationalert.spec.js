import{test,expect} from "@playwright/test";
test("confirmation alert", async ({ page })=>{
await page.goto("https://testautomationpractice.blogspot.com/");
    page.on("dialog", async dialog=>{
    dialog.dismiss();
        
     })

    await page.locator("#confirmBtn").click();

  
    }) 