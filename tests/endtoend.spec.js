import {test , expect} from "@playwright/test" ; 
import { url } from "node:inspector";

test.only("jithendra1 @smoke" , async ({page})=>{
 console.log("jithendra1");
})

test("jithendra2 @sanity" , async ({page})=>{
 console.log("jithendra2");
})

test("jithendra3" , async ({page})=>{
 console.log("jithendra3");
})

test("jithendra4" , async ({page})=>{
 console.log("jithendra4");
})
