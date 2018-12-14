const puppeteer = require('puppeteer')
const login = require('./task/login')
const createCourse = require('./task/course')
const createTemplate = require('./task/template')
const goOrder = require('./task/userorder')

puppeteer.launch({
    headless: false,
}).then(async browser => {
    // 创建一个 Page 实例
    const page = await browser.newPage()

    // 设置窗口大小
    page.setViewport({ width: 1440, height: 798 })

    await login(page)
    await createCourse(await browser.newPage())
    await createTemplate(await browser.newPage())
    await goOrder(await browser.newPage())
})