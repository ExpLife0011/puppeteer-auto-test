const puppeteer = require('puppeteer')
const { timeout } = require('../tools/tools.js')
const process = require('process')
const path = require('path')

puppeteer.launch({ headless: false }).then(async browser => {
    // 创建一个 Page 实例
    const page = await browser.newPage()
        // 设置窗口大小
    page.setViewport({ width: 1440, height: 798 })

    // try catch 捕获异常
    /** 登录crm **/
    try {
        // 导航到登录页面
        await page.goto('https://crm-smix1.t.blingabc.com/main')

        // 延时三秒
        // await timeout(3000)

        // 点击用户名输入框
        await page.waitForSelector('[placeholder="用户名*"]')
        await page.click('[placeholder="用户名*"]')

        // 输入用户名
        await page.type('[placeholder="用户名*"]', 'crmadmin', { delay: 20 })
        await page.screenshot({ path: './img/prep/1-user.png', type: 'png' })

        // 点击密码输入框
        await page.waitForSelector('[type="password"]')
        await page.click('[type="password"]')
        await page.type('[type="password"]', 'bling123', { delay: 20 })
        await page.screenshot({ path: './img/prep/2-password.png', type: 'png' })

        // 点击确定按钮
        await page.waitForSelector('div > .push-md > .ng-dirty > div > .mat-button')
        await page.click('div > .push-md > .ng-dirty > div > .mat-button')
        await page.screenshot({ path: './img/prep/3-submit.png', type: 'png' })
        await timeout(3000)
        await page.screenshot({ path: './img/prep/4-home.png', type: 'png' })
    } catch (e) {
        console.log('e:', e)
        await page.screenshot({ path: './img/prep/err/1-err.png', type: 'png' })
        browser.close()
    }

    /** 进入内容管理 作业管理 **/
    try {
        await page.waitForSelector('.td-layout-nav-wrapper > .mat-toolbar > .td-layout-menu-button > .mat-button-wrapper > .mat-icon')
        await page.click('.td-layout-nav-wrapper > .mat-toolbar > .td-layout-menu-button > .mat-button-wrapper > .mat-icon')
        await page.screenshot({ path: './img/prep/5-menu.png', type: 'png' })
        await timeout(500)

        await page.waitForSelector('.content_paste')
        await page.click('.content_paste')
        await page.screenshot({ path: './img/prep/6-内容管理.png', type: 'png' })
        await timeout(500)

        await page.waitForSelector('.content3')
        await page.click('.content3')
        await page.screenshot({ path: './img/prep/7-预习.png', type: 'png' })
        await timeout(500)

    } catch (e) {
        console.log('e:', e)
        await page.screenshot({ path: './img/prep/err/2-err.png', type: 'png' })
        browser.close()
    }
    for (let index = 0; index < 10; index++) {
        try {
            await page.waitForSelector('[ng-reflect-router-link="add"]')
            await page.click('[ng-reflect-router-link="add"]')
            await page.screenshot({ path: './img/prep/8-创建.png', type: 'png' })
            await timeout(500)

            // 输入作业名称
            await page.type('[placeholder="作业名称"]', `自动化-${index}`, { delay: 20 })
            await page.screenshot({ path: './img/prep/9-作业名称.png', type: 'png' })

            await page.waitForSelector('[placeholder="适用学季"]')
            await page.click('[placeholder="适用学季"]')
            await page.screenshot({ path: './img/prep/10-适用学季.png', type: 'png' })
            await timeout(500)

            await page.waitForSelector('[ng-reflect-value="30"]')
            await page.click('[ng-reflect-value="30"]')
            await page.screenshot({ path: './img/prep/11-秋.png', type: 'png' })
            await timeout(500)

            await page.waitForSelector('[placeholder="适用水平"]')
            await page.click('[placeholder="适用水平"]')
            await page.screenshot({ path: './img/prep/12-适用水平.png', type: 'png' })
            await timeout(500)

            await page.waitForSelector('[ng-reflect-value="30"]')
            await page.click('[ng-reflect-value="30"]')
            await page.screenshot({ path: './img/prep/13-L3.png', type: 'png' })
            await timeout(500)

            await page.type('[placeholder="备注"]', '自动化-备注备注备注备注备注备注', { delay: 20 })
            await page.screenshot({ path: './img/prep/14-备注.png', type: 'png' })
            await timeout(500)

            const filePath = path.relative(process.cwd(), __dirname + '../file/Bling ABC_Phonics_level3_After study_lesson1_yt.zip')
            const input = await page.$('input[type="file"]')
            await input.uploadFile(filePath)
            await timeout(1000)


            await page.waitForSelector('.submit')
            await page.click('.submit')
            await page.screenshot({ path: './img/prep/15-确定.png', type: 'png' })
            await timeout(500)

            await page.waitForSelector('.publish')
            await page.click('.publish')
            await page.screenshot({ path: './img/prep/16-发布.png', type: 'png', fullPage: true })
            await timeout(500)
        } catch (e) {
            console.log('e:', e)
            await page.screenshot({ path: './img/prep/err/3-err.png', type: 'png' })
            browser.close()
        }
    }
    // await page.close()
    // browser.close()
})