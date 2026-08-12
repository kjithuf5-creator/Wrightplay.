import {test , expect} from "@playwright/test" ; 
import { url } from "node:inspector";

test.beforeEach("jithendra1" , async ({page})=>{
 console.log("jithendra1");
})

test("jithendra2" , async ({page})=>{
 console.log("jithendra2");
})

test("jithendra3" , async ({page})=>{
 console.log("jithendra3");
})

test.afterEach("jithendra4" , async ({page})=>{
 console.log("jithendra4");
})