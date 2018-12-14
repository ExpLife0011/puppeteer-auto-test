const puppeteer = require('puppeteer');

(async() => {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.tracing.start({ path: 'trace.json', categories: ['devtools.timeline'] })
    await page.goto('https://juejin.im/')

    await page.tracing.stop();
    await browser.close()
})()