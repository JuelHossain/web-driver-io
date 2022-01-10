describe('iframe testing', () => {
  it('working with iframe', async () => {
    //opening browser
    await browser.url("/iframe-sample/");


    const iframe = await $("#advanced_iframe");
    await browser.switchToFrame(iframe);

    await expect($(".ugb-cta__item h1 strong")).toHaveText(
      "WebdriverIO – Complete Beginner Course 2021"
    );
  })
});