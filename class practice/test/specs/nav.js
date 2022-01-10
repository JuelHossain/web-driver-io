describe('navbar testing', () => {
  it('get all navbar items and assert them', async () => {
    await browser.url('/');
    const navLinks = await $('#primary-menu').$$('li[id*=menu]');
    const expectedText = ['Home', 'About', 'Shop', 'Blog', 'Contact', 'My account'];
    const allnav = [];
    for (const links of navLinks) {
      allnav.push(await links.getText());
    }
    await expect(expectedText).toEqual(allnav);
    })
  });