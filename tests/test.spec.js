import { test, expect } from "@playwright/test";

test("login using valid credentials", async ({ page }) => {
  await page.goto("https://demowebshop.tricentis.com/");

  await page.getByRole("link", { name: /log in/i }).click();
  await page.getByLabel("Email:").fill("bharat1234@gmail.com");
  await page.getByLabel("Password:").fill("Bharat@123");
  await page.getByRole("button", { name: /log in/i }).click();

  await expect(page.getByRole("link", { name: /log out/i })).toHaveText("Log out");
}); 