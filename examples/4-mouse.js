const puppeteer = require('puppeteer');
const { timeout } = require('../tools/tools.js')

puppeteer.launch({
    headless: false,
}).then(async browser => {
    const page = await browser.newPage()

    await page.setViewport({ width: 800, height: 600 })

    await page.goto('http://unixpapa.com/js/testmouse.html')
    await timeout(1000)
    await page.mouse.click(132, 103, { button: 'left' })

    await page.screenshot({ path: 'img/4.png' })

    await timeout(2000)
    await browser.close()
})