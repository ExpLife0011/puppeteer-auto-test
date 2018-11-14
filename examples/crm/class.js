const puppeteer = require('puppeteer')
var { timeout } = require('../../tools/tools.js');
const process = require('process');
const path = require('path');

puppeteer.launch({ headless: false }).then(async browser => {
    // 创建一个 Page 实例
    var page = await browser.newPage()
        // 设置窗口大小
    page.setViewport({ width: 1440, height: 798 })

    // try catch 捕获异常
    /** 登录crm **/
    try {
        // 导航到登录页面
        await page.goto('https://crm-smix1.t.blingabc.com/main')
            // 延时三秒
        await timeout(3000)

        // page
        // .waitForSelector('.mat-input-infix.mat-form-field-infix')
        // .then(async() => {
        //     const inputValidate = await page.$('.mat-input-infix.mat-form-field-infix');
        //     console.log('inputValidate:', inputValidate);
        // });
        // 点击用户名输入框
        await page.waitForSelector('[placeholder="用户名*"]')
        await page.click('[placeholder="用户名*"]')
            // 输入用户名
        await page.type('[placeholder="用户名*"]', 'crmadmin', { delay: 20 })
        await page.screenshot({ path: './img/1-user.png', type: 'png' });

        // 点击密码输入框
        await page.waitForSelector('[type="password"]')
        await page.click('[type="password"]')
        await page.type('[type="password"]', 'bling123', { delay: 20 })
        await page.screenshot({ path: './img/2-password.png', type: 'png' });

        // 点击确定按钮
        await page.waitForSelector('div > .push-md > .ng-dirty > div > .mat-button')
        await page.click('div > .push-md > .ng-dirty > div > .mat-button')
        await page.screenshot({ path: './img/3-submit.png', type: 'png' });
        await timeout(3000)
        await page.screenshot({ path: './img/4-home.png', type: 'png' });
    } catch (e) {
        console.log('e:', e);
        await page.screenshot({ path: './img/1-err.png', type: 'png' });
        browser.close()
    }

    /** 进入内容管理 预习管理 **/
    try {
        await page.waitForSelector('.td-layout-nav-wrapper > .mat-toolbar > .td-layout-menu-button > .mat-button-wrapper > .mat-icon')
        await page.click('.td-layout-nav-wrapper > .mat-toolbar > .td-layout-menu-button > .mat-button-wrapper > .mat-icon')
        await page.screenshot({ path: './img/5-menu.png', type: 'png' });
        await timeout(500)

        await page.waitForSelector('.content_paste')
        await page.click('.content_paste')
        await page.screenshot({ path: './img/6-内容管理.png', type: 'png' });
        await timeout(500)

        await page.waitForSelector('.content2')
        await page.click('.content2')
        await page.screenshot({ path: './img/7-预习.png', type: 'png' });
        await timeout(500)

        await page.waitForSelector('[ng-reflect-router-link="add"]')
        await page.click('[ng-reflect-router-link="add"]')
        await page.screenshot({ path: './img/8-创建.png', type: 'png' });
        await timeout(500)

    } catch (e) {
        console.log('e:', e);
        await page.screenshot({ path: './img/2-err.png', type: 'png' });
        browser.close()
    }
    /** 进入内容管理 预习管理 **/
    try {

        // 输入预习名称
        await page.type('[placeholder="预习名称"]', '自动化-xx', { delay: 20 })
        await page.screenshot({ path: './img/9-预习名称.png', type: 'png' });

        await page.waitForSelector('[placeholder="适用学季"]')
        await page.click('[placeholder="适用学季"]')
        await page.screenshot({ path: './img/10-适用学季.png', type: 'png' });
        await timeout(500)

        await page.waitForSelector('[ng-reflect-value="30"]')
        await page.click('[ng-reflect-value="30"]')
        await page.screenshot({ path: './img/11-秋.png', type: 'png' });
        await timeout(500)

        await page.waitForSelector('[placeholder="适用水平"]')
        await page.click('[placeholder="适用水平"]')
        await page.screenshot({ path: './img/12-适用水平.png', type: 'png' });
        await timeout(500)

        await page.waitForSelector('[ng-reflect-value="30"]')
        await page.click('[ng-reflect-value="30"]')
        await page.screenshot({ path: './img/13-L3.png', type: 'png' });
        await timeout(500)

        await page.type('[placeholder="备注"]', '自动化-备注备注备注备注备注备注', { delay: 20 })
            // await page.waitForSelector('[placeholder="备注"]')
            // await page.click('[placeholder="备注"]')
        await page.screenshot({ path: './img/14-备注.png', type: 'png' });
        await timeout(500)

        const filePath = path.relative(process.cwd(), __dirname + '/Bling ABC_Phonics_level3_After study_lesson1_yt.zip');
        const input = await page.$('[type="file"]');
        await input.uploadFile(filePath);
        await timeout(3000)

        await page.waitForSelector('.submit')
        await page.click('.submit')
        await page.screenshot({ path: './img/15-确定.png', type: 'png' });
        await timeout(500)

    } catch (e) {
        console.log('e:', e);
        await page.screenshot({ path: './img/3-err.png', type: 'png' });
        browser.close()
    }
    // await page.screenshot({path: './data/sf-juejin/done.png', type: 'png'});
    // await page.close()
    // browser.close()
})