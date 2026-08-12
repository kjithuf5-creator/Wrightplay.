import{test , expect} from "@playwright/test";
 

test("handling  new tab", async ({browser}) =>{
 
let context = await browser.newContext();
let page1 = await context.newPage();

await page1.goto("https://automationui.pages.dev/");
let [page2] = await Promise.all([context.waitForEvent("page"),page1.getByRole("link",{name:"Open Example.com (new tab)"}).click() ]);
await page2.getByRole("link",{name:"Learn more"}).click();
})
