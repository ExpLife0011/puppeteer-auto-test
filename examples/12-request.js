'use strict';

const puppeteer = require('puppeteer');

(async() => {
    const browser = await puppeteer.launch({
        headless: false
    });
    const page = await browser.newPage();
    // 启用请求拦截器，会激活 request.abort, request.continue 和 request.respond 方法。这提供了修改页面发出的网络请求的功能。
    //一旦启用请求拦截，每个请求都将停止，除非它继续，响应或中止
    await page.setRequestInterception(true);
    page.on('request', request => {
        console.log(request)

        if (request.resourceType() === 'image')
            request.respond({
                status: 500,
                contentType: 'text/plain',
                body: 'Not Found!'
            });
        // request.abort();
        else
            request.continue();

    });
    await page.goto('https://www.baidu.com/');
    await page.screenshot({ path: 'img/12.png', fullPage: true });

    await browser.close();
})();