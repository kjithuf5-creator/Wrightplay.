import { test, expect } from "@playwright/test";

let user = [
    ["bharat1234@gmail.com", "Bharat@123"],
    ["nandagopalm01@gmail.com", "NANDANAM2026"],
    ["sweta.mohappatra0602@gmail.com", "Sweta123"],
    ["saipreethi1212@gmail.com", "Preethi@123"],
    ["wahidansari34@gmail.com", "wahidrockstar@8252"],
    ["k.jithuf5@gmail.com", "Jithuf5@123"],

];

for(let [email, pwd] of user) {
    test(`login with ${email} and ${pwd}`, async({ page }) => {
        

    })
}



