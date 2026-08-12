import {test , expect} from "@playwright/test" ; 
import { url } from "node:inspector";

test("iframe" , async ({page})=>{

    await page.goto("https://ui.vision/demo/iframes"); 

    let frame1 = await page.frame({url:"https://docs.google.com/forms/d/e/1FAIpQLScP-K8zi-9ar0MCq93D3VIFhegSNPveBfdLqiMfTYR9Q1iSKQ/viewform?embedded=true"})
    
    await page.waitForTimeout(3000) ; 
    await frame1.locator(".Id5V1").first().click() ; 

    await page.waitForTimeout(3000) ; 
//https://docs.google.com/forms/d/e/1FAIpQLScP-K8zi-9ar0MCq93D3VIFhegSNPveBfdLqiMfTYR9Q1iSKQ/viewform?embedded=true
})