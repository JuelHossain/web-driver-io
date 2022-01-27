
import Home from "../pages/home.page";


describe('Browser', () => {
  it('open the browser and assert the title Heading and subHeading', async () => {
    // open browser 
    await Home.open();
    //assert the url
    await expect(browser).toHaveUrl("https://the-internet.herokuapp.com/");
    //assert the title
    await expect(browser).toHaveTitle('The Internet');
    //assert the heading
    await expect(Home.heading).toHaveText('Welcome to the-internet');
    //assert the subHeading
   await expect(Home.subHeading).toHaveText('Available Examples');
  })
})

