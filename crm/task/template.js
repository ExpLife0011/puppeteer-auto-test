const { timeout } = require('../../tools/tools.js')

createTemplate = async(page) => {
    page.setViewport({ width: 1440, height: 798 })
    await page.goto('https://crm-smix1.t.blingabc.com/main/class/template/add')

    // 创建
    await page.waitForSelector('.tmadd')
    await page.click('.tmadd')
    await page.screenshot({ path: './img/template/1-添加.png' })
    await timeout(1000)

    await page.waitForSelector('.td-data-table-row:nth-child(1) .mat-pseudo-checkbox')
    await page.click('.td-data-table-row:nth-child(1) .mat-pseudo-checkbox')
    await page.screenshot({ path: './img/template/2-勾选.png' })
    await timeout(1000)

    await page.waitForSelector('.mat-card-actions [type="button"]')
    await page.click('.mat-card-actions [type="button"]')
    await page.screenshot({ path: './img/template/3-确定.png' })

    await page.waitForSelector('[placeholder="确定班级渠道"]')
    await page.click('[placeholder="确定班级渠道"]')
    await timeout(1000)
    await page.waitForSelector('[ng-reflect-value="10"]')
    await page.click('[ng-reflect-value="10"]')
    await page.screenshot({ path: './img/template/4-确定班级渠道.png' })
    await timeout(500)

    await page.waitForSelector('[placeholder="确定使用渠道年级"]')
    await page.click('[placeholder="确定使用渠道年级"]')
    await timeout(500)
    await page.waitForSelector('[ng-reflect-value="0"]')
    await page.click('[ng-reflect-value="0"]')
    await page.screenshot({ path: './img/template/5-确定使用渠道年级.png' })
    await timeout(500)

    await page.type('[placeholder="直播显示售价"]', `0`, { delay: 500 })
    await page.screenshot({ path: './img/template/6-直播显示售价.png' })

    await page.type('[placeholder="实际收取价格"]', `0`, { delay: 500 })
    await page.screenshot({ path: './img/template/7-实际收取价格.png' })

    await page.type('[placeholder="免费课时数"]', `0`, { delay: 500 })
    await page.screenshot({ path: './img/template/8-免费课时数.png' })

    await page.type('[placeholder="直播班容"]', `3`, { delay: 500 })
    await page.screenshot({ path: './img/template/9-直播班容.png' })

    await page.type('[placeholder="开班量"]', `3`, { delay: 500 })
    await page.screenshot({ path: './img/template/10-开班量.png' })

    await page.waitForSelector('[type="submit"]')
    await page.click('[type="submit"]')
    await page.screenshot({ path: './img/template/11-确定.png' })
    await timeout(500)

    await page.goto('https://crm-smix1.t.blingabc.com/main/class/template')
    await timeout(500)
    await page.waitForSelector('[mattooltip="查看详情"]')
    await page.click('[mattooltip="查看详情"]')
    await page.screenshot({ path: './img/template/12-查看详情.png' })
    await timeout(500)

    await page.type('.quantity', `3`, { delay: 500 })
    await page.screenshot({ path: './img/template/13-开班量.png' })

    await page.waitForSelector('.openclass')
    await page.click('.openclass')
    await page.screenshot({ path: './img/template/14-开班.png' })
    await timeout(500)

    await page.waitForSelector('[mattooltip="发布"]')
    await page.click('[mattooltip="发布"]')
    await page.screenshot({ path: './img/template/15-发布.png' })
    await timeout(500)

    await page.waitForSelector('.td-dialog-actions .mat-accent')
    await page.click('.td-dialog-actions .mat-accent')
    await page.screenshot({ path: './img/template/16-发布确认.png' })
    await timeout(1000)
}


module.exports = createTemplate