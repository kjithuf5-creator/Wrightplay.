import{test,expect} from "@playwright/test";

test("Double Click", async ({ page })=>{

    await page.goto("https://testautomationpractice.blogspot.com/");
    

  await page.locator(`button[ondblclick="myFunction1()"]`).dblclick();
  await page.waitForTimeout(5000);


     })
