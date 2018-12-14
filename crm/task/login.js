const puppeteer = require('puppeteer')
const { timeout } = require('../../tools/tools.js')

login = async(page) => {
    // try catch 捕获异常
    /** 登录crm **/
    try {
        // 导航到登录页面
        await page.goto('https://crm-smix1.t.blingabc.com/login', {
            timeout: 3000000
        })

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
}
module.exports = login