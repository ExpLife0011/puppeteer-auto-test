const puppeteer = require('puppeteer');
const { timeout } = require('../tools/tools.js')

puppeteer.launch({
    headless: false,
}).then(async browser => {
    const page = await browser.newPage()
    await page.goto('https://t-smix1.t.blingabc.com/login', {
        timeout: 3000000
    })
    await page.type('[placeholder="Email address"]', `miya@qq.com`, { delay: 50 })

    await page.type('[placeholder="password"]', `bling123`, { delay: 50 })

    await page.waitForSelector('.submit')
    await page.click('.submit')
    await timeout(1000)

    await page.goto('https://t-smix1.t.blingabc.com/main/materials', {
        timeout: 3000000
    })
    await timeout(1000)
    await page.hover('.list-con>header')
    await timeout(1000)
    await page.screenshot({ path: 'img/3.png' })

    await timeout(2000)
    await browser.close()
})