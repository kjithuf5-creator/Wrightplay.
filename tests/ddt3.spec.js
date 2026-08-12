import {test,expect} from '@playwright/test'
import fs from 'fs'
import {parse} from "csv-parse/sync"

let csvPath="tests/testdata.csv"

let fileContent = fs.readFileSync(csvPath,'utf-8');


let record = parse(fileContent, {
    columns: true,
    skip_empty_lines: true
});

for(let data of record){
    test(`@regression login test ${data.email}` , async({page})=>{
    await page.goto("https://demowebshop.tricentis.com/");
    await page.getByRole("link", { name: "Log in" }).click();
    await page.getByLabel("Email:").fill(data.email);
    await page.getByLabel("Password:").fill(data.pwd);
    await page.getByRole("button", { name: "Log in" }).click();
    let msg = await page.getByRole("link", { name: "Log out" });
    await expect(msg).toBeVisible();
    })
}
