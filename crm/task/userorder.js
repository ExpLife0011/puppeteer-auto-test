const { timeout } = require('../../tools/tools.js')

goOrder = async(page) => {
    page.setViewport({ width: 1440, height: 798 })
    await page.goto('https://crm-smix1.t.blingabc.com/main/user/add/user-info')


    await page.type('[placeholder="手机号或新东方学号"]', `13633333333`, { delay: 100 })
    await page.screenshot({ path: './img/order/1-手机号或新东方学号.png' })

    await page.waitForSelector('.search')
    await page.click('.search')
    await page.screenshot({ path: './img/order/2-搜索.png' })
    await timeout(500)

    await page.waitForSelector('.order')
    await page.click('.order')
    await page.screenshot({ path: './img/order/3-下单.png' })
    await timeout(500)

    await page.waitForSelector('[mattooltip="添加"]')
    await page.click('[mattooltip="添加"]')
    await page.screenshot({ path: './img/order/4-添加.png' })
    await timeout(500)

    await page.waitForSelector('.submit')
    await page.click('.submit')
    await page.screenshot({ path: './img/order/5-确定.png' })
    await timeout(1000)

    await page.waitForSelector('[color="primary"]')
    await page.click('[color="primary"]')
    await page.screenshot({ path: './img/order/6-提交.png' })
    await timeout(500)

    await page.goto('https://crm-smix1.t.blingabc.com/main/order/order-check')
    await timeout(1000)

    await page.waitForSelector('.td-data-table-row:nth-child(1) .mat-pseudo-checkbox')
    await page.click('.td-data-table-row:nth-child(1) .mat-pseudo-checkbox')
    await page.screenshot({ path: './img/order/7-勾选.png' })
    await timeout(500)

    await page.waitForSelector('.pass')
    await page.click('.pass')
    await page.screenshot({ path: './img/order/8-批量通过.png' })
    await timeout(1000)

    await page.goto('https://crm-smix1.t.blingabc.com/main/order/order-verify')
    await page.screenshot({ path: './img/order/9-订单记录.png' })
}


module.exports = goOrder