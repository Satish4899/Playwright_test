
const {test,expect} = require('@playwright/test');

test.only('UI end to end test',async ({page}) =>{

    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    console.log(await page.title());
    await expect(page).toHaveTitle("Let's Shop");
    const uname= page.locator("#userEmail");
    const pass = page.locator("#userPassword");
    const product= page.locator("card-body");
    

    await uname.fill("demohere@gmail.com");
    await pass.fill("Pro@12345");
    await page.locator("#login").click();
    await page.pause();
    console.log(await page.locator("[style='margin-top: -28px;']").textContent())
   //await page.
    const count= await product.count();

    for(let i=0;i<count ;i++){

    product.nth
    }


})


    

