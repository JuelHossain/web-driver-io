// Practice E-Commerce Site – Automation Bro
// https://practice.automationbro.com/

describe('Home', () => {

  it("Open Browser & assert The Title", async () => {
    //opening browser
    
    await browser.url("https://practice.automationbro.com");
    //asserting the title
    await expect(browser).toHaveTitle(
      "Practice E-Commerce Site – Automation Bro"
    );
  });
  
 it("assert the url", async () => {
  //open url
  await browser.url("https://practice.automationbro.com/about");

  //assert the url
  await expect(browser).toHaveUrl(
    "https://practice.automationbro.com/about/"
  );
 });

 it('click get started button & assert url contains get-started text', async () => {
    //Open Home Page 
    await browser.url("https://practice.automationbro.com");

    //click get started button
   await $('#get-started').waitForClickable({timeout:1000,timeOutMsg:'could notmake the button clckable sorry.'})
    await $('#get-started').click();

    //assert url contins get-started text
    await expect(browser).toHaveUrlContaining('get-started');
 });
  
  it("click on logo && assert the url doesn't contain the get-started text", async () => {

    //open browser
    await browser.url('https://practice.automationbro.com');

    //click on logo
    await $(`//img[@alt="Practice E-Commerce Site"]`).click();

    //assert the url doesn't contain the get-started button
    await expect(browser).not.toHaveUrlContaining('get-started');
  });
  it('Find heding element & assert the text', async () => {
    //open url
    await browser.url('https://practice.automationbro.com');

    //find heading element
    const heading = await $('.elementor-widget-container h1');

    //get text from the element
    const headingText = await heading.getText();

    //assert the text
    // await expect(headingText).toEqual('Think different. Make different.');
    await expect(heading).toHaveText("Think different. Make different.");
  });
}); 