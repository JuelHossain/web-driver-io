import IFrame from '../pages/iframe-pages.js';

describe('iframe testing', () => {
  it('working with iframe', async () => {
    //opening browser
    await IFrame.open();

    // switching to iframe
    await browser.switchToFrame(await IFrame.iframe);

    await expect(IFrame.iframeHeader).toHaveText(
      "WebdriverIO – Complete Beginner Course 2021"
    );

    await browser.switchToParentFrame();

    await expect(IFrame.pageHeader).toHaveText('IFrame Sample');
  })
});