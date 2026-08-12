import{test , expect} from "@playwright/test";

test("visual testing", async ({page}) =>{
 
await page.goto("https://demowebshop.tricentis.com/");
await expect(await page.screenshot()).toMatchSnapshot();    

})
