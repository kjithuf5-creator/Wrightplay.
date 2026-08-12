import{test,expect} from "@playwright/test";
test("modern locators", async ({ page })=>{
await page.goto("https://demowebshop.tricentis.com/");

let mail="bharat1234@gmail.com";
let pwd="Bharat@123";

await page.getByRole("link",{name:"Log in"}).click();
await page.getByLabel("Email:").fill("mil");
await page.getByLabel("Password:").fill("pwd");
await page.getByRole("button",{name:"Log in"}).click();

await page.getByRole("link",{name:"Books"}).first().click();
await page.getByRole("link",{name:"Health Book"}).last().click();
await page.getByRole('button',{name:'Add to cart'}).first().click();

//await page.locator(".details").filter({hasText:"Health Book"}).getByRole('button',{name:'Add to cart'}).click();
await page.waitForTimeout(5000);
  })

test("get by placeholder", async ({ page })=>{
await page.goto("https://testautomationpractice.blogspot.com/");
 
await page.getByPlaceholder("Enter Name").fill("Bharat");
//can use role also instead of placeholder
await page.getByRole("textbox",{name:"Enter EMail"}).fill("bharat1234@gmail.com");
await page.getByPlaceholder("Enter Phone").fill("7337571454");
await page.locator("#textarea").fill("k.jithendra","angirekulapadu village","ongole district","linagasamudra mandalam","523281");
await page.locator("#male").check();
await page.locator("#monday").click();
    })

test("get role by image",async({page}) =>{
await page.goto("https://demowebshop.tricentis.com/");
await page.getByRole("link",{name:"Log in"}).click();

await page.waitForTimeout(5000);
await page.getByRole("img",{name:"Tricentis Demo Web Shop"}).click();

//can use role also instead  of alttext
await page.getByAltText("Tricentis Demo Web Shop").click();
await page.waitForTimeout(5000);
})   
  
