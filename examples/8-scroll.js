const puppeteer = require('puppeteer');

(async() => {
    const browserSetting = {
        headless: false,
        devtools: true,
        slowMo: 250
    }
    const browser = await puppeteer.launch(browserSetting);
    const page = await browser.newPage();

    await page.setViewport({
        width: 1280,
        height: 800
    });


    await page.goto('https://juejin.im/', {
        timeout: 3000000
    });

    // Scroll to bottom
    await page.evaluate(async() => {
        await new Promise((resolve, reject) => {
            try {
                const maxScroll = Number.MAX_SAFE_INTEGER;
                let lastScroll = 0;
                const interval = setInterval(() => {
                    window.scrollBy(0, 250);
                    const scrollTop = document.documentElement.scrollTop;
                    if (scrollTop === maxScroll || scrollTop === lastScroll) {
                        clearInterval(interval);
                        resolve();
                    } else {
                        lastScroll = scrollTop;
                    }
                }, 100);
            } catch (err) {
                console.log('err', err);
                reject(err.toString());
            }
        });
    });

    await browser.close();
})();