const {test,expect} = require('@playwright/test');


test('open browser', async({page})=>{

await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
console.log(await page.title());
await expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy");
const uname = page.locator("#username");
const pass =page.locator("#password");
const Login = page.locator("#signInBtn");
const cart = page.locator(".card-title a");

await uname.fill("rahulshett");
await pass.fill("Learning@830$3mK2");
await Login.click();
// tectContent used to fech error massage
console.log(await page.locator("[style*='display: none;']").textContent());
await expect(page.locator("[style*='display: none;']")).toContainText("Incorrect");
await uname.fill("");
await uname.fill("rahulshettyacademy");
await Login.click();
await cart.first().waitFor();
const allTitles = await cart.allTextContents();
console.log(allTitles);

})

test('UI test to load', async({page})=>{

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const uname = page.locator("#username");
    const pass =page.locator("#password");
    const Login = page.locator("#signInBtn");
    const dropdown = page.locator("select.form-control");
    await uname.fill("rahulshettyacademy");
    await pass.fill("Learning@830$3mK2");
    //await Login.click();
    await dropdown.selectOption("consult");
    //await page.pause();
    await page.locator(".customradio").last().click();
    await page.locator("#okayBtn").click();
    expect(page.locator(".customradio").last()).toBeChecked();
    await page.pause();

})
 