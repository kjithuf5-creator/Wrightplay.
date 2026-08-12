
const path = require('path');
const XLSX = require('xlsx');
const { test } = require('@playwright/test');

const xlsxPath = path.resolve('tests/testdata.xlsx');
const workbook = XLSX.readFile(xlsxPath);
const sheet = workbook.Sheets[workbook.SheetNames[0]];
const data = XLSX.utils.sheet_to_json(sheet);

console.log('Excel rows loaded:', data);

for (const records of data) {
  test(`test ${records.email}`, async ({ page }) => {
    await page.goto('https://demowebshop.tricentis.com/');
    await page.locator('.ico-login').click();
    await page.locator('#Email').fill(records.email);
    await page.locator('#Password').type(records.pwd);
    await page.locator('.login-button').click();
  });
}


