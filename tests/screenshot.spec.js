import{test,expect} from "@playwright/test";
//test("screen shot of what is visible", async ({ page })=>{
//await page.goto("https://testautomationpractice.blogspot.com/");
//await page.screenshot({path:"screen1.png"});
//await page.waitForTimeout(5000);
//})    

test("screen shot of entire page", async ({ page })=>{
await page.goto("https://testautomationpractice.blogspot.com/");
await page.screenshot({path:"screen2.png",fullPage:true});
 })
//await expect(await page.screenshot()).toMatchSnapshot();
   
//test("screen shot of particular component", async ({ page })=>{
//await page.goto("https://testautomationpractice.blogspot.com/");
//await page.locator(".start").screenshot({path:"screen3.png"});


   //})
    
