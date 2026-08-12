import{test,expect} from "@playwright/test";
import fs from 'fs';
 
 let jsonpath="tests/testdata.json";

 let loginData = JSON.parse(fs.readFileSync(jsonpath,'utf-8'));
 for(let {email,password} of loginData){

    test(`login data ${email} and ${password}`, async({ page })=>{
    await page.goto("https://demowebshop.tricentis.com/");
    await page.locator(".ico-login").click();
    await page.locator("#Email").fill("email");
    await page.locator("#Password").type("password");
    await page.locator(".login-button").click();
 })
}