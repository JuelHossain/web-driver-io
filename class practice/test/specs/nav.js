import NavBar from '../pages/components/nav-comp.js';
import HomePage from '../pages/home-pages.js';


describe('navbar testing', () => {
  it('get all navbar items and assert them', async () => {
    //opening homepage
    await HomePage.open();
    //getting  all navlinks 
    const navLinks = await NavBar.navLinks;
    //will push all navlinks to allnav array.
    const allnav = [];
    //expecting the navlinks text to be this array
    const expectedText = ['Home', 'About', 'Shop', 'Blog', 'Contact', 'My account'];
    //pushing navlinks text to the allnav array.
    for (const links of navLinks) {
      allnav.push(await links.getText());
    }
    // doing assertion 
    expect(expectedText).toEqual(allnav);
  })

  it('Trying to search something', async () => {
    //clicking the search button
    await NavBar.search.click();
    //adding some search values to search bar
    await NavBar.searchInput.addValue('Hello');
    //pressing enter
    await browser.keys(['Enter']);
    //expecting to show the search results.
    expect("h1[class|=tg]").toHaveText('Search Results');

  });
});