const{test,expect}=require ('@playwright/test')

test('',async ({page})  =>{

await page.goto("https://rahulshettyacademy.com/AutomationPractice/");

await expect(page.locator("#displayed-text")).toBeVisible();
await page.locator("#hide-textbox").click();
await expect(page.locator("#displayed-text")).toBeHidden();
//await page.pause();

page.on('dialog',dialog => dialog.accept())
await page.locator("#confirmbtn").click();
await page.locator("#mousehover").hover();

const framepage= page.frameLocator("#courses-iframe");
await framepage.locator("body > div > header > div.header-upper > div > div > div.nav-outer.clearfix > nav > div.navbar-collapse.collapse.clearfix > ul > li.current > a").click()
const newtext = await framepage.locator("div.text h2").textContent();
console.log(newtext.split(" ")[1])
})