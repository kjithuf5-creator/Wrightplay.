import{test,expect} from "@playwright/test";
test.beforeAll("login using  valid credentials", async ({ browser })=>{
    let page= await browser.newpage();
     await page.goto("https://demowebshop.tricentis.com/");
     //valid login credentials
     await page.locator(".ico-login").click();
     await page.locator("#Email").fill("bharat1234@gmail.com");
     await page.locator("#Password").type("Bharat@123");
     await page.locator(".login-button").click();
     
     })

    test("home page search product", async () =>{   
    await page.locator(`a[href="/books"]`).first().click()
    await page.locator(`h2 a[href="/health"]`).first().click();
    await page .locator(`#add-to-cart-button-22`).click();
    let msg= await page.locator(".content");
    await expect(msg).toHaveText("The product has been added to your shopping cart");
     })

    test("add to cart", async () =>{  

    await page.locator(".cart-label").first().click();
    await page.locator("#CountryId").selectOption("India");
    await page.locator("#termsofservice").check();
    let Checked = await page.locator("#termsofservice");
    await expect(Checked).toBeChecked();
    await page.locator("#checkout").click();

    })