const puppeteer = require('puppeteer');

(async() => {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.setViewport({ width: 1280, height: 800 })
    await page.goto('https://juejin.im/')
    await page.pdf({ path: 'juejin.pdf', format: 'A4' })

    // const htmlContent = `<body><h1>空空如也</h1></body>`;
    // await page.setContent(htmlContent);
    // await page.pdf({ path: 'test.pdf', format: 'A4' })

    await browser.close()
})()