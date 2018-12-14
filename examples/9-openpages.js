const puppeteer = require('puppeteer')
const parallel = 4;

const colleges = [
    { name: '百度', url: 'https://www.baidu.com/' },
    { name: 'segmentfault', url: 'https://segmentfault.com/' },
    { name: 'angular', url: 'https://angular.cn/' },
    { name: 'semantic-ui', url: 'https://semantic-ui.com/' },
    { name: 'purecss', url: 'https://www.purecss.cn/' },
    { name: 'vue', url: 'https://cn.vuejs.org/' },
    { name: 'github', url: 'https://github.com/' },
    { name: 'dart', url: 'http://www.cndartlang.com/' },
    { name: '京东', url: 'https://www.jd.com/' },
    { name: '淘宝', url: 'https://www.taobao.com/' },
    { name: '天猫', url: 'https://www.tmall.com/' },
]

const screenshotColleges = async(colleges, parallel) => {
    const parallelBatches = Math.ceil(colleges.length / parallel)

    console.log('\nI have gotten the task of taking screenshots of ' + colleges.length + ' Wikipedia articles on colleges in Cologne and will take ' + parallel + ' of them in paralell.')

    console.log(' This will result in ' + parallelBatches + ' batches.')

    let k = 0
    for (let i = 0; i < colleges.length; i += parallel) {
        k++
        console.log('\nBatch ' + k + ' of ' + parallelBatches)
        const browser = await puppeteer.launch({ headless: false });
        // 创建一个匿名的浏览器上下文。这将不会与其他浏览器上下文分享 cookies/cache。
        const context = await browser.createIncognitoBrowserContext();
        // 在一个原生的上下文中创建一个新页面
        const page = await context.newPage();
        //  是否启用js,改变这个值不会影响已经执行的js
        page.setJavaScriptEnabled(false)

        const promises = []
        for (let j = 0; j < parallel; j++) {
            let elem = i + j
            if (colleges[elem] != undefined) {
                console.log('🖖 I promise to screenshot: ' + colleges[elem].name)
                promises.push(browser.newPage().then(async page => {
                    await page.setViewport({ width: 1280, height: 800 })
                    try {
                        await page.goto(colleges[elem].url)
                        await page.screenshot({ path: 'img/' + elem + ' ' + colleges[elem].name + '.png' }).then(console.log('🤞 I have kept my promise to screenshot ' + colleges[elem].name))
                    } catch (err) {
                        console.log('❌ Sorry! I couldn\'t keep my promise to screenshot ' + colleges[elem].name)
                    }
                }))
            }
        }

        await Promise.all(promises)
        await browser.close()

        console.log('\nI finished this batch. I\'m ready for the next batch');
    }
}

screenshotColleges(colleges, parallel)