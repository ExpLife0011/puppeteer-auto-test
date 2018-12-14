const puppeteer = require('puppeteer');

(async() => {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto('https://juejin.im/')
    const name = await page.$eval('.content-box .title', el => el.innerText)
    console.log(name)
    await browser.close()
})()