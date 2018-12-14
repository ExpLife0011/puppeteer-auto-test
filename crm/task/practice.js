const { timeout } = require('../../tools/tools.js')
const process = require('process')
const path = require('path')

createPractice = async(page) => {
    page.setViewport({ width: 1440, height: 798 })
    await page.goto('https://crm-smix1.t.blingabc.com/main/content/practice')

    await timeout(1000)
        /** 进入内容管理 课后练习 **/
    for (let index = 0; index < 10; index++) {
        try {
            await page.waitForSelector('[ng-reflect-router-link="add"]')
            await page.click('[ng-reflect-router-link="add"]')
            await page.screenshot({ path: './img/prep/8-创建.png', type: 'png' })
            await timeout(500)

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

            const filePath = path.relative(process.cwd(), __dirname + '/file/Bling ABC_Phonics_level3_After study_lesson1_yt.zip')
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
}

module.exports = createPractice