import Ar from "../pages/addremove.page";
describe("Add/Remove elements", () => {
  it('open', async () => {
    await browser.url("/");
    await Ar.open();
    await expect(browser).toHaveUrlContaining; ('add_remove_elements');
    await expect(Ar.heading).toHaveText('Add/Remove Elements');
  })
  it('Add element', async () => {
    await Ar.addElement.click();
    await Ar.delete.waitForDisplayed();
  })
  it('Remove element', async () => {
    await Ar.delete.waitForClickable;
    await Ar.delete.click();
    await expect(Ar.delete).not.toBeDisplayed();
  })
});