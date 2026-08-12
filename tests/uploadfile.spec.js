import{test,expect} from "@playwright/test";

test("upload file", async ({ page })=>{

    await page.goto("https://testautomationpractice.blogspot.com/");
    

  await page.locator("#singleFileInput").setInputFiles("c:\\Users\\reddy\\Downloads\\SnehaChowdaryCV.pdf");
  await page.waitForTimeout(5000);
  
  await page.locator("#multipleFilesInput").setInputFiles(["c:\\Users\\reddy\\Downloads\\SnehaChowdaryCV.pdf","c:\\Users\\reddy\\Downloads\\SnehaChowdaryCV.pdf"]);
  await page.waitForTimeout(5000);

  let items= await page.locator("#draggable");
  let terget= await page.locator("#droppable");

  await page.dragAndDrop("#draggable","#droppable");
  //await items.dragTo(terget);
   //await page.waitForTimeout(5000);


   //await items.hover();
   //await page.mouse.down();

   //await Target.hover();
   //await page.mouse.up();

   await page.waitForTimeout(5000);

     })
