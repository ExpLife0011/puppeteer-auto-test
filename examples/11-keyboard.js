const puppeteer = require('puppeteer');
const { timeout } = require('../tools/tools.js')

puppeteer.launch({
    headless: false,
}).then(async browser => {
    const page = await browser.newPage()
    await page.goto('https://t-smix1.t.blingabc.com/login', {
        timeout: 3000000
    })

    // 聚焦
    await page.focus('[placeholder="Email address"]')
    await page.keyboard.type('miya@qq.com', { delay: 100 });
    // tap键
    await page.keyboard.press('Tab');
    await page.keyboard.type('bling123', { delay: 100 });
    // enter键
    await page.keyboard.press('Enter');
    await page.waitForNavigation()
    await timeout(2000)
    await browser.close()
})