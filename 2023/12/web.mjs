/* eslint-disable no-restricted-syntax */
/* eslint-disable import/no-extraneous-dependencies */
import playwright from 'playwright';

(async () => {
  const browser = await playwright.chromium.launch({
    headless: true,
  });
  const page = await browser.newPage();
  await page.goto('https://www.daum.net');

  // 모든 .link_txt 요소를 가져옵니다.
  const linkTexts = await page.evaluate(() =>
    Array.from(document.querySelectorAll('.link_txt')).map(
      link => link.innerText
    )
  );

  // 링크 텍스트를 콘솔에 인쇄합니다.
  for (const linkText of linkTexts) {
    console.log(linkText);
  }

  await browser.close();
})();
