const puppeteer = require('puppeteer')
const login = require('./task/login')
const createPrep = require('./task/prep')
const createPractice = require('./task/practice')
const createHomework = require('./task/homework')

puppeteer.launch({
    headless: false,
}).then(async browser => {
    // 创建一个 Page 实例
    const page = await browser.newPage()
        // 设置窗口大小
    page.setViewport({ width: 1440, height: 798 })

    await login(page)
    createPrep(await browser.newPage())
    createPractice(await browser.newPage())
    createHomework(await browser.newPage())

})