const puppeteer = require('puppeteer');

(async() => {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.setViewport({ width: 1280, height: 800 })
    await page.goto('https://juejin.im/')
    await page.screenshot({ path: 'img/1.png' })
    await page.screenshot({ path: 'img/1-full.png', fullPage: true })
    await page.screenshot({
        path: 'img/1-clipped.png',
        fullPage: false,
        clip: {
            x: 880,
            y: 80,
            width: 240,
            height: 340
        }
    })
    await browser.close()
})()