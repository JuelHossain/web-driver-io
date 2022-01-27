import Ab from "../pages/abtesting.page";
describe("A/B Testing", () => {
  it("Open and assert the title and paragraph", async () => {
    await browser.url("/");
    await Ab.open();
    await expect(browser).toHaveUrlContaining("abtest");
    await expect(Ab.heading).toHaveTextContaining("A/B Test");
    await expect(Ab.paragraph).toHaveTextContaining("simultaneously");
  });
});
