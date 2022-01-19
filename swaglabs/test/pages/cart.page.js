
class Cart{
  get cartTitle() {
    return $('.title');
  }
  get cartSize() {
    return $('[class*=badge]')
  }
  get continueShopping() {
    return $("#continue-shopping");
  }
  get checkoutButton() {
    return $("#checkout");
  }
  get firsName() {
    return $("input#first-name");
  }
  get lastName() {
    return $("input#last-name");
  }
  get postalCode() {
    return $("input#postal-code");
  }
  get error() {
    return $("[data-test=error]");
  }
  get continue() {
    return $("#continue");
  }
  get itemPrice() {
    return $$(".inventory_item_price");
  }
  get itemTotalPrice() {
    return $(".summary_subtotal_label");
  }
  get thankYou() {
    return $(".complete-header");
  }
  get finish() {
    return $("#finish");
  }
  get backHome() {
    return $("#back-to-products");
  }
  get informationLabel() {
    return $$(".summary_information_label");
  }
  get informationValue() {
    return $$(".summary_value_label");
  }
  async checkout() {
    await this.checkoutButton.click();
    await this.continue.click();
    await expect(this.error).toHaveText("Error: First Name is required");
  }
  async giveInfo(firstName, lastName, postalCode) {
    await this.firsName.setValue(firstName);
    await this.lastName.setValue(lastName);
    await this.postalCode.setValue(postalCode);
    await this.continue.click();
  }
  async checkPrice() {
    const item = await this.itemPrice;
    let itemPrice = 0;
    for (const p of item) {
      let text = await p.getText();
      let price = text.split('$')[1];
      itemPrice += +(price);
    }
    await expect(this.itemTotalPrice).toHaveText(`Item total: $${itemPrice}`);
  }

  async checkInformation() {
    expect(this.informationValue[0]).toHaveTextContaining("SauceCard");
    expect(this.informationValue[1]).toHaveTextContaining(
      "EXPRESS DELIVERY"
    );
  }
}
export default new Cart;