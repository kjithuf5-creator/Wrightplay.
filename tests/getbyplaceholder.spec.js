import(test , expect)  from "@playwright/test";
test("get by placeholder", async ({ page })=>{
await page.goto("https://testautomationpractice.blogspot.com/");
 
await page.getByPlaceholder("Enter Name").fill("Bharat");
await page.getByRole("textbox",{name:"Enter EMail"}).fill("bharat1234@gmail.com");



    })