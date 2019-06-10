const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://www.furb.br');
  await page.setViewport({width: 1000, height: 500})
  await page.screenshot({path: 'example1.png'});

  await browser.close();
})();