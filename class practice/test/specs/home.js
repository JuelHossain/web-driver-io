import HomePage from "../pages/home-pages.js";

describe('Home', () => {

  it("Open Browser & assert The Title", async () => {
    //opening browser
    
    await HomePage.open();
    //asserting the title
    await expect(browser).toHaveTitle(
      "Practice E-Commerce Site – Automation Bro"
    );
  });
  
 it("assert the url", async () => {
  //open url
   await HomePage.open();

  //assert the url
  await expect(browser).toHaveUrl(
    "https://practice.automationbro.com/"
  );
 });

 it('click get started button & assert url contains get-started text', async () => {
    //Open Home Page 
   await HomePage.open();

    //Wait for button to be clcickable
   await HomePage.btnGetStarted.waitForClickable();
   
   //click the button
    await HomePage.btnGetStarted.click();

    //assert url contins get-started text
    expect(browser).toHaveUrlContaining('get-started');
 });
  
  it("click on logo && assert the url doesn't contain the get-started text", async () => {

    //open browser
    await HomePage.open();

    //click on logo
    await HomePage.logo.click();

    //assert the url doesn't contain the get-started button
   expect(browser).not.toHaveUrlContaining('get-started');
  });
  it('assert the Heading text', async () => {
    //open url
    await HomePage.open();

    //assert the text
    await expect(HomePage.heading).toHaveText("Think different. Make different.");
  });
}); 