const { timeout } = require('../../tools/tools.js')

createCourse = async(page) => {
    page.setViewport({ width: 1440, height: 798 })
    await page.goto('https://crm-smix1.t.blingabc.com/main/content/course')

    // 创建
    await page.waitForSelector('.td-layout-manage-list-content > .ng-star-inserted > .mat-fab-bottom-right > .mat-button-wrapper > .mat-icon')
    await page.click('.td-layout-manage-list-content > .ng-star-inserted > .mat-fab-bottom-right > .mat-button-wrapper > .mat-icon')

    await page.type('[placeholder="课时名称"]', `自动化课时名称`, { delay: 500 })
    await page.screenshot({ path: './img/course/1-课时名称.png' })

    await page.type('[placeholder="默认课次"]', `1`, { delay: 500 })
    await page.screenshot({ path: './img/course/2-默认课次.png' })

    await page.type('[placeholder="时长"]', `15`, { delay: 500 })
    await page.screenshot({ path: './img/course/3-时长.png' })

    await page.type('textarea', `备注.....`, { delay: 500 })
    await page.screenshot({ path: './img/course/4-备注.png' })

    await page.waitForSelector('[type="submit"]')
    await page.click('[type="submit"]')
    await page.screenshot({ path: './img/course/5-确定.png' })
    await timeout(500)

    await page.waitForSelector('[mattooltip="发布"]')
    await page.click('[mattooltip="发布"]')
    await page.screenshot({ path: './img/course/6-发布.png' })

    // 发布
    await page.waitForSelector('.td-dialog-actions .mat-accent')
    await page.click('.td-dialog-actions .mat-accent')
    await page.screenshot({ path: './img/course/7-发布确认.png' })
    await timeout(1000)

    await page.waitForSelector('.td-data-table-row:nth-child(1) .mat-pseudo-checkbox')
    await page.click('.td-data-table-row:nth-child(1) .mat-pseudo-checkbox')
    await page.screenshot({ path: './img/course/8-勾选.png' })

    await page.waitForSelector('.glesson')
    await page.click('.glesson')
    await page.screenshot({ path: './img/prep/9-组课.png' })


    // 组课
    await page.type('[placeholder="课程名称"]', `自动化组课`, { delay: 500 })
    await page.screenshot({ path: './img/course/10-课程名称.png' })

    await page.type('[placeholder="课程描述"]', `自动化描述`, { delay: 500 })
    await page.screenshot({ path: './img/course/11-课程描述.png' })

    await page.waitForSelector('[placeholder="年份"]')
    await page.click('[placeholder="年份"]')
    await timeout(500)
    await page.waitForSelector('[ng-reflect-value="2018"]')
    await page.click('[ng-reflect-value="2018"]')
    await page.screenshot({ path: './img/course/12-年份.png' })
    await timeout(500)

    await page.waitForSelector('[placeholder="适用学季"]')
    await page.click('[placeholder="适用学季"]')
    await timeout(500)
    await page.waitForSelector('[ng-reflect-value="30"]')
    await page.click('[ng-reflect-value="30"]')
    await page.screenshot({ path: './img/course/13-学季.png' })
    await timeout(500)

    await page.waitForSelector('[placeholder="类型"]')
    await page.click('[placeholder="类型"]')
    await timeout(500)
    await page.waitForSelector('[ng-reflect-value="10"]')
    await page.click('[ng-reflect-value="10"]')
    await page.screenshot({ path: './img/course/14-类型.png' })
    await timeout(500)

    await page.waitForSelector('[placeholder="适用水平"]')
    await page.click('[placeholder="适用水平"]')
    await timeout(500)
    await page.waitForSelector('[ng-reflect-value="30"]')
    await page.click('[ng-reflect-value="30"]')
    await page.screenshot({ path: './img/course/15-适用水平.png' })
    await timeout(500)

    await page.waitForSelector('[placeholder="适用渠道"]')
    await page.click('[placeholder="适用渠道"]')
    await timeout(500)
    await page.waitForSelector('[ng-reflect-value="10"]')
    await page.click('[ng-reflect-value="10"]')
    await page.screenshot({ path: './img/course/16-适用渠道.png' })
    await timeout(500)

    await page.type('[placeholder="课程备注(内)"]', `自动化描述`, { delay: 500 })
    await page.screenshot({ path: './img/course/17-课程备注.png' })

    await page.waitForSelector('[placeholder="上课方式"]')
    await page.click('[placeholder="上课方式"]')
    await timeout(500)
    await page.waitForSelector('[ng-reflect-value="1"]')
    await page.click('[ng-reflect-value="1"]')
    await page.screenshot({ path: './img/course/18-上课方式.png' })
    await timeout(500)

    await page.waitForSelector('[type="submit"]')
    await page.click('[type="submit"]')
    await page.screenshot({ path: './img/course/19-确定.png' })

    await page.waitForSelector('[mattooltip="发布"]')
    await page.click('[mattooltip="发布"]')
    await page.screenshot({ path: './img/course/20-再发布.png' })

    await page.waitForSelector('.td-dialog-actions .mat-accent')
    await page.click('.td-dialog-actions .mat-accent')
    await page.screenshot({ path: './img/course/21-发布确认.png' })
    await timeout(1000)
}


module.exports = createCourse