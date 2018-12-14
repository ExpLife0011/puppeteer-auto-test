'use strict';

const puppeteer = require('puppeteer');

(async() => {
    const browser = await puppeteer.launch({
        headless: false,
        args: ['--proxy-server=127.0.0.1:9876']
    });
    const page = await browser.newPage();
    await page.goto('https://baidu.com');
    await page.screenshot({ path: 'img/13.png', fullPage: true });
    // await browser.close();/
})();